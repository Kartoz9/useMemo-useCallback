import React, { useCallback } from "react";

const Button = ({ handleClick, children }) => {
  console.log("Button Component Renders - ", { children });

  const memoizedHandleClick = useCallback(() => {
    handleClick();
  }, [handleClick]);

  return <button onClick={memoizedHandleClick}>{children}</button>;
};

export default Button;
