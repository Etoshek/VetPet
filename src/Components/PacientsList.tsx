import React from "react";
import AddAnimalInput from "./Input";

interface PacientsListProps {
  animalName: string;
  animalAge: number;
}

const Action = ({ animalName, animalAge }: PacientsListProps) => {
  return (
    <>
      <ul>
        <li>{}</li>
      </ul>
    </>
  );
};

export default Action;
