import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CustomeButton = ({
  classNames,
  title,
}: {
  classNames?: string;
  title: string;
}) => {
  return (
    <Button
      className={` p-0 rounded-none flex gap-2 bg-black px-5 ${classNames}`}
    >
      {title} <ArrowRight  />
    </Button>
  );
};

export default CustomeButton;
