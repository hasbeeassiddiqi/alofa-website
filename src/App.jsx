import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Music, 
  Calendar, 
  Star, 
  MapPin, 
  ArrowRight,
  PlayCircle,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Profil', id: 'profil' },
    { name: 'Diskografi', id: 'diskografi' },
    { name: 'History', id: 'history' },
    { name: 'Pesan', id: 'booking' },
  ];

  const singles = [
    { title: 'Berkali - kali', artist: 'Alofa', url: 'https://youtu.be/Mcisfrw_tIg?si=GbZv3A6XAhM02ppF' },
    { title: 'Juni', artist: 'Alofa', url: 'https://youtu.be/OtM1sIsBe4k?si=fJ_0fokQD1VLsyXi' },
    { title: 'Memilihmu', artist: 'Alofa', url: null },
    { title: 'Kisah Ditempat Ini', artist: 'Alofa', url: null },
    { title: 'Rumah Yang Tak Kau Pilih', artist: 'Alofa', url: 'https://youtu.be/v4gcVqUbW_k?si=pfv7jEXFU_wP57aR' },
  ];

  const history = [
    { event: 'Pensi SMA Negeri', location: 'Indramayu', year: '2026', type: 'Event' },
    { event: 'Live Music Akhir Pekan', location: 'Cafe Hits Jatibarang', year: '2026', type: 'Reguler' },
    { event: 'Wedding of Ayu & Bima', location: 'Gedung PGRI Indramayu', year: '2026', type: 'Wedding' },
    { event: 'Festival Jajanan Lokal', location: 'Sport Center Indramayu', year: '2026', type: 'Festival' },
    { event: 'Gathering Komunitas Motor', location: 'Cirebon', year: '2026', type: 'Event' },
    { event: 'New Year Eve (Debut)', location: 'Alun-Alun Indramayu', year: '2025', type: 'Event' },
  ];

  const bookingSteps = [
    { title: 'Hubungi Kami', desc: 'Kontak via WhatsApp atau Email untuk mengecek jadwal kosong kami.' },
    { title: 'Diskusi Konsep', desc: 'Bicarakan konsep acara, genre musik, dan request lagu spesial Anda.' },
    { title: 'Tanda Jadi (DP)', desc: 'Pembayaran Down Payment untuk mengunci jadwal perform Alofa Band.' },
    { title: 'It\'s Showtime!', desc: 'Kami akan datang tepat waktu dan memberikan penampilan terbaik di acara Anda.' },
  ];

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-red-600 selection:text-white transition-colors duration-500">
        
        {/* NAVIGATION */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md py-4 shadow-xl border-b border-gray-200 dark:border-red-900/30' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/logo-alofa.jpeg" 
                alt="Alofa Logo" 
                className="w-10 h-10 object-cover rounded-full bg-white border border-gray-200 dark:border-zinc-800"
                onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
              />
              <span className={`text-2xl font-bold tracking-tighter uppercase ${isScrolled ? 'text-gray-900 dark:text-white' : (isDarkMode ? 'text-white' : 'text-gray-900')}`}>Alofa</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium hover:text-red-600 dark:hover:text-yellow-500 transition-colors uppercase tracking-wider ${isScrolled ? 'text-gray-600 dark:text-gray-300' : (isDarkMode ? 'text-gray-300' : 'text-gray-800')}`}
                >
                  {link.name}
                </button>
              ))}
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-yellow-500' : 'bg-black/10 dark:bg-white/10 text-gray-800 dark:text-yellow-500 backdrop-blur-sm'}`}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-500 bg-zinc-800' : 'text-gray-600 bg-gray-200'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-900 shadow-2xl border-t border-gray-200 dark:border-zinc-800">
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-yellow-500 transition-colors py-2 border-b border-gray-100 dark:border-zinc-800"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a1a2d480ee23?auto=format&fit=crop&w=1920&q=80" 
              alt="Band performing" 
              className="w-full h-full object-cover opacity-20 dark:opacity-30 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-red-50/70 to-gray-50 dark:from-black/60 dark:via-red-950/40 dark:to-black transition-colors duration-500"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 dark:bg-yellow-500/10 text-red-600 dark:text-yellow-500 font-semibold text-sm mb-6 border border-red-200 dark:border-yellow-500/20">
              Band Lokal Indramayu & Sekitarnya
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white transition-colors duration-500">
              Mencari Jati Diri Melalui <span className="text-red-600 dark:text-red-500">Harmoni</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors duration-500">
              Alofa siap memberikan penampilan musik yang asik dan seru untuk Wedding, Event, Cafe, dan panggung lainnya di Indramayu dan sekitarnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('booking')} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                Undang Kami <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection('history')} className="bg-white/50 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                Lihat Panggung Kami <Music className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* PROFILE SECTION */}
        <section id="profil" className="py-24 bg-white dark:bg-black transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-100 dark:bg-red-600/20 rounded-3xl blur-xl transition-colors duration-500"></div>
              <img 
                src="/logo-alofa.jpeg" 
                 alt="Alofa Profile" 
                 className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full border border-gray-200 dark:border-zinc-800"
              />
              </div>
              <div>
                <h2 className="text-red-600 dark:text-yellow-500 font-semibold tracking-wider uppercase mb-2">Tentang Kami</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500">Siapa Alofa?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 transition-colors duration-500">
                  Mulai berdiri sejak <strong>25 Desember 2025</strong>, Alofa adalah band lokal yang jujur saja—<strong>masih bingung mencari jati diri</strong>. Kami belum terpatok pada satu genre yang kaku, dan justru itulah yang membuat penampilan kami selalu fresh dan penuh kejutan!
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 transition-colors duration-500">
                  Berbasis di <strong>Indramayu, Jawa Barat dan sekitarnya</strong>, kami siap meramaikan berbagai acara mulai dari pensi, cafe, hingga wedding dengan energi yang maksimal dan gaya kami sendiri.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Star className="text-red-500 dark:text-yellow-500 w-8 h-8" />
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white">100%</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Totalitas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Music className="text-red-600 dark:text-red-500 w-8 h-8" />
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white">All Genres</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Bebas Request</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DISKOGRAFI / KARYA SECTION */}
        <section id="diskografi" className="py-24 bg-gray-50 dark:bg-zinc-950 border-y border-gray-200 dark:border-zinc-900 transition-colors duration-500 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-16">
            <h2 className="text-red-600 dark:text-yellow-500 font-semibold tracking-wider uppercase mb-2">Karya Original</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500">Diskografi Kami</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-500">
              Selain membawakan lagu-lagu hits, kami juga menumpahkan cerita dan rasa melalui karya original Alofa.
            </p>
          </div>

          <div className="relative w-full py-4">
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-gray-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-gray-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-scroll gap-6 px-6" style={{ animationDirection: 'reverse' }}>
              {[...singles, ...singles].map((single, index) => {
                const cardContent = (
                  <div className={`w-80 md:w-96 flex items-center justify-between p-4 bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-red-500 dark:hover:border-red-600 shadow-sm hover:shadow-md transition-all group ${single.url ? 'cursor-pointer' : ''}`}>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm">
                        <PlayCircle className="w-8 h-8" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-yellow-500 transition-colors truncate w-32 md:w-48">{single.title}</h4>
                        <p className="text-gray-500 text-sm font-medium">{single.artist}</p>
                      </div>
                    </div>
                    <div className="text-gray-400 dark:text-zinc-600 text-xs font-semibold px-2 tracking-widest uppercase">
                      Single
                    </div>
                  </div>
                );

                return single.url ? (
                  <a key={index} href={single.url} target="_blank" rel="noopener noreferrer" className="block flex-shrink-0">
                    {cardContent}
                  </a>
                ) : (
                  <div key={index} className="block flex-shrink-0">
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <a href="https://www.youtube.com/@alofaofficial" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 font-bold transition-colors">
                Dengarkan di YouTube <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </section>

        {/* HISTORY PERFORM SECTION */}
        <section id="history" className="py-24 bg-white dark:bg-black transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-red-600 dark:text-yellow-500 font-semibold tracking-wider uppercase mb-2">Jejak Langkah</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-500">Panggung Kami</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Meskipun masih mencari jati diri, kami sudah meramaikan berbagai panggung di Indramayu dan sekitarnya!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {history.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-red-400 dark:hover:border-red-600/50 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-white dark:bg-zinc-800 text-red-600 dark:text-yellow-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-200 dark:border-yellow-500/20">
                      {item.type}
                    </span>
                    <span className="text-gray-500 text-sm font-semibold flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {item.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.event}</h4>
                  <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-red-500" /> {item.location}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-500 italic">...dan panggung-panggung seru lainnya.</p>
            </div>
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section id="booking" className="py-24 bg-yellow-400 dark:bg-yellow-500 text-black transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-bold tracking-wider uppercase mb-2 text-red-700">Ajakan Kerjasama</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Mau Kami Main di Acaramu?</h3>
                <p className="text-yellow-950 text-lg mb-8 font-medium">
                  Proses booking sangat mudah. Kami siap berdiskusi untuk menyesuaikan perform dengan vibe acara dan panggung Anda, khususnya di wilayah Indramayu dan sekitarnya.
                </p>
                
                <div className="space-y-6">
                  {bookingSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-black text-yellow-500 rounded-full flex items-center justify-center font-bold text-xl">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-1">{step.title}</h4>
                        <p className="text-yellow-950 font-medium">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-black rounded-3xl p-8 lg:p-12 text-gray-900 dark:text-gray-100 shadow-2xl relative overflow-hidden border border-gray-200 dark:border-red-900/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10">
                  <Music className="w-32 h-32 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Mulai Diskusi</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">Kirim detail acara Anda, kami akan membalas secepatnya.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Nama Lengkap</label>
                    <input type="text" className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-gray-900 dark:text-white" placeholder="Budi Santoso" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Tanggal Acara</label>
                      <input type="date" className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Jenis Acara</label>
                      <select className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-gray-900 dark:text-white">
                        <option>Wedding</option>
                        <option>Pensi/Festival</option>
                        <option>Cafe/Reguler</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Pesan Tambahan / Lokasi</label>
                    <textarea rows="3" className="w-full bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-gray-900 dark:text-white" placeholder="Ceritakan sedikit tentang acara Anda (di Indramayu/sekitarnya)..."></textarea>
                  </div>
                  <button 
                    type="button"
                    onClick={() => window.open('https://wa.me/6287785453693', '_blank')}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-xl transition-colors mt-4"
                  >
                    Kirim Pesan via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* KONTAK & FOOTER SECTION */}
        <footer id="kontak" className="bg-white dark:bg-black pt-24 pb-12 border-t border-gray-200 dark:border-zinc-900 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="/logo-alofa.jpeg" 
                    alt="Alofa Logo" 
                    className="w-12 h-12 object-cover rounded-full bg-white border border-gray-200 dark:border-zinc-800"
                    onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                  />
                  <span className="text-3xl font-bold tracking-tighter uppercase text-gray-900 dark:text-white">Alofa</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  Band yang masih mencari jati diri, tapi 100% siap memberikan keseruan di panggung Anda. Berbasis di Indramayu dan sekitarnya.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/alofaofficial/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-full hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white transition-colors text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://www.youtube.com/@alofaofficial" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-full hover:bg-red-600 dark:hover:bg-red-600 hover:text-white transition-colors text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.5 5 4.6 4.6C5.8 4.3 12 4.3 12 4.3s6.2 0 7.4.3c2.1.4 2.1 2.5 2.1 2.5s.3 2 .3 4.9v1.4c0 2.9-.3 4.9-.3 4.9s0 2.1-2.1 2.5c-1.2.3-7.4.3-7.4.3s-6.2 0-7.4-.3c-2.1-.4-2.1-2.5-2.1-2.5s-.3-2-.3-4.9V12c0-2.9.3-4.9.3-4.9Z"/><path d="m10 15 5-3-5-3v6Z"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@alofa_officiall" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-full hover:bg-red-600 dark:hover:bg-red-600 hover:text-white transition-colors text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://open.spotify.com/artist/7jUKJfizUuHabqXLvSQ6Tf?si=cSgQ_VctQtqg9y1IG4F_Jw" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-full hover:bg-red-600 dark:hover:bg-red-600 hover:text-white transition-colors text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C22 6.477 17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.467-.077-.334.132-.67.466-.746 3.82-.876 7.086-.496 9.715 1.112.294.18.386.563.208.857zm1.31-3.197c-.226.368-.707.48-1.075.253-2.693-1.65-6.812-2.148-9.97-1.176-.412.127-.85-.104-.976-.517-.126-.412.105-.85.518-.976 3.65-1.127 8.21-.575 11.25 1.29.367.227.48.708.253 1.076zm.135-3.342c-3.23-1.92-8.55-2.096-11.62-1.16-.505.153-1.037-.13-1.19-.636-.153-.505.13-1.037.636-1.19 3.53-1.077 9.4-1.282 13.13.935.45.267.595.845.328 1.295-.268.45-.846.595-1.296.328z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6 uppercase tracking-wider">Tautan Cepat</h4>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                  <li><button onClick={() => scrollToSection('profil')} className="hover:text-red-600 dark:hover:text-yellow-500 transition-colors">Profil Band</button></li>
                  <li><button onClick={() => scrollToSection('diskografi')} className="hover:text-red-600 dark:hover:text-yellow-500 transition-colors">Diskografi</button></li>
                  <li><button onClick={() => scrollToSection('history')} className="hover:text-red-600 dark:hover:text-yellow-500 transition-colors">History Perform</button></li>
                  <li><button onClick={() => scrollToSection('booking')} className="hover:text-red-600 dark:hover:text-yellow-500 transition-colors">Booking</button></li>
                </ul>
              </div>

              {/* Contact Person */}
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6 uppercase tracking-wider">Narahubung</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-lg text-red-600 dark:text-yellow-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">WhatsApp / Telepon</p>
                      <p className="text-gray-900 dark:text-white font-medium text-lg">0877-8545-3693</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-gray-100 dark:bg-zinc-900 p-3 rounded-lg text-red-600 dark:text-yellow-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email Resmi</p>
                      <p className="text-gray-900 dark:text-white font-medium text-lg">alofabandofficial@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

            <div className="border-t border-gray-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Alofa Management. All rights reserved.</p>
              <p>Indramayu, Jawa Barat.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}