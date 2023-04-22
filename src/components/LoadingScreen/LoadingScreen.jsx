import { useState, useEffect } from "react";
import "./LoadingScreen.css";

function LoadingScreen(props) {
  const atEnd = props.atEnd;
  useEffect(() => {
    setTimeout(() => {
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.width = "100%";

      const coverBar = document.getElementById("cover-bar");
      coverBar.remove();
    }, 6900);

    setTimeout(() => {
      const progressBarHolder = document.getElementById("progrss-bar-holder");
      progressBarHolder.style.width = "0%";
    }, 9900);

    setTimeout(() => {
      const loadingScreenBackground = document.getElementById(
        "loading-screen-background"
      );
      loadingScreenBackground.style.backgroundColor = "#fa761e";
      atEnd();
    }, 11490);
  }, []);
  return (
    <div
      className="w-screen h-screen absolute z-10"
      style={{ backgroundColor: "rgba(0,0,0,1)" }}
      id="loading-screen-background"
    >
      <div className="relative h-screen">
        <div
          className="absolute h-[20px] w-[30%] z-20"
          style={{
            top: "47%",
            left: "35%",
            transform: "translateY(-48%)",
            backgroundColor: "rgba(0,0,0,1)",
          }}
          id="cover-bar"
        ></div>
        <div
          className="w-[30%] h-[10px] bg-[#1A1A1A] absolute rounded-lg"
          id="progrss-bar-holder"
        >
          <div
            className="w-[0%] h-[10px] bg-[#5b5f5f] rounded-lg"
            id="progress-bar"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
