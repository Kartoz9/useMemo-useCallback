import React from "react";

const Title = React.memo(() => {
  console.log("Title Component is rendered");
  return <h1>useCallback Hook.</h1>;
});

export default Title;