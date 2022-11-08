import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import SearchProjectsForm from './components/SearchProjectsForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SearchProjectsForm /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
