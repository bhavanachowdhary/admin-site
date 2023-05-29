import React from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}
const Alert = ({ children }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      <strong>{children}</strong>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
