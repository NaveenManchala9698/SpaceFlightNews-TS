
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import Details from './components/Details';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <header className="App-header">
          
          <Routes>
            <Route path='/' element={<ArticlesList/>}></Route>
            <Route path='/Details/:articleID' element={<Details/>}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
