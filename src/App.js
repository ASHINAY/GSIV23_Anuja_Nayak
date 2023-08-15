import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage/ListPage.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ListPage />} />
          <Route exact path='/DetailsPage' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
