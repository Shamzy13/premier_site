import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Contact } from './screens/Contacts';


function App() {
  return (
    <div className='container mt-10'>
      <header className='flex mb-5 justify-between items-center'>
        <img className='w-10' src="images/logo.jpg" alt="logo du site" />
        <nav className='flex justify-end'>
          <NavLink className='mr-3' style={(isActive) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br />
          <NavLink className='mr-3' style={(isActive) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/ressources'>Ressources</NavLink> <br />
          <NavLink className='mr-3' style={(isActive) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/contact'>Contact</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/ressources' element={ <Ressources/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
      </Routes>
      <footer>

      </footer>
      
    </div>

  );
}

export default App;
