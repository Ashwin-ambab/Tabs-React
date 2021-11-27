import React from "react";
import Tabs from "./Tabs";

const App = () => {
  return (
    <div>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
};

export default App;
