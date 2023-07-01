import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((step) => step + 1);
  }

  // function checkIsOpen() {
  //   if (isOpen) {
  //     setIsOpen(false);
  //   } else {
  //     setIsOpen(true);
  //   }
  // }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "😎" : "😴"}
        {/* {isOpen ? <>&or;</> : <>&and;</>} */}
        {/* above was a answer on jonas course question different button implementation
        rather than having the x as to close and open react steps ui
        also you can wrap above special symbols inside quote marks then you dont get the V shape
        these are HTML ENTITY NAMES
        also i have changed it the V shape looks weird cant find better entity names
        &times; */}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          {/* step minus 1 because array length is 1 number higher step is 1 - 1 = 0 0th index */}

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
