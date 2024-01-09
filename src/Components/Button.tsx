import { Button } from "@mui/material";

import React from "react";

interface ButtonProps {
  handleActionButton: any;
  textButton: string | undefined;
}
const ActionButton = ({ handleActionButton, textButton }: ButtonProps) => {
  return (
    <>
      <Button variant="outlined" onChange={handleActionButton}>
        {textButton}
      </Button>
    </>
  );
};

export default ActionButton;
