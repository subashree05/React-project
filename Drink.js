import React from 'react';
/*import './App.css';*/
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Drink() {
    return (



        <div className='cardshome'>
            <div className="card-image-container">
                <br /> <br />
                <h1>Drink Recipes</h1>
                <div className='smp'>
                    Welcome to our depot for all things drink. You'll find refreshing summer lemonade and spritzers, steaming hot chocolate, and healthy smoothies. Mixing up a cocktail? We have plenty of those, too, with and without alcohol. Bottom's up!
                </div>
                <h3 class="mntl-taxonomysc-child-block__heading">Explore</h3>
                <Nav className="justify-content-between">
                    <Link to='/cocktails'>
                        <Nav.Link href="#cocktails">
                            <span className="link__wrapper">Cocktails</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/mocktails-and-non-alcoholic-drinks'>
                        <Nav.Link href="#mocktails-and-non-alcoholic-drinks">
                            <span className="link__wrapper">Mocktails and Non-Alcoholic Drinks</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/coffees-and-teas'>
                        <Nav.Link href="#coffees-and-teas">
                            <span className="link__wrapper">Coffees And Teas</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/smoothies'>
                        <Nav.Link href="#smoothies">
                            <span className="link__wrapper">Smoothies</span>
                        </Nav.Link>
                    </Link>

                </Nav>
                <Container className="mt-5">

                    <Row className="mt-4">

                        <Col md={3}>
                            <Card>
                                <Link to='/Thai Iced Tea (Cha Yen)' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/jfe3jWLlxrPVV8wz-dNhX7KG5AQ=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Thai-Iced-Tea-LEAD-5-75221ccf042f43e3a61b817298bc07f0.jpg" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Thai Iced Tea (Cha Yen)' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Thai Iced Tea (Cha Yen) </b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Arnold Palmer' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/zweObccp1Afai3E09D3iiSDhU_o=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Arnold-Palmer-LEAD-07-47c4fd354f124385a741ce92512f1a70.jpg" alt="Image 2"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Arnold Palmer' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Arnold Palmer</b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Mulling Spices' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/MvKuhkLF4NCUcFeAaCf2Icx08yk=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mulling-Spices-LEAD-3-60a9dc63a9144cb49acb66b1844a52b5.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Mulling Spices' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Mulling Spices</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={3}>
                            <Card>
                                <Link to='/Black and Tan ' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/VS0EDmOx6gjUrZmyokGy94QLrCs=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Black-And-Tan-LEAD-SERP-a67a32229fc8439c8acef456a9903004.jpg" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Black and Tan ' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Black and Tan </b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Cranberry Shrub' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/fSN2WAuEl-GliWZYkpH009UK7hk=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Cranberry-Tangerine-Shrub-LEAD-06-7a3cf49ee05e4d99aa142689d4750b2e.jpg" alt="Image 2"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Cranberry Shrub' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Cranberry Shrub</b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Fuzzy Navel' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/R0CDMYfDFmgvRB4tV0a0wjhNzFM=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Fuzzy-Navel-LEAD-04-d203db43b36f4113b036d0d37fb20966.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Fuzzy Navel' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Fuzzy Navel</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Vesper Cocktail' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Zpq6WjrV1LQhr75cCrNncH4dJR0=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vesper-Cocktail-LEAD-03-833a9a9e1c854ca287c8ec3e97a68c94.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Vesper Cocktail' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Vesper Cocktail</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/New York Sour Cocktail' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/UmnpTOLWdl9wHqZeHJ7V3XhsRmc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-New-York-Sour-LEAD-04-87676c4f46b14204b3fde8fa9c70d6d5.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/New York Sour Cocktail' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>New York Sour Cocktail</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Boozy Hot Chocolate' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/RyAm0wKCk-6EMFKkzItO1yjLFt8=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Boozy-Hot-Chocolate-LEAD-01-57b210faf23b468ab66d04c8356003e1.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Boozy Hot Chocolate' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Boozy Hot Chocolate</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Americano Cocktail' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/zbe86CA0GjVKXdReI62L9ADTuLY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Americano-Cocktail-LEAD-03-8f4530094fdb41e682f56fcdc49a4300.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Americano Cocktail' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Americano Cocktail</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Godfather Cocktail' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/EmV5FQWpYXPNrBVBAE8hi_tzi0Q=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Godfather-Cocktail-LEAD-08-e9ddf0efdc4a4e7a929786695d7950c1.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Godfather Cocktail' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Godfather Cocktail</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Rusty Nail' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/TJzVYA-4VQopfmeDeHHKNa2bI10=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Rusty-Nails-LEAD-11-4511bed7eeec45fe9d12455cd05d9e9b.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Rusty Nail' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Rusty Nail</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Toronto Cocktail' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Javq-f6M1X6Xay23XI4SWNN2w3k=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Toronto-Cocktail-LEAD-04-55d2a57b99014bdc8a08a009a22d3975.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Toronto Cocktail' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Toronto Cocktail</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Gibson Coctail' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/BoKV6DpFm04iMe7yj8f-q1N13zY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Gibson-Cocktail-LEAD-05-151c42932335470ab7b8829c8248a9df.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Gibson Coctail' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Gibson Coctail</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Vegan White Russian' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/dzfu5FXy7J0tgqdD70cPbT2Jjz4=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegan-White-Russian-LEAD-07-72c19307929a4b20bd5567c6d1551848.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Vegan White Russian' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Vegan White Russian</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Horchata' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/JS00E_iBKeW2furQmOtcOa08FFk=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__04__Easy-Homemade-Horchata-LEAD-3-c861393234fa461d9bd14de39513ef74.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Horchata' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Horchata</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Hot Cocoa Mix' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/cKx9Kw6FZtYdv6LeasZEhwQ8Ldk=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__11__2017-11-29-2017-Hot-Cocoa-Mix-5-e7de480b3f124dfba71cbeb26f577205.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Hot Cocoa Mix' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Hot Cocoa Mix</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Paleo Hot Cocoa' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/pxZSkSdRAhwenWgBJV-pz7dpRYc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__12__2016-12-20-Paleo-Hot-Chocolate-12-b95a7b3e251349fc9f12d7304d9f5045.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Paleo Hot Cocoa' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Paleo Hot Cocoa</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Mango Mimosa' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/oIJdp5br3OhBQDT9_ttoyssv87c=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__04__Pinapple-Mimosa-LEAD-09-5e87120b360b4b18a8c57b32c31fd852.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Mango Mimosa' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Mango Mimosa</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Nocino Walnut Liqueur' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/OehuWLzzUtw2djYmMRSZpIq3els=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2008__06__homemade-nocino-horiz-a-1800-9efc17f2fcac4a2397ae0b2ec7592ef4.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Nocino Walnut Liqueur' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Nocino Walnut Liqueur</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Cucumber Margaritas' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/-oEgXyTLWCUqg0aKVreDLdYmhVY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Frozen-Cucumber-Margarita-LEAD-05-e487a301822e40b1a4b6225ec537a704.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Cucumber Margaritas' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Cucumber Margaritas</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Peach Margarita' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/GKJQ6DkEpmP78jo6YS_CesFGy8c=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Peach-Margarita-LEAD-7_RECIRC-87bb8d307ec04f8a8b2a32b4f40dd8a7.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Peach Margarita' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Peach Margarita</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Tepache' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Y_GQurFY9meoDu6ej_Guk9bYdAs=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tepache-LEAD-11-2e25b2a14a874b5ab09d7f7722622088.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Tepache' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Tepache</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Gin Fizz' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/QYjpCjSKgUkQh2CNoXWJCqJG-Vw=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Classic-Gin-Fizz-LEAD-10-3c0a5c114b224d8b8cb41d916387c21e.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Gin Fizz' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Gin Fizz</b> </Card.Title>
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
export default Drink;
