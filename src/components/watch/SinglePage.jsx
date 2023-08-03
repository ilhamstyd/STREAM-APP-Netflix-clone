import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummyData";
import { UpComming } from "../upcomming/UpComming";
import "./style.css"

export const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [rec, setRec] = useState(recommended)

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1>
              <span> | {item.time} | </span> <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  ipsum qui nam, quis eos enim ea, ratione obcaecati neque
                  perferendis doloremque. Laudantium neque, sit consequatur
                  reprehenderit hic aliquid nihil nemo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  ipsum qui nam, quis eos enim ea, ratione obcaecati neque
                  perferendis doloremque. Laudantium neque, sit consequatur
                  reprehenderit hic aliquid nihil nemo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  ipsum qui nam, quis eos enim ea, ratione obcaecati neque
                  perferendis doloremque. Laudantium neque, sit consequatur
                  reprehenderit hic aliquid nihil nemo.
                </p>
              </div>
              <div className="social">
                <h3>Share: </h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" />
                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
              </div>
            </div>
          </section>
          <UpComming items={rec} Title="Recommended Movies"/>
        </>
      ) : (
        "no"
      )}
    </>
  );
};
