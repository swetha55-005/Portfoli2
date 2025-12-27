





import { Route,Routes } from 'react-router-dom';
import { Home } from './components/public/Home';
import { Header } from './components/public/Header';
import { Project } from './components/public/Project';
import { About } from './components/public/About';
import { Contact } from './components/public/Contact';



function App() {
  return (
    <div className='flex' >
      <Header/>
      <div className='flex-1 p-10 flex flex-col justify-start '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About'  element={<About/>}/>
        <Route path='/Contact'  element={<Contact/>}/>
        <Route path='/Project'  element={<Project/>}/>



      </Routes>
      </div>
      
    </div>
    
  );
}


export default App;

