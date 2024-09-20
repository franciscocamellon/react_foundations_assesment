import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/details"}>Link para details</Link>
    </div>
  );
}

export default Home;
