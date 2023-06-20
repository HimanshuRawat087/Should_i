import React, { useState } from "react";
import SearchBar from "./Component/SearchBar";
import ListQuestion from "./Component/ListQuestion";
import SubmitResponse from "./Component/SubmitResponse";

function App() {
  const [botResponse, setBotResponse] = useState({});

  return (
    <div className="flex justify-center align-center h-screen">
      <div className="w-1/2 mt-auto">
        <SearchBar setBotResponse={setBotResponse}/>
        <ListQuestion botResponse={botResponse} />
        <SubmitResponse/>
      </div>
      {console.log(botResponse)}
    </div>
  );
}

export default App;
