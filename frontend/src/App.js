import "./App.scss";
import FeedbackForm from "./components/FeedbackForm";
import Home from "./components/Home";
function App() {
  return (
    <div>
      {/*  <h2>Demo Information</h2>
      <input placeholder="Enter mail" />
      <button>Click here</button>
      <ul>
        <li>phone</li>
        <li>laptop</li>
      </ul> */}
      <FeedbackForm />
      <Home />
    </div>
  );
}

export default App;
