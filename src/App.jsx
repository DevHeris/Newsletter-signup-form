/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [showMain, setShowMain] = useState(true);

  function handleValidation(e) {
    e.preventDefault();

    const isValid = email.includes("@") && email.includes(".");

    setIsValidEmail(isValid);

    setShowMain(isValid ? false : true);
  }

  function dismissMessage() {
    setEmail("");
    setShowMain(true);
  }

  return (
    <>
      {showMain ? (
        <Main
          isValid={isValidEmail}
          handleValidation={handleValidation}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        <SuccessMessage email={email} dismissMessage={dismissMessage} />
      )}
    </>
  );
}

function Main({ isValid, handleValidation, email, setEmail }) {
  return (
    <div className="main">
      <Form
        isValid={isValid}
        handleValidation={handleValidation}
        email={email}
        setEmail={setEmail}
      />
      <section className="img-container"></section>
    </div>
  );
}

function SuccessMessage({ email, dismissMessage }) {
  return (
    <div className="success">
      <div>
        <img src="/images/icon-success.svg" alt="" />
      </div>
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to
        <span className="email"> {email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button className="btn" onClick={dismissMessage}>
        Dismiss message
      </button>
    </div>
  );
}

function Form({ isValid, handleValidation, email, setEmail }) {
  return (
    <section className="form-wrapper">
      <h2>Stay Updated!</h2>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>
          <img src="/images/icon-list.svg" alt="list-icon" />
          <span>Product discovery and building what matters</span>
        </li>
        <li>
          <img src="/images/icon-list.svg" alt="list-icon" />
          <span>Measuring to ensure updates are a success</span>
        </li>
        <li>
          <img src="/images/icon-list.svg" alt="list-icon" />
          <span>And much more!</span>
        </li>
      </ul>

      <form onSubmit={handleValidation}>
        <div>
          <label htmlFor="email">Email address</label>
          {!isValid && <span className="error">Valid email required</span>}
        </div>
        <input
          className={isValid ? "" : "input-err"}
          type="text"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn">Subscribe to monthly newsletter</button>
      </form>
    </section>
  );
}

export default App;
