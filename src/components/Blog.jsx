const POSTS = [
  {
    date: '12 Shtator 2026',
    title: 'Nxënësit tanë fituan garën rajonale të robotikës',
    excerpt:
      'Një ekip prej pesë nxënësish nga grupmosha 12-15 vjeç u kualifikua në finale.',
  },
  {
    date: '2 Shtator 2026',
    title: 'Hapim grupin e ri për moshën 16-18 vjeç',
    excerpt:
      'Fokus te ndërtimi i produkteve reale dhe përgatitja e portofolit profesional.',
  },
  {
    date: '20 Gusht 2026',
    title: 'Si e ndërtuam kurrikulën tonë të AI-së',
    excerpt:
      'Një vështrim pas skene te metodologjia që përdorim për të mësuar AI-në te të rinjtë.',
  },
]

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-heading">
          <h2>Nga blogu ynë</h2>
          <p>Lajme, arritje dhe histori nga shkolla.</p>
        </div>
        <div className="blog-grid">
          {POSTS.map((post) => (
            <article key={post.title} className="post-card">
              <span className="post-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
