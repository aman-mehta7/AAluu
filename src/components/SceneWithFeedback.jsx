import { Canvas } from "@react-three/fiber";
import Experiance from "./Experiance";
import React, { useState } from "react";

const SceneWithFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User feedback:", feedback);
    setSubmitted(true);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Canvas style={{ flex: 1 }}>
        <Experiance />
      </Canvas>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#111",
          color: "#eee",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="feedback">Your feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write something nice (or brutally honest)..."
          style={{
            margin: "0.5rem 0",
            padding: "0.5rem",
            fontSize: "1rem",
            resize: "vertical",
            borderRadius: "5px",
          }}
          rows={4}
        />
        <button
          type="submit"
          style={{
            background: "#555",
            color: "#fff",
            border: "none",
            padding: "0.6rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
        {submitted && <p style={{ marginTop: "0.5rem" }}>Thanks for your feedback ❤️</p>}
      </form>
    </div>
  );
};

export default SceneWithFeedback;