import logo from "../assets/tabour.png";

export default () => {
  return (
    <header>
      <p>
        <img src={logo} alt="Tabour Bakery Logo" />
        <h1>Tabour Bakery </h1>
      </p>

      <button> Cart(0)</button>
    </header>
  );
};
