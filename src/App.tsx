import { useEffect, useState } from 'react';

//import googlePlayBtn from './assets/googleplay.png';
import brandIcon from './assets/icon1.png';
import coinIcon from './assets/coinn.png';
import cuyIcon from './assets/cuyazoo.png';
import iconvip from './assets/iconvip.png';
import ninjaIcon from './assets/ninjaa.png';
import tiktokIcon from './assets/tiktok.webp';
import zumbidoIcon from './assets/zumbidoo.png';
import phoneImg from './assets/phone.jpeg';

import './App.css';

//const GOOGLE_PLAY_URL =
//  'https://play.google.com/store/apps/details?id=com.bosatzu.frontcuyamor';

const LAUNCH_DATE = new Date('2026-09-02T00:00:00');

function useCountdown(target: Date) {
  const [remaining, setRemaining] = useState(() => Math.max(0, target.getTime() - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, target.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

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
  const countdown = useCountdown(LAUNCH_DATE);

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

          {/* ─── CTA (hidden during closed beta) ─── */}
          {/*
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
          */}

          <div className="countdown-section">
            <h2 className="countdown-headline">¡Próximamente disponible!</h2>

            <div className="countdown-grid">
              {[
                { value: countdown.days, label: 'D' },
                { value: countdown.hours, label: 'H' },
                { value: countdown.minutes, label: 'M' },
                { value: countdown.seconds, label: 'S' },
              ].map((unit) => (
                <div key={unit.label} className="countdown-unit">
                  <span className="countdown-value">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="countdown-label">{unit.label}</span>
                </div>
              ))}
            </div>

            <p className="tiktok-cta-text">
              Síguenos y entérate del lanzamiento oficial:
            </p>
            <a
              href="https://www.tiktok.com/@cuy.amor.app?_r=1&_t=ZS-99DNl7vPKEi"
              target="_blank"
              rel="noopener noreferrer"
              className="tiktok-link"
            >
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="tiktok-icon"
              />
            </a>
          </div>
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
        <a className="footer-link" href="mailto:carlos87jaramillo@gmail.com">
          Contáctenos
        </a>
      </footer>

      {/* ─── Modals ─── */}
      <Modal
        open={isPrivacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Políticas de Privacidad"
      >
        <h3>1. Información que Recopilamos</h3>
        <p>
          Para que el motor de emparejamiento y la economía de la plataforma
          funcionen, recopilamos:
        </p>
        <ul>
          <li>
            <strong>Datos de Perfil:</strong> Nombre, edad, género, fotografías
            y preferencias de búsqueda.
          </li>
          <li>
            <strong>Geolocalización:</strong> Ubicación precisa para habilitar
            el filtro de distancia y el descubrimiento de perfiles cercanos.
          </li>
          <li>
            <strong>Datos Financieros:</strong> Historial de compras de Cuy
            Coins, suscripciones (Modo Cuy Ninja), y números de cuentas de
            retiro (ej. Nequi) para el sistema de referidos.
          </li>
          <li>
            <strong>Comunicaciones:</strong> Contenido de la sala de chat
            operada en tiempo real e interacciones directas.
          </li>
        </ul>

        <h3>2. Uso y Finalidad de los Datos</h3>
        <p>
          La información se utiliza estrictamente para operar y asegurar la
          plataforma:
        </p>
        <ul>
          <li>
            Facilitar la conexión entre usuarios mediante algoritmos de
            ubicación.
          </li>
          <li>
            Procesar pagos, acreditar recompensas y gestionar solicitudes de
            retiro de dinero de forma segura.
          </li>
          <li>
            Mantener la integridad de la mensajería y prevenir fraudes,
            suplantaciones o comportamientos abusivos.
          </li>
        </ul>

        <h3>3. Compartición de Información</h3>
        <p>
          No vendemos datos personales. Solo compartimos información con
          terceros esenciales para la operatividad:
        </p>
        <ul>
          <li>
            <strong>Infraestructura:</strong> Servicios en la nube para alojar
            bases de datos y servidores backend.
          </li>
          <li>
            <strong>Pasarelas de Pago:</strong> Entidades financieras
            autorizadas para procesar transacciones.
          </li>
          <li>
            <strong>Autoridades:</strong> Cuando sea requerido legalmente para
            investigaciones de seguridad y cumplimiento normativo.
          </li>
        </ul>

        <h3>4. Derechos del Usuario y Retención</h3>
        <p>
          Todo usuario tiene control total sobre su información personal en
          cualquier momento:
        </p>
        <ul>
          <li>
            <strong>Derecho al Olvido:</strong> Mediante la opción de eliminar
            cuenta, se ejecuta un borrado total que destruye permanentemente
            fotos, chats y saldos de nuestros servidores.
          </li>
          <li>
            <strong>Modificación:</strong> Los usuarios pueden actualizar sus
            datos o revocar permisos de ubicación y notificaciones directamente
            desde los ajustes de su dispositivo.
          </li>
        </ul>
      </Modal>

      <Modal
        open={isTermsOpen}
        onClose={() => setTermsOpen(false)}
        title="Términos y Condiciones"
      >
        <h3>1. Aceptación de los Términos</h3>
        <p>
          Al descargar, acceder o utilizar la aplicación Cuy Amor, usted
          acepta estar sujeto a estos Términos y Condiciones. Solo se permite
          el uso de la plataforma a personas mayores de 18 años.
        </p>

        <h3>2. Economía Virtual (Cuy Coins y Suscripciones)</h3>
        <ul>
          <li>
            Los 'Cuy Coins' son una moneda virtual exclusiva de la plataforma,
            utilizada para adquirir funciones especiales (Cuyazos, Regalos,
            Modo Cuy Ninja).
          </li>
          <li>
            Todas las compras de Cuy Coins y suscripciones son finales y no
            reembolsables.
          </li>
          <li>
            Los Cuy Coins no tienen valor monetario en el mundo real y no
            pueden ser canjeados por dinero en efectivo, salvo mediante el
            sistema oficial de referidos.
          </li>
        </ul>

        <h3>3. Sistema de Referidos y Retiros de Dinero</h3>
        <ul>
          <li>
            Las comisiones generadas por el sistema de referidos (10% de la
            primera compra) se acreditarán en el saldo de dinero real del
            usuario.
          </li>
          <li>
            El usuario podrá solicitar el retiro de sus fondos exclusivamente
            a través de cuentas de Nequi, siempre y cuando el saldo mínimo
            sea de 30.000 COP.
          </li>
          <li>
            Cuy Amor se reserva el derecho de auditar, retener o cancelar
            retiros si se detectan actividades fraudulentas, cuentas falsas o
            manipulación del sistema.
          </li>
        </ul>

        <h3>4. Conducta del Usuario</h3>
        <p>
          Los usuarios deben interactuar de manera respetuosa. Está
          estrictamente prohibido:
        </p>
        <ul>
          <li>Acosar, intimidar o amenazar a otros usuarios.</li>
          <li>Crear perfiles falsos o suplantar la identidad de terceros.</li>
          <li>
            Compartir contenido sexualmente explícito, ilegal, violento o
            comercial (spam).
          </li>
        </ul>
        <p>
          Cuy Amor se reserva el derecho de suspender o eliminar
          permanentemente cualquier cuenta que viole estas normas, sin derecho
          a reembolso.
        </p>

        <h3>5. Limitación de Responsabilidad</h3>
        <p>
          La aplicación se proporciona 'tal cual'. Cuy Amor no garantiza la
          compatibilidad, el éxito de los emparejamientos, ni se hace
          responsable por las interacciones, encuentros físicos o conductas
          de los usuarios fuera de la plataforma digital. Proceda siempre con
          precaución en sus encuentros personales.
        </p>

        <h3>6. Modificaciones</h3>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Las actualizaciones se notificarán a través de la
          aplicación o la página web oficial.
        </p>
      </Modal>
    </div>
  );
}
