// NavBar.jsx
import { Link, Button } from 'react-aria-components';

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="flex space-x-4">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </div>
      <Button className="btn-primary">
        Sign In
      </Button>
    </nav>
  );
}

export default NavBar;