import DisplaySection from "./components/DisplaySection/DisplaySection";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Nav from "./components/navbar/Nav";
import Scoundsection from "./components/soundsection/Scoundsection";
import Webgiviwer from "./components/webgiviwer/Webgiviwer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Scoundsection />
      <DisplaySection />
      <Webgiviwer />
    </div>
  );
}

export default App;
