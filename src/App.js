/**
 * @author Paul M
 */
//Import React-Router-Dom and Templates
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import our pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

//Styled Components for customize styles
import styled from 'styled-components';
import './App.css';

function App() {
  
  const AppStyle = styled.div`
    position: relative;
    min-height: 100vh;
  `;
  
  return (
    <AppStyle className="App">
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/webbookz/contact">
              <Contact/>
            </Route>
            <Route exact path="/webbookz/shop">
              <Shop />
            </Route>
            <Route exact path="/webbookz">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
    </AppStyle>
  );
}

export default App;

