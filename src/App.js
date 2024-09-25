import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
// import Registration from './RegistrationPage';
// import ListOfUser from './ListOfUser';
// import UpdateUser from './updateUser';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    
      {/* <Registration>
      <BrowserRouter>
      <Routes>
        <Route path='/get' element={<ListOfUser/>}></Route>
      </Routes>
      </BrowserRouter>
      </Registration>
      <BrowserRouter>
      <Routes>
        <Route path='/update' element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter> */}

    
    </div>
  );
}

export default App;
