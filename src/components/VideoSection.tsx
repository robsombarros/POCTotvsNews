import "./VideoSection.css";
import { asset } from "../config";

interface VideoThumb {
  title: string;
  duration: string;
}

const THUMBS: VideoThumb[] = [
  { title: "eduCONNECT Pay", duration: "3:24" },
  { title: "Gestão Financeira", duration: "5:12" },
  { title: "Portal do Aluno", duration: "4:38" },
  { title: "Relatórios Gerenciais", duration: "6:45" },
  { title: "Integração Digital", duration: "4:22" },
  { title: "Segurança Digital", duration: "3:56" },
];

export function VideoSection() {
  return (
    <section className="videos" id="videos">
      <div className="container videos__grid">
        <div className="videos__intro">
          <h2 className="videos__heading">
            Assista aos vídeos e veja o que a TOTVS tem para lhe oferecer!
          </h2>
          <p className="videos__text">
            Descubra como nossas soluções podem transformar a gestão da sua
            instituição educacional.
          </p>
          <button className="btn-primary btn-md" type="button">
            VER TODOS OS VÍDEOS
          </button>
        </div>

        <div className="videos__player">
          <div className="videos__featured">
            <div className="videos__featured-inner">
              <img
                src={asset("icon-video-play-big.svg")}
                alt=""
                width={64}
                height={64}
              />
              <p className="videos__featured-title">eduCONNECT Pay</p>
              <p className="videos__featured-subtitle">
                Demonstração do produto
              </p>
            </div>
          </div>

          <div className="videos__thumb-grid">
            {THUMBS.map((thumb) => (
              <button className="video-thumb" type="button" key={thumb.title}>
                <span className="video-thumb__preview">
                  <img
                    src={asset("icon-video-play.svg")}
                    alt=""
                    width={24}
                    height={24}
                  />
                </span>
                <span className="video-thumb__title">{thumb.title}</span>
                <span className="video-thumb__duration">{thumb.duration}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
