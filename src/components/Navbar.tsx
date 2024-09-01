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
        {links.map((link) =>
          link == "logo" ? (
            <Nav.Item>
              <img className="navlogo" src="/images/logo.png" />
            </Nav.Item>
          ) : (
            <Nav.Item>
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
