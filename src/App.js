import MyComponent from "./MyComponent";
import Navbar from "./Navbar";
import Row from "./Row";

function App() {
  const KEY = "43f1a9d5bce7c0e037be1d5c4bc1bd69";

  return (
    <div className="w-full h-auto bg-black">
      <Navbar />
      <MyComponent />
      <Row
        title="Trending"
        fetchURL={`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=2`}
      />
      <Row
        title="Popular"
        fetchURL={`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=3`}
      />
      <Row
        title="Upcoming..."
        fetchURL={`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=4`}
      />
    </div>
  );
}

export default App;
