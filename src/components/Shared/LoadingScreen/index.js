import React from "react";
import Video from "../../../assets/videos/dancing.mp4";
export const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <video
          style={{
            width: "100%",
            height: "95vh",
          }}
          autoPlay
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div
          style={{
            color: "white",
            alignItems: "center",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      </div>
    </div>
  );
};
