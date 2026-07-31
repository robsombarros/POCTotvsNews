import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img className="hero__bg-img" src="/assets/hero.png" alt="" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__inner">
          <h1 className="hero__title">
            Já está por dentro das últimas novidades do{" "}
            <span className="hero__title-accent">TOTVS Educacional</span>?
          </h1>
          <p className="hero__subtitle">
            Conheça o release 12.1.2506 agora mesmo!
          </p>
          <button className="btn-primary btn-lg" type="button">
            SAIBA MAIS
          </button>
        </div>
      </div>

      <span className="hero__circle hero__circle--lg" aria-hidden="true" />
      <span className="hero__circle hero__circle--sm" aria-hidden="true" />
    </section>
  );
}
