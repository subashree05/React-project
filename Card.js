import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Slider() {
  return (
    <>

      <Card style={{ width: '17rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://buddybasket.ca/wp-content/uploads/2022/11/south-indian-breakfast-recipe-idly-idli-rice-cake-served-with-coconut-chutney-sambar-selective-focus.jpg" alt="Card Image" />
        <Card.Body>
        <Link to='/view-recipe/tamilnadu'>
          <Card.Title>Tamilnadu Cuisines</Card.Title>
          </Link>
          <Link to='/view-recipe/tamilnadu'>
          <Card.Text>
            Savor Tamil Nadu's vibrant cuisine with aromatic spices, rice delicacies, and a medley of vegetarian and non-vegetarian delights.
          </Card.Text></Link>
          <Link to='/view-recipe/tamilnadu'>
          <Button variant="primary">View Recipe</Button></Link>
        
          
          <div>
            <i className="fas fa-share-alt mr-2"></i>
            <i className="fas fa-heart"></i>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://images.immediate.co.uk/production/volatile/sites/30/2015/03/Top-10-foods-to-try-in-Kerala-cfdb737.jpg?resize=768,574" alt="Card Image" />
        <Card.Body>
        <Link to='/view-recipe/kerala'>
          <Card.Title>Kerala Cuisines</Card.Title> </Link>
          <Link to='/view-recipe/kerala'>
          <Card.Text>
          Discover the flavors of Kerala's cuisine, featuring coconut-infused dishes, spicy delicacies, and a symphony of seafood and traditional favorites.
          </Card.Text></Link>
          <Link to='/view-recipe/kerala'>
          <Button variant="primary">View Recipe</Button></Link>
          <div>
            <i className="fas fa-share-alt mr-2"></i>
            <i className="fas fa-heart"></i>
          </div>
         
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/564x/d8/20/50/d8205070c1a5f3e2afc4df55302d671f.jpg" alt="Card Image" />
        <Card.Body>
        <Link to='/view-recipe/andhra'>
          <Card.Title>Andhra Cuisines</Card.Title>  </Link>
          <Link to='/view-recipe/andhra'>
          <Card.Text>
            Savor the bold and fiery flavors of Andhra Pradesh's cuisine, boasting spicy delights, tangy pickles, and a diverse array of flavorful dishes.
          </Card.Text></Link>
          <Link to='/view-recipe/andhra'>
          <Button variant="primary">View Recipe</Button></Link>
          <div>
            <i className="fas fa-share-alt mr-2"></i>
            <i className="fas fa-heart"></i>
          </div>
        
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/236x/4e/cf/5b/4ecf5b59fc5d5629a56527e3b530706a.jpg" alt="Card Image" />
        <Card.Body>
        <Link to='/view recipe'>
          <Card.Title>Karnata Cuisines</Card.Title>
          <Card.Text>
            Discover Karnataka's diverse culinary heritage, blending aromatic spices, regional specialties, and the iconic comfort dish, Hot Lentil Rice.
          </Card.Text>
      
          <Button variant="primary">View Recipe</Button>
          </Link>
          <div>
            <i className="fas fa-share-alt mr-2"></i>
            <i className="fas fa-heart"></i>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '17rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg" alt="Card Image" />
        <Card.Body>
        <Link to='/view recipe'>
          <Card.Title>Maharashtra Cuisines</Card.Title>
          <Card.Text>
            Delight in Maharashtra's culinary richness, where bold spices, street delights, and the iconic Puran Poli create a flavorful journey.

          </Card.Text>
          <Button variant="primary">View Recipe</Button>
          <div>
            <i className="fas fa-share-alt mr-2"></i>
            <i className="fas fa-heart"></i>
          </div>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

function CardSlider() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Slider />
    </div>
  );
}

export default CardSlider;
