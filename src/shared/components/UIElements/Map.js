// import React, { useRef, useEffect } from "react";
import React, { useRef } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  // useEffect(() => {
  //   const map = new window.google.maps.Map(mapRef.current, {
  //     center: center,
  //     zoom: zoom,
  //   });

  //   new window.google.maps.Marker({ position: center, map: map });
  // }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      <iframe
        title={center}
        width="100%"
        frameborder="0"
        src={`https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${props.title}&z=${zoom}&output=embed`}
      ></iframe>
    </div>
  );
};

export default Map;
