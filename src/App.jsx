import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./App.css";
import Extra from "./Extra";
import Header from "./Header";
import Main from "./Main";
function App() {
  const [imageurl, setImageUrl] = useState(
    "https://i0.wp.com/scenetherapy.com/wp-content/uploads/2019/01/Patrick-Batemans-Apartment-from-American-Psycho.jpg?fit=1484%2C816&ssl=1"
  );
  const [avg, setAvg] = useState("");
  useEffect(() => {
    new FastAverageColor()
      .getColorAsync(imageurl)
      .then((color) => {
        setAvg(color);
        console.log(color);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [imageurl]);
  return (
    <div className="App">
      <ReactAudioPlayer src="diand.mp3" autoPlay loop={true} />
      <Main avg={avg} imageurl={imageurl} />
      <Header />
      <Extra avg={avg} />
    </div>
  );
}

export default App;
