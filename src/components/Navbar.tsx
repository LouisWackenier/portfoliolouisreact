//STYLED COMPONENTS
import styled from 'styled-components';

//REACT ROUTER DOM
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='bg-purple w-screen'>
      <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
         <Button>Home</Button>
       </Link>
      <Link to="About" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
        <Button>About</Button>
      </Link>
      <Link to="Portfolio" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
         <Button>Portfolio</Button>
      </Link>
      <Link to="Contact" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
         <Button>Contact</Button>
      </Link>
      {/*Link to Portfolio Section*/}
      
   </div>
  )
}

export default Navbar

//STYLING
const NavbarContainer = styled.div`
  background-color: rgba(7, 0, 27, 0.8);
  width: 100%;
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  position: fixed;
  z-index: 2;
  top: 0;

  padding-top: 2vh;
  padding-bottom: 2vh;
`;

const Button = styled.h2`
  color: white;
  list-style: none;
  display: flex;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
  padding: 10px;
  border: none;
  cursor: pointer;

  transition: color 0.3s, text-decoration 0.5s;

  &:hover {
    text-decoration: underline;
    color: gray;
  }
`;