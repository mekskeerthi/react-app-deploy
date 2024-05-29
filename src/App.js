import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,    Routes} from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
       <h1> This is  React App</h1>
   
      
 
      <BrowserRouter>
       <Header></Header>
        <Routes>
          <Route path='/home' element={ <Home></Home>}> </Route>
          <Route path='/about' element={<About></About>}> </Route>
         </Routes>
       </BrowserRouter>

      
       
      
    
    </div>
  );
}

export default App;
