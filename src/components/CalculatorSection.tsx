import "./CalculatorSection.css";
import { asset } from "../config";

export function CalculatorSection() {
  return (
    <section className="calculator">
      <div className="container calculator__inner">
        <div className="calculator__text">
          <div className="calculator__heading-row">
            <img
              className="calculator__icon"
              src={asset("icon-calc-title.svg")}
              alt=""
            />
            <h2 className="calculator__heading">
              Utilize nossa{" "}
              <span className="calculator__heading-accent">calculadora</span>{" "}
              para saber o tamanho da economia
            </h2>
          </div>
          <p className="calculator__paragraph">
            com <strong>TOTVS Pagamento Instantâneo</strong>
          </p>
          <a
            className="btn-primary btn-md"
            href="https://meurh.totvs.io/FrameHTML/Web/App/RH/PortalMeuRH/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CALCULAR AGORA
          </a>
        </div>

        <div className="calculator__card">
          <img
            className="calculator__card-img"
            src={asset("calculator.png")}
            alt=""
          />
          <div className="calculator__card-overlay">
            <div className="calculator__card-content">
              <img src={asset("icon-calc-big.svg")} alt="" width={64} height={64} />
              <p className="calculator__card-label">Calculadora Interativa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
