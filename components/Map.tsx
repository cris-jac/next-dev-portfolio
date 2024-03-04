'use client';

import Image from "next/image";
import React from "react";
// import mapSvg from "@/public/argentina.svg"
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker
} from "react-simple-maps";

const Map: React.FC = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [50.0, 15.0, -5],
        center: [-10, -18],
        scale: 800
      }}
    >
      <Geographies
        geography="/features.json"
        fill="rgba(0,0,0,0)"
        stroke="#B0AAC6"
        strokeWidth={4}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

        <Marker coordinates={[-58.8, -34.5]}>
          <circle r={6} fill="white" stroke="#4A3F7D" strokeWidth={4}/>
          {/* <text>Buenos Aires</text> */}
        </Marker>

    </ComposableMap>
  );
};

export default Map;
