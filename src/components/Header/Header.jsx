import styles from "./header.module.css";
import Navbar from "../navBar/Navbar";
function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.gameTitle}>Poke-Mem</h1>
      </div>
    </div>
  );
}

export default Header;
