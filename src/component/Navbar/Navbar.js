import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Star, StarFill } from "react-bootstrap-icons";
import SearchMovie from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

function NavScrollExample() {
  const dispacth=useDispatch()
  const Count=useSelector((state)=>state.Count)
  // dispacth(Count())
  const {contextLang,setContextLang}=useContext(LangContext)
  return (
    <Navbar bg="light" expand="lg" className='sticky-top'>
      <Container fluid>
        <Navbar.Brand><Link className='text-decoration-none text-warning' to={"/"}>Movies APP</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-between'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <button type="button" className="btn btn-outline-warning"><Link className='text-decoration-none text-dark' to={"/login"}> Login </Link></button>
    
          <button type="button" className="btn btn-outline-warning"><Link className='text-decoration-none text-dark' to={"/register"}> Register </Link></button>
          <div>
          <Link to={"/cart"}><StarFill size={"25px"} className="text-warning"/></Link><span className='p-2'>{Count}</span>
          </div>
          <div>
            <button className='btn btn-info' onClick={()=>setContextLang(contextLang=="Arabic"?"English":"Arabic")}>{contextLang}</button>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;