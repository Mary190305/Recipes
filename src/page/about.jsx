function About() {
    return (
      <div className="container">
        <h2 className="center-align pink-text text-darken-1">About Our Recipe Website</h2>
        
        <div className="row">
          <div className="col s12 m6">
            <div className="card-panel pink lighten-5">
              <h4>Our Story</h4>
              <p>Welcome to FlavorFusion, where passion for cooking meets the joy of sharing!</p>
              <p>Founded in 2020, our mission has been to create a community where food lovers can discover, create, and share delicious recipes from around the world.</p>
              
              <div className="section">
                <h5><i className="material-icons pink-text text-darken-1">restaurant</i> What We Do</h5>
                <p>We curate and test thousands of recipes to bring you only the best, most reliable cooking instructions. Our team of chefs and home cooks work together to ensure every recipe is perfect.</p>
              </div>
            </div>
          </div>
          
          <div className="col s12 m6">
            <div className="card-panel">
              <h4>Our Values</h4>
              <ul className="collection">
                <li className="collection-item">
                  <i className="material-icons pink-text text-darken-1">check</i> 
                  <span className="flow-text">Quality Ingredients</span> - We prioritize recipes with accessible, fresh ingredients
                </li>
                <li className="collection-item">
                  <i className="material-icons pink-text text-darken-1">check</i> 
                  <span className="flow-text">Clear Instructions</span> - Step-by-step guides for cooks of all levels
                </li>
                <li className="collection-item">
                  <i className="material-icons pink-text text-darken-1">check</i> 
                  <span className="flow-text">Community Focus</span> - Recipes from home cooks around the world
                </li>
                <li className="collection-item">
                  <i className="material-icons pink-text text-darken-1">check</i> 
                  <span className="flow-text">Diversity</span> - Celebrating global cuisines and traditions
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col s12">
            <div className="card-panel pink lighten-5">
              <h4 className="center-align">Meet Our Team</h4>
              <div className="row center-align">
                <div className="col s12 m4">
                  <img src="https://via.placeholder.com/150" alt="Chef Maria" className="circle responsive-img" />
                  <h5>Chef Maria</h5>
                  <p>Head Chef with 15 years experience in Italian cuisine</p>
                </div>
                <div className="col s12 m4">
                  <img src="https://via.placeholder.com/150" alt="David" className="circle responsive-img" />
                  <h5>David</h5>
                  <p>Nutritionist and healthy recipes specialist</p>
                </div>
                <div className="col s12 m4">
                  <img src="https://via.placeholder.com/150" alt="Sophie" className="circle responsive-img" />
                  <h5>Sophie</h5>
                  <p>Baker and pastry chef extraordinaire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section center-align">
          <h4>Join Our Community</h4>
          <p>Over 1 million home cooks share their recipes with us every month!</p>
          <a className="btn waves-effect waves-light pink darken-1" href="/register">
            Sign Up Today
            <i className="material-icons right">person_add</i>
          </a>
        </div>
      </div>
    );
  }

export {About};