import logo from "../assets/icon.png";
export default function Header() {
  return (
    <div className="header-section">
      <div className="title">
        <img src={logo} alt="icon image" />
        <h2>Ingredity</h2>
      </div>
    </div>
  );
}
