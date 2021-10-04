// import
import './App.css';
import { Navbar, Container, Nav } from "react-bootstrap"
import Error from './component/404/404';
import About from './component/About Us/about';
import Home from './component/home/home';
import Products from './component/products/products';
import Project from './component/projects/project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// app function
function App() {
  return (
    <div>

{/* Router */}
      <Router>

{/* NavBar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Loading Programmer</Navbar.Brand>
            <Nav className="me-auto links">
              <Link className="navButton" to="/">Home</Link>
              <Link className="navButton" to="/About">About</Link>
              <Link className="navButton" to="/Products">Products</Link>
              <Link className="navButton" to="/Project">Project</Link>
            </Nav>
          </Container>
        </Navbar>

{/* swithch */}
        <Switch>

{/* Route */}
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Products">
            <Products />
          </Route>
          <Route exact path="/Project">
            <Project />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
    </Router>
    
{/* Footer */}
    <footer className="text-center h-5 mt-5 p-5 color">Copyright 2021</footer>
    </div>
  );
}

export default App;

