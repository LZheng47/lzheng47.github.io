import "../styles/components/navbar.scss";
import Nav from "react-bootstrap/Nav";

interface Props {
  links: string[];
}

function Navbar({ links }: Props) {
  return (
    <>
      <Nav
        className="navbar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        {links.map((link, index) =>
          link == "logo" ? (
            <Nav.Item key={index}>
              <img className="navlogo" src="/images/logo.png" />
            </Nav.Item>
          ) : (
            <Nav.Item key={index}>
              <Nav.Link
                className="navButton"
                href={"/#" + link.replace(/[\s\W]/g, "").toLowerCase()}
              >
                {link.toUpperCase()}
              </Nav.Link>
            </Nav.Item>
          )
        )}
      </Nav>
    </>
  );
}

export default Navbar;
