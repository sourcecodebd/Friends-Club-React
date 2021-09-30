import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App container">
      <Router>

        <Header />

        <Switch>
          <Route exact path='/'>
            <Friends />
          </Route>
          <Route path='/friends'>
            <Friends />
          </Route>
          <Route path='/friend/details/:friendId'>
            <FriendDetail />
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
          <Route path='/post/details/:postId'>
            <PostDetails />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/about/culture'>
            <Culture />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </div >
  );
}

export default App;