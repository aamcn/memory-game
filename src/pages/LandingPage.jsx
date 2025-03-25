import { Link } from "react-router-dom";
import styles from "../cssModules/landingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.mainImage}
          width="400px"
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9qM2dmeW42aHQxMXAwNnA2YmV1dTRiaGoweHE4YWZoMDJoZnJkeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/teYrgUtS8tPl6/giphy.gif"
        ></img>
      </div>
      <div>
        <h1 className={styles.mainHeading}>Poke-Mem</h1>
      </div>
      <div className={styles.startButton}>
        <Link to="/game-page">Start</Link>
      </div>
    </div>
  );
}

export default LandingPage;
