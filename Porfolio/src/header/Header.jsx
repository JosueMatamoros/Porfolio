import React from 'react';
import { Navbar, DarkThemeToggle } from 'flowbite-react';
import { useThemeMode } from 'flowbite-react';

const Header = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <Navbar fluid={true} rounded={true} className="bg-gray-200 dark:bg-gray-800">
      <Navbar.Brand href="#">
        <CodeIcon className="w-8 h-8 ml-2  dark:text-white" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle
          checked={mode === 'dark'}
          onChange={toggleMode}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#">
          Skills
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export default Header;
