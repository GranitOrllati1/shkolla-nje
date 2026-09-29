const FEATURES = [
  {
    title: 'Ekipet e Mësimit',
    description:
      'Nxënësit ndahen në ekipe që fitojnë pikë përmes sfidave dhe projekteve, duke mësuar bashkëpunimin.',
  },
  {
    title: 'Platforma Kodi Live',
    description:
      'Shkruaj, testo dhe ndaj kodin drejtpërdrejt në shfletues, me sfida dhe konkurse periodike.',
  },
  {
    title: 'Aplikacioni i Prindërve',
    description:
      'Prindërit ndjekin në kohë reale progresin, prezencën dhe projektet e fëmijëve të tyre.',
  },
  {
    title: 'Mentori AI',
    description:
      'Një sistem i brendshëm që ndihmon instruktorët të identifikojnë shpejt nxënësit që kanë nevojë për ndihmë.',
  },
]

function Ecosystem() {
  return (
    <section id="ekosistemi" className="ecosystem">
      <div className="container">
        <div className="section-heading">
          <h2>Ekosistemi ynë</h2>
          <p>Katër mjete që e bëjnë mësimin më efektiv dhe transparent.</p>
        </div>
        <div className="ecosystem-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
