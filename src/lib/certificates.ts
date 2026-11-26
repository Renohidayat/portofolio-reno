import AseanAiCareerImg from 'assets/images/asean-ai-career-readiness.jpeg'
import AseanDigitalSafetyImg from 'assets/images/asean-digital-safety-awareness.jpeg'
import AseanMediaLiteracyImg from 'assets/images/asean-media-and-information-literacy.jpeg'
import AseanMicrosoftGuideImg from 'assets/images/asean-microsofts-guide-secure-world.jpeg'
import AseanMisinformationImg from 'assets/images/asean-misinformation-disinformation.jpeg'
import AseanResponsibleCitizensImg from 'assets/images/asean-responsible-digital-citizens.jpeg'
import AseanTechnicalPreventionImg from 'assets/images/asean-technical-prevention-incident-response.jpeg'
import DicodingKiroImg from 'assets/images/dicoding-spec-driven-development-dengan-kiro.jpg'
import DicodingAwsCloudImg from 'assets/images/dicoding-belajar-dasar-cloud-dan-gen-ai-di-aws.jpg'
import DicodingPythonImg from 'assets/images/dicoding-memulai-pemrograman-dengan-python.jpg'
import DicodingMlImg from 'assets/images/dicoding-belajar-machine-learning-untuk-pemula.jpg'
import IbmSkillsBuildImg from 'assets/images/ibm-skillsbuild-web-dev.png'
import VibeCodingCert from 'assets/images/vibe-coding-cert.png'
import GoogleSkillsImg from 'assets/images/google-skills-badge.png'
import LiterasiDigitalCert from 'assets/images/literasi-digital-cert.jpg'

export type CertificateGroupId = 'dicoding' | 'ibm' | 'asean' | 'vibe-coding' | 'google-cloud' | 'literasi-digital'

export interface CertificateItem {
  id: string
  groupId: CertificateGroupId
  groupName: {
    id: string
    en: string
  }
  institution: string
  title: string
  program: string
  partner?: string
  date: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  image: string
  pdfUrl?: string
  verifyUrl?: string
  verifyLabel?: {
    id: string
    en: string
  }
  credentialId?: string
  tags: string[]
  badge?: {
    id: string
    en: string
  }
  themeColor: string
}

export const CERTIFICATE_GROUPS: {
  id: 'all' | CertificateGroupId
  label: { id: string; en: string }
  count: number
}[] = [
  { id: 'all', label: { id: 'Semua Sertifikat', en: 'All Certificates' }, count: 15 },
  { id: 'dicoding', label: { id: 'Dicoding Academy', en: 'Dicoding Academy' }, count: 4 },
  { id: 'ibm', label: { id: 'IBM SkillsBuild', en: 'IBM SkillsBuild' }, count: 1 },
  { id: 'asean', label: { id: 'ASEAN Foundation', en: 'ASEAN Foundation' }, count: 7 },
  { id: 'vibe-coding', label: { id: 'Google Developers', en: 'Google Developers' }, count: 1 },
  { id: 'google-cloud', label: { id: 'Google Cloud', en: 'Google Cloud' }, count: 1 },
  { id: 'literasi-digital', label: { id: 'Kemenkominfo RI', en: 'Kemenkominfo RI' }, count: 1 }
]

export const ALL_CERTIFICATES: CertificateItem[] = [
  // 1. Dicoding Indonesia - AWS AI Academy 2026 (4 Certificates · 173 Hours)
  {
    id: 'dicoding-sdd-kiro',
    groupId: 'dicoding',
    groupName: {
      id: 'Dicoding Academy',
      en: 'Dicoding Academy'
    },
    institution: 'Dicoding Indonesia',
    title: 'Spec-Driven Development dengan Kiro',
    program: 'AWS AI Academy 2026 (10 Jam · Level Dasar)',
    partner: 'AWS (Amazon Web Services)',
    date: {
      id: '25 November 2026',
      en: 'November 25, 2026'
    },
    description: {
      id: 'Sertifikat kompetensi kelulusan Dicoding Academy (AWS AI Academy 2026) mengenai paradigma Spec-Driven Development (SDD) menggunakan Kiro—mencakup perancangan dokumen spesifikasi (Requirements, Design, Task Implementation), Prompt Engineering untuk SDD, pembangunan aplikasi web dengan alur kerja AI-assisted terstruktur, serta review kode otomatis dan penjagaan kualitas source code (10 jam belajar · Berlaku hingga 25 Nov 2029).',
      en: 'Dicoding Academy competency certificate (AWS AI Academy 2026) covering Spec-Driven Development (SDD) with Kiro—structuring Requirements, Design, and Task specifications, Prompt Engineering for SDD, iterative AI-assisted web development, automated code review, and code quality maintenance (10 study hours · Valid until Nov 25, 2029).'
    },
    image: DicodingKiroImg,
    pdfUrl: '/dicoding-certs/spec-driven-development-dengan-kiro.pdf',
    verifyUrl: 'https://www.dicoding.com/certificates/JLX1K9ORGP72',
    verifyLabel: {
      id: 'Verifikasi di Dicoding',
      en: 'Verify on Dicoding'
    },
    credentialId: 'JLX1K9ORGP72',
    tags: ['Spec-Driven Development', 'Kiro AI', 'AWS', 'AI-Assisted Coding', 'Dicoding'],
    badge: {
      id: 'AWS · 10 Jam',
      en: 'AWS · 10 Hours'
    },
    themeColor: '#22D3EE'
  },
  {
    id: 'dicoding-cloud-genai-aws',
    groupId: 'dicoding',
    groupName: {
      id: 'Dicoding Academy',
      en: 'Dicoding Academy'
    },
    institution: 'Dicoding Indonesia',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    program: 'AWS AI Academy 2026 (13 Jam · Level Dasar)',
    partner: 'AWS (Amazon Web Services)',
    date: {
      id: '25 November 2026',
      en: 'November 25, 2026'
    },
    description: {
      id: 'Sertifikat kompetensi kelulusan Dicoding & AWS yang memvalidasi penguasaan standar komputasi awan AWS: EC2, Elastic Load Balancing, SNS/SQS, CloudFront, Availability Zones, jaringan VPC/VPN, penyimpanan (EBS, S3, EFS, DynamoDB), keamanan IAM & Shared Responsibility Model, CloudWatch/CloudTrail, AWS Well-Architected Framework, serta dasar AI, Machine Learning & Generative AI di AWS (13 jam belajar · Berlaku hingga 25 Nov 2029).',
      en: 'Official Dicoding & AWS competency certificate validating AWS Cloud fundamentals: EC2, Elastic Load Balancing, SNS/SQS, CloudFront, Availability Zones, VPC/VPN networking, storage & databases (EBS, S3, EFS, DynamoDB), IAM security & Shared Responsibility Model, CloudWatch/CloudTrail, AWS Well-Architected Framework, and AI/ML & Generative AI on AWS (13 study hours · Valid until Nov 25, 2029).'
    },
    image: DicodingAwsCloudImg,
    pdfUrl: '/dicoding-certs/belajar-dasar-cloud-dan-gen-ai-di-aws.pdf',
    verifyUrl: 'https://www.dicoding.com/certificates/72ZDM54OJZYW',
    verifyLabel: {
      id: 'Verifikasi di Dicoding',
      en: 'Verify on Dicoding'
    },
    credentialId: '72ZDM54OJZYW',
    tags: ['AWS Cloud', 'Generative AI', 'Cloud Practitioner', 'IAM & VPC', 'Dicoding'],
    badge: {
      id: 'AWS · 13 Jam',
      en: 'AWS · 13 Hours'
    },
    themeColor: '#22D3EE'
  },
  {
    id: 'dicoding-python',
    groupId: 'dicoding',
    groupName: {
      id: 'Dicoding Academy',
      en: 'Dicoding Academy'
    },
    institution: 'Dicoding Indonesia',
    title: 'Memulai Pemrograman dengan Python',
    program: 'AWS AI Academy 2026 (60 Jam · Level Dasar & Pemula)',
    partner: 'Google Developers Authorized Training Partner',
    date: {
      id: '25 November 2026',
      en: 'November 25, 2026'
    },
    description: {
      id: 'Sertifikat kompetensi pemrograman Python berstandar industri (60 jam belajar): pengolahan data, control flow, array & matriks, fungsi dan prosedur (subprogram), Object-Oriented Programming (OOP), panduan gaya penulisan PEP8, unit testing otomatis, serta pemanfaatan library populer Python untuk pemrosesan teks, web scraping, machine learning, dan web development di VS Code, Jupyter Notebook & Google Colab (Berlaku hingga 25 Nov 2029).',
      en: 'Industry-standard Python programming competency certificate (60 study hours): data manipulation, control flow, arrays & matrices, subprograms, Object-Oriented Programming (OOP), PEP8 style guide, automated unit testing, and popular Python libraries for text processing, web scraping, machine learning, and web development using VS Code, Jupyter Notebook & Google Colab (Valid until Nov 25, 2029).'
    },
    image: DicodingPythonImg,
    pdfUrl: '/dicoding-certs/memulai-pemrograman-dengan-python.pdf',
    verifyUrl: 'https://www.dicoding.com/certificates/KEXLM75GYZG2',
    verifyLabel: {
      id: 'Verifikasi di Dicoding',
      en: 'Verify on Dicoding'
    },
    credentialId: 'KEXLM75GYZG2',
    tags: ['Python', 'OOP', 'Unit Testing', 'PEP8', 'Google Developers', 'Dicoding'],
    badge: {
      id: '60 Jam · Python',
      en: '60 Hours · Python'
    },
    themeColor: '#22D3EE'
  },
  {
    id: 'dicoding-machine-learning',
    groupId: 'dicoding',
    groupName: {
      id: 'Dicoding Academy',
      en: 'Dicoding Academy'
    },
    institution: 'Dicoding Indonesia',
    title: 'Belajar Machine Learning untuk Pemula',
    program: 'AWS AI Academy 2026 (90 Jam · Proyek Akhir Data Tabular)',
    partner: 'Google Developers Authorized Training Partner',
    date: {
      id: '25 November 2026',
      en: 'November 25, 2026'
    },
    description: {
      id: 'Sertifikat kompetensi intensif Machine Learning (90 jam belajar + evaluasi submission proyek akhir): mencakup end-to-end ML workflow, Supervised Learning klasifikasi (KNN, Decision Tree) dan regresi linear, Unsupervised Learning clustering (K-Means), teknik feature engineering, penanganan overfitting & underfitting, serta hyperparameter tuning pada dataset tabular kasus nyata (Berlaku hingga 25 Nov 2029).',
      en: 'Intensive Machine Learning competency certificate (90 study hours + final project submission): covering end-to-end ML workflow, Supervised Learning (KNN, Decision Tree classification, Linear Regression), Unsupervised Learning (K-Means clustering), feature engineering, overfitting & underfitting mitigation, and hyperparameter tuning on real-world tabular datasets (Valid until Nov 25, 2029).'
    },
    image: DicodingMlImg,
    pdfUrl: '/dicoding-certs/belajar-machine-learning-untuk-pemula.pdf',
    verifyUrl: 'https://www.dicoding.com/certificates/6RPNORMD4X2M',
    verifyLabel: {
      id: 'Verifikasi di Dicoding',
      en: 'Verify on Dicoding'
    },
    credentialId: '6RPNORMD4X2M',
    tags: ['Machine Learning', 'KNN & Decision Tree', 'K-Means', 'Feature Engineering', 'Dicoding'],
    badge: {
      id: '90 Jam · Proyek Akhir',
      en: '90 Hours · Final Project'
    },
    themeColor: '#22D3EE'
  },

  // 2. IBM SkillsBuild
  {
    id: 'ibm-skillsbuild-web-dev',
    groupId: 'ibm',
    groupName: {
      id: 'IBM SkillsBuild',
      en: 'IBM SkillsBuild'
    },
    institution: 'IBM SkillsBuild',
    title: 'Web Development Fundamentals',
    program: 'IBM SkillsBuild for Job Seekers & Students',
    partner: 'Supported by Credly',
    date: {
      id: '2 November 2026',
      en: 'November 2, 2026'
    },
    description: {
      id: 'Sertifikasi kompetensi resmi IBM SkillsBuild yang memvalidasi penguasaan arsitektur web modern, fondasi client-server, protokol HTTP, struktur web semantik (HTML5 & CSS3), logika rekayasa JavaScript, dan implementasi web responsif berstandar industri.',
      en: 'Official IBM SkillsBuild certification validating modern web architecture, client-server foundations, HTTP protocols, semantic HTML5/CSS3 structures, JavaScript engineering, and industry-standard responsive web design.'
    },
    image: IbmSkillsBuildImg,
    pdfUrl: '/ibm-skillsbuild-web-dev.pdf',
    verifyUrl: 'https://www.credly.com/badges/fdf11895-7660-4cbb-94b0-d2f460ef2295',
    verifyLabel: {
      id: 'Verifikasi di Credly',
      en: 'Verify on Credly'
    },
    credentialId: 'fdf11895-7660-4cbb-94b0-d2f460ef2295',
    tags: ['Web Development', 'IBM SkillsBuild', 'Credly', 'HTML5 & CSS3', 'JavaScript'],
    badge: {
      id: 'Sertifikat Terverifikasi',
      en: 'Verified Certificate'
    },
    themeColor: '#0F62FE'
  },

  // 2. ASEAN Foundation (7 Certificates)
  {
    id: 'ai-career-readiness',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'AI Career Readiness Training',
    program: 'ASEAN Ahead',
    partner: 'Supported by LinkedIn',
    date: {
      id: '31 Oktober 2026',
      en: 'October 31, 2026'
    },
    description: {
      id: 'Program pelatihan kesiapan karier berbasis kecerdasan buatan dari ASEAN Foundation dan LinkedIn, membekali pemahaman AI terapan, produktivitas generative AI, dan etika kecerdasan buatan di lingkungan profesional.',
      en: 'AI career readiness training by ASEAN Foundation and LinkedIn, equipping foundational applied AI, generative AI workflows, and workplace AI ethics.'
    },
    image: AseanAiCareerImg,
    pdfUrl: '/asean-certs/ai-career-readiness.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['AI Readiness', 'LinkedIn', 'Generative AI', 'Future of Work'],
    badge: {
      id: 'ASEAN Ahead · LinkedIn',
      en: 'ASEAN Ahead · LinkedIn'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'digital-safety-awareness',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Digital Safety Awareness & Cybersecurity Hygiene',
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Fondasi keamanan informasi personal & organisasi, manajemen kredensial aman, proteksi identitas daring, serta mitigasi rekayasa sosial dan serangan phishing.',
      en: 'Foundational personal and organizational digital security, credential hygiene, identity protection, and social engineering mitigation.'
    },
    image: AseanDigitalSafetyImg,
    pdfUrl: '/asean-certs/digital-safety-awareness.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Cybersecurity', 'Infoxchange', 'Cyber Hygiene', 'Digital Safety'],
    badge: {
      id: 'Cybersecurity Skilling',
      en: 'Cybersecurity Skilling'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'media-and-information-literacy',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Media and Information Literacy',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Pelatihan literasi media dan informasi digital dengan dukungan Google.org, memfokuskan kemampuan berpikir kritis dalam menganalisis keabsahan dan objektivitas informasi daring.',
      en: 'Media and information literacy curriculum supported by Google.org, sharpening critical thinking in evaluating online sources.'
    },
    image: AseanMediaLiteracyImg,
    pdfUrl: '/asean-certs/media-and-information-literacy.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Digital Literacy', 'Google.org', 'Critical Thinking', 'Media Literacy'],
    badge: {
      id: 'Google.org Supported',
      en: 'Google.org Supported'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'microsofts-guide-secure-world',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: "Microsoft's Guide to a Secure Digital World",
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange & Microsoft',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Panduan keamanan siber resmi Microsoft dan ASEAN Foundation mengenai lanskap ancaman siber modern, arsitektur pertahanan dasar, dan ketahanan siber terpadu.',
      en: "Official Microsoft & ASEAN Foundation security guide covering modern threat vectors, foundational defenses, and cyber resilience."
    },
    image: AseanMicrosoftGuideImg,
    pdfUrl: '/asean-certs/microsofts-guide-secure-world.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Cybersecurity', 'Microsoft', 'Security Guide', 'Infoxchange'],
    badge: {
      id: 'Microsoft & ASEAN',
      en: 'Microsoft & ASEAN'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'misinformation-disinformation',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Misinformation & Disinformation',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Metodologi verifikasi fakta digital, identifikasi misinformasi vs disinformasi terstruktur, analisis manipulasi media, dan teknik fact-checking di ranah digital.',
      en: 'Digital fact-checking methodologies, distinguishing misinformation vs coordinated disinformation, and media manipulation debunking.'
    },
    image: AseanMisinformationImg,
    pdfUrl: '/asean-certs/misinformation-disinformation.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Fact-checking', 'Google.org', 'Disinformation', 'Digital Verification'],
    badge: {
      id: 'Google.org Supported',
      en: 'Google.org Supported'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'responsible-digital-citizens',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Responsible Digital Citizens',
    program: 'ASEAN Digital Literacy Programme',
    partner: 'With support from Google.org',
    date: {
      id: '20 Oktober 2026',
      en: 'October 20, 2026'
    },
    description: {
      id: 'Kewargaan digital yang beretika, empati di ruang siber, perlindungan jejak digital (digital footprint), dan partisipasi positif serta aman di internet.',
      en: 'Ethical digital citizenship, digital empathy, digital footprint safeguarding, and responsible internet participation.'
    },
    image: AseanResponsibleCitizensImg,
    pdfUrl: '/asean-certs/responsible-digital-citizens.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Digital Citizenship', 'Google.org', 'Ethics', 'Digital Footprint'],
    badge: {
      id: 'Google.org Supported',
      en: 'Google.org Supported'
    },
    themeColor: '#F59E0B'
  },
  {
    id: 'technical-prevention-incident-response',
    groupId: 'asean',
    groupName: {
      id: 'ASEAN Foundation',
      en: 'ASEAN Foundation'
    },
    institution: 'ASEAN Foundation',
    title: 'Technical Prevention & Incident Response',
    program: 'ASEAN Cybersecurity Skilling Programme',
    partner: 'Supported by Infoxchange',
    date: {
      id: '31 Oktober 2026',
      en: 'October 31, 2026'
    },
    description: {
      id: 'Penanganan teknis insiden keamanan informasi, strategi defensif berlapis, triage insiden siber, dan prosedur eskalasi mitigasi risiko sistemik.',
      en: 'Technical incident handling, defense-in-depth principles, cyber incident triage workflows, and escalation procedures.'
    },
    image: AseanTechnicalPreventionImg,
    pdfUrl: '/asean-certs/technical-prevention-incident-response.pdf',
    verifyUrl: 'https://ada.aseanfoundation.org',
    verifyLabel: {
      id: 'Portal ASEAN',
      en: 'ASEAN Portal'
    },
    tags: ['Incident Response', 'Infoxchange', 'Cyber Defense', 'Security Triage'],
    badge: {
      id: 'Cybersecurity Skilling',
      en: 'Cybersecurity Skilling'
    },
    themeColor: '#F59E0B'
  },

  // 3. Google Developer Groups - Vibe Coding Study Jam
  {
    id: 'vibe-coding-study-jam',
    groupId: 'vibe-coding',
    groupName: {
      id: 'Google Developer Groups',
      en: 'Google Developer Groups'
    },
    institution: 'Google Developer Groups',
    title: 'Vibe Coding Study Jam (#JuaraVibeCoding)',
    program: 'Juara Vibe Coding ("Code Less, Build More")',
    partner: 'Google Developers Indonesia',
    date: {
      id: 'Mei 2026',
      en: 'May 2026'
    },
    description: {
      id: 'Sertifikat penyelesaian program #JuaraVibeCoding oleh Google Developer Groups bertema "Code Less, Build More". Fokus pada efisiensi rekayasa perangkat lunak modern, prototipe kilat, dan akselerasi pengembangan aplikasi menggunakan integrasi workflow AI. No Kredensial: JVC2605-ABH7-5MXU.',
      en: 'Certificate of Completion from Google Developer Groups for #JuaraVibeCoding Study Jam ("Code Less, Build More"), focusing on modern software engineering productivity, rapid AI-driven development workflows, and software acceleration. Credential ID: JVC2605-ABH7-5MXU.'
    },
    image: VibeCodingCert,
    pdfUrl: '/vibe-coding-cert.png',
    verifyUrl: 'https://goo.gle/jvc-cert-verifier',
    verifyLabel: {
      id: 'Verifikasi Google',
      en: 'Google Verifier'
    },
    credentialId: 'JVC2605-ABH7-5MXU',
    tags: ['Google Developers', 'Vibe Coding', 'AI Workflows', 'Software Engineering'],
    badge: {
      id: 'Sertifikat Terverifikasi',
      en: 'Verified Certificate'
    },
    themeColor: '#4285F4'
  },

  // 4. Google Cloud
  {
    id: 'google-cloud-foundations',
    groupId: 'google-cloud',
    groupName: {
      id: 'Google Cloud Skills Boost',
      en: 'Google Cloud Skills Boost'
    },
    institution: 'Google Cloud',
    title: 'Google Cloud Computing Foundations & Skill Badges',
    program: 'Google Skills Boost (Gold League · 10.195 Poin)',
    partner: 'Google Cloud Training',
    date: {
      id: 'Juni 2025',
      en: 'June 2025'
    },
    description: {
      id: 'Pencapaian peringkat Gold League (10.195 poin) di Google Skills Boost dengan penyelesaian 8 kredensial resmi Google Cloud, mencakup Fondasi Cloud Computing (Infrastruktur, Data & AI, Networking, Dasar Cloud) serta implementasi praktis Cloud Load Balancing dan Jaringan Aman.',
      en: 'Achieved Gold League (10,195 pts) on Google Skills Boost with 8 verified Google Cloud credentials across Cloud Computing Foundations (Infrastructure, Data & AI, Networking) and hands-on badges in Load Balancing and Security.'
    },
    image: GoogleSkillsImg,
    pdfUrl: '/google-skills-badge.png',
    verifyUrl: 'https://www.skills.google/public_profiles/dbededbb-2448-42df-aa6f-b04942cc5580',
    verifyLabel: {
      id: 'Profil Google Skills',
      en: 'Google Skills Profile'
    },
    tags: ['Google Cloud', 'Cloud Computing', 'Networking', 'Infrastructure', 'Gold League'],
    badge: {
      id: 'Gold League (8 Badges)',
      en: 'Gold League (8 Badges)'
    },
    themeColor: '#34A853'
  },

  // 5. Kemenkominfo RI
  {
    id: 'literasi-digital-kominfo',
    groupId: 'literasi-digital',
    groupName: {
      id: 'Kemenkominfo RI',
      en: 'Ministry of ICT (Kominfo)'
    },
    institution: 'Kemenkominfo RI',
    title: 'Seminar Literasi Digital Mahasiswa',
    program: 'Program Literasi Digital Nasional (Sektor Pendidikan Tinggi)',
    partner: 'Universitas Sebelas April',
    date: {
      id: 'Februari 2024',
      en: 'February 2024'
    },
    description: {
      id: 'Sertifikat resmi Direktorat Pemberdayaan Informatika Kominfo dalam Seminar Literasi Digital di Universitas Sebelas April, bertema "Meningkatkan Peran Mahasiswa Sebagai Agen Perubahan di Era Digital". No Sertifikat: 27737076/23-30519/LITDIG/2024.',
      en: 'Official certificate from Ministry of Communication and Informatics (Kominfo) at Universitas Sebelas April on "Empowering Students as Agents of Change in the Digital Era". Cert No: 27737076/23-30519/LITDIG/2024.'
    },
    image: LiterasiDigitalCert,
    pdfUrl: '/literasi-digital-cert.jpg',
    credentialId: '27737076/23-30519/LITDIG/2024',
    tags: ['Kemenkominfo RI', 'Literasi Digital', 'Digital Literacy', 'Kemahasiswaan'],
    badge: {
      id: 'Sertifikat Resmi',
      en: 'Official Certificate'
    },
    themeColor: '#FBBC05'
  }
]

