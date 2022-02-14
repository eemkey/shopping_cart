import React from "react";

const testIdCom = (id) => {
  if (id) {
    return `${id}`;
  }
  return "standard";
};

const Button = ({ onClick, name, text, testId }) => {
  return (
    <a
      href="/#"
      onClick={onClick}
      className={name}
      data-testid={testIdCom(testId)}
    >
      <span>{text}</span>
    </a>
  );
};

export default Button;
