import "./RoadmapSection.css";

export function RoadmapSection() {
  return (
    <section className="roadmap">
      <div className="container">
        <h2 className="roadmap__heading">
          ACOMPANHE AS NOVIDADES E O PLANEJAMENTO DO PRODUTO, E TAMBÉM PARTICIPE
          COM SUGESTÕES
        </h2>

        <div className="roadmap__grid">
          <article className="roadmap-card">
            <div className="roadmap-card__head">
              <img src="/assets/icon-roadmap1.svg" alt="" width={48} height={48} />
              <div>
                <h3 className="roadmap-card__title">PRODUTO E ROADMAP</h3>
              </div>
            </div>
            <p className="roadmap-card__text">
              Fique por dentro do planejamento de produtos e contribua com suas
              sugestões para melhorias.
            </p>
            <button className="btn-primary btn-sm" type="button">
              ACOMPANHAR ROADMAP
            </button>
          </article>

          <article className="roadmap-card">
            <div className="roadmap-card__head">
              <img src="/assets/icon-roadmap2.svg" alt="" width={48} height={48} />
              <div>
                <h3 className="roadmap-card__title">CENTRAL</h3>
                <p className="roadmap-card__subtitle">NOTIFICAÇÕES</p>
              </div>
            </div>
            <p className="roadmap-card__text">
              Receba notificações importantes sobre atualizações, novidades e
              comunicados do sistema.
            </p>
            <button className="btn-primary btn-sm" type="button">
              VER NOTIFICAÇÕES
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
