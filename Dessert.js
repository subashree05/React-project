import React from 'react';
/*import './App.css';*/
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Dessert() {
    return (



        <div className='cardshome'>
            <div className="card-image-container">
                <br /> <br />
                <h1>Dessert Recipes</h1>
                <div className='sample2'>
                    Whether you're looking for a snack cake, lunchbox cookie, or showstopper for your dinner party, we've got scores of dessert recipes to choose from.
                </div>
                <h3 class="mntl-taxonomysc-child-block__heading">Explore</h3>
                <Nav className="justify-content-between">
                    <Link to='/desserts-by-type'>
                        <Nav.Link href="#desserts-by-type">
                            <span className="link__wrapper">Desserts By Type</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/quick-desserts'>
                        <Nav.Link href="#quick-desserts">
                            <span className="link__wrapper">Quick Desserts</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/easy-desserts'>
                        <Nav.Link href="#easy-desserts">
                            <span className="link__wrapper">Easy Desserts</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/desserts-by-diet'>
                        <Nav.Link href="#desserts-by-diet">
                            <span className="link__wrapper">Desserts By Diet</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/desserts-by-ingredients'>
                        <Nav.Link href="#desserts-by-ingredients">
                            <span className="link__wrapper">Desserts By Ingredients</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/desserts-sauces'>
                        <Nav.Link href="#desserts-sauces">
                            <span className="link__wrapper">Desserts Sauces</span>
                        </Nav.Link>
                    </Link>
                </Nav>
                <Container className="mt-5">

                    <Row className="mt-4">

                        <Col md={3}>
                            <Card>
                                <Link to='/Pumpkin Dessert' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/RhjK5eaVFP1Yy6ArPU5Yqni_1Iw=/450x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pumpkin-Mousse-LEAD-4-bd1ba06687954b509cdcbad55e4e4d3f.jpg" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Pumpkin Dessert' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Pumpkin Dessert </b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Snickerdoodles' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/HduYVMuSnfnKZzAXmDjaAn5B7bo=/450x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pumpkin-Snickerdoodles-LEAD-2-e38ed3116717474189ce311ccac6a50f.jpg" alt="Image 2"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Snickerdoodles' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Snickerdoodles</b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Marble Blondies' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/D2QXjhp5Xr4n7THEughKcCQ0GKQ=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_MarbleBlondies_LEAD_6-b7c8c682192e49dea98707b0cda26df0.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Marble Blondies' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Marble Blondies</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={3}>
                            <Card>
                                <Link to='/Fluffernutter Brownies' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/WF56dPTSQK5NcClgee9KdjgwbAk=/450x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Fluffernutter-Brownies-LEAD-5-b958dda94f9a4838935acb40a633f4f0.jpg" alt="Image 1"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Fluffernutter Brownies' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Fluffernutter Brownies </b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/>Cosmic Brownies' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/IsuJJZncP9HV--Hux-x_EzbPNS8=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_CosmicBrownies_LEAD_11-2f9bf50c944345698b442c0b1940c801.jpg" alt="Image 2"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Cosmic Brownies' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title><b>Cosmic Brownies</b></Card.Title>
                                    </Link>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Pastries' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/tUJa71zEMMMX3p9PrtQ0J8FQeC4=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Almond-Croissant-LEAD-8-07f51557bda7499aa6d1ccb4d079ea52.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Pastries' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Pastries</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={3}>
                            <Card>
                                <Link to='/Million Dollar Pie' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/zeUryrJQRbfLWHfBsb7kHx0VvTA=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_MillionDollarPie_LEAD_1-98b470e043f24f8eb8389f1c7cd8a79f.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Million Dollar Pie' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Million Dollar Pie</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Cookies' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/C55Wj3pl-fRFgS3FAXQ-gGT_ADg=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Kitchen-Sink-Cookies-LEAD-8-22971c5a6ce944f7b0f192798ab788b4.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Cookies' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Cookies</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='Sad Cake<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Okvr4f0bAU_MUyFHp6-QCU6McUA=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_SadCake_LEAD_5-63f11d5f29bf475c9714df456d229608.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Sad Cake' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Sad Cake</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Ice Cream Sandwich<' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/qzDIYIKiDrtXLjBmM_lFQw2oFzo=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Ice-Cream-Sandwiches-LEAD-2-d2e707cd88224ea18ce9d0a38fd58208.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Ice Cream Sandwich<' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Ice Cream Sandwich</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Lime Icebox Cake' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/YOS4B5wMj66macEzboP2IkfWtSQ=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Lime-Icebox-Cake-LEAD-7-31fc193ebb6a48aab9c0876e837f8aa7.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Lime Icebox Cake' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Lime Icebox Cake</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Peach Crumb Bars' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/0PHjHZYznuwImq0m4qZ20ClxbTo=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_PeachPieBars_LEAD_9-7e651588507547fb9e095bf7d21ba632.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Peach Crumb Bars' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Peach Crumb Bars</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Chocolate Chess Pie' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/2_gozgg9CkI0dpeSNaCoJVvXN80=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_ChocolateChessPie_LEAD_5-8ceee46e44774723adb2bbde7106c152.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Chocolate Chess Pie' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Chocolate Chess Pie</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Chocolate Chip Bread' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/7P64f1lmNWEdjY2zDdGDhuD1JD4=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Oreo-Ice-Cream-Cake-LEAD-7-afe214b37e63478ca6854dca8fb9afa5.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Chocolate Chip Bread' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Oreo IceCream Cake</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Chocolate Chip Bread' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/wPR3aVNThBe0HYfRpLJKzXE7jVM=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chocolate-Chip-Zucchini-Bread-LEAD-6-6d2510aae3874d90ad3282de904f2eae.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Chocolate Chip Bread' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Chocolate Chip Bread</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Orange Cream Popsicles' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/2ULfXqnmK0s-LFBD9MRuVTPMckA=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Orange-Cream-Popsicles-LEAD-4-42ef8f55d8da4aa99c9845a70218ec36.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Orange Cream Popsicles' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Orange Cream Popsicles</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Strawberry Shortcake' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/mYk9o3DI0GWWY1sAT82LYxoQ1QI=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_StrawberryShortcakeCake_LEAD_1-c2c930fddf1545329776b318ed895715.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Strawberry Shortcake' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Strawberry Shortcake</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Cherry Pie Bars' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/hHq8o2tVpGcptMWST2OvcNKcwUg=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Cherry-Pie-Bars-LEAD-06-e68a6b9959d84ab39026a1d948a29f09.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Cherry Pie Bars' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Cherry Pie Bars</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Strwberries Semifreddo' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/VLLps4T0xfQfI02fuoF_BN_xUxM=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_StrawberriesandCreamSemifreddo_LEAD_8-6091b57b35a34c5392eb0db18a82ba96.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Strwberries Semifreddo' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Strwberries Semifreddo</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Vegan Cheesecake' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/TSgPBRS3wKnF0fS_haPt45BfkJ0=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Vegan-Cheesecake-LEAD-6-8daaa6be451241c4b459f3246facd616.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Vegan Cheesecake' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Vegan Cheesecake</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Dulce Banana Bread' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/tjWZJfTXpseaxySofKAZ0b4aoQ8=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_DulcedeLecheBananaBread_LEAD_6-e5b5faf9ef414e0c9a9b10a95f2eca75.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Dulce Banana Bread' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Dulce Banana Bread</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Banana Bread' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/zkyt8H9cpim0IZjEOl5qy_yDwW8=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_DarkandStormyBananaBread_LEAD_5-2f3f3c410b014837a660b7c6d848fe69.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Banana Bread' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Banana Bread</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Yellowhammer Cookie' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/ZswYeud2H4vxBB5GrFT6vctTC48=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Yellowhammer-Cookies-LEAD-10-ba4b104c61c745a4bb831cbcfa5dc22c.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Yellowhammer Cookie' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Yellowhammer Cookie</b> </Card.Title>
                                    </Link>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>


                        <Col md={3}>
                            <Card>
                                <Link to='/Grilled Banana Split' style={{
                                    textDecoration: 'none',
                                }}>
                                    <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/0KXxrmlFkYatSgnVPvKlX--zwUA=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-Banana-Split-LEAD-01-2-71b57f4ffde9410194b398ea513e83de.jpg" alt="Image 3"
                                    />
                                </Link>
                                <Card.Body>
                                    <Link to='/Grilled Banana Split' style={{
                                        textDecoration: 'none',
                                    }}>
                                        <Card.Title> <b>Grilled Banana Split</b> </Card.Title>
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
export default Dessert;
