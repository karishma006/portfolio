import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;