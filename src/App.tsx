import { useState } from 'react';

import brandIcon from './assets/icon1.png';
import coinIcon from './assets/coinn.png';
import cuyIcon from './assets/cuyazoo.png';
import iconvip from './assets/iconvip.png';
import ninjaIcon from './assets/ninjaa.png';
import tiktokIcon from './assets/tiktok.webp';
import zumbidoIcon from './assets/zumbidoo.png';
import phoneImg from './assets/phone.jpeg';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.bosatzu.frontcuyamor';

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.37 2.37 0 0 1-.61-1.644V3.458c0-.623.224-1.208.609-1.644zm11.242 11.244l2.107 2.107-11.895 6.84 9.788-8.947zm0-2.116L5.063 1.996l11.896 6.84-2.108 2.106zm1.488 1.487l3.295-1.895c1.066-.613 1.066-1.614 0-2.227l-3.295-1.895-1.748 1.748 1.748 2.269z"></path>
    </svg>
  );
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
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass-card relative w-full max-w-[560px] max-h-[80vh] overflow-y-auto rounded-2xl p-8 pt-6"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg text-slate-100/70 transition-colors hover:bg-white/10 hover:text-white"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>
        <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
        <div className="text-left text-sm leading-relaxed text-slate-200 [&_h3:first-child]:mt-0 [&_h3]:mb-1.5 [&_h3]:mt-5 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-white [&_p]:mb-2 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5 [&_strong]:text-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);

  return (
    <div className="bg-[#99081E] text-white font-sans antialiased overflow-x-hidden selection:bg-cuy-gold selection:text-cuy-darkred">
      {/* ─── Ambient Background Gradients ─── */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-600/30 blur-[130px]"></div>
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-cuy-gold/15 blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[800px] h-[500px] rounded-full bg-black/40 blur-[120px]"></div>
      </div>

      {/* ─── Main Header ─── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#99081E]/80 border-b border-white/10 transition-all duration-300">
        <nav
          aria-label="Navegación Principal"
          className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        >
          <a className="flex items-center gap-3 group" href="#">
            <img
              alt="Cuy Amor Logo"
              className="w-10 h-10 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              src={brandIcon}
            />
            <span className="text-xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-white via-white to-cuy-gold bg-clip-text text-transparent">
              Cuy Amor
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-white/90">
            <a className="hover:text-cuy-gold transition-colors duration-200" href="#como-funciona">
              ¿Cómo funciona?
            </a>
            <a className="hover:text-cuy-gold transition-colors duration-200" href="#beneficios">
              Beneficios VIP
            </a>
            <a className="hover:text-cuy-gold transition-colors duration-200" href="#comunidad">
              Comunidad
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              className="bg-gradient-to-r from-cuy-gold to-yellow-400 text-cuy-darkred font-bold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-glow-gold hover:brightness-105 active:scale-95 transition-all duration-200 inline-flex items-center gap-2"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon className="w-4 h-4 fill-cuy-darkred" />
              <span>Pre-registro Google Play</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ─── Hero Section ─── */}
        <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Proposition & Form */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left z-10">
              <div className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-inner">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cuy-gold animate-pulse"></span>
                <span className="text-xs uppercase font-bold tracking-widest text-cuy-gold">
                  Lanzamiento Exclusivo • Pre-registro VIP
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                  Encuentra <span className="text-cuy-gold text-glow">amor</span> y
                  nuevas <span className="text-cuy-gold text-glow">conexiones</span> cerca de ti
                </h1>
                <p className="text-lg sm:text-xl text-white/85 font-medium max-w-xl leading-relaxed">
                  Descubre personas increíbles, envía un auténtico{' '}
                  <span className="text-white font-bold">zumbido</span> y conecta con
                  la calidez de nuestra gente en el suroccidente andino.
                </p>
              </div>

              {/* Early Access Registration Card */}
              <div
                id="preregistro"
                className="glass-card p-6 sm:p-8 rounded-3xl shadow-glow-red relative overflow-hidden"
              >
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-cuy-gold/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-cuy-gold/20 p-3 rounded-2xl border border-cuy-gold/30">
                    <img
                      alt="CuyCoin Icon"
                      className="w-8 h-8 object-contain"
                      src={coinIcon}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      Únete como Miembro Fundador
                    </h2>
                    <p className="text-sm text-yellow-200/90 font-medium">
                      Recibe{' '}
                      <strong className="text-cuy-gold font-bold">100 CuyCoins gratis</strong>{' '}
                      el día del lanzamiento oficial.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 my-2">
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cuy-gold via-yellow-400 to-cuy-gold hover:from-yellow-400 hover:to-cuy-gold text-cuy-darkred font-extrabold py-4 px-6 rounded-2xl shadow-lg hover:shadow-glow-gold transition-all duration-300 flex items-center justify-center gap-3 group text-base sm:text-lg"
                  >
                    <PlayIcon className="w-6 h-6 fill-cuy-darkred shrink-0" />
                    <span className="font-black">
                      Pre-registrarse en Google Play Store
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2 overflow-hidden">
                      <div className="inline-block h-6 w-6 rounded-full ring-2 ring-cuy-darkred bg-rose-400"></div>
                      <div className="inline-block h-6 w-6 rounded-full ring-2 ring-cuy-darkred bg-amber-400"></div>
                      <div className="inline-block h-6 w-6 rounded-full ring-2 ring-cuy-darkred bg-emerald-400"></div>
                    </div>
                    <span>
                      <strong>2,480+</strong> personas ya en lista de espera
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-cuy-gold font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      ></path>
                    </svg>
                    <span>Privacidad 100% Protegida</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Mini Footer */}
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span>Síguenos y entérate de novedades:</span>
                <div className="flex gap-2">
                  <a
                    className="w-9 h-9 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-black hover:scale-105 transition-transform"
                    href="https://www.tiktok.com/@cuy.amor.app?_r=1&_t=ZS-99DNl7vPKEi"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="TikTok Oficial"
                  >
                    <img
                      src={tiktokIcon}
                      alt="TikTok"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Phone Mockup & Floating 3D Elements */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-6">
              <div className="absolute -top-4 -left-6 z-30 animate-float-slow hidden sm:block">
                <img
                  alt="Cuy Coin Dorado"
                  className="w-20 h-20 drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  src={coinIcon}
                  title="Gana CuyCoins"
                />
              </div>

              <div className="absolute -top-6 -right-4 z-30 animate-float-delay hidden sm:block">
                <img
                  alt="Cuy Star Super Like"
                  className="w-24 h-24 drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  src={cuyIcon}
                  title="Super Estrella"
                />
              </div>

              <div className="absolute top-1/2 -right-10 z-30 animate-pulse-soft hidden sm:block">
                <img
                  alt="Cuy Zumbido"
                  className="w-20 h-20 drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  src={zumbidoIcon}
                  title="¡Envía un Zumbido!"
                />
              </div>

              <div className="absolute -bottom-6 -left-10 z-30 animate-float-slow hidden sm:block">
                <img
                  alt="Cuy Café Cita"
                  className="w-28 h-28 drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  src={iconvip}
                  title="Invita un cafecito nariñense"
                />
              </div>

              <div
                className="absolute -bottom-4 right-0 z-30 animate-bounce hidden sm:block"
                style={{ animationDuration: '3.5s' }}
              >
                <img
                  alt="Cuy Ninja Modo Incógnito"
                  className="w-24 h-24 drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  src={ninjaIcon}
                  title="Modo Ninja Activado"
                />
              </div>

              {/* Mobile Device Outer Chassis */}
              <div className="relative w-[340px] h-[680px] bg-neutral-900 rounded-[52px] p-3 shadow-phone-frame border-[6px] border-[#2d0208] ring-1 ring-white/20 select-none">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-40 flex items-center justify-center">
                  <div className="w-3 h-3 bg-neutral-800 rounded-full mr-2"></div>
                  <div className="w-10 h-1 bg-neutral-800 rounded-full"></div>
                </div>

                {/* Phone Screen Content */}
                <div className="relative w-full h-full bg-gradient-to-b from-[#b51433] via-[#cc2344] to-[#f47070] rounded-[42px] overflow-hidden flex flex-col justify-between pt-9 pb-4 px-4 text-white shadow-inner">
                  <div className="flex items-center justify-between px-2 pt-2">
                    <div className="flex items-center gap-1.5">
                      <img
                        alt="Mini icon"
                        className="w-5 h-5 object-contain"
                        src={brandIcon}
                      />
                      <span className="text-xs font-black uppercase tracking-wider text-white drop-shadow">
                        Cuy Amor
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-cuy-gold border border-white/10">
                      <img alt="coin" className="w-3.5 h-3.5" src={coinIcon} />
                      <span>500</span>
                    </div>
                  </div>

                  <div className="relative w-full h-[370px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-neutral-800 group">
                    <img
                      alt="Andrea Perfil Cuy Amor"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={phoneImg}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">Andrea, 28</h3>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      </div>
                      <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5 font-medium">
                        <svg
                          className="w-3.5 h-3.5 text-cuy-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          ></path>
                        </svg>
                        A 2 km • Pasto, Nariño
                      </p>
                      <p className="text-[11px] text-white/90 mt-2 italic bg-black/30 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                        "Amo la música andina, el café con aroma de altura y viajar por el
                        campo."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 my-1">
                    <button
                      aria-label="Descartar"
                      className="w-12 h-12 rounded-full bg-white/95 text-neutral-500 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <button
                      aria-label="Cuy Star"
                      className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform p-1"
                    >
                      <img alt="Star button" className="w-8 h-8 object-contain" src={cuyIcon} />
                    </button>
                    <button
                      aria-label="Dar Match"
                      className="w-12 h-12 rounded-full bg-white/95 text-cuy-crimson flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
                    >
                      <svg className="w-6 h-6 fill-cuy-crimson text-cuy-crimson" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="bg-black/25 backdrop-blur-md rounded-2xl py-2 px-3 flex items-center justify-between text-[11px] border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="font-medium">Modo Cuy Ninja</span>
                    </div>
                    <div className="w-8 h-4 bg-emerald-500 rounded-full flex items-center justify-end px-0.5">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 pt-1 border-t border-white/10 text-center text-[10px]">
                    <div className="flex flex-col items-center text-white font-bold">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Explorar</span>
                    </div>
                    <div className="flex flex-col items-center text-white/70">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Mis Cuyes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Value Props Section ─── */}
        <section
          className="py-20 bg-black/20 border-y border-white/10 backdrop-blur-sm"
          id="beneficios"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-extrabold tracking-widest text-cuy-gold">
                Ventajas de Fundador
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
                ¿Por qué registrarte antes del lanzamiento?
              </h2>
              <p className="text-white/80 mt-3 text-base">
                Diseñado especialmente con identidad nariñense y tecnología de
                emparejamiento inteligente.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-3xl hover:border-cuy-gold/50 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-cuy-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <img alt="CuyCoins" className="w-12 h-12 object-contain" src={coinIcon} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Pionero con 100 CuyCoins
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Obtén 100 monedas exclusivas en tu cuenta desde el primer
                    minuto. Úsalas para destacar tu perfil, regalar cafés virtuales o
                    mandar super likes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-cuy-gold">
                  <span>Beneficio exclusivo de pre-registro →</span>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl hover:border-cuy-gold/50 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <img
                      alt="Zumbidos locales"
                      className="w-12 h-12 object-contain"
                      src={zumbidoIcon}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Conexiones Reales de la Región
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Algoritmos con contexto geográfico y cultural para Pasto,
                    Ipiales, Túquerres y el sur andino. Conecta con quienes comparten
                    tus tradiciones.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-cuy-gold">
                  <span>Cero perfiles falsos →</span>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl hover:border-cuy-gold/50 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900/40 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <img alt="Cuy Ninja" className="w-12 h-12 object-contain" src={ninjaIcon} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Modo Cuy Ninja Total
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    ¿Quieres explorar sin que tus conocidos del trabajo o la
                    universidad te vean? Activa el modo incógnito y navega a tu propio
                    ritmo con control total.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-cuy-gold">
                  <span>Privacidad garantizada →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How It Works Section ─── */}
        <section className="py-20 max-w-7xl mx-auto px-6" id="como-funciona">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-cuy-gold">
              Sencillo y Dinámico
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
              ¿Cómo funciona Cuy Amor?
            </h2>
            <p className="text-white/80 mt-3 text-base">
              Tres pasos para transformar la manera en que nos conocemos en nuestra
              tierra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="glass-card p-6 rounded-2xl text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cuy-gold text-cuy-darkred font-extrabold flex items-center justify-center text-lg mb-4 shadow-glow-gold">
                1
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Crea tu Perfil Auténtico
              </h4>
              <p className="text-sm text-white/70">
                Muestra tus pasatiempos, tu música preferida y tus lugares favoritos de
                la región.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cuy-gold text-cuy-darkred font-extrabold flex items-center justify-center text-lg mb-4 shadow-glow-gold">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Envía un Zumbido o un Café
              </h4>
              <p className="text-sm text-white/70">
                Rompe el hielo de forma divertida utilizando detalles locales únicos y
                zumbidos animados.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cuy-gold text-cuy-darkred font-extrabold flex items-center justify-center text-lg mb-4 shadow-glow-gold">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Haz Match &amp; Cita Real
              </h4>
              <p className="text-sm text-white/70">
                Pasa de la pantalla al mundo real compartiendo un café en los mejores
                sitios de la ciudad.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Community Expectation Section ─── */}
        <section className="py-16 bg-gradient-to-b from-black/20 to-transparent border-t border-white/10" id="comunidad">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Lo que dice la comunidad andina
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-sm text-white/80 italic mb-4">
                  "Hacía falta una app pensada para nosotros en Nariño. Los iconos y el
                  diseño de los cuyes están geniales, ya quiero probarla."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white text-sm">
                    MC
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Mateo Coral</h5>
                    <span className="text-xs text-cuy-gold">Pasto • En lista de espera</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-sm text-white/80 italic mb-4">
                  "El Modo Cuy Ninja para cuidar la privacidad es justo lo que se
                  necesitaba. Se nota el cariño y detalle en la propuesta."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center font-bold text-white text-sm">
                    SP
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Sofía Portilla</h5>
                    <span className="text-xs text-cuy-gold">Ipiales • En lista de espera</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Final CTA Section ─── */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <div className="glass-card p-10 rounded-3xl shadow-glow-red relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              No te quedes por fuera del lanzamiento
            </h3>
            <p className="text-white/80 max-w-lg mx-auto text-sm sm:text-base mb-6">
              Asegura tu insignia de Fundador y 100 CuyCoins de regalo pre-registrándote
              en Google Play hoy mismo.
            </p>
            <a
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cuy-gold to-yellow-400 text-cuy-darkred font-extrabold px-8 py-3.5 rounded-full text-base shadow-lg hover:shadow-glow-gold hover:scale-105 transition-all"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon className="w-5 h-5 fill-cuy-darkred" />
              <span>Pre-registrarme en Google Play</span>
            </a>
          </div>
        </section>
      </main>

      {/* ─── Site Footer ─── */}
      <footer className="border-t border-white/15 bg-black/40 py-10 px-6 text-sm text-white/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img alt="Cuy Amor" className="w-6 h-6 object-contain opacity-80" src={brandIcon} />
            <p>© {new Date().getFullYear()} Cuy Amor. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium">
            <button className="hover:text-cuy-gold transition-colors" onClick={() => setPrivacyOpen(true)}>
              Políticas de Privacidad
            </button>
            <span>•</span>
            <button className="hover:text-cuy-gold transition-colors" onClick={() => setTermsOpen(true)}>
              Términos y Condiciones
            </button>
            <span>•</span>
            <a className="hover:text-cuy-gold transition-colors" href="mailto:carlos87jaramillo@gmail.com">
              Contáctenos
            </a>
          </div>
        </div>
      </footer>

      {/* ─── Modals ─── */}
      <Modal open={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} title="Políticas de Privacidad">
        <h3>1. Información que Recopilamos</h3>
        <p>
          Para que el motor de emparejamiento y la economía de la plataforma funcionen,
          recopilamos:
        </p>
        <ul>
          <li>
            <strong>Datos de Perfil:</strong> Nombre, edad, género, fotografías y
            preferencias de búsqueda.
          </li>
          <li>
            <strong>Geolocalización:</strong> Ubicación precisa para habilitar el filtro
            de distancia y el descubrimiento de perfiles cercanos.
          </li>
          <li>
            <strong>Datos Financieros:</strong> Historial de compras de Cuy Coins,
            suscripciones (Modo Cuy Ninja), y números de cuentas de retiro (ej. Nequi)
            para el sistema de referidos.
          </li>
          <li>
            <strong>Comunicaciones:</strong> Contenido de la sala de chat operada en
            tiempo real e interacciones directas.
          </li>
        </ul>

        <h3>2. Uso y Finalidad de los Datos</h3>
        <p>La información se utiliza estrictamente para operar y asegurar la plataforma:</p>
        <ul>
          <li>Facilitar la conexión entre usuarios mediante algoritmos de ubicación.</li>
          <li>
            Procesar pagos, acreditar recompensas y gestionar solicitudes de retiro de
            dinero de forma segura.
          </li>
          <li>
            Mantener la integridad de la mensajería y prevenir fraudes, suplantaciones o
            comportamientos abusivos.
          </li>
        </ul>

        <h3>3. Compartición de Información</h3>
        <p>
          No vendemos datos personales. Solo compartimos información con terceros
          esenciales para la operatividad:
        </p>
        <ul>
          <li>
            <strong>Infraestructura:</strong> Servicios en la nube para alojar bases de
            datos y servidores backend.
          </li>
          <li>
            <strong>Pasarelas de Pago:</strong> Entidades financieras autorizadas para
            procesar transacciones.
          </li>
          <li>
            <strong>Autoridades:</strong> Cuando sea requerido legalmente para
            investigaciones de seguridad y cumplimiento normativo.
          </li>
        </ul>

        <h3>4. Derechos del Usuario y Retención</h3>
        <p>Todo usuario tiene control total sobre su información personal en cualquier momento:</p>
        <ul>
          <li>
            <strong>Derecho al Olvido:</strong> Mediante la opción de eliminar cuenta, se
            ejecuta un borrado total que destruye permanentemente fotos, chats y saldos
            de nuestros servidores.
          </li>
          <li>
            <strong>Modificación:</strong> Los usuarios pueden actualizar sus datos o
            revocar permisos de ubicación y notificaciones directamente desde los ajustes
            de su dispositivo.
          </li>
        </ul>
      </Modal>

      <Modal open={isTermsOpen} onClose={() => setTermsOpen(false)} title="Términos y Condiciones">
        <h3>1. Aceptación de los Términos</h3>
        <p>
          Al descargar, acceder o utilizar la aplicación Cuy Amor, usted acepta estar
          sujeto a estos Términos y Condiciones. Solo se permite el uso de la plataforma
          a personas mayores de 18 años.
        </p>

        <h3>2. Economía Virtual (Cuy Coins y Suscripciones)</h3>
        <ul>
          <li>
            Los 'Cuy Coins' son una moneda virtual exclusiva de la plataforma, utilizada
            para adquirir funciones especiales (Cuyazos, Regalos, Modo Cuy Ninja).
          </li>
          <li>Todas las compras de Cuy Coins y suscripciones son finales y no reembolsables.</li>
          <li>
            Los Cuy Coins no tienen valor monetario en el mundo real y no pueden ser
            canjeados por dinero en efectivo, salvo mediante el sistema oficial de
            referidos.
          </li>
        </ul>

        <h3>3. Sistema de Referidos y Retiros de Dinero</h3>
        <ul>
          <li>
            Las comisiones generadas por el sistema de referidos (10% de la primera
            compra) se acreditarán en el saldo de dinero real del usuario.
          </li>
          <li>
            El usuario podrá solicitar el retiro de sus fondos exclusivamente a través de
            cuentas de Nequi, siempre y cuando el saldo mínimo sea de 30.000 COP.
          </li>
          <li>
            Cuy Amor se reserva el derecho de auditar, retener o cancelar retiros si se
            detectan actividades fraudulentas, cuentas falsas o manipulación del sistema.
          </li>
        </ul>

        <h3>4. Conducta del Usuario</h3>
        <p>Los usuarios deben interactuar de manera respetuosa. Está estrictamente prohibido:</p>
        <ul>
          <li>Acosar, intimidar o amenazar a otros usuarios.</li>
          <li>Crear perfiles falsos o suplantar la identidad de terceros.</li>
          <li>
            Compartir contenido sexualmente explícito, ilegal, violento o comercial
            (spam).
          </li>
        </ul>
        <p>
          Cuy Amor se reserva el derecho de suspender o eliminar permanentemente cualquier
          cuenta que viole estas normas, sin derecho a reembolso.
        </p>

        <h3>5. Limitación de Responsabilidad</h3>
        <p>
          La aplicación se proporciona 'tal cual'. Cuy Amor no garantiza la compatibilidad,
          el éxito de los emparejamientos, ni se hace responsable por las interacciones,
          encuentros físicos o conductas de los usuarios fuera de la plataforma digital.
          Proceda siempre con precaución en sus encuentros personales.
        </p>

        <h3>6. Modificaciones</h3>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Las
          actualizaciones se notificarán a través de la aplicación o la página web oficial.
        </p>
      </Modal>
    </div>
  );
}