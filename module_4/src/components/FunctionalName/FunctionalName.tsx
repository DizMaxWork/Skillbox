import React from "react";
import styles from "./FunctionalName.module.css";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

export default function FunctionalName() {
  const randomName = () =>
    uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  /* const [name, setName] = React.useState(randomName);
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setName(randomName);
    setCount((prevCount) => prevCount + 1);
  };
  console.log(count); */

  const [state, setState] = React.useState({ name: randomName(), count: 1 });
  const handleClick = () => {
    setState((prevState) => ({
      name: randomName(),
      count: prevState.count + 1,
    }));
    console.log(state.count);
  };
  return (
    <section className={styles.container}>
      <span className={styles.name}>{state.name}</span>
      <div className={styles.gap}></div>
      <button className={styles.btn} onClick={handleClick}>
        Мне нужно имя!
      </button>
    </section>
  );
}
