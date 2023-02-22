import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/vampaynani/repos")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("You encountered an error", error));
  }, []);

  const sortedData = users.sort((a, b) => (a.id > b.id ? 1 : -1));
  console.log(sortedData);
  return (
    <div className="App">
      {sortedData.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
}
export default App;
