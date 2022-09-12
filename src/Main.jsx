import cl from "./Main.module.css";
const Main = ({ imageurl, avg }) => {
  return <div className={cl.total} style={{ backgroundImage: `url(${imageurl})`, backgroundColor: avg.rgba }}></div>;
};

export default Main;
