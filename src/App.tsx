import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import SearchProjectsForm from './components/SearchProjectsForm';
import { ProjectContextProvider } from './context/ProjectContext';
function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <SearchProjectsForm /> } />
          </Routes>
        </BrowserRouter>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
