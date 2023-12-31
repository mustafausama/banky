import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const { user } = useAuth();
  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            Banky
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Features" id="collapsible-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link to={'/nearest-atm'} as={NavLink}>
                  ATMs
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link to={'/currency'} as={NavLink}>
                  Currency Exchange
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link to={'/'} as={NavLink}>
                  About Us
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to={'/review'} as={NavLink}>
              Reviews
            </Nav.Link>
            <Nav.Link to={'/dashboard'} as={NavLink}>
              Dashboard
            </Nav.Link>
          </Nav>
          <Nav>
            {!user ? (
              <div className="d-flex justify-content-between">
                <NavLink
                  to={'/login'}
                  className={({ isActive }) =>
                    'nav-link' + (isActive ? ' active' : '')
                  }
                >
                  Login
                </NavLink>
                <NavLink to={'/register'} className="nav-link">
                  Register
                </NavLink>
              </div>
            ) : (
              <NavLink
                to={'/logout'}
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
              >
                Logout
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
