import "./App.scss";
import MainPage from "./Pages/MainPage";
import bgImage from "./assets/bg-img.jpeg";

function App() {
  return (
    <>
      <div className="background">
        <div className="background--top">
          <img id="bg-top" src={bgImage} alt="bg-img" />
        </div>
        <div className="background--bottom" />
      </div>
      <MainPage />
    </>
  );
}

export default App;
