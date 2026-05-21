export default function TempWork() {
  function signUp(formData) {
    // const email = formData.get("email");
    // const pswrd = formData.get("password");
    // console.log(email);
    // console.log(pswrd);
    // console.log(formData.get("user"));
    // alert("submitted");
    console.log(Object.fromEntries(formData));
  }
  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        <label htmlFor="user">User:</label>
        <select id="user" name="user" defaultValue="w" required>
          <option value="w" disabled selected>
            ---choose user---
          </option>
          <option value="customer">customer</option>
          <option value="worker">worker</option>
        </select>

        <br />
        <button>Submit</button>
      </form>
    </section>
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
    /* <button onClick={add} className="value">
        +
      </button>
      <button className="value">{state}</button>
      <button onClick={sub} className="value">
        -
      </button>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section> */
  );
}
