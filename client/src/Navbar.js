import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled('header')`
max-width:900px;
margin: 0 auto;`

const Div = styled('div')`

`
const H1 = styled('h1')`
font-size:75px;
margin:0;
`
function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Header>
      <div>
      {user ? (
        <Link to={`/`}>Home</Link>
      ) : (
        <Link to={`/`}>Home</Link>
      )}
      </div>
      <Div>
        <H1>P.W.R.C.T.</H1>
      </Div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </Header>
  );
}

export default NavBar;
