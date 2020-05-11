import React from 'react';

import {

  Navbar, Nav, NavItem, NavDropdown,

  MenuItem, Glyphicon,

  Grid,

} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';



import Contents from './contents.jsx';

import ProductAdd from './inventoryAdd.jsx';



function NavBar() {

  return (

    <Navbar fluid>

      <Navbar.Header >

        <Navbar.Brand >Company Inventory App</Navbar.Brand>


      </Navbar.Header>


      <Nav>

        <LinkContainer exact to="/">

          <NavItem>Home</NavItem>

        </LinkContainer>

        <LinkContainer to="/myProducts">

          <NavItem>Product List</NavItem>

        </LinkContainer>



      </Nav>
    </Navbar>

  );

}



function Footer() {

  return (

    <small>

      <hr />

      <p className="text-center">

        Full source code available at:

        {' '}
        <a href="https://github.com/Chintan012?tab=repositories">

          My Github Repository

        </a>
        <br />
        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"></a> Chintan Bhadrecha  
      </p>

    </small>

  );

}



export default function Page() {

  return (

    <div>

      <NavBar />

      <Grid fluid>

        <Contents />

      </Grid>

      <Footer />

    </div>

  );

}