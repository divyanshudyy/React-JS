import "./App.css";
import Card from "./components/Card";
import Button from "./components/button";
import Change from "./components/Change";

function App() {
  let user = {
    username: "DD",
    price: 25,
  };
  return (
    <>
      <Card userData={user} />
      <Button />
      <Change />
    </>
  );
}

export default App;
