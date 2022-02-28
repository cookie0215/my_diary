import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Write from './pages/Write';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/diary' element={<Diary />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
        <Route path='/write' element={<Write />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
