import logo from "../assets/img/logo-bg.png";
import UserBottons from "./UserBottons";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const completeHeader = (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo da Asics" />
      </Link>
      <UserBottons />
    </header>
  );
  const simpleHeader = (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo da Asics" />
      </Link>
    </header>
  );
  return <>{pathname === "/" ? completeHeader : simpleHeader}</>;
};

export default Header;
