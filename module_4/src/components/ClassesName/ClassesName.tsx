import React from "react";
import styles from "./ClassesName.module.css";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

interface INameState {
  name: string;
  count: number;
}

export default class ClassesName extends React.PureComponent<{}, INameState> {
  state: Readonly<INameState> = { name: this.randomName(), count: 0 };

  public render() {
    return (
      <section className={styles.container}>
        <span className={styles.name}>{this.state.name}</span>
        <div className={styles.gap}></div>
        <button className={styles.btn} onClick={this.handleClick}>
          Мне нужно имя!
        </button>
      </section>
    );
  }
  private randomName(): string {
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }
  private handleClick = () => {
    this.setState({ name: this.randomName() });
    this.setState(
      (state, props) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
  };
}
