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
                <h1>Breakfast Recipes</h1>
                <div className='name'>
                    Whether it's a grab-and-go or a hearty breakfast to eat while reading the news, get off to a great start with our breakfast recipes and ideas.
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
                                <Link to='/casserole' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://i.ibb.co/YTGdgh0/jchuds.jpg" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body >
                                    <Link to='/casserole' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Casserole</b></Card.Title>

                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Egg Bites' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://i.ibb.co/M7sFL8n/fxgfd.jpg~" alt="Image 2"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Egg Bites' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Egg Bites</b></Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Link to='/Cheese Muffins' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/_-D8RkeqJO0ra8M1Iji2lmLtzUA=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Cream-Cheese-Zucchini-Muffins-LEAD-2-a32c8819c44b439cb6f28a8c55bf5150.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Cheese Muffins' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Cheese Muffins</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>







                        <Col md={3}>
                            <Card>
                                <Link to='/Buckwheat Crepes' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/fNCUZz2SyGEBQnTsFSO-ZrKmjJM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Savory-Crepes-LEAD-07b-466f9f6a28ad4bf5929c2d09d54f75bf.jpg" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Buckwheat Crepes' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Buckwheat Crepes</b></Card.Title>
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/dwP46U9wwCTBcmE55T6uuJKgEkM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sheet-Pan-Fried-Eggs-LEAD-10-2eba1f04c5544181b5507468d3dd3a02.jpg" alt="Image 2"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/JPKTELqPr5UfDmaOy8ltOxU_R-A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spinach-Tofu-Scramble-LEAD-4b-c58a4c50ceb646deb259b88b8d0d88e0.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/K4lCyKvAV2tBFMafxfoKSiWBvFE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Whipped-Ricotta-Toast-LEAD-15_SEO-d063be2e08ab495981c22312aa990cdf.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/SdC2ZCxx9c3Zuiv5lw7TUj-2hbw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Farro-Mushroom-Bowl-LEAD-13jpg-08b77b1911874f9483cffd4ca24e38b5.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/kDuSEjtCG7YUEcyPU5peC6wwk-o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Simple-Chicken-Congee-LEAD-01-4745829d02c04b8fb23144150aaf2658.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Il0bU4-HFovf96bZ3kJ4K44FmDE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Baked-Eggs-in-Avocado-LEAD-12-02f1714d84914788a7c526856c60511b.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/OEtYGLmYdJHQJPDq0E_a3WKVHVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__02__mug-omelette-horiz-c2-1800-13c3d5762ff944e98a8ce330058f2e51.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/JM9OKmUveg6-_FdzkaH0OXVLPGg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__Spinach-Egg-Bites-LEAD-09-7339a52b62e14795bc84b3c84b90d58f.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/YwElmmI66evQHsFGjp_m2qwVPvk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__01__bloody-mary-smoothie-horiz-a-1800-cf2f2779144440888609b7c22c4f463f.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Aah4ylYxuyzI18HKwQQ5NhQHTqA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__08__pressure-cooker-egg-bites-method-19-1024x683-3b63c3f110614710b1b79b4ceccca9a4.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/xIAG-G-Nti7MKoqgQ-pJ3ePllTE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Roasted-Sweet-Potato-Salad-LEAD-4-e188f9b442c24de98d617e94313ba0e2.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/9ym1IZx7Kgt5fQPkHoDHxRgzXfc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Huevos-a-la-Mexicana-LEAD-7-10b80ec075c44c1181058a9a5794babf.JPG" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Z_lRXoEEY-01tJv5aUZI790XBR8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Plantain-Frittata-LEAD-06-583a3d0b039a4b1399e5564268c257d7.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Vt30fj7ea7_ZL7dhM7E_bobp1qk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Soy-Sauce-Eggs-LEAD-4_b-7c421e68bbab4c71869bfa51f814d1bf.jpg" alt="Image 3"
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
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/gfs6PM825Bfwi8Q_OaEWNH7SFf0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__08__Noodle-cups-METHOD-5-cda78fe3bf4848f4982ee6e0b68ee9fb.jpg" alt="Image 3"
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
