import axios from "axios";

export function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";

    
  };
  return(
    <div className="menu-container">
    <ul className="menu-list">
      <li><a href="/">Home</a></li>
      <li><a href="./signup">Signup</a></li>
      <li><a href="./login">Login</a></li>
      <li><a href="#" onClick={handleClick}>Logout</a></li>
    </ul>
  </div>
  
    
  )
}