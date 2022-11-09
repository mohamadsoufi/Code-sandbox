import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import SearchProjectsForm from './components/SearchProjectsForm';
import { ProjectContextProvider } from './context/ProjectContext';
import ProjectsList from './components/ProjectsList';
function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <SearchProjectsForm /> } />
            <Route path="/projects" element={ <ProjectsList /> } />
          </Routes>
        </BrowserRouter>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
