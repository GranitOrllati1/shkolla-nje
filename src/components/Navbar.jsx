const LINKS = [
  { href: '#hero', label: 'Ballina' },
  { href: '#kurrikula', label: 'Kurrikula' },
  { href: '#ekosistemi', label: 'Ekosistemi' },
  { href: '#blog', label: 'Blog' },
  { href: '#kontakt', label: 'Kontakt' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="brand">
          Shkolla<span>Një</span>
        </a>
        <nav className="nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="btn btn-primary btn-sm">
          Regjistrohu
        </a>
      </div>
    </header>
  )
}

export default Navbar
