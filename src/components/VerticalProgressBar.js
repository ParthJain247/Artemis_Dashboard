import React from "react";

const VerticalProgressBar = ({ progress }) => {
  return (
    <div styles={{width:`50px`,
        height:`100px`,
        backgroundColor:`red`}}>
  
  <div styles={{width:`50px`,
  height:`${progress}px`,
  backgroundColor:`blue`}}> </div>
  
</div>
  );
};

export default VerticalProgressBar;