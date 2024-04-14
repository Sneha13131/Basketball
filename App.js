import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div class="topnav">
            <a class="active" href="#basics">Basics</a>
            <a href="#timeline">Time line</a>
            <a href="#famousplayers">Famous players</a>
          </div>

        </nav>
        <h1>Basketball</h1>
        <h3 id="basics">Basics</h3>
        <br />
        <p>Basketball is a team sport. Two teams of five players each try to score by shooting a ball through a hoop elevated 10 feet above the ground. The game is played on a rectangular floor called the court, and there is a hoop at each end. The court is divided into two main sections by the mid-court line.</p>
        <br />

        <h3 id="timeline">Time line</h3>
        <br />
        <img src='https://elizabethfinley.files.wordpress.com/2017/09/blank-diagram-page-1-e1506602467890.jpeg?w=663' height="400px" />
        <h3 id="famousplayers">Famous players</h3>
        <ul>
          <li>LeBron James</li>
          <li>Shaquille O'Neal</li>
          <li>Michael Jordan</li>
        </ul>
<footer>
  <h3>Contact Us</h3>
  <p>Ph. 0411231222312</p>
  <p>Email. basketball@mail.com</p>
  <p>Address. 10 basketball road, Basketball land</p>
</footer>

      </header>
    </div>
  );
}

export default App;
