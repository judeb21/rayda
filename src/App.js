import './App.css';
import FeaturedContent from './components/FeaturedItems';
import Header from './components/Header';
import MainNav from './components/Navigation';

function App() {
  return (
    <div className="App">

      {/* Show App Navigation */}
      <MainNav />

      {/* Show header */}
      <Header />

      {/* Show Featured Content */}
      <FeaturedContent />
    </div>
  );
}

export default App;
