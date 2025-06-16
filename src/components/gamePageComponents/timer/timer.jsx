import { useState, useEffect} from "react";
import styles from "./timer.module.css"

function Timer({ gameStarted, gameResults, setFinalTime}){

const [startTime, setStartTime] = useState(null)
const [time, setTime] = useState(0)

  useEffect(() => {
    const t = new Date()
    let intervalId;
    if (gameStarted && !gameResults) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(t - startTime), 10);
    }
    if(gameStarted && gameResults){
      setFinalTime(`${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} : ${milliseconds.toString().padStart(2, "0")}`)
    }
    return () => clearInterval(intervalId);
  }, [gameStarted, time]);


  useEffect(() => {
    const d = new Date()
    setStartTime(d)
  }, [gameStarted]);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 60000);

  // Seconds calculation
  const seconds = Math.floor((time % 60000) / 1000);

  // Milliseconds calculation
  const milliseconds = time % 100;

    return(
        <div className={styles.timerContainer}>
            <p className={styles.timerDisplay}>Time:{minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")} : {milliseconds.toString().padStart(2, "0")}</p>   
        </div>
    )
}

export default Timer;