import React from "react";
import "../src/styles/FinalFooter.css";

export default function FinalFooter() {
  const handleDataProtectionClick = () => {
    window.location.href = "/data-protection";
  };

  const handlePrivacyPolicyClick = () => {
    window.location.href = "/privacy-policy";
  };

  const handleContactUsClick = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "0.4em" }}
    >
      <p
        style={{ color: "rgba(48, 48, 48, 0.777)" }}
        className="final-footer-text"
        onClick={handlePrivacyPolicyClick}
      >
        Privacy Policy
      </p>
      <p style={{ color: "#ff6b3d" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
      <p
        style={{ color: "rgba(48, 48, 48, 0.777)", cursor: "pointer" }}
        className="final-footer-text"
        onClick={handleDataProtectionClick}
        >
        Data Protection
      </p>
      <p style={{ color: "#ff6b3d" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
      <p
        style={{ color: "rgba(48, 48, 48, 0.777)" }}
        className="final-footer-text"
        onClick={handleContactUsClick}
      >
        Contact Us
      </p>
    </div>
  );
}
