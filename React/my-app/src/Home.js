import React from "react";
import "./App.css";

/* example of using fetch and creating a button to refresh the data retrieved from API
function Home() {
  const [price, setPrice] = React.useState("");
  const [refresh, setRefresh] = React.useState(true);
  React.useEffect(() => {
    if (refresh) {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((result) => result.json())
        .then((resultJson) => {
          setPrice(resultJson.bpi.USD.rate);
        });
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <>
      <div className="App">
        <h1>BTC Price</h1>
        <header className="App-header">
          <p id="data-display">BTC: ${price}</p>
          <button onClick={() => setRefresh(true)}>Refresh</button>
        </header>
      </div>
    </>
  );
}
*/

/*Example of using interval syntax to auto refresh and receive new data from API
function Home() {
  const [price, setPrice] = React.useState("");
  React.useEffect(() => {
    const getdata = setInterval(() => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((result) => result.json())
        .then((resultJson) => {
          setPrice(resultJson.bpi.USD.rate);
        });
    }, 1000);

    return () => clearInterval(getdata);
  }, []);

  return (
    <div className="App">
      <h1>Bitcoin Price</h1>
      <header className="App-header">
        <p id="data-display">BTC: ${price}</p>
      </header>
    </div>
  );
}
*/

export default Home;
