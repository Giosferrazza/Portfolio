import React from 'react';

function Footer() {
  return (
    <footer className="p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Giovanni Sferrazza. All rights reserved.</p>
    </footer>
  );
}

export default Footer;