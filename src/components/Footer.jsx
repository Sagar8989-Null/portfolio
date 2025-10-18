function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Sagar Jamadar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
