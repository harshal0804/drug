import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Reporting.css';
import jsPDF from 'jspdf';
import Navbar from './Navbar';
import html2canvas from 'html2canvas';

const Reporting = () => {
  
  // Function to generate PDF
  const generatePDF = () => {
    const input = document.getElementById('report-content');
    
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('report.pdf');
    });
  };

  return (
    <div className="main-content">
        <Navbar />
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Reporting</h1>
        <p>Generate and view reports here.</p>
        <button className="generate-report-btn" onClick={generatePDF}>
          Generate Report
        </button>
        {/* Content to include in the PDF */}
        <div id="report-content">
          <h2>Order Report</h2>
          <p>Here you can include details such as orders, etc.</p>
          {/* Add more content here that you want to include in the PDF */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reporting;
