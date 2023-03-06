import './App.css';
import Header from './Layout/Header/Header';
import PeoplePage from './Pages/PeoplePage';

function App() {

  const navbarLinkData = ["People", "Planets", "Starships"];

  return (
    <div className="App">
      <Header headerTitle="SWAPI-APP" navbarLinkData={navbarLinkData} />
      <PeoplePage/>
    </div>
  );
}

export default App;
