import React, { useState } from 'react'
import Magnet from 'components/effect/magnet'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import { useTranslation } from 'lib/translations'
import ExperienceRow, { ExperienceRowProps } from 'module/about/experience-row'
import LetterSpacingTitle from 'module/about/letter-spacing-title'
import { AiOutlineArrowDown } from 'react-icons/ai'
import {
  SiAmazonaws,
  SiChartdotjs,
  SiDart,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGoogle,
  SiHtml5,
  SiIbm,
  SiJavascript,
  SiLaravel,
  SiLinkedin,
  SiMicrosoft,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPython,
  SiReact,
  SiResearchgate,
  SiScikitlearn,
  SiTailwindcss,
  SiVite
} from 'react-icons/si'
import InstagramHoverPreview from 'components/common/instagram-hover-preview'
import DapoerPohaciHoverPreview from 'components/common/dapoer-pohaci-hover-preview'
import SipenaHoverPreview from 'components/common/sipena-hover-preview'
import FebUnsapHoverPreview from 'components/common/feb-unsap-hover-preview'
import SentimenHoverPreview from 'components/common/sentimen-hover-preview'
import JelajahHoverPreview from 'components/common/jelajah-hover-preview'
import NimexxHoverPreview from 'components/common/nimexx-hover-preview'
import GoogleSkillsHoverPreview from 'components/common/google-skills-hover-preview'
import VibeCodingHoverPreview from 'components/common/vibe-coding-hover-preview'
import LiterasiDigitalHoverPreview from 'components/common/literasi-digital-hover-preview'
import ResearchGateHoverPreview from 'components/common/researchgate-hover-preview'
import CgmiHoverPreview from 'components/common/cgmi-hover-preview'
import AseanHoverPreview from 'components/common/asean-hover-preview'
import DicodingHoverPreview from 'components/common/dicoding-hover-preview'
import IbmHoverPreview from 'components/common/ibm-hover-preview'
import CertificateModal from 'components/common/certificate-modal'
import LiterasiDigitalCert from 'assets/images/literasi-digital-cert.jpg'
import SipenaLogo from 'assets/images/sipena-logo.png'
import FebMockup1 from 'assets/images/feb-mockup-1.jpg'
import FebMockup2 from 'assets/images/feb-mockup-2.png'
import FebMockup3 from 'assets/images/feb-mockup-3.png'
import PohaciMockup from 'assets/images/dapoer-pohaci-mockup.jpg'
import Pohaci1 from 'assets/images/dapoer-pohaci-1.jpg'
import Pohaci2 from 'assets/images/dapoer-pohaci-2.jpg'
import KknIgImg from 'assets/images/kkn-ig.png'
import JelajahMockup from 'assets/images/jelajah-nusantara-mockup.png'
import SentimenMockup from 'assets/images/sentimen-ijazah-mockup.jpg'
import Nimexx1 from 'assets/images/nimexx-mockup-1.png'
import Nimexx2 from 'assets/images/nimexx-mockup-2.jpg'
import VibeCodingCert from 'assets/images/vibe-coding-cert.png'
import GoogleSkillsImg from 'assets/images/google-skills-badge.png'
import ResearchGateImg from 'assets/images/researchgate-paper.png'
import CgmiMockup from 'assets/images/cgmi-mockup.png'

export default function SectionExperiences() {
  const { t, lang } = useTranslation()
  const [isCertModalOpen, setIsCertModalOpen] = useState(false)
  const [activeCertId, setActiveCertId] = useState<string | undefined>()

  const handleOpenCertModal = (certId?: string) => {
    setActiveCertId(certId)
    setIsCertModalOpen(true)
  }
  const experiences: ExperienceRowProps[] = [
    {
      text1: 'FEB UNSAP',
      text2: 'Nov 2025 - May 2026',
      text3: 'Full Stack Web Developer (Portal & 23 Modul CMS)',
      description:
        lang === 'id'
          ? 'Merancang dan membangun ulang portal web resmi & CMS Fakultas Ekonomi dan Bisnis UNSAP menggunakan Laravel 12, PHP 8.2, MySQL, dan Tailwind CSS untuk melayani 3 program studi (Manajemen, Akuntansi, Magister Manajemen), 1.500+ mahasiswa, 45+ dosen, serta 5.000+ alumni. Arsitektur mencakup 30 model Eloquent, 59 migrasi database, 64 controller (23 modul Admin CMS), dan 201 Blade views—lengkap dengan sistem pengajuan surat mahasiswa digital (auto-generate DOCX via PHPWord), impor Excel, Google OAuth, Multi-Role RBAC, serta keamanan CSP & reCAPTCHA. Portal ini ikut menjadi data dukung keterbukaan informasi tata kelola & repositori SK saat Prodi S1 Manajemen meraih Akreditasi Unggul LAMEMBA (Nov 2026).'
          : 'Redesigned and engineered the official web portal and academic CMS for FEB UNSAP using Laravel 12, PHP 8.2, MySQL, and Tailwind CSS—serving 3 study programs (Management, Accounting, Master of Management), 1,500+ students, 45+ lecturers, and 5,000+ alumni. Built across 30 Eloquent models, 59 database migrations, 64 controllers (23 Admin CMS modules), and 201 Blade views featuring automated DOCX student letter workflows (PHPWord), bulk Excel imports, Google OAuth, Multi-Role RBAC, and CSP/reCAPTCHA security, supporting governance transparency when S1 Management achieved LAMEMBA "Unggul" accreditation (Nov 2026).',
      color: '#0091F8',
      hoverElement: <FebUnsapHoverPreview />,
      fullViewImage: [FebMockup1, FebMockup2, FebMockup3],
      fullViewTitle: 'Website Resmi FEB UNSAP (Laravel 12 · 23 Modul CMS · MySQL)',
      link: 'https://feb.unsap.ac.id/',
      techStack: [
        { name: 'Laravel 12', icon: SiLaravel },
        { name: 'PHP 8.2', icon: SiPhp },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Vite', icon: SiVite }
      ]
    },
    {
      text1: 'Dapoer Sari Pohaci',
      text2: 'Jan 2026 - Feb 2026',
      text3: 'Web Developer (KKN Pengabdian)',
      description:
        lang === 'id'
          ? 'Kegiatan lapangan pengabdian masyarakat KKN Tematik di Desa Serang, Sumedang dengan mendigitalisasi pelaku UMKM kuliner tradisional melalui perancangan website profil produk dan katalog daring.'
          : 'Community service field initiative during university KKN in Serang Village, Sumedang, digitizing a local culinary MSME with a responsive product showcase and web catalog.',
      color: '#F1592A',
      hoverElement: <DapoerPohaciHoverPreview />,
      fullViewImage: [PohaciMockup, Pohaci1, Pohaci2],
      fullViewTitle: 'Dapoer Sari Pohaci - Digitalisasi UMKM Kuliner (KKN)',
      link: 'https://dapoer-saripohaci.web.app/',
      techStack: [
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Firebase', icon: SiFirebase }
      ]
    },
    {
      text1: 'KKN Desa Serang',
      text2: 'Jan 2026 - Feb 2026',
      text3: 'Publikasi & Dokumentasi (@kkndesaserang2026.archive)',
      description:
        lang === 'id'
          ? 'Peran lapangan sebagai divisi Publikasi dan Dokumentasi (PDD) KKN Tematik UNSAP 2026 di Desa Serang. Bertanggung jawab atas peliputan kegiatan pengabdian, produksi konten audio-visual, dan kurasi arsip media sosial resmi.'
          : 'Field role in Publication & Documentation (PDD) for KKN Tematik UNSAP 2026 in Serang Village, responsible for event coverage, audio-visual production, and social media media archive.',
      color: '#E1306C',
      hoverElement: <InstagramHoverPreview />,
      fullViewImage: KknIgImg,
      fullViewTitle: 'Publikasi & Dokumentasi KKN Tematik UNSAP 2026',
      link: 'https://www.instagram.com/kkndesaserang2026.archive?utm_source=ig_web_button_share_sheet&exln=ZDNlZDc0MzIxNw=='
    }
  ]

  const selectedProjects: ExperienceRowProps[] = [
    {
      text1: 'SIPENA',
      text2: '2026',
      text3: 'Sistem Informasi Ujian & Absensi (Completed · Pre-Deployment)',
      description:
        lang === 'id'
          ? 'Ekosistem ujian digital multi-platform (Android Flutter, iOS PWA, Web Admin React) yang dirancang dan dibangun selesai dalam koordinasi teknis bersama staf IT untuk skenario ujian akademik FEB UNSAP. Mengimplementasikan arsitektur serverless (Firestore & Realtime DB), 10s heartbeat live monitoring, deteksi perpindahan aplikasi anti-cheat, rekapitulasi Berita Acara PDF otomatis, serta notifikasi batch Firebase Cloud Messaging (FCM).'
          : 'Multi-platform digital examination ecosystem (Android Flutter, iOS PWA, React Web Admin) architected and completed end-to-end (pre-deployment) in technical coordination with IT staff for FEB UNSAP examination workflows. Features serverless Firestore & Realtime DB architecture, 10s heartbeat live monitoring, background anti-cheat detection, automated PDF minutes, and batch FCM notifications.',
      color: '#2E9E6C',
      hoverElement: <SipenaHoverPreview />,
      fullViewImage: SipenaLogo,
      fullViewTitle: 'SIPENA - Sistem Informasi Ujian & Absensi FEB UNSAP',
      link: 'https://github.com/Renohidayat/feb-unsap-exam',
      techStack: [
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Dart', icon: SiDart },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'React PWA', icon: SiReact }
      ]
    },
    {
      text1: 'Website FEB UNSAP',
      text2: '2025 - 2026',
      text3: 'Portal Akademik, Layanan Surat & 23 Modul CMS',
      description:
        lang === 'id'
          ? 'Portal informasi resmi & CMS FEB UNSAP (Laravel 12, MySQL) dengan 30 model Eloquent, 59 migrasi DB, 23 modul Admin CMS, dan 201 Blade views—melayani 3 prodi, 1.500+ mahasiswa, 45+ dosen, & 5.000+ alumni. Dilengkapi pengajuan surat digital (ekspor DOCX otomatis), direktori akreditasi, portal jurnal, Google OAuth, dan Multi-Role RBAC yang turut mendukung transparansi tata kelola saat Prodi S1 Manajemen meraih Akreditasi Unggul LAMEMBA.'
          : 'Official FEB UNSAP portal & academic CMS (Laravel 12, MySQL) spanning 30 Eloquent models, 59 DB migrations, 23 Admin CMS modules, and 201 Blade views—serving 3 study programs, 1,500+ students, 45+ lecturers, and 5,000+ alumni with automated DOCX student letter workflows, accreditation archives, journal portals, Google OAuth, and RBAC, supporting S1 Management achieving LAMEMBA "Unggul" accreditation.',
      color: '#0091F8',
      hoverElement: <FebUnsapHoverPreview />,
      fullViewImage: [FebMockup1, FebMockup2, FebMockup3],
      fullViewTitle: 'Website Resmi FEB UNSAP (Laravel 12 · 23 Modul CMS)',
      link: 'https://feb.unsap.ac.id/',
      techStack: [
        { name: 'Laravel 12', icon: SiLaravel },
        { name: 'PHP 8.2', icon: SiPhp },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Vite', icon: SiVite }
      ]
    },
    {
      text1: 'Jelajah Nusantara AI',
      text2: '2026',
      text3: 'AI Travel Planner Assistant',
      description:
        lang === 'id'
          ? 'Platform perencana perjalanan wisata otomatis berbasis AI (DeepSeek / OpenAgentic) di Indonesia. Menyediakan itinerary harian cerdas, peta interaktif via Leaflet.js, manajemen anggaran visual dengan Chart.js, dan database real-time Firebase dalam arsitektur monorepo Vercel Serverless.'
          : 'Automated AI travel itinerary planning platform (DeepSeek / OpenAgentic) across Indonesia. Features smart daily schedules, interactive Leaflet.js mapping, visual budget tracking via Chart.js, and real-time Firebase in a Vercel Serverless monorepo.',
      color: '#A3195B',
      hoverElement: <JelajahHoverPreview />,
      fullViewImage: JelajahMockup,
      fullViewTitle: 'Jelajah Nusantara AI - Intelligent Travel Planner',
      link: 'https://jelajah-nusantara-ai.vercel.app/',
      techStack: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Vite', icon: SiVite },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'DeepSeek AI', icon: SiOpenai }
      ]
    },
    {
      text1: 'Analisis Sentimen',
      text2: '2026',
      text3: 'Machine Learning Research',
      description:
        lang === 'id'
          ? 'Riset NLP pemrosesan sentimen opini publik terhadap isu ijazah Presiden Jokowi dari 11 video viral YouTube (2.561 komentar). Menggunakan SVM-RBF dan PySastrawi (akurasi 75,24%, F1 73,46%, Fleiss’ Kappa 0.8635), dideploy terpadu dengan backend FastAPI dan dashboard interaktif React di Vercel.'
          : 'NLP research analyzing public sentiment on President Jokowi’s degree controversy across 11 viral YouTube videos (2,561 comments). Uses SVM-RBF & PySastrawi (75.24% accuracy, 73.46% F1, Fleiss’ Kappa 0.8635), unified with FastAPI backend and React dashboard on Vercel.',
      color: '#F85959',
      hoverElement: <SentimenHoverPreview />,
      fullViewImage: SentimenMockup,
      fullViewTitle: 'Riset Machine Learning: Analisis Sentimen Opini Publik',
      link: 'https://sentimen-ijazah.vercel.app/',
      techStack: [
        { name: 'Python', icon: SiPython },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'React', icon: SiReact },
        { name: 'Vite', icon: SiVite }
      ]
    },
    {
      text1: 'CGMI Assessment App',
      text2: '2026',
      text3: 'Civic Governance Web App (Kab. Sumedang)',
      description:
        lang === 'id'
          ? 'Platform web Single Page Application (SPA) instrumen pengukuran Collaboration Governance Maturity Index untuk instansi pemerintah di Kabupaten Sumedang. Mengevaluasi 30 pertanyaan dari 6 dimensi, kalkulasi skor otomatis ke 5 level kematangan, visualisasi Radar Chart (Chart.js), arsitektur modular Vanilla JS ES6 murni, serta sistem autentikasi hybrid (Access Code responden & Google OAuth admin whitelist) berbasis Firebase.'
          : 'Single Page Application (SPA) web platform for measuring the Collaboration Governance Maturity Index across local government agencies in Sumedang Regency. Evaluates 30 questions across 6 dimensions with automated scoring into 5 maturity levels, interactive Radar Chart visualization (Chart.js), pure Vanilla JS ES6 modular architecture, and hybrid authentication on Firebase.',
      color: '#0F62FE',
      hoverElement: <CgmiHoverPreview />,
      fullViewImage: CgmiMockup,
      fullViewTitle: 'CGMI Assessment App - Collaboration Governance Maturity Index (Kab. Sumedang)',
      link: 'https://cgmi-assessmentt.web.app/',
      techStack: [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Chart.js', icon: SiChartdotjs },
        { name: 'HTML5', icon: SiHtml5 }
      ]
    },
    {
      text1: 'NimeXx',
      text2: '2025',
      text3: 'Mobile App (Anime Streaming)',
      description:
        lang === 'id'
          ? 'Aplikasi mobile streaming berbasis Flutter dan Dart dengan integrasi katalog anime daring, antarmuka modern, dan pemutar video interaktif.'
          : 'Cross-platform mobile anime streaming app with clean UI, search discovery, custom video player, and cloud synchronization.',
      color: '#411719',
      hoverElement: <NimexxHoverPreview />,
      fullViewImage: [Nimexx1, Nimexx2],
      fullViewTitle: 'NimeXx - Aplikasi Streaming Anime (Flutter & Dart)',
      link: 'https://apkpure.com/id/nimexx/com.rennv.nimexxv2',
      techStack: [
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Dart', icon: SiDart },
        { name: 'Firebase', icon: SiFirebase }
      ]
    },
    {
      text1: 'Dapoer Sari Pohaci',
      text2: '2026',
      text3: 'Digitalisasi UMKM (KKN)',
      description:
        lang === 'id'
          ? 'Landing page dan etalase digital berbasis Tailwind CSS dan Firebase untuk produk kuliner tradisional UMKM di Desa Serang, mempermudah pemesanan langsung via WhatsApp.'
          : 'Digital storefront web app empowering a local traditional snack business in Serang Village with Tailwind CSS and direct WhatsApp ordering.',
      color: '#F1592A',
      hoverElement: <DapoerPohaciHoverPreview />,
      fullViewImage: [PohaciMockup, Pohaci1, Pohaci2],
      fullViewTitle: 'Dapoer Sari Pohaci - Digital Storefront UMKM',
      link: 'https://dapoer-saripohaci.web.app/',
      techStack: [
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Firebase', icon: SiFirebase }
      ]
    }
  ]

  const actvities: ExperienceRowProps[] = [
    {
      text1: 'Publikasi Ilmiah',
      text2: 'July 2025',
      text3: 'Author / Peneliti · ResearchGate (DOI: 10.13140/RG.2.2.28607.68009)',
      description:
        lang === 'id'
          ? 'Publikasi karya ilmiah berjudul "Pengaruh Kesadaran dan Persepsi terhadap Keamanan Informasi terhadap Pengalaman Menghadapi Ancaman Siber: Pendekatan PLS-SEM". Mengkaji korelasi empiris kesadaran keamanan digital dan mitigasi insiden siber menggunakan pemodelan persamaan struktural PLS-SEM.'
          : 'Scientific research paper titled "Impact of Information Security Awareness and Perception on Cyber Threat Experience: A PLS-SEM Approach". Investigates empirical correlations between digital security awareness, risk perceptions, and cyber threat occurrences using PLS-SEM structural equation modeling.',
      color: '#00CCBB',
      hoverElement: <ResearchGateHoverPreview />,
      fullViewImage: ResearchGateImg,
      fullViewTitle: 'Publikasi Riset Ilmiah (ResearchGate · DOI: 10.13140/RG.2.2.28607.68009)',
      link: 'https://www.researchgate.net/publication/393644925_Pengaruh_Kesadaran_dan_Persepsi_terhadap_Keamanan_Informasi_terhadap_Pengalaman_Menghadapi_Ancaman_Siber_Pendekatan_PLS-SEM',
      techStack: [{ name: 'ResearchGate', icon: SiResearchgate }]
    },
    {
      text1: 'Dicoding Indonesia',
      text2: 'Nov 2026',
      text3:
        lang === 'id'
          ? 'AWS AI Academy 2026 · Cloud, Gen AI, Python & Machine Learning (4 Sertifikat · 173 Jam)'
          : 'AWS AI Academy 2026 · Cloud, Gen AI, Python & Machine Learning (4 Certificates · 173 Hours)',
      description:
        lang === 'id'
          ? 'Koleksi 4 sertifikasi kompetensi kelulusan resmi dari Dicoding Indonesia (Program AWS AI Academy 2026, total 173 jam pembelajaran): Spec-Driven Development dengan Kiro, Belajar Dasar Cloud dan Gen AI di AWS, Memulai Pemrograman dengan Python, serta Belajar Machine Learning untuk Pemula beserta proyek akhir data tabular. Klik untuk membuka seluruh sertifikat.'
          : 'Collection of 4 official competency certificates from Dicoding Indonesia (AWS AI Academy 2026 program, 173 total learning hours): Spec-Driven Development with Kiro, AWS Cloud & Generative AI Basics, Python Programming, and Machine Learning for Beginners with final tabular modeling project. Click to view all certificates.',
      color: '#2D3E50',
      hoverElement: <DicodingHoverPreview />,
      certificateBadge: lang === 'id' ? '4 Sertifikat' : '4 Certificates',
      onRowClick: () => handleOpenCertModal('dicoding-sdd-kiro'),
      fullViewTitle: 'Koleksi Sertifikat Resmi Dicoding Indonesia · AWS AI Academy 2026 (4 Sertifikat)',
      link: 'https://www.dicoding.com/certificates/JLX1K9ORGP72',
      techStack: [
        { name: 'Dicoding Academy' },
        { name: 'AWS & Gen AI', icon: SiAmazonaws },
        { name: 'Python', icon: SiPython },
        { name: 'Machine Learning', icon: SiScikitlearn },
        { name: 'Kiro SDD' },
        { name: 'Google Partner', icon: SiGoogle }
      ]
    },
    {
      text1: 'IBM SkillsBuild',
      text2: 'Nov 2026',
      text3:
        lang === 'id'
          ? 'Web Development Fundamentals (Sertifikasi Kompetensi)'
          : 'Web Development Fundamentals (Competency Certification)',
      description:
        lang === 'id'
          ? 'Sertifikasi kompetensi resmi IBM SkillsBuild yang memvalidasi penguasaan arsitektur web modern, fondasi client-server, protokol HTTP, struktur web semantik (HTML5 & CSS3), logika rekayasa JavaScript, dan implementasi web responsif berstandar industri. Terverifikasi resmi melalui platform Credly. Klik untuk membuka sertifikat.'
          : 'Official competency certification from IBM SkillsBuild validating modern web architecture, client-server foundations, HTTP protocols, semantic HTML5/CSS3 structures, JavaScript engineering, and responsive web design standards. Officially verified on Credly. Click to view certificate.',
      color: '#0F62FE',
      hoverElement: <IbmHoverPreview />,
      certificateBadge: lang === 'id' ? 'Sertifikat Terverifikasi' : 'Verified Certificate',
      onRowClick: () => handleOpenCertModal('ibm-skillsbuild-web-dev'),
      fullViewTitle: 'IBM SkillsBuild - Web Development Fundamentals',
      link: 'https://www.credly.com/badges/fdf11895-7660-4cbb-94b0-d2f460ef2295',
      techStack: [
        { name: 'IBM SkillsBuild', icon: SiIbm },
        { name: 'Web Development' },
        { name: 'HTML5 & CSS3' },
        { name: 'JavaScript' },
        { name: 'Credly' }
      ]
    },
    {
      text1: 'ASEAN Foundation',
      text2: lang === 'id' ? 'Okt 2026' : 'Oct 2026',
      text3:
        lang === 'id'
          ? 'Cybersecurity, AI Readiness & Literasi Digital (7 Sertifikat)'
          : 'Cybersecurity, AI Readiness & Digital Literacy (7 Certificates)',
      description:
        lang === 'id'
          ? 'Koleksi 7 sertifikasi kompetensi resmi dari ASEAN Foundation (bekerja sama dengan Google.org, Microsoft, Infoxchange, dan LinkedIn) melalui portal ada.aseanfoundation.org. Mencakup AI Career Readiness, Keamanan Siber & Digital Safety, Literasi Media & Informasi, serta Mitigasi Misinformasi. Klik untuk membuka seluruh sertifikat.'
          : 'Collection of 7 official certifications from ASEAN Foundation (in partnership with Google.org, Microsoft, Infoxchange, and LinkedIn) on ada.aseanfoundation.org, covering AI Career Readiness, Cybersecurity & Digital Safety, Media Literacy, and Countering Disinformation. Click to view all certificates.',
      color: '#0055A5',
      hoverElement: <AseanHoverPreview />,
      certificateBadge: lang === 'id' ? '7 Sertifikat' : '7 Certificates',
      onRowClick: () => handleOpenCertModal('ai-career-readiness'),
      fullViewTitle: 'Koleksi Sertifikat Resmi ASEAN Foundation (7 Sertifikat)',
      link: 'https://ada.aseanfoundation.org',
      techStack: [
        { name: 'ASEAN Foundation' },
        { name: 'Cybersecurity' },
        { name: 'AI Readiness' },
        { name: 'Digital Literacy' },
        { name: 'Google.org', icon: SiGoogle },
        { name: 'Microsoft', icon: SiMicrosoft },
        { name: 'LinkedIn', icon: SiLinkedin }
      ]
    },
    {
      text1: 'Vibe Coding Study Jam',
      text2: 'May 2026',
      text3: 'Participant · Google Developer Groups (#JuaraVibeCoding)',
      description:
        lang === 'id'
          ? 'Partisipasi aktif dalam program #JuaraVibeCoding oleh Google Developer Groups bertema "Code Less, Build More". Fokus pada efisiensi rekayasa perangkat lunak modern dan integrasi workflow AI. No Kredensial: JVC2605-ABH7-5MXU. Klik untuk melihat sertifikat resmi.'
          : 'Certificate of Completion from Google Developer Groups for #JuaraVibeCoding Study Jam ("Code Less, Build More"), dedicated to rapid software development with modern AI workflows. Credential ID: JVC2605-ABH7-5MXU. Click to view official certificate.',
      color: '#4285F4',
      hoverElement: <VibeCodingHoverPreview />,
      certificateBadge: lang === 'id' ? 'Sertifikat Terverifikasi' : 'Verified Certificate',
      onRowClick: () => handleOpenCertModal('vibe-coding-study-jam'),
      fullViewTitle: 'Sertifikat Vibe Coding Study Jam (#JuaraVibeCoding) - Google Developer Groups',
      link: 'https://goo.gle/jvc-cert-verifier',
      techStack: [
        { name: 'Google Developers', icon: SiGoogle },
        { name: 'Vibe Coding' },
        { name: 'AI Workflows' },
        { name: 'Software Engineering' }
      ]
    },
    {
      text1: 'Google Cloud',
      text2: lang === 'id' ? 'Juni 2025' : 'June 2025',
      text3: 'Cloud Foundations & Skill Badges (Gold League)',
      description:
        lang === 'id'
          ? 'Pencapaian peringkat Gold League (10.195 poin) di Google Skills Boost dengan penyelesaian 8 kredensial resmi Google Cloud, mencakup Fondasi Cloud Computing (Infrastruktur, Data & AI, Networking, Dasar Cloud) serta implementasi praktis Cloud Load Balancing dan Jaringan Aman. Klik untuk melihat kredensial.'
          : 'Achieved Gold League (10,195 pts) on Google Skills Boost with 8 verified Google Cloud credentials across Cloud Computing Foundations (Infrastructure, Data & AI, Networking) and hands-on badges in Load Balancing and Security. Click to view credentials.',
      color: '#34A853',
      hoverElement: <GoogleSkillsHoverPreview />,
      certificateBadge: 'Gold League (8 Badges)',
      onRowClick: () => handleOpenCertModal('google-cloud-foundations'),
      fullViewTitle: 'Google Cloud Foundations & Skill Badges (Gold League - 10.195 Poin)',
      link: 'https://www.skills.google/public_profiles/dbededbb-2448-42df-aa6f-b04942cc5580',
      techStack: [
        { name: 'Google Cloud', icon: SiGoogle },
        { name: 'Cloud Computing' },
        { name: 'Infrastructure' },
        { name: 'Networking' }
      ]
    },
    {
      text1: 'Literasi Digital',
      text2: 'Feb 2024',
      text3: 'Sektor Pendidikan Tinggi · Kemenkominfo RI',
      description:
        lang === 'id'
          ? 'Sertifikat resmi Direktorat Pemberdayaan Informatika Kominfo dalam Seminar Literasi Digital di Universitas Sebelas April, bertema "Meningkatkan Peran Mahasiswa Sebagai Agen Perubahan di Era Digital". No: 27737076/23-30519/LITDIG/2024. Klik untuk melihat sertifikat resmi.'
          : 'Official certificate from Ministry of Communication and Informatics (Kominfo) at Universitas Sebelas April on "Empowering Students as Agents of Change in the Digital Era". Cert No: 27737076/23-30519/LITDIG/2024. Click to view official certificate.',
      color: '#FBBC05',
      hoverElement: <LiterasiDigitalHoverPreview />,
      certificateBadge: lang === 'id' ? 'Sertifikat Resmi' : 'Official Certificate',
      onRowClick: () => handleOpenCertModal('literasi-digital-kominfo'),
      fullViewTitle: 'Sertifikat Seminar Literasi Digital Mahasiswa : Kemenkominfo RI',
      techStack: [
        { name: 'Kemenkominfo RI' },
        { name: 'Literasi Digital' },
        { name: 'Etika Digital' }
      ]
    }
  ]

  return (
    <section id="section-experiences-about" className="CONTAINER">
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="MENU-CHANGE-OPACITY-0 flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>{t('about_experiences')}</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-100-STAGGER">
        {experiences.map((exp, i) => (
          <ExperienceRow {...exp} key={i} />
        ))}
      </div>
      <div className="h-[10vh] md:h-[15vh] lg:h-[30vh]"></div>
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>{t('about_selected_projects')}</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-100-STAGGER">
        {selectedProjects.map((exp, i) => (
          <ExperienceRow {...exp} key={i} />
        ))}
      </div>
      <div className="h-[10vh] md:h-[15vh] lg:h-[30vh]"></div>
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>{t('about_selected_activities')}</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-100-STAGGER">
        {actvities.map((exp, i) => (
          <ExperienceRow {...exp} key={i} />
        ))}
      </div>
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </section>
  )
}
