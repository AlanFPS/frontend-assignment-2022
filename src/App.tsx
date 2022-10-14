import React, { useEffect, useState } from "react";
import "./App.css";
import getDataAsync, { CarouselData } from "./data";
import PrevIcon from "./assets/chevron-left.png";
import NextIcon from "./assets/chevron-right.png";

const delay: number = 2500;

function App() {
  const [index, setIndex] = useState<number>(0);
  const [data, setdata] = useState<CarouselData[] | []>([]);

  useEffect(() => {
    (async () => {
      const imageData = await getDataAsync();
      setdata(imageData);
    })();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex((prevIndex: number) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearTimeout(timerId);
  }, [index, data]);

  function moveNext(): void {
    setIndex((prevIndex: number) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  }
  function movePrev(): void {
    setIndex((prevIndex: number) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="App">
      <img
        src={NextIcon}
        alt="next icon"
        className="nextIcon"
        onClick={moveNext}
      />
      <img
        src={PrevIcon}
        alt="prev icon"
        className="prevIcon"
        onClick={movePrev}
      />
      <div className="slider">
        <div
          className="slideshow"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {data.length === 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "500px",
              }}
            >
              <div className="loader"></div>
            </div>
          )}
          {data?.map(({ ImageTitle, imageURL }, idx) => {
            return (
              <div className="slide" key={idx}>
                <img src={imageURL} alt="sliderImage" />
                <h2>{ImageTitle}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
