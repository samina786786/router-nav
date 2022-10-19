import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';


function App() {
  return (
    
    <BrowserRouter>
    <div className='App'>
   <Header />
    </div>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/about' component={About}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/Contact' component={Contact}/>
    </Switch>
    </BrowserRouter>

  
  );
}

export default App;
