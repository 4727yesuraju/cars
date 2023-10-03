import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';


import Page from './components/Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Link to="page/1">goto</Link>}/>
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
