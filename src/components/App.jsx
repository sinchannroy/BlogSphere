import React from 'react';
import Header from './subcomponents/header.jsx';
import Home from './subcomponents/home.jsx';
import Posts from './subcomponents/posts.jsx';
import Contact from './subcomponents/contact.jsx';
import Footer from './subcomponents/footer.jsx';

function App() {
  return (
    <div id='myApp'>
      <Header />
      <Home />
      <Posts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
