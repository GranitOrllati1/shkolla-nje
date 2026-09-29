const TIERS = [
  {
    age: '8–11 vjeç',
    title: 'Themelet',
    description:
      'Hyrje në mendimin llogaritës dhe logjikën e programimit, pa sintaksë, përmes blloqeve vizuale dhe lojërave.',
    topics: ['Mendim llogaritës', 'Blloqe vizuale', 'Lojërat e para'],
  },
  {
    age: '12–15 vjeç',
    title: 'Ndërtues',
    description:
      'Kalim te gjuhët reale të programimit — ndërtim lojërash, faqesh dhe aplikacionesh të thjeshta.',
    topics: ['JavaScript', 'Python', 'Projekte në ekip'],
  },
  {
    age: '16–18+ vjeç',
    title: 'Inovatorë',
    description:
      'Ndërtim produktesh të vërteta dhe hyrje në inteligjencën artificiale, me portofol gati për universitet ose punë.',
    topics: ['Zhvillim produkti', 'Bazat e AI', 'Portofol profesional'],
  },
]

function Curriculum() {
  return (
    <section id="kurrikula" className="curriculum">
      <div className="container">
        <div className="section-heading">
          <h2>Kurrikula sipas moshës</h2>
          <p>Çdo grupmoshë ka udhëzime, ritëm dhe projekte të përshtatura.</p>
        </div>
        <div className="curriculum-grid">
          {TIERS.map((tier) => (
            <div key={tier.title} className="tier-card">
              <span className="tier-age">{tier.age}</span>
              <h3>{tier.title}</h3>
              <p>{tier.description}</p>
              <ul className="tier-topics">
                {tier.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Curriculum
