import React, { Component } from "react";

import { Cards, Charts, CountryPicker } from "./components/";
import { fetchData } from "./api";
import styles from "./App.module.css";

class App extends Component {
  state = { data: {} };

  async componentDidMount() {
    const fetcheddata = await fetchData();
    this.setState({ data: fetcheddata });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default App;
