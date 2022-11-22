import { useNavigate } from "react-router-dom";

import { Logo } from "./Logo";

import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container-header">
      <div className="item-header">
        UNIVERSUM+ <br /> Центр <br /> развития компетенций
      </div>
      <div className="logo-header" onClick={() => navigate("/")}>
        <Logo />
      </div>
      <div className="item-header">
        ИНСТИТУТ
        <br />
        мeждyнapoдныx
        <br />
        отношений
      </div>
    </div>
  );
};
