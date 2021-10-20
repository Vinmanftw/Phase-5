import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled('header')`
max-width:900px;
margin: 0 auto;`

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
        <Link to={`/${user.id}`}>Home</Link>
      ) : (
        <Link to={`/`}>Home</Link>
      )}
      </div>
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
