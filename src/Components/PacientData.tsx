import React, { useState } from "react";
import Action from "./Action";
import Header from "./Header";

const PacientData = () => {
  const [animalName, setAnimalName] = useState<string>();
  const [animalAge, setAnimalAge] = useState<number>();

  const handleNameAnimal = (event: any) => {
    const value = event.target.value;
    setAnimalName(value);
  };

  const handleAgeAnimal = (event: any) => {
    const value = event.target.value;
    setAnimalAge(value);
  };

  const handleAddActionAnimal = () => {
    console.log("z buttona", animalName);
  };

  console.log(animalName);

  return (
    <>
      <Header headerText="Lista pacjentów" animalName={animalName} />

      <ul>
        <li>imię: {animalName}</li>
        <li>wiek: {animalAge}</li>
      </ul>

      <Action
        animalNameValue={animalName}
        animalAgeValue={animalAge}
        handleAgeAnimal={handleAgeAnimal}
        handleNameAnimal={handleNameAnimal}
        handleAddActionAnimal={handleAddActionAnimal}
      />
    </>
  );
};

export default PacientData;
