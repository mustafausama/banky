import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import Notification from './Notification';
import { useEffect, useState } from 'react';
import axios from '../utils/api';

const NavbarComponent = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    axios
      .get('/notification/all')
      .then(({ data }) => setNotifications(data))
      .catch((err) => console.log(err));
  }, []);

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
            {user && (
              <>
                <Nav.Link to={'/dashboard'} as={NavLink}>
                  Dashboard
                </Nav.Link>
                <Nav.Link to={'/create-transaction'} as={NavLink}>
                  Transaction
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <div className="d-flex justify-content-between">
              {!user ? (
                <>
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
                </>
              ) : (
                <>
                  <NavDropdown
                    title={<Badge>{notifications.length}</Badge>}
                    id="basic-nav-dropdown"
                  >
                    <Notification
                      notificationsProp={notifications}
                      page={false}
                    />
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Nav.Link to={'/notifications'} as={NavLink}>
                        Show All
                      </Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavLink
                    to={'/logout'}
                    className={({ isActive }) =>
                      'nav-link' + (isActive ? ' active' : '')
                    }
                  >
                    Logout
                  </NavLink>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
