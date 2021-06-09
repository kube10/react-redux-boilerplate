import List from "./components/List";
import AddListItemForm from "./components/AddListItemForm";
import GitUsersList from "./components/GitUsersList";

function App() {
  return (
    <div className="App">
      <List />
      <AddListItemForm />
      <GitUsersList />
    </div>
  );
}

export default App;
