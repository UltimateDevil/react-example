import './App.css';
import {Header} from './components/layout/Header';
import {Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';

function App() {
  return (
    <div>
      <Header/>
      <div className="main-content">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
