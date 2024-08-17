import React, { useEffect, useState } from 'react';

const initialLogs = {
  bangalore: { entries: 0, exits: 0 },
  chennai: { entries: 0, exits: 0 },
  kolhapur: { entries: 0, exits: 0 },
  pune: { entries: 0, exits: 0 },
  mumbaiDadar: { entries: 0, exits: 0 },
};

const LogsPage = () => {
  const [logs, setLogs] = useState(initialLogs);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('geofenceLogs')) || initialLogs;
    setLogs(storedLogs);
  }, []);

  return (
    <div>
      <h1>Geofence Logs</h1>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Entries</th>
            <th>Exits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bangalore</td>
            <td>{logs.bangalore.entries}</td>
            <td>{logs.bangalore.exits}</td>
          </tr>
          <tr>
            <td>Chennai</td>
            <td>{logs.chennai.entries}</td>
            <td>{logs.chennai.exits}</td>
          </tr>
          <tr>
            <td>Kolhapur</td>
            <td>{logs.kolhapur.entries}</td>
            <td>{logs.kolhapur.exits}</td>
          </tr>
          <tr>
            <td>Pune</td>
            <td>{logs.pune.entries}</td>
            <td>{logs.pune.exits}</td>
          </tr>
          <tr>
            <td>Mumbai (Dadar)</td>
            <td>{logs.mumbaiDadar.entries}</td>
            <td>{logs.mumbaiDadar.exits}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LogsPage;
