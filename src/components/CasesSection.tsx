import "./CasesSection.css";

const CASES = [
  { emoji: "🎓", label: "UNIGAL" },
  { emoji: "📚", label: "FAMETRO" },
  { emoji: "🏛️", label: "SER" },
  { emoji: "🎯", label: "UNICEL" },
  { emoji: "📖", label: "FAM" },
];

export function CasesSection() {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <h2 className="cases__heading">
          CONHEÇA NOSSOS <span className="cases__heading-accent">CASES</span>
        </h2>

        <div className="cases__list">
          {CASES.map((item) => (
            <div className="case-item" key={item.label}>
              <div className="case-item__circle" aria-hidden="true">
                <span className="case-item__emoji">{item.emoji}</span>
              </div>
              <span className="case-item__label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="cases__footer">
          <p className="cases__description">
            Descubra como essas instituições transformaram sua gestão
            educacional com nossas soluções.
          </p>
          <button className="link-blue" type="button">
            VER TODOS OS CASES
          </button>
        </div>
      </div>
    </section>
  );
}
