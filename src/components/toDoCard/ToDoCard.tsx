import React from "react";
import ToDo from "../../data/types";
import ToDoCardStyled from "./ToDoCardStyled";

interface ToDoCardProps {
  todo: ToDo;
}

const ToDoCard = ({ todo: { name, isDone } }: ToDoCardProps): JSX.Element => {
  const icon = "&#10003;";
  return (
    <ToDoCardStyled className="todo-card">
      <span className="todo-card__done">&#11093;</span>
      <h2 className="todo-card__name">{name}</h2>
      <button className="button button--remove">Remove</button>
    </ToDoCardStyled>
  );
};

export default ToDoCard;
