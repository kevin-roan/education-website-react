import { NavbarSimple } from "./Header";

export default function NavPages({ component }) {
  return (
    <>
      <NavbarSimple />
      <Header />
      {component}
    </>
  );
}
const Header = () => {
  return <div className="header-wrapper">Header</div>;
};
