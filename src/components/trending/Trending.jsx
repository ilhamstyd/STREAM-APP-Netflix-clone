import { useState } from "react";
import { Home } from "../homes/Home";
import "./trending.css"
import { trending } from "../../dummyData";

export const Trending = () => {

    const [items, setItems] = useState(trending)
  return (
    <>
      <div className="trending">
        <Home items={items}/>
      </div>
    </>
  );
};
