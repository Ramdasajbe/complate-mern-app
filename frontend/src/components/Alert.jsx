import React from "react";

export default function Alert({ color, message }) {
  return <div className={`alert alert-${color}`}>{message}</div>;
}
