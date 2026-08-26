import { useState } from 'react';

import googlePlayBtn from './assets/googleplay.png';
import brandIcon from './assets/icon1.png';
import coinIcon from './assets/coinn.png';
import cuyIcon from './assets/cuyazoo.png';
import iconvip from './assets/iconvip.png';
import ninjaIcon from './assets/ninjaa.png';
import zumbidoIcon from './assets/zumbidoo.png';
import phoneImg from './assets/phone.jpeg';

import './App.css';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.bosatzu.frontcuyamor';

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);

  return (
    <div className="landing">
      {/* ─── Hero ─── */}
      <main className="hero">
        <div className="hero-left">
          <span className="brand-badge">
            <img src={brandIcon} alt="" className="brand-icon" />
            CUY AMOR
          </span>

          <h1 className="headline">
            Encuentra <span className="highlight">amor</span> y
            <br />
            nuevas <span className="highlight">conexiones</span> cerca de ti
          </h1>

          <p className="subtext">
            Descubre personas increíbles, chatea, comparte regalos y vive
            momentos especiales. Cuy Amor es la app donde cada zumbido puede
            ser el inicio de algo extraordinario.
          </p>

          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            <img
              src={googlePlayBtn}
              alt="Disponible en Google Play"
              className="cta-badge"
            />
          </a>
        </div>

        <div className="hero-right">
          <div className="phone-frame">
            <img
              src={phoneImg}
              alt="Cuy Amor app"
              className="phone-img"
            />

            {/* floating icons */}
            <img src={coinIcon} alt="" className="float-icon fi-coin" />
            <img src={cuyIcon} alt="" className="float-icon fi-cuy" />
            <img src={iconvip} alt="" className="float-icon fi-icon3" />
            <img src={ninjaIcon} alt="" className="float-icon fi-ninja" />
            <img src={zumbidoIcon} alt="" className="float-icon fi-zumbido" />
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Cuy Amor</span>
        <span className="footer-sep">·</span>
        <button className="footer-link" onClick={() => setPrivacyOpen(true)}>
          Políticas de Privacidad
        </button>
        <span className="footer-sep">·</span>
        <button className="footer-link" onClick={() => setTermsOpen(true)}>
          Términos y Condiciones
        </button>
        <span className="footer-sep">·</span>
        <a className="footer-link" href="mailto:soporte@cuyamor.com">
          Contáctenos
        </a>
      </footer>

      {/* ─── Modals ─── */}
      <Modal
        open={isPrivacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Políticas de Privacidad"
      >
        <p>
          En Cuy Amor valoramos y protegemos la privacidad de nuestros
          usuarios. Esta política describe cómo recopilamos, usamos y
          protegemos tu información personal cuando utilizas nuestra
          plataforma.
        </p>
        <h3>Información que recopilamos</h3>
        <p>
          Recopilamos información que usted nos proporciona directamente al
          crear su perfil, como nombre, fecha de nacimiento, género,
          fotografías, ubicación y preferencias. También recopilamos datos
          de uso y interacciones dentro de la aplicación.
        </p>
        <h3>Uso de la información</h3>
        <p>
          Utilizamos su información para proporcionar y mejorar nuestros
          servicios, personalizar su experiencia, facilitar conexiones con
          otros usuarios y garantizar la seguridad de la plataforma.
        </p>
        <h3>Protección de datos</h3>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para
          proteger su información contra acceso no autorizado, alteración,
          divulgación o destrucción.
        </p>
        <h3>Contacto</h3>
        <p>
          Si tiene preguntas sobre esta política, contáctenos a través de
          soporte@cuyamor.com.
        </p>
      </Modal>

      <Modal
        open={isTermsOpen}
        onClose={() => setTermsOpen(false)}
        title="Términos y Condiciones"
      >
        <p>
          Bienvenido a Cuy Amor. Al descargar o utilizar nuestra aplicación,
          usted acepta los siguientes términos y condiciones. Por favor,
          léelos detenidamente.
        </p>
        <h3>Aceptación de los términos</h3>
        <p>
          Al acceder y utilizar Cuy Amor, usted acepta estar sujeto a estos
          términos y condiciones. Si no está de acuerdo con alguno de estos
          términos, no utilice la aplicación.
        </p>
        <h3>Cuenta de usuario</h3>
        <p>
          Usted es responsable de mantener la confidencialidad de su cuenta y
          contraseña. Debe ser mayor de 18 años para crear una cuenta y
          utilizar el servicio.
        </p>
        <h3>Conducta del usuario</h3>
        <p>
          Usted se compromete a no usar la aplicación para fines ilegales,
          para acosar a otros usuarios, distribuir contenido inapropiado o
          realizar cualquier actividad que pueda dañar la plataforma o a
          otros usuarios.
        </p>
        <h3>Propiedad intelectual</h3>
        <p>
          Todo el contenido, diseño y funcionalidades de la aplicación son
          propiedad de Cuy Amor y están protegidos por las leyes de
          propiedad intelectual.
        </p>
        <h3>Limitación de responsabilidad</h3>
        <p>
          Cuy Amor no se hace responsable por las interacciones entre
          usuarios fuera de la plataforma. El usuario es responsable de su
          propia seguridad al encontrarse con otras personas.
        </p>
      </Modal>
    </div>
  );
}
