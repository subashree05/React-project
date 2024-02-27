import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carouselimg from './Carouselimg';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Card from './Card';



import Button from 'react-bootstrap/Button';


//import { Search } from '@material-ui/icons';




function Home() {

    return (
        <>
           
                <Navbar bg="black" expand="lg" variant="dark" data-bs-theme="auto" className="recipe" style={{ color: '#ffffff' }}>

                    <Container>
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="icons">


                                <NavDropdown title="Recipes" id="basic-nav-dropdown">


                                    <Link to='/breakfast'><NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item></Link>
                                    <Link to='/lunch'> <NavDropdown.Item href="#action/3.1">Lunch</NavDropdown.Item></Link>
                                    <Link to='/dinner'> <NavDropdown.Item href="#action/3.2"> Dinner</NavDropdown.Item> </Link>
                                    <Link to='/dessert'> <NavDropdown.Item href="#action/3.2"> Dessert</NavDropdown.Item> </Link>
                                    <Link to='/drink'> <NavDropdown.Item href="#action/3.2"> Drink</NavDropdown.Item> </Link>
                                    <Link to='/snacks'> <NavDropdown.Item href="#action/3.2"> Snacks</NavDropdown.Item> </Link>
                                    <Link to='/other'> <NavDropdown.Item href="#action/3.2"> Other</NavDropdown.Item> </Link>

                                </NavDropdown>


                                <Link to='/home'>
                                    <Nav.Link href="#home"><b>Home</b></Nav.Link></Link>
                                <Link to='/about'>
                                    <Nav.Link href="#about"><b>About</b></Nav.Link></Link>
                                <Link to='/admin'>
                                    <Nav.Link href="#admin"><b>Admin</b></Nav.Link></Link>
                                <Link to='/contact'>
                                    <Nav.Link href="#admin"><b>Contact us</b></Nav.Link></Link>
                                <Link to='/signin'>
                                    <Nav.Link href="#signin"><b>Login</b></Nav.Link></Link>
                                <Link to='/signup'>
                                    <Nav.Link href="#signup"><b>Register</b></Nav.Link></Link>
                                <Form inline className="ml-auto">
                                    <Row>
                                        <Col xs="auto" style={{
                                            marginLeft:'403px',
                                        }}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search"
                                                className=" mr-sm-2"
                                            />
                                        </Col>
                                        <Col xs="auto">
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>

                               



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="home">
            <div className="home">
                   
                </div>
                
                <div>
                
                    <searchbar />
                </div>

                
                <div>
                    <Carouselimg /><br />
                    <Link to='/signin' style={{ marginTop: '20px', display: 'block' }}>
                        <Button variant="primary" size="lg" active>
                            Let's Cook Together
                        </Button>
                    </Link>

                </div><br /><br />
                <div><Card /></div><br />
                <div class="sc-aXZVg bUGUzr" style={{marginLeft:'550px',marginBottom:'15px'}}>For better experience, download the Recipe app<br/> now </div>
             <div class="eg" style={{
                marginLeft:'100px',
                marginBottom:'150px',
             }}>
                <img class="sc-dcJsrY kMtDjj sc-jOnpCo ekKRy" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Download Android App" style={{width:135}}></img>
                <img class="sc-dcJsrY kMtDjj sc-jOnpCo ekKRg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download iOS App" style={{width:129}}></img>
                
                </div>
                <div><Footer /></div>
            </div >
        </>

    );
}

export default Home;