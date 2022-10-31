import { useAppSelector } from "../../app/hooks";

const ToDoCardList = (): JSX.Element => {
  const todos = useAppSelector(({ todos }) => todos.list);
  return (
    <ul>
      {todos.map((tasca) => (
        <li key={tasca.id}>
          {tasca.id} - {tasca.name} - {tasca.done}
        </li>
      ))}
    </ul>
  );
};

export default ToDoCardList;
