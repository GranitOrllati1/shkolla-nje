function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="brand">
          Shkolla<span>Një</span>
        </a>
        <nav className="footer-links">
          <a href="#kurrikula">Kurrikula</a>
          <a href="#ekosistemi">Ekosistemi</a>
          <a href="#blog">Blog</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} Shkolla Një. Të gjitha të drejtat e
          rezervuara.
        </p>
      </div>
    </footer>
  )
}

export default Footer
