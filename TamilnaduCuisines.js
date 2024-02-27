import React from 'react';
/*import './App.css';*/
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function Breakfast() {
    return (

        <div className='cardshome'>
            <div className="card-image-container">
                <br /> <br />
                <h1>tamilnadu Food</h1>
                <div className='name'>
                   
<h6>Tamil Nadu cuisine is characterized by its rich diversity of flavors, featuring aromatic spices and ingredients like rice, lentils, coconut, and tamarind, creating a symphony of taste sensations.</h6>
                </div>
                <h3 class="mntl-taxonomysc-child-block__heading">Explore</h3>
                <Nav className="justify-content-between">
                    <Link to='/healthy breakfast'>
                        <Nav.Link href="#healthy breakfast">
                            <span className="link__wrapper">Healthy Breakfast</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/easy breakfast'>
                        <Nav.Link href="#easy breakfast">
                            <span className="link__wrapper">Easy Breakfast</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/quick breakfast'>
                        <Nav.Link href="#quick breakfast">
                            <span className="link__wrapper">Quick Breakfast</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/gluten-free breakfast'>
                        <Nav.Link href="#gluten-free breakfast">
                            <span className="link__wrapper">Gluten-Free Breakfast</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/vegan breakfast'>
                        <Nav.Link href="#vegan breakfast">
                            <span className="link__wrapper">Vegan Breakfast</span>
                        </Nav.Link>
                    </Link>
                </Nav>

                <Container className="mt-5">

                    <Row className="mt-4">

                        <Col md={3}>
                            <Card>
                                <Link to='/idli' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.healthifyme.com/blog/wp-content/uploads/2023/06/shutterstock_1198725709-1.jpg" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body >
                                    <Link to='/idli' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Idli</b></Card.Title>

                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/dosa' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://vanitascorner.com/wp-content/uploads/2021/07/Masala-Dosa.jpg" alt="Image 2"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/dosa' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>dosa</b></Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Link to='/rava upma' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.butteredveg.com/wp-content/uploads/2023/01/Breakfast-Semolina-Veg-Upma-1200-10-2.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/rava upma' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Rava upma</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>







                        <Col md={3}>
                            <Card>
                                <Link to='/pongal' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/pongal' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>pongal</b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Sheet Pan Fried Eggs' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://farm1.staticflickr.com/320/18912568232_686613c78c_o.jpg" alt="Image 2"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Sheet Pan Fried Eggs' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Sheet Pan Fried Eggs</b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Spinach Tofu Scramble' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://southindiathali.weebly.com/uploads/4/6/3/4/46342159/s590758661299742556_p12_i1_w636.jpeg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Spinach Tofu Scramble' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Spinach Tofu Scramble</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={3}>
                            <Card>
                                <Link to='/Whipped Ricotta Toast' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://masalachilli.com/wp-content/uploads/2022/08/Instant-Pot-Toor-Dal-5-500x500.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Whipped Ricotta Toast' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Whipped Ricotta Toast</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Link to='/Egg Grain Bowls' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.secondrecipe.com/wp-content/uploads/2023/03/gobi-manchurian-dry.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Egg Grain Bowls' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Egg Grain Bowls</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Chicken Congee(Jook)' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://geekrobocook.com/wp-content/uploads/2021/03/23_Pongal-1200x900.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Chicken Congee(Jook)' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Chicken Congee(Jook)</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Frittata Squares' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/-mimGsDJYuV6V6TCcipj2IoJtLc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__05__2017-05-31-Frittata-Squares-6-2bb87a5593c84aa088fb15212ba26a96.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Frittata Squares' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Frittata Squares</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Link to='/Baked Eggs in Avocado<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/22/c3/76/9e/nikkah-biriyai.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Baked Eggs in Avocado<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Baked Eggs in Avocado</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Link to='/Breakfast Burritos<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/6DV3UBbMzEysvj6zOw1AY_V0U0E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__04__Freezer-Breakfast-Burritos-LEAD-1-f5d3a0b30a25468d9e6461640c60ada9.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Breakfast Burritos<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Breakfast Burritos</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Link to='/Omelette in a Mug<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Mithai/Coconut_Burfi_Fudge_Recipe_Archanas_Kitchen-1-2.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Omelette in a Mug<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Omelette in a Mug</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Hash Brown Egg Bites<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.pepperbowl.com/wp-content/uploads/2017/08/pepper-rasam-recipe.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Hash Brown Egg Bites<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Hash Brown Egg Bites</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Bloody Mary Smoothie<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Bloody Mary Smoothie<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Bloody Mary Smoothie</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Instant Pot Egg Bites<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://static.toiimg.com/photo/61050397.cms" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Instant Pot Egg Bites<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Instant Pot Egg Bites</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Sweet Potato Salad<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://recipes.net/wp-content/uploads/2023/05/air-fryer-paneer-tikka-recipe_d5d5478f6a3c1f700f0af5dfcbf53773.jpeg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Sweet Potato Salad<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Sweet Potato Salad</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Quesadilla<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/b1p9H033urYP35l7_CPnRXlVyfY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__06__quesadilla-pie-horiz-a-1800-f9e01c39d9454dcb931259f81f5eb0e9.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Quesadilla<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Quesadilla</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Huevos Mexicana<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGqC7uqpUNtDc5ak0c7wHs9YFN6EImam71EwYLKHSSy-s-qO51jnKnfYSK3l0mZHdB14&usqp=CAU" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Huevos Mexicana<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Huevos Mexicana</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Plantain Frittata<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/paniyaram.jpg.webp" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Plantain Frittata<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Plantain Frittata</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Soy Sauce Eggs<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://static.toiimg.com/thumb/52290082.cms?imgsize=443885&width=800&height=800" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Soy Sauce Eggs<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Soy Sauce Eggs</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Breakfast Casserole<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/VUabVXhdNT61hZVCJRw9Eqtah2o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__08__as-you-like-it-breakfast-casserole-horiz-a-1600-5cc693ba00604dfdaa3206295e73faba.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Breakfast Casserole<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Breakfast Casserole</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Cup Noodles<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.kannammacooks.com/wp-content/uploads/air-fryer-chicken-65-recipe-1-5.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Cup Noodles<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Cup Noodles</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Egg Salad Sandwich<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/P_rrbBT5sG5nnO2mvyUuFALbdvE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Egg-Salad-Sandwich-LEAD-22-8ecbb89abda34a84b649ff4c44bab525.JPG" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Egg Salad Sandwich<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Egg Salad Sandwich</b> </Card.Title>
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
export default Breakfast;
