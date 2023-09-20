import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        <a
          href="https://github.com/sneharoy-14/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Sneha Dey Roy
      </footer>
    </div>
  );
}
