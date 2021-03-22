import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("api/hotels")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {data ? data.map((hotel, i) => <Hotel key={i} hotel={hotel} />) : <LoadingMask />}
    </div>
  );
};

export default App;
