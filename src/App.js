import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';

function App() {
  return (
    
      <div className="App">
      <Header />
    
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
    </div>
  )
}

export default App;
