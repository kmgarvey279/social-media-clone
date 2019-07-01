import React from "react";
import Info from "./Info";

function App(){
  return (
    <div>
      <div class="container">
        <div class="row">
          <NavBar/>
        </div>
        <div class="row">
          <div class="col-lg">
            <UserInfo/>
            <Info/>
          </div>
          <div class="col-lg">
            <Happening/>
          </div>
          <div class="col-lg">
            <FriendSuggestion/>
          </div>
        </div>
      </div>
  );
}

export default App;
