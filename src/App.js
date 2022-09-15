import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { LoadingScreen } from "../src/components/Shared/LoadingScreen";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const isLoading = useSelector((state) => state.todos.isLoading);
  useEffect(() => {
    let user = localStorage.getItem("user");
    user && setIsLogin(true);
    user && setName(JSON.parse(user));
  }, []);

  return (
    <div className="App">
      <Header />

      {isLoading && <LoadingScreen />}
      {isLogin ? (
        <Home name={name} setIsLogin={setIsLogin} setName={setName} />
      ) : (
        <Login setName={setName} name={name} setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
