import "./App.css";
import Card from "./components/Card";
import Button from "./components/button";
import ChangeBg from "./components/ChangeBg";

function App() {
  let user = {
    username: "DD",
    price: 25,
  };
  let colors = ["bg-red-100","bg-green-100"];
  return (
    <>
      <Card userData={user} />
      <Button />
      <ChangeBg colors={colors} />
    </>
  );
}

export default App;
