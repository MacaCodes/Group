const web = (
  <nav>
    <h1>price</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

function Body() {
  return (
    <div>
      <h1>Fun fact about React</h1>
      <ul className = "body-list">
        <li>Was first realed in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 100k stars in github</li>
        <li>Is maintained bu Facebook</li>
        <li>Power thousand of enterprise app, including mobile app</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="react-logo.jpeg" width="60px" height="60px" ></img>
        <ul className="list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Small() {
  return (
    <footer className = "footer">
      <small>2021 Zirioli development, All rights reserved</small>
    </footer>
  );
}

function Tempo() {
  return (
    <div>
      <Header />
      <Body />
      <Small />
    </div>
  );
}

ReactDOM.render(<Tempo />, document.getElementById("root"));
