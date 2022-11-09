// Css 
import './App.css';
// React router 
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
// Components 
import SearchProjectsForm from './components/search-projects-form/SearchProjectsForm';
import ProjectsList from './components/projects-list/ProjectsList';
import ButtonAppBar from './components/Header';
// Context 
import { ProjectContextProvider } from './context/ProjectContext';

function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <BrowserRouter>
          <ButtonAppBar />
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
