// Css 
import './App.css';
// React router 
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
// Components 
import SearchProjectsForm from './components/search-projects-form/SearchProjectsForm';
import ProjectsList from './components/projects-list/ProjectsList';
import ButtonAppBar from './components/Header';
import PageNotFound from './components/PageNotFound';
// Context 
import { ErrorContextProvider } from './context/errors-context/ErrorsContext';
import { ProjectContextProvider } from './context/project-context/ProjectContext';

function App() {
  return (
    <div className="App">
      <ErrorContextProvider>
        <ProjectContextProvider>
          <BrowserRouter>
            <ButtonAppBar />
            <Routes>
              <Route path="/" element={ <SearchProjectsForm /> } />
              <Route path="/projects" element={ <ProjectsList /> } />
              <Route path="*" element={ <PageNotFound /> } />
            </Routes>
          </BrowserRouter>
        </ProjectContextProvider>
      </ErrorContextProvider>
    </div>
  );
}

export default App;
