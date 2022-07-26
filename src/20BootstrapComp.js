import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
import {Container, Button , Alert, Accordion, Badge,Tab,Tabs,Toast, Breadcrumb,ProgressBar, Popover, ButtonGroup, Card, Carousel, CloseButton, Dropdown, Figure, Placeholder, Image, Pagination,ListGroup, Modal, Spinner, Nav, Navbar, NavDropdown, Offcanvas, Tooltip, OverlayTrigger, Table} from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';  


function App(){
 
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Submitted</strong>
        <small>2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>Submitted!! Your feedback was submitted</Toast.Body>
    </Toast>
  );
}
export default App

/*
function App(){

  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
      </Tab>
      <Tab eventKey="destination" title="Destination">
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      </Tab>
    </Tabs>
  );

}
export default App

//************************************************************************************

/*

//progressBar

function App(){

  const profile = 80;
  
    return(
      <div class="blockdisplay">
        <h1>Profile Progress completed</h1>
       <ProgressBar now={profile} label={`${profile}%`} />
       </div>
    );
  
}

export default App

*/

//************************************************************************************ 
/*

// spinner, table and pagination
/*

// popover
function App(){
  return (
    <div>
      
        <OverlayTrigger
          trigger="click"
          key="right"
          placement="right"
          overlay={
            <Popover id="offer">
              <Popover.Header as="h3">Offer</Popover.Header>
              <Popover.Body>
                <strong>Offer available!</strong> Check out offers available on our website
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="warning">Check</Button>
        </OverlayTrigger>
      
    </div>
  );

  }


export default App

*/
/*

// Placeholder

class App extends React.Component{

  render(){
    return (
      <div className="d-flex justify-content-around">
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="IndiaGate.jpg" />
          <Card.Body>
            <Card.Title>India Gate</Card.Title>
            <Card.Text>
            A stunning archway standing as a tribute to the brave soldiers who sacrificed their lives for the country, India Gate is one of the landmarks of Delhi. Built with sandstone, this 42-m-high gate was the first of its kind in the national capital. The walls of the gateway have been inscribed with the names of 13,516 soldiers killed in the Northwestern Frontier in the Afghan war of 1919, besides 90,000 soldiers of the Indian Army who were martyred in World War I. The base of the monument is made of red Bharatpur stones and the structure of India Gate is similar to France's Arc- de- Triomphe.
            
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
  
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="IndiaGate.jpg" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;

*/

//************************************************************************************ 
/*

// spinner, table and pagination


class App extends React.Component{

  render(){
    return (
      <div class="blockdisplay">
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <br/><br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Region in India</th>
            <th>Places</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>East</td>
            <td>Andaman And Nicobar, Bihar, Jharkhand, Odisha, West Bengal</td> 
          </tr>
          <tr>
            <td>West</td>
            <td>Dadra And Nagar Haveli, Daman And Diu, Goa, Gujarat, Maharashtra</td>
          </tr>
          <tr>
            <td>Central</td>
            <td>Chhattisgarh , Madhya Pradesh</td>
          </tr>
          <tr>
            <td>North East</td>
            <td>Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura</td>
          </tr>
          <tr>
            <td>North</td>
            <td>Chandigarh, Delhi, Haryana, Himachal Pradesh, Jammu And Kashmir, Ladakh, Punjab, Rajasthan, Uttar Pradesh, Uttarakhand</td>
          </tr>
          <tr>
            <td>South</td>
            <td>Andhra Pradesh, Karnataka, Kerala, Lakshadweep, Puducherry, Tamil Nadu, Telangana</td>
          </tr>
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item active>{5}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
      </div>
    );
  }
}

export default App;
*/

//************************************************************************************ 
/*

// Overlays and tooltips

function App(){

  const renderTooltip = () => (
    <Tooltip id="button-tooltip"> The saved data will be erased </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}>
      <Button variant="danger">CLEAR</Button>
    </OverlayTrigger>
    
  );
}

export default App;

*/

//************************************************************************************ 
/*

// Offcanvas

function App(){
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="justify-content-center">
      <Button variant="warning" onClick={handleShow}> Guidelines</Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> We value your feedback </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p> Please complete the following form and help us improve our customer experience</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );

}
export default App;

*/
//************************************************************************************ 
/*

//Navbar
class App extends React.Component{

  render(){
        return (
          <Navbar bg="warning" expand="lg">
            <Container>
              <Navbar.Brand>Plan a Trip</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <NavDropdown title="Destination" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Maharashtra">Maharashtra</NavDropdown.Item>
                    <NavDropdown.Item href="/Karnataka">Karnataka</NavDropdown.Item>
                    <NavDropdown.Item href="/Gujarat">Gujarat</NavDropdown.Item>
                    <NavDropdown.Item href="/Madhya Pradesh">Madhya Pradesh</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/about">About Us</Nav.Link>
                  <Nav.Link href="/about">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
     
  }
}
export default App;
*/

//************************************************************************************ 
/*
//Nav

class App extends React.Component{

  render(){
    return (
      <div>
        <Nav className="justify-content-center" activeKey="/home">
          
          <Nav.Item>
            <Nav.Link href="/home"><h4>Home</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/about"><h4>About Us</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="/contact"><h4>Contact Us</h4></Nav.Link>
          </Nav.Item>
        
        </Nav>
        
      </div>
    );
  }
}

export default App;

*/
//************************************************************************************ 

/*

//Modal

function App(){


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
      <div>
        <Button className="blockdisplay" variant="warning" onClick={handleShow}> ABOUT US </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ABOUT US</Modal.Title>
        </Modal.Header>
        <Modal.Body>Let us know your destination and we will help you know what is the speciality of that place. We will be your guide and friend</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
}

export default App;

*/
//************************************************************************************ 
/*

//ListGroup

class App extends React.Component{

  render(){
    return (
      <div class="blockdisplay">
      <ListGroup>
        <ListGroup.Item variant="primary">Karnataka</ListGroup.Item>
        <ListGroup.Item variant="warning">Maharashtra</ListGroup.Item>
        <ListGroup.Item variant="danger">Gujarat</ListGroup.Item>
        <ListGroup.Item variant="secondary">Bihar</ListGroup.Item>
        <ListGroup.Item variant="success">Assam</ListGroup.Item>
      </ListGroup>
      </div>
    );
  }
}
export default App;

*/

//************************************************************************************ 
/*

//Image

class App extends React.Component{

  render(){
    return(
      <div class="blockdisplay">
        <Image src="IndiaGate.jpg" rounded></Image><br/>
        <Image src="IndiaGate.jpg" roundedCircle></Image>
      </div>
    );
  }

}
export default App;
*/

//************************************************************************************ 
/*

//Figure

class App extends React.Component{
  render(){
    return(
      <div class="blockdisplay">
        <Figure>
          <Figure.Image
            width={450}
            height={200}
            src="TajMahal.jpg"
          />
          <Figure.Caption>
            <h6 class = "figurecss">
            Taj Mahal is one of the wonder's of the world 
            </h6>
          </Figure.Caption>
        </Figure>
<br/>
        <Figure>
          <Figure.Image
            width={450}
            height={200}
            src="IndiaGate.jpg"
          />
          <Figure.Caption>
            <h6 class = "figurecss">
            India Gate 
            </h6>
          </Figure.Caption>
        </Figure>
      </div>
    );
  }
}

export default App;

*/

//************************************************************************************ 
/*

// Dropdown


class App extends React.Component{

  render(){
    return(
      <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Destination
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Maharashtra</Dropdown.Item>
        <Dropdown.Item href="#">Karnataka</Dropdown.Item>
        <Dropdown.Item href="#">Gujarat</Dropdown.Item>
        <Dropdown.Item href="#">Punjab</Dropdown.Item>
        <Dropdown.Item href="#">Bihar</Dropdown.Item>
        <Dropdown.Item href="#">Assam</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    );
  }
}

export default App;

*/

//************************************************************************************ 
/*

// Carousel

class App extends React.Component{

  render(){
    return(
      <div>

        <br/><br/>
        <Carousel>
          <Carousel.Item interval = {2000}>
            <img className='d-block w-100' src = 'GoldenTemple.jpg'/>
            <Carousel.Caption> <h3>  Golden Temple </h3></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval = {2000}>
            <img className='d-block w-100' src = '/GatewayIndia.jpg'/>
            <Carousel.Caption> <h3> Gateway of India</h3></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval = {2000}>
            <img className='d-block w-100' src = '/TajMahal.jpg'/>
            <Carousel.Caption> <h3>Taj Mahal </h3></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
}
export default App;


*/

//************************************************************************************ 

/*

// Card

class App extends React.Component{
  render(){
   return (
        <div class="blockdisplay">
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="/IndiaGate.jpg" />
          <Card.Body>
            <Card.Title>India Gate</Card.Title>
            <Card.Text>
            A stunning archway standing as a tribute to the brave soldiers who sacrificed their lives for the country, India Gate is one of the landmarks of Delhi. Built with sandstone, this 42-m-high gate was the first of its kind in the national capital. The walls of the gateway have been inscribed with the names of 13,516 soldiers killed in the Northwestern Frontier in the Afghan war of 1919, besides 90,000 soldiers of the Indian Army who were martyred in World War I. The base of the monument is made of red Bharatpur stones and the structure of India Gate is similar to France's Arc- de- Triomphe.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      );
  }
}

export default App;

*/


//************************************************************************************ 

/*

// ButtonGroup

class App extends React.Component{
  render(){
    return (
      <div class = "blockdisplay">
        <ButtonGroup size="lg" className="mb-2">
          <Button variant="danger"> Previous  </Button>
          <Button variant="warning"> Current Page</Button>
          <Button variant="success"> Next  </Button>
        </ButtonGroup>
      
      </div>
    );
  }
}

export default App;

*/


//************************************************************************************ 
/* 

// BreadCrumb

class App extends React.Component{
  render(){
    return(
      <h4>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Destination</Breadcrumb.Item>
          <Breadcrumb.Item href="#">South India</Breadcrumb.Item>
          <Breadcrumb.Item active>Manglore</Breadcrumb.Item>
        </Breadcrumb>
        </h4>
      );
  }
}
export default App;

*/

//************************************************************************************ 
/* 

// Badge


class App extends React.Component{

  render(){
    return(
      <div>
        <h2>
          Book your tickets now <Badge pill bg="warning">OFFER</Badge>
        </h2>
      </div>
    );
  }
}

export default App;

*/


//************************************************************************************ 
/*

//Accordian  


class App extends React.Component { 
 
  render(){
    return (  
      <div>  
        <br/><br/>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>ABOUT INCREDIBLE INDIA</Accordion.Header>
              <Accordion.Body>
                <p>
                  Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.
                </p>
                <p>
                  India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </div>  

    );
    }  
}

export default App;

*/

//************************************************************************************ 

// Alert, closebutton and Button

/*

function App() { 
    const [show, setShow] = useState(true);

    if (show){  
      return (  
        <div>  
          <Container className='p-4'>  
            <Alert variant="success" dismissible >  
              <CloseButton onClick={() => setShow(false)}/>
              <Alert.Heading>Successfully submitted!</Alert.Heading>  
                <p> Thank you for your feedback! </p>  
              </Alert>  
          </Container>  
      </div>  
    );  
  }
  
  
 return(  
   <>  
   <Button className='p-3 m-5' variant='success' onClick={() => setShow(true)}>SUBMIT</Button>  
   </>  
 )  
 }  
export default App;

*/
