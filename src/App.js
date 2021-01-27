import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar';
import  Home  from './components/Home';
import  Contact  from './components/Contact';
import  Project  from './components/Project';
import  About  from './components/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Project} path='/project' />
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
