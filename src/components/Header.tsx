import "./Header.css";
import { asset } from "../config";

const NAV_LINKS = [
  { label: "VOCÊ SABIA?", href: "#voce-sabia" },
  { label: "NOSSOS CASES", href: "#cases" },
  { label: "VÍDEOS", href: "#videos" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__brand">
          <span className="site-header__dot" aria-hidden="true" />
          <span className="site-header__title">GESTÃO EDUCACIONAL</span>
        </div>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.label} className="site-header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="site-header__action" type="button" aria-label="Ajuda">
          <img src={asset("icon-menu.svg")} alt="" width={20} height={20} />
        </button>
      </div>
    </header>
  );
}
