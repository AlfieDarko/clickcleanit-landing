import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

const ScrollBtn = () => {
  return (
    <div>
      <ScrollUpButton
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
      />
    </div>
  );
};

export default ScrollBtn;
