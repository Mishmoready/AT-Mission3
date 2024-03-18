import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Alive</div>
      <Link to="/about">
        <button style={{ margin: "20px" }}>About</button>
      </Link>
      <Link to="/contact">
        <button style={{ margin: "20px" }}>Contact</button>
      </Link>
      {/* <Link to="/home">
        <button style={{ margin: "20px" }}>Home</button>
      </Link> */}
      <Link to="/login">
        <button style={{ margin: "20px" }}>Login</button>
      </Link>
      <Link to="/signUp">
        <button style={{ margin: "20px" }}>Sign Up</button>
      </Link>
      <Link to="/book/:bookID">
        <button style={{ margin: "20px" }}>Book</button>
      </Link>
    </>
  );
}
