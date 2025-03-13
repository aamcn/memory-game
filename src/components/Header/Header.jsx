import styles from "../../cssModules/header.module.css"
import Navbar from "../Navbar";
function Header() {
  return (
    
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.gameTitle}>Title</h1>
      </div>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
