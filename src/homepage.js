import './homepage.css';
import React, { Component } from 'react';


class HomePage extends Component {




    render() {




        return (
          <div className="wrapper">
              <header className="header">Kaitlyn.Helstrom</header>

              <div className="panel"> <img className="tiles" width='300px' height='300px' src={require("./project-images/bug.jpg")} alt="alt" /></div>
              <div className="panel">Panel B</div>
              <div className="panel tall-panel">
            <h1> skills </h1>
            <p>
                    web development<br/>
                    intuitive systems <br/>
                    design<br/>
                    mock-ups<br/>
                    logo creation<br/>
                    image refinement<br/>
                    UI systems<br/>
                    image formatting<br/>
                    typography<br/>
                    social media<br/>

            </p>
          </div>
  <div className="panel">
        <h1> Tools</h1>
                <p>
                      InDesign<br/>
                      Photoshop<br/>
                      Bridge<br/>
                      Illustrator<br/>
                      XD<br/>
                      Git<br/>
                      Express<br/>
                      Heroku<br/>
                      HTML /CSS<br/>
                      JavaScript<br/>
                      Bootstrap<br/>
                      React<br/>
                      Node<br/>
                      Mongo<br/>
                      Postgresql<br/>
                  </p>
  </div>
      <div className="panel">Panel E</div>
      <div className="panel tall-panel">Panel F</div>
      <div className="panel tall-panel">Panel G</div>
      <div className="panel tall-panel">Panel H</div>
      <div className="panel">Panel I</div>
      <div className="panel">Panel J</div>

  <footer className="footer">My footer</footer>
</div>


    );
  }
}


export default HomePage;
