import '../App.css';

function Home(props) {
  return (
    <div className="App">
      <h1>{ props.value }</h1>
    </div>
  );
}

export default Home;
