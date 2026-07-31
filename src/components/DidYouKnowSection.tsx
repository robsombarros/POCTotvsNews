import "./DidYouKnowSection.css";

interface KnowCard {
  icon: string;
  title: string;
  text: string;
}

const CARDS: KnowCard[] = [
  {
    icon: "/assets/icon-card1.svg",
    title: "EM TRÊS MINUTOS DE TARDE",
    text: "É possível realizar a integração entre o sistema TOTVS Educacional e o TOTVS Assinatura Eletrônica.",
  },
  {
    icon: "/assets/icon-card2.svg",
    title: "GESTÃO PEDAGÓGICA",
    text: "A partir da versão 12.1.25, é possível personalizar como serão exibidas as informações dos alunos nas telas do sistema.",
  },
  {
    icon: "/assets/icon-card3.svg",
    title: "DOCUMENTOS DIGITAIS",
    text: "Agora podemos gerar digital como mais segurança e facilidade, sem necessidade de impressão física.",
  },
  {
    icon: "/assets/icon-card4.svg",
    title: "OTIMIZAÇÃO DE PROCESSOS",
    text: "Melhore significativamente os processos educacionais com automação e integração completa entre sistemas.",
  },
];

export function DidYouKnowSection() {
  return (
    <section className="know" id="voce-sabia">
      <div className="container">
        <h2 className="know__heading">VOCÊ SABIA?</h2>
        <div className="know__grid">
          {CARDS.map((card) => (
            <article className="know-card" key={card.title}>
              <div className="know-card__media">
                <img
                  className="know-card__media-img"
                  src="/assets/didyouknow.png"
                  alt=""
                />
                <div className="know-card__media-overlay">
                  <img src={card.icon} alt="" width={48} height={48} />
                </div>
              </div>
              <h3 className="know-card__title">{card.title}</h3>
              <p className="know-card__text">{card.text}</p>
              <button className="link-blue" type="button">
                SAIBA MAIS
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
