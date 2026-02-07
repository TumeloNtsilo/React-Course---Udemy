import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({name : "Tumelo"})
  const steps = [1, 2, 3];

  function handlePrevious(){
    if(step >= 2) setStep(step - 1);
  }

  function handleNext(){
    if(step <= 2) setStep(step + 1);
    setTest({name :"Edward"});
  }

  return (
    <div className="steps">
      <div className="numbers">
        {steps.map((num) => (
          <div className={step >= num ? "active" : ""}>{num}</div>
        ))}

        {/* <div className={step >= 1 ? "active": ""}>1</div>
              <div className={step >= 2 ? "active": ""}>2</div>
              <div className={step >= 3 ? "active": ""}>3</div> */}
      </div>

      <div className="message">
        <p>
          Step {step}: {messages[step - 1]}
          {test.name}
        </p>
      </div>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7627F5", color: "#ffff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7627F5", color: "#ffff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
