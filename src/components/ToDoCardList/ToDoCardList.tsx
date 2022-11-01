import { useAppSelector } from "../../redux/hooks";
import ToDoCard from "../toDoCard/ToDoCard";

const ToDoCardList = (): JSX.Element => {
  const todos = useAppSelector(({ todos }) => todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <ToDoCard todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoCardList;
