import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/DrinkHome';
import DrinkAdd from './pages/DrinkAdd/DrinkAdd';
import DrinkReturn from './pages/return/DrinkReturn';
import DrinkEdit from './pages/DrinkEdit/DrinkEdit';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Card}/>
          <Route path="/add" component={DrinkAdd}/>
          <Route path="/view/:id" component={DrinkReturn}/>
          <Route path="/edit/:id" component={DrinkEdit}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;