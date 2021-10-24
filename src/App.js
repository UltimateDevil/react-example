import './App.css';
import Layout from './components/layout/Layout';
import {Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import AddItems from './components/items/AddItems';

function App() {
  return (
    <>
      <Layout>
        <div className="main-content">
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/add-item">
              <AddItems/>
            </Route>
          </Switch>
        </div>
      </Layout>
    </>
  );
}

export default App;
