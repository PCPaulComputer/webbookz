/**
 * @author Paul M
 * Home Page - Landing Page
 */
import Card from '../components/Card';
import photo from '../assets/bookstore.png'; //Modified the photo by the author; Source: Free stock photos from https://www.pexels.com/photo/pile-of-books-2765617/

import { Link } from 'react-router-dom';
import Button from '../components/Button';
const Home = () => {
    return (
      <Card>
        <div className="container">
          <img src={photo} alt="bookstore" className="img-fluid"/>
          <h2 className="mt-3">Welcome to WebBookz!</h2>
          <p>WebBookz contains various books about programming including web design and development. 
          There are also books that can be used in understanding problem solving, communication and Computer Science principles. 
          Learn how to navigate about resources that helps you design abd build your own website, desktop and mobile applications.</p>
          <Link className="text-light btn-lg" to="/shop"> <Button color="webColor1">Buy Now</Button></Link>
          <br />
          <br />
          <h2 className="text-center">Why Shop at WebBookz</h2>
          <div className="row">
            <div className="col-sm-4">
              <div class="card shadow-lg bg-light">
                  <div class="card-body">
                    <i class="fas fa-dollar-sign card-img-top text-center fa-3x text-primary"></i>
                    <br />
                    <h5 class="card-title">Affordable</h5>
                    <p class="card-text">Prices at WebBookz are lower gets you more savings and discounts.</p>
                  </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div class="card shadow-lg bg-light">
                  <div class="card-body">
                    <i class="fas fa-check-circle card-img-top text-center fa-3x text-warning"></i>
                    <br />
                    <h5 class="card-title">High Quality</h5>
                    <p class="card-text">The materials to make WebBookz products are guaranteed safe.</p>
                  </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div class="card shadow-lg bg-light">
                  <div class="card-body">
                    <i class="fas fa-tree card-img-top text-center fa-3x text-success"></i>
                    <br />
                    <h5 class="card-title">Eco-Friendly</h5>
                    <p class="card-text">Here at WebBookz, products can be recycled, reduced and reused.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

      </Card>
    );
  }
  
  export default Home;