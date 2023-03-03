import React from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Translate from "./translate";

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your Browser doesn't support</span>;
  }

  return (
    <div className="speech">
      <p className="mic-status">Microphone: {listening ? "ON" : "OFF"}</p>
      <button className="start" onClick={SpeechRecognition.startListening}>
        Start
      </button>
      <button className="reset" onClick={resetTranscript}>
        Reset
      </button>
      <button className="stop" onClick={SpeechRecognition.stopListening}>
        Stop
      </button>
      {/* <Translate /> */}
      <p className="text">{transcript}</p>
    </div>
  );
};

export default App;
