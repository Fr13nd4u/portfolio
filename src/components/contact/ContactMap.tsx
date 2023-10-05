import * as React from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const ContactMap: React.FC = () => {
  const center = React.useMemo(() => ({ lat: 50.451162, lng: 30.522252 }), []);

  const { isLoaded } = useLoadScript({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading</div>;

  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={mapContainerStyle}>
      <Marker position={center} />
    </GoogleMap>
  );
};

const mapContainerStyle = {
  width: "100%",
  minHeight: "360px",
  borderRadius: "1rem",
};
