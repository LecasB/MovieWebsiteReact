import React from "react";
import "./PopUpEmbed.css";
import AppLogo from "../../Atoms/AppLogo/AppLogo";

const PopUpEmbed = ({ videoUrl, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          {videoUrl.includes("youtube") ? (
            <AppLogo trailer={true} />
          ) : (
            <AppLogo />
          )}
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <iframe
          src={videoUrl}
          title="Video Player"
          allow="autoplay; fullscreen"
          allowFullScreen
          controls="0"
        />
      </div>
    </div>
  );
};

export default PopUpEmbed;
