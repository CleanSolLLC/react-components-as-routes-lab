import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const NavUnlisted = styled.ul `
  
  a {
    text-decoration: none;
  }

  li {
    color: blue;
    font-size: 1.3rem;
    position: relative;
  
  }

  .current {
    li {
      color: red;
    }
  }
}

`;

const NavBar = () => {
  return (
    <div className="navbar">
      <NavUnlisted>
          <NavLink to="/" activeClassName="current" exact>
            <li>Home</li>
          </NavLink>

          <NavLink to="/movies" activeClassName="current" exact>
            <li>Movies</li>
          </NavLink>
  
          <NavLink to="/directors" activeClassName="current" exact>
            <li>Directors</li>
          </NavLink>
        
          <NavLink to="/actors" activeClassName="current" exact>
            <li>Actors</li>
          </NavLink>

      </NavUnlisted>
    </div>
  );
};

export default NavBar;
