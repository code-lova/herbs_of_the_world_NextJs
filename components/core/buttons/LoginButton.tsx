import React from "react";
import { LoaderButtonProps } from "@/types";

const LoaderButton: React.FC<LoaderButtonProps> = ({ loading, text, type, loadingText }) => (
  <button
    className="flex items-center justify-center login-btn"
    disabled={loading}
    type={type}
  >
    {loading ? (
      <div className="flex items-center">
        <div className="loader mr-2" />
        {loadingText || "Loading..."}
      </div>
    ) : (
      text
    )}
  </button>
);

export default LoaderButton;
