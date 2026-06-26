





import { Route,Routes } from 'react-router-dom';
import { Home } from './components/public/Home';
import { Header } from './components/public/Header';
import { Project } from './components/public/Project';
import { About } from './components/public/About';
import { Contact } from './components/public/Contact';
import { NotFound } from './components/NotFound';



function App() {
  return (
    <div className='flex' >
      <Header/>
      <div className='flex-1 p-10 flex flex-col justify-start '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About'  element={<About/>}/>
        <Route path='/Contact'  element={<Contact/>}/>
        <Route path='/Projects'  element={<Project/>}/>
        <Route path='*' element={<NotFound />} />



      </Routes>
      </div>
      
    </div>
    
  );
}


export default App;

