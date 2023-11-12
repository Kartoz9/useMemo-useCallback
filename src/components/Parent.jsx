import React, { useState, useMemo, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Display from "./Display";

const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(30);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 5);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 100);
  }, []);

  const displayAge = useMemo(() => <Display text="age" displayvalue={age} />, [age]);

  const displaySalary = useMemo(() => <Display text="salary" displayvalue={salary} />, [salary]);

  return (
    <div>
      <Title />
      {displayAge}
      <Button handleClick={incrementAge}>Update Age</Button>
      {displaySalary}
      <Button handleClick={incrementSalary}>Update Salary</Button>
    </div>
  );
};

export default Parent;
