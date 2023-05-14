import Dropdown from "react-dropdown";
import "../../src/App.css";
import { BsPersonCircle } from "react-icons/bs";

export default function Submenu() {
  const options = ["Registrarse", "Iniciar Sesión", "Ser anfitrión", "Ayuda"];

  return (
    <Dropdown
      placeholder={<BsPersonCircle className="icon-right-topbar" />}
      arrowClassName="myArrowClassName"
      options={options}
    />
  );
}
