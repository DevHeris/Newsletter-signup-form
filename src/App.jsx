function App() {
  return (
    <>
      <Main />
      <SuccessMessage />
    </>
  );
}

function Main() {
  return (
    <div className="main">
      <Form />
      <section className="img-container"></section>
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className="success">
      <div>
        <img src="/images/icon-success.svg" alt="" />
      </div>
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to{" "}
        <span className="email">ash@loremcompany.com</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button className="btn">Dismiss message</button>
    </div>
  );
}

function Form() {
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

      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <span className="error">Valid email required</span>
        </div>
        <input type="text" placeholder="email@company.com" />
        <button className="btn">Subscribe to monthly newsletter</button>
      </form>
    </section>
  );
}

export default App;
