import { useState, useEffect } from "react";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <input type='text' value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={writeData} className="bg-black"></button> */}
    </div>
  );
}

export default App;
