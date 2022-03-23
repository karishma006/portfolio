import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;