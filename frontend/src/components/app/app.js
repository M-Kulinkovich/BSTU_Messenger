import React from "react";
import "./app.css";
import AppHeader from "../app-header";
import FriedsBlock from "../friends-block";
import MessageBlock from "../message-block";


const App = () => {
  return (
    <div className="content">
      <AppHeader />
      <FriedsBlock/>
      <MessageBlock/>
    </div>
  );
};
export default App;
