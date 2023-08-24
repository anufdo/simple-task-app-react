import "./App.css";
import Task from "./components/Task";

// from API
const Tasks = [
  { id: 1, task: "Task 1" },
  { id: 2, task: "Task 2" },
  { id: 3, task: "Task 3" },
];

function App() {
  return (
    <div className="app">
      <Task task={Tasks[0].task} />
      <Task task={Tasks[1].task} />
      <Task task={Tasks[2].task} />
    </div>
  );
}

export default App;
