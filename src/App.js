import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

import DataArr from "./data";

export default function App() {
  const cards = DataArr.map((user) => {
    return <Card 
    key={user.id} 
    {...user} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

