import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import BrandText from './BrandText';

const NavigationBar = ({ authenticated }) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to="/">
          <BrandText>SourceGrade</BrandText>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {authenticated
          ?
            [
              <LinkContainer key="classes" to="classes">
                <NavItem eventKey={1}>Classes</NavItem>
              </LinkContainer>,
              <LinkContainer key="logout" to="logout">
                <NavItem eventKey={2}>Logout</NavItem>
              </LinkContainer>,
            ]
          :
            [
              <LinkContainer key="login" to="login">
                <NavItem eventKey={3}>Login</NavItem>
              </LinkContainer>,
              <LinkContainer key="signup" to="signup">
                <NavItem eventKey={4}>Sign Up</NavItem>
              </LinkContainer>,
            ]
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

NavigationBar.propTypes = {
  authenticated: PropTypes.bool,
};

NavigationBar.defaultProps = {
  authenticated: false,
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(NavigationBar);
