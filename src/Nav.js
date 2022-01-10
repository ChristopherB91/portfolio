import { Link } from 'react-router-dom'
function Nav() {
  return (
   <nav >
      <ul className='nav-links' >
        <Link to ='/about'>
        <li>
            About Us
        </li>
        </Link>
        <Link to='/contact'>
        <li>
           Contact Us
        </li>
        </Link>
        <Link to='/home'>
        <li>
           Home
        </li>
        </Link>
    </ul>
  </nav>
  );
}

export default Nav;