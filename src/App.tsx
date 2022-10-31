import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { loadToDosActionCreator } from "./redux/features/toDos/toDosSlice";
import toDosData from "./data/toDosData";
import ToDoCardList from "./components/ToDoCardList/ToDoCardList";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadToDosActionCreator(toDosData));
  }, [dispatch]);

  return (
    <main className="container">
      <h1>Todos</h1>
      <ToDoCardList />
    </main>
  );
};

export default App;
