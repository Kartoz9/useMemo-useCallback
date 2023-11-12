import React, { useMemo } from "react";

const Display = ({ text, displayvalue }) => {
  console.log("Display Component Rendered ", { displayvalue });

  const displayText = useMemo(() => (
    <p>
      This person's {text} is {displayvalue}
    </p>
  ), [text, displayvalue]);

  return displayText;
};

export default Display;
