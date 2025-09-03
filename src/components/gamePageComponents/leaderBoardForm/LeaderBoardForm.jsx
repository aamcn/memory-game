import React from "react";
import styles from "./leaderBoardForm.module.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";

function LeaderBoardForm({ finishTime, cardTotal, setLeaderBoardFormVisible }) {
  const [leaderBoardUrl, setLeaderBoardUrl] = useState("easyLeaderBoardUrl");

  //URLS to POST to each database table. 
  const easyLeaderBoardUrl =
    "http://localhost:3000/easy-leader-board/add-easy-top-scorer";
  const mediumLeaderBoardUrl =
    "http://localhost:3000/medium-leader-board/add-medium-top-scorer";
  const hardLeaderBoardUrl =
    "http://localhost:3000/hard-leader-board/add-hard-top-scorer";

  //When the card total changes, the url is changed so results are sent to the correct table.
  useEffect(() => {
    if (cardTotal <= 5) {
      setLeaderBoardUrl(easyLeaderBoardUrl);
    }
    if (cardTotal < 9) {
      setLeaderBoardUrl(mediumLeaderBoardUrl);
    }
    if (cardTotal === 9) {
      setLeaderBoardUrl(hardLeaderBoardUrl);
    }
  }, [cardTotal]);

  //Create form data object and convert to JSON, then call post function with the JSON data.
  const handleSubmitScore = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataToJson = axios.formToJSON(formData);
    postForm(formDataToJson);
  };

  //Post form data to the server. 
  function postForm(formData) {
    let body = formData;
    axios
      .post(leaderBoardUrl, body, { method: "cors" }, { withCredentials: true })
      .catch((error) => {
        console.error(error);
      });
  }

  //Hides form when user clicks cancel.
  const handleCancelForm = (e) => {
    e.preventDefault();
    setLeaderBoardFormVisible(false);
  };

  return (
    <form className={styles.leaderBoardForm} onSubmit={handleSubmitScore}>
      <h2>Submit Your Score</h2>
      <label htmlFor="playerName">Name: </label>
      <input id="playerName" type="text" name="playerName" />
      <label htmlFor="finishTime">Finish Time: </label>
      <input
        id="finishTime"
        type="string"
        name="finishTime"
        readOnly
        value={finishTime}
      />
      <button type="submit">Submit</button>
      <button onClick={handleCancelForm} type="button">
        Cancel
      </button>
    </form>
  );
}

LeaderBoardForm.propTypes = {
  finishTime: PropTypes.string.isRequired,
  cardTotal: PropTypes.number.isRequired,
  setLeaderBoardFormVisible: PropTypes.func.isRequired,
};

export default LeaderBoardForm;
