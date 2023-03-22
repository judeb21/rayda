import './App.css';
import FeaturedContent from './components/FeaturedItems';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      {/* Show header */}
      <Header />

      {/* Show Featured Content */}
      <FeaturedContent />
    </div>
  );
}

export default App;
