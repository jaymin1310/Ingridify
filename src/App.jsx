import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";
export default function App() {
  // const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

  // const allFavoriteThings = [
  //   "💦🌹",
  //   "😺",
  //   "💡🫖",
  //   "🔥🧤",
  //   "🟤🎁",
  //   "🐴",
  //   "🍎🥧",
  //   "🚪🔔",
  //   "🛷🔔",
  //   "🥩🍝",
  // ];
  // const thingsElements = myFavoriteThings.map((thing) => (
  //   <p key={thing}>{thing}</p>
  // ));

  // function addFavoriteThing() {
  //   setMyFavoriteThings((prevThings) => [
  //     ...prevThings,
  //     allFavoriteThings[prevThings.length],
  //   ]);
  // }
  // let [state, change] = React.useState(0);
  // console.log(state);
  // function add() {
  //   change((state += 1));
  // }
  // function sub() {
  //   change((state) => state - 1);
  // }
  return (
    <div>
      <Header />
      {/* <button onClick={add} className="value">
        +
      </button>
      <button className="value">{state}</button>
      <button onClick={sub} className="value">
        -
      </button> */}
      {/* <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section> */}
      <Main />
    </div>
  );
}
