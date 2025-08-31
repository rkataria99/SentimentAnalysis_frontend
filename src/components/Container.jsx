import React from "react";
export default function Container({ className = "", children }) {
  return <div className={`container ${className}`}>{children}</div>;
}
