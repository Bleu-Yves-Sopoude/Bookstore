import { Route, Routes } from 'react-router-dom';
import './App.css';
import './fonts/fonts.css';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import Books from './components/Books';

function App() {
  return (
    <main id="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  );
}
export default App;
