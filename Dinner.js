import React from 'react';
/*import './App.css';*/
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function Dinner() {
  return (



    <div className='cardshome'>
      <div className="card-image-container">
        <br /> <br />
        <h1>Dinner Recipes</h1>
        <div className='sample'>
          Need help with dinner ideas? We have one-pot dishes, 30-minute meals, slow cooker feasts, and dinner recipes for every mood.
        </div>
        <h3 class="mntl-taxonomysc-child-block__heading">Explore</h3>
        <Nav className="justify-content-between">
          <Link to='/comfort-food'>
            <Nav.Link href="#comfort-food">
              <span className="link__wrapper">Comfort Food</span>
            </Nav.Link>
          </Link>

          <Link to='/family-dinners'>
            <Nav.Link href="#family-dinners">
              <span className="link__wrapper">Family Dinners</span>
            </Nav.Link>
          </Link>

          <Link to='/side-dishes'>
            <Nav.Link href="#side-dishes">
              <span className="link__wrapper">Side Dishes</span>
            </Nav.Link>
          </Link>

          <Link to='/sauces'>
            <Nav.Link href="#sauces">
              <span className="link__wrapper">Sauces</span>
            </Nav.Link>
          </Link>

          <Link to='/dinners-by-types'>
            <Nav.Link href="#dinners-by-types">
              <span className="link__wrapper">Dinners By types</span>
            </Nav.Link>
          </Link>

          <Link to='/dinners-by-ingredients'>
            <Nav.Link href="#dinners-by-ingredients">
              <span className="link__wrapper">Dinners By Ingredients</span>
            </Nav.Link>
          </Link>

          <Link to='/dinners-by-time-and-ease'>
            <Nav.Link href="#dinners-by-time-and-ease">
              <span className="link__wrapper">Dinners By Time and Ease</span>
            </Nav.Link>
          </Link>
        </Nav>


        <Container className="mt-5">

          <Row className="mt-4">

            <Col md={3}>
              <Card>
                <Link to='/Dumping Soup' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/UojP6QLP5NcOLRYS896TDuLxv-I=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Creamy-Vegetable-Dumpling-Soup-LEAD-24-9cf183a1af184700a1d12005c7120db3.jpg" alt="Image 1"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Dumping Soup' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title><b>Dumping Soup</b></Card.Title>
                  </Link>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Popper Grilled Cheese' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/_oFGcbW1a5LRJjq1XiWtGiejeZ4=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Jalapeno-Popper-Grilled-Cheese-LEAD-8-2662f589961b4965908c52e433c23628.jpg" alt="Image 2"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Popper Grilled Cheese' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title><b>Popper Grilled Cheese</b></Card.Title>
                  </Link>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Pepper Chicken' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/oGOLCEnfUa0WNqKaY8b1JLs_vRw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Lemon-Pepper-Chicken-LEAD-9-b6e9f96518564cf9a920fc1c7da479f7.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Pepper Chicken' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Pepper Chicken</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Fish Sticks' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/oM3cxWJjPw7ihjMFuSUswSUcR64=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Garam-Masala-Fish-Sticks-LEAD-5-e87828b2b71d4e9cb94ce56f336923f8.jpg" alt="Image 1"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Fish Sticks' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title><b>Fish Sticks </b></Card.Title>
                  </Link>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Burger Salad' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/it1bmM2uezHervJfS8X8idHrsnI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Burger-Salad-LEAD-02-f499d8faa353427c898bd1db4939542d.jpg" alt="Image 2"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Burger Salad' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title><b>Burger Salad</b></Card.Title>
                  </Link>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Chop Suey' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/p4qQ5PiTG3ZKDIEt5Wn7KguU0p4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chop-Suey-LEAD-06-34a1a2b71183454480c39c3f9deac92c.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Chop Suey' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Chop Suey</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Red Curry Salmon' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/c_CxvSEsdKg5JiGobKpKKMcC0T8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/-Recipes-Microwave-Coconut-Salmon-LEAD-12-d12ef45380554224a444ff48cee093e3.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Red Curry Salmon' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Red Curry Salmon</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/french bread Pizza' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/trKwgO7oO1KklQJ7vafqWA5wkKE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-French-Bread-Pizza-LEAD-12a-21afcc7b0f1f491eb130795c60941d96.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/french bread Pizza' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>french bread Pizza</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Cacioe pepe Tortellini' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/GOyKGckn88muqRjnnnZT9nUfU0s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Skillet-Cacio-e-Pepe-Tortellini-LEAD-2-1a81287e04004a53932c00e05da3df18.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Cacioe pepe Tortellini' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Cacioe pepe Tortellini</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Paccheri' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/sTYXl4KFlfH-MbE6BzQ0K0fi3R8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Paccheri-Quick-Sausage-Ragu-LEAD-b12836f572134810860763d5337e010d.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Paccheri' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Paccheri</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Beef Bulgogi' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Vv2ctLOkddIknx0enOQbINB7r-o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bulgogi-SEO-daf49e25a78d41ccbf66aba56b50520f.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Beef Bulgogi' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Beef Bulgogi</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Mushroom Pasta' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/8ekc1hptmZjV-wJRWxTbaqm0xd8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Miso-Mushroom-Pasta-LEAD-07-c96aa347526c480194f98c5a86c44ee1.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Mushroom Pasta' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Mushroom Pasta</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Chicken Florentine' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/xjdjCt_gduKABBKMrO_-iIqNNOc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Temp-filename_-10-ac24af938a894208adecfebd2353d04b.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Chicken Florentine' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Chicken Florentine</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Pot Eggplant Chickpea' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/4wS-xiEG1n8hoDpwUxqGvOBmbhE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Eggplant-Chickpea-Stew-LEAD-02-dea20a30a9824f0e86c6d072d665196f.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Pot Eggplant Chickpea' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Pot Eggplant Chickpea</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Shrimp and Asparagus' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/ZtHkFBvvIC3lbQvlKjsjf91iFmA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sheet-Pan-Shrimp-Asparagus-LEAD-3-6fb26c40ebde412895128a7641f99c0f.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Shrimp and Asparagus' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Shrimp and Asparagus</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Creamy Cavatappi' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/PEf6n8vuhh5pY4XoTkK7JJ7Hv_4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Creamy-Cavatappi-LEAD-22-19f4e9abbd0f46759054c7ee06ba7d80.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Creamy Cavatappi' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Creamy Cavatappi</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Black Bean Quesadillas' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/opiyVaoibFzug-oLXEnUkgrHsGA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__BLACKBEAN_HERO0004v2-f1154eb249bd404b9100714309b48f52.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Black Bean Quesadillas' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Black Bean Quesadillas</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Cheese Sandwiches' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/qdUyiOR4IGuvucecKOp22zk3SuQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sheet-Pan-Grilled-Cheese-Sandwiches-LEAD-6-1b304e328fb1469da507abce52593ea9.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Cheese Sandwiches' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Cheese Sandwiches</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Fried Rice' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/61HGINVy2ubwiZwQQhd__SgnOWE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__Pork-Fried-Rice-Lead-2-6ab91efab88f497aa4bb28de3ff526ec.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Fried Rice' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Fried Rice</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Ham & Cheese sliders' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/6yJ-QWYgsUHNJBvJYABmJasWVz8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Hot-Ham-Cheese-Sandwiches-LEAD-11-cd0917c62e494469845cb3c31713f552.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Ham & Cheese sliders' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Ham & Cheese sliders</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Air Fryer Salmon' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/I6ozV07FfCO0nsTYoKbAa1fJkJ4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Air-Fryer-Salmon-LEAD-02-0d0acca3a9cf4661a66154ae2b6fa78f.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Air Fryer Salmon' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Air Fryer Salmon</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Smash Burger' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/1BBu6Z8UnpEltkfboQss39JONjQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Smash-Burger-LEAD-09-fdf7251206ed4e6e96d9201d13c9f1ad.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Smash Burger' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Smash Burger</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Chicken Caesar Salad' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/xdgnc6gStWZEWGma8hjPA-A9uH4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__05__Grilled-Chicken-Caesar-LEAD-4-ad293763c4034a1ba773773e200b7e64.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Chicken Caesar Salad' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Chicken Caesar Salad</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>


            <Col md={3}>
              <Card>
                <Link to='/Mac & Cheese' style={{
                  textDecoration: 'none',
                }}>
                  <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/W4vmeWDZqn7CsoR91IVB4p1DdbI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-One-Pot-Mac-Cheese-LEAD-4-b54f2372ddcc49ab9ad09a193df66f20.jpg" alt="Image 3"
                  />
                </Link>
                <Card.Body>
                  <Link to='/Mac & Cheese' style={{
                    textDecoration: 'none',
                  }}>
                    <Card.Title> <b>Mac & Cheese</b> </Card.Title>
                  </Link>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>

      </div>     </div>

  );
}
export default Dinner;
