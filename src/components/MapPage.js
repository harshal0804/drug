import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define geofence locations
const BANGALORE = { lat: 12.9716, lon: 77.5946 };
const CHENNAI = { lat: 13.0827, lon: 80.2707 };
const KOLHAPUR = { lat: 16.70499, lon: 74.24326 };
const PUNE = { lat: 18.5204, lon: 73.8567 };
const MUMBAI_DADAR = { lat: 19.0183, lon: 72.8443 };
const GEO_FENCE_RADIUS = 50000; // 50 km radius

// Fix marker icon issue with leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapPage = () => {
  const [position, setPosition] = useState(null);
  const [showGeofences, setShowGeofences] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  const handleShowGeofences = () => {
    setShowGeofences(true);
  };

  const handleShowLogs = () => {
    navigate('/LogsPage');
  };

  const renderGeofences = () => (
    <>
      <Circle center={[BANGALORE.lat, BANGALORE.lon]} radius={GEO_FENCE_RADIUS} color="red" />
      <Circle center={[CHENNAI.lat, CHENNAI.lon]} radius={GEO_FENCE_RADIUS} color="red" />
      <Circle center={[KOLHAPUR.lat, KOLHAPUR.lon]} radius={GEO_FENCE_RADIUS} color="red" />
      <Circle center={[PUNE.lat, PUNE.lon]} radius={GEO_FENCE_RADIUS} color="red" />
      <Circle center={[MUMBAI_DADAR.lat, MUMBAI_DADAR.lon]} radius={GEO_FENCE_RADIUS} color="red" />
    </>
  );

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <button onClick={handleShowGeofences} style={{ marginRight: '10px' }}>Show Geofences</button>
        <button onClick={handleShowLogs}>Show Logs</button>
      </div>
      
      <div style={{ flex: 1 }}>
        {position && (
          <MapContainer center={[position.lat, position.lon]} zoom={7} style={{ height: '100%', width: '1000%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.lat, position.lon]} />
            {showGeofences && renderGeofences()}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default MapPage;
