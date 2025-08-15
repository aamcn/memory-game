import React from "react";
import styles from './leaderBoardForm.module.css';
import PropTypes from "prop-types";
import axios from 'axios';

function LeaderBoardForm({ finishTime }) {

    const handleSubmitScore = (event) => {
      event.preventDefault();
        const formData = new FormData(event.target);
        const formDataToJson = axios.formToJSON(formData);
        postForm(formDataToJson)
    };

    function postForm(formData) {

        let body = formData;
        console.log(body);
        axios.post(
        "http://localhost:3000/easy-leader-board/add-easy-top-scorer",
         body ,
         {method: "cors" },
         { withCredentials: true },
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return (
        <form className={styles.leaderBoardForm} onSubmit={handleSubmitScore}>
            <h2>Submit Your Score</h2>
            <label htmlFor="playerName">Name: </label>
            <input id="playerName" type="text" name="playerName" />
            <label htmlFor="finishTime">Finish Time: </label>
            <input id="finishTime" type="string" name="finishTime" readOnly value={finishTime} />
            <button type="submit">Submit</button>
            <button type="button">Cancel</button>
        </form>
    );
}

LeaderBoardForm.propTypes = {
    finishTime: PropTypes.string.isRequired
};

export default LeaderBoardForm;