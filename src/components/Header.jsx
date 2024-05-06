import calImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={calImage} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
