import React from "react";
import { useAppSelector } from "../../app/hooks";

export const Total = () => {
  const program = useAppSelector((state) => state.program);
  console.log(JSON.stringify(program));

  return <div>{JSON.stringify(program)}</div>;
};
