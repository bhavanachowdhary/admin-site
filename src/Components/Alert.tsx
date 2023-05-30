import React from "react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClick: () => void;
}
function Alert1(props: Props) {
  return (
    <div>
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <button
          type="button"
          className="btn-close"
          onClick={() => props.onClick()}
        ></button>
        <strong>{props.children}</strong>
      </div>
    </div>
  );
}

export default Alert1;
