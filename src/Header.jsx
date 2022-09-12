import { useEffect, useState } from "react";
import cl from "./Header.module.css";
const Header = () => {
  const [time, setTime] = useState("10:56:23");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let finalsec = 60 - date.getSeconds();
      let finalmin = 60 - date.getMinutes();
      let finalhour = 24 - date.getHours();
      if (finalsec < 10) finalsec = "0" + finalsec;
      if (finalmin < 10) finalmin = "0" + finalmin;
      if (finalhour < 10) finalhour = "0" + finalhour;
      console.log(finalsec, finalmin, finalhour);
      setTime(`${finalhour}:${finalmin}:${finalsec}`);
    }, 1000);
  }, []);
  return (
    <div className={cl.total}>
      {/* <img src="./bigben.png" alt="" className={cl.logo} /> */}
      <h1 className={cl.title}>Circadian Gallery</h1>
      <h1 className={cl.time}>{time}</h1>
    </div>
  );
};

export default Header;
