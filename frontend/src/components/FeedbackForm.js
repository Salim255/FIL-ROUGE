import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [tncBox, setTncBox] = useState(false);
  const submitFeedback = () => {
    console.log("Feedback submitted!");
  };
  return (
    <div>
      <h1>Feedbac kForm</h1>
      <input
        type="text"
        placeholder="Enter your Feedback here"
        value={feedbackText}
        onChange={(event) => setFeedbackText(event.target.value)}
      />
      <input
        type="checkbox"
        defaultChecked={tncBox}
        onChange={() => setTncBox(!tncBox)}
        id="tncbox"
      />
      <label htmlFor="tncbox">I accept the Terms and condtions</label>
      <button onClick={submitFeedback} disabled={!tncBox || !feedbackText}>
        Add Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
