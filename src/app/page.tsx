export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Markdown share</p>
        <h1>Jednoduché sdílení markdownů jako veřejných linků</h1>
        <p className="lead">
          Přidej nový soubor do <code>/public/markdowns/</code>, pushni do
          GitHubu a okamžitě máš veřejný link.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/example">
            Otevřít ukázku
          </a>
          <a className="btn btn-secondary" href="/markdowns/example.md" download>
            Stáhnout ukázku
          </a>
        </div>
      </section>
      <section className="card">
        <h2>Jak to funguje</h2>
        <ol>
          <li>Vlož markdown do <code>/public/markdowns/nazev.md</code>.</li>
          <li>Commit &amp; push do repa na GitHubu.</li>
          <li>Otevři link: <code>vercel.app/nazev</code>.</li>
        </ol>
      </section>
    </main>
  );
}
