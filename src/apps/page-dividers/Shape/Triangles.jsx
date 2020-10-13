import React from 'react';

export default function Triangle(props) {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z" />
    </svg>
  );
}
