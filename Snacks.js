import React from 'react';
/*import './App.css';*/
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Snacks() {
    return (



        <div className='cardshome'>
            <div className="card-image-container">
                <br /> <br />
                <h1>Lunch Recipes</h1>
                <div className='eg'>
                    Don’t forget about lunch! We know you need tasty, easy lunches to get you through your day—whether you’re at work, school, or home. Browse pasta salads, quick soups, and sandwiches galore!
                </div>
                <h3 class="mntl-taxonomysc-child-block__heading">Explore</h3>

                <Nav className="justify-content-between">
                    <Link to='/sandwiches'>
                        <Nav.Link href="#sandwiches">
                            <span className="link__wrapper">Sandwiches</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/quick-lunches'>
                        <Nav.Link href="#quick-lunches">
                            <span className="link__wrapper">Quick Lunches</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/salads'>
                        <Nav.Link href="#salads">
                            <span className="link__wrapper">Salads</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/soups'>
                        <Nav.Link href="#soups">
                            <span className="link__wrapper">Soups</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/healthy-lunches'>
                        <Nav.Link href="#healthy-lunches">
                            <span className="link__wrapper">Healthy Lunches</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/easy-lunches'>
                        <Nav.Link href="#easy-lunches">
                            <span className="link__wrapper">Easy Lunches</span>
                        </Nav.Link>
                    </Link>

                    <Link to='/comfort-food'>
                        <Nav.Link href="#comfort-food">
                            <span className="link__wrapper">Comfort Food</span>
                        </Nav.Link>
                    </Link>
                </Nav>

                <Container className="mt-5">

                    <Row className="mt-4">

                        <Col md={3}>
                            <Card>

                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/RZyVH4SLwJM4PZozd86lPJ4FVX8=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chinese-Tomato-Egg-LEAD-03-2-ae4d4a6cf199428db308954f75c21088.jpg" alt="Image 1"
                                />
                                <Card.Body>
                                    <Card.Title><b>Chinese Tomato Egg Stir Fry</b></Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/dIa081mGPm9uHf3m1TQ_3iJjoNY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Antipasto-Salad-LEAD-4-69ee33ea78954ab3bee59f9071370de7.jpg" alt="Image 2"
                                />

                                <Card.Body>
                                    <Card.Title><b>Antipasto Salad</b></Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Xfch1ZMhiDmP1_cQM-XFRthF7xY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-French-Bread-Pizza-LEAD-22-e563d999fd1b4dfba985dcabdddd83dd.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Ultimate French Bread Pizza</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>







                        <Col md={3}>
                            <Card>

                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/hB6d3Fgrkkp_DMwhOkTTWW7_yes=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Thai-Omelette-LEAD-6-666cd80a07b745ca861e6c0998381b8b.jpg" alt="Image 1"
                                />
                                <Card.Body>
                                    <Card.Title><b>Kai Jeow (Thai Omelet)</b></Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/us66288Je1gcvOJT5MtFrX4ihyU=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tex-Mex-Chopped-Chicken-LEAD-2-d46348c2c8374ea4b577aefee5eafa84.jpg" alt="Image 2"
                                />

                                <Card.Body>
                                    <Card.Title><b>Tex-Mex Chopped Chicken Salad with Cilantro-Lime Dressing</b></Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/vV2S3wuVsFDPn1hVOjBE1-XtUF8=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Menemen-LEAD-02-c842d3508a0544f096ef7d1637104d94.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Menemen (Turkish Scrambled Eggs and Tomatoes)</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/PRzSRLk8tugzlNU64s3Z42UDzKo=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Italian-Chopped-Salad-LEAD-01-d544971a5f5e4c8fb130dc7b2127cfb7.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Classic Choped Italian Salad</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/-aMWm5iCzCDaDqdrFcTFC94yTqs=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mercimek-Corbasi-LEAD-8-c23057acf1e842689ece8bd0edba8f1c.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Mercimek CorbastSoyp</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/NibnoEsgC9qnvwRWL-wpn4VpZpI=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spicy-Coconut-Omelette-LEADS-4-c256167d77724676a9a33c921f5476d5.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Mutta Porrichu (Spicy Coconut Ginger)</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Mb3r5of-BM83KQLup8SdH6IO6XU=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Carrot-Soup-LEAD-3-H-2-e85f23e20f9c4aff9deaacc00dc8e489.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Coconut Carrot Soup with Cumin Oil</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/hjKS1CWrSdiM61T49XyfdV91IFk=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Simple-Tomato-Salad-LEAD-09-dd22260534474cb0b00fc5a9c65af543.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Simple Summer Tomato Salad</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/fNFbsmes7lVSJi-awDs7cgocQxc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-BLT-Wraps-LEAD-02-75aa2ed533104c52bdb7407575cb7bc5.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>BLT Wraps</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/4Q-iHsAIFGZm6RpcB86bz1CcRpM=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipes_SesameSobaNoodles_SEO-8006a44b813d4513998c9df2f98d5588.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Sesame Soba Noodles</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/x8cj5qNEho-iFGzuVTlPGCL_TQc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Two-Ingredient-Cucumber-Sandwich-LEAD-6-2f46f9277f8c411884c47f875727b5e5.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Trader Joe's Cucumber Sandwich</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/xO7iU5FMpJmudziYbJFjYuB8aLQ=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-1-Minute-Tomato-Sandwich-LEAD-4-4858b0938dd1470c81cdcc81c55bb629.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Tomato Sandwich</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/oZ9qowgMcVMHyvgkGsD2yN_6roc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chorizo-Sloppy-Joes-LEAD-3-fe79e45ebc314072aadfc7be8ef2eff2.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Chorizo Sloppy Joes</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/8Lw8f_pzlJOwoUbNhVs2L45m0Lg=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Carrot-Fennel-Chevre-Galette-LEAD-6-4d6d01533ff04e4c9e677a412580d052.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Easy vegetable Tart with Carrots, Fennel and Chevre</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/ZMzsBxjLfRPcgb0-_UkMc0Ql-Xs=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tteokbokki-LEAD-9d-63d62a9c129a48feb3427a9eb48799a7.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Tteobokki (Spicy Korean Rice)</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/wgTtznQQW2qhAGwoTDJX05hZTKw=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Lobster-Grilled-Corn-Panzanella-LEAD-4-205ee4d9e67746c38992f071f52cbd57.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Lobster and Grilled corn Panzanella</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/G3c00neLEiSONec68w45c9haj3M=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Gaby-Fried-Polenta-Panzanella-LEAD-02b-8b15f158fbb94b08b6ba617a4c088db7.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Fried Polenta Panzanella with Tomato, Basil, and Burrata</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Y2XtftANF_unfbKhgObtiu7M-DQ=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Microwaved-Baked-Potato-LEAD-01-734e3c50471442598f791c8afe95617f.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Microwave Baked Potato</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/kQS_IW1kdN2T5C0fcXbsefgl1ss=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tortellini-LEAD-2-ef7236bcddd84351bea1e2eb4850534f.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Tortellini Salad</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/VTrHaMieqJe1QdbQeDsw2VrNyXQ=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bread-and-Butter-Pickles-LEAD-15-5360fa4bbced4ab6ac1a751d9d8aaa69.JPG" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Bread and Butter Pickles</b> </Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/f54skt3Wtd5TvxzkWPPficXEOFs=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Microwave-Sweet-Potato-LEAD-1-5d8be9e95deb4c348eb5d627f57e21b2.jpg" alt="Image 3"
                                />

                                <Card.Body>
                                    <Card.Title> <b>Microwave Sweet Potato</b> </Card.Title>
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
export default Snacks;
