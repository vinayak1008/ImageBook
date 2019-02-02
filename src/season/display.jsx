import React from "react";
import "./display.css";

const seasonList = {
  Winter: {
    text: "Burr...It's cold",
    iconName: "snowflake"
  },
  Summer: {
    text: "OMG...It's Hot",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Winter" : "Summer";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  console.log(props);
  const Season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonList[Season];

  return (
    <div className={`display-season ${Season}`}>
      <i className={`i-left massive ${iconName}  icon`} />
      <h2>{text}</h2>
      <i className={`i-right massive ${iconName}  icon`} />
    </div>
  );
};

export default SeasonDisplay;
