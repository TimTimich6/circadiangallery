import cl from "./Extra.module.css";
const Extra = ({ avg }) => {
  return (
    <div className={cl.total} style={{ borderTop: `1px solid ${avg.rgba}` }}>
      <h1
        className={cl.title}
        // style={{ color: avg.isDark ? "#d3e3f5" : "#242b33", textShadow: `1px 1px 5px ${avg.isLight ? "#d3e3f5" : "#242b33"}` }}
      >
        Patrick Bateman's bedroom
      </h1>
      <h1
        className={cl.author}
        // style={{ color: avg.isDark ? "#d3e3f5" : "#242b33", textShadow: `1px 1px 5px ${avg.isLight ? "#d3e3f5" : "#242b33"}` }}
      >
        Jeanne Develle
      </h1>
      <p className={cl.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi deleniti rerum eligendi cupiditate totam quas iusto assumenda ipsum
        hic velit numquam beatae, quos ex nam voluptates, veniam soluta maxime repellendus autem consectetur? Veritatis architecto ullam sapiente
        placeat iure aut nihil hic, impedit excepturi nemo totam odio illo cum amet.
      </p>
    </div>
  );
};

export default Extra;
