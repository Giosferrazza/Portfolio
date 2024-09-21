import React from 'react';

function Footer() {
  return (
    <footer className="left-0 w-full p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Giovanni Sferrazza. All rights reserved.</p>
    </footer>
  );
}

export default Footer;