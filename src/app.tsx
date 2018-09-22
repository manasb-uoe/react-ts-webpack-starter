import * as React from "react";
import * as styles from "./styles.css";

export const Title: React.SFC<{ title: string }> = ({ title }) => <h1 className={styles.title}>{ title }</h1>

export const App: React.SFC = () => (
  <div className={styles.container}>
    <Title title='This app was built with webpack.' />
  </div>
);
