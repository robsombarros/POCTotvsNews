import "./WebinarSection.css";

export function WebinarSection() {
  return (
    <section className="webinar">
      <div className="webinar__bg" aria-hidden="true">
        <img className="webinar__bg-img" src="/assets/webinar.png" alt="" />
        <div className="webinar__overlay" />
      </div>

      <div className="container webinar__content">
        <h2 className="webinar__heading">
          VEJA A NOSSA PROGRAMAÇÃO DE WEBINARS PARA O SEGMENTO EDUCACIONAL
        </h2>
        <p className="webinar__text">
          Participe de webinars exclusivos com especialistas em gestão
          educacional e conheça as melhores práticas do mercado.
        </p>
        <button className="btn-primary btn-lg" type="button">
          VER PROGRAMAÇÃO
        </button>
      </div>

      <div className="webinar__decoration" aria-hidden="true">
        <img src="/assets/icon-webinar.svg" alt="" width={96} height={96} />
      </div>
    </section>
  );
}
