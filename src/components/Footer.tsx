import "./Footer.css";
import { asset } from "../config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__logo">
          <img
            src={asset("logo-totvs.svg")}
            alt="TOTVS"
            width={96}
            height={27}
          />
        </div>
        <p className="site-footer__copy">
          © 2026 TOTVS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
