import { Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './components/Books';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
