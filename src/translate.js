import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
// import { Container, Segment } from "react-dom";
import "./translate.css";

const Translate = () => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();

  const handleOnClick = () => {
    speak({ text: text });
  };

  return (
    <div>
      <h1>Text To Speech</h1>
      <textarea
        className="textAreaStyle"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <button
        className="buttonStyle"
        onClick={() => {
          handleOnClick();
        }}
      >
        Play
      </button>
    </div>
  );
};

export default Translate;
