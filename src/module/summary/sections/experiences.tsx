import React, { useState } from 'react'
import TitleSummaries from '../title-summaries'
import { motion } from 'framer-motion'
import { useTranslation } from 'lib/translations'
import Experience from '../experience'
import TimelineExperience from '../timeline-experience'
import CertificateModal from 'components/common/certificate-modal'
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

const Experiences = () => {
  const { t, lang } = useTranslation()
  const [isCertModalOpen, setIsCertModalOpen] = useState(false)
  const [activeCertId, setActiveCertId] = useState<string | undefined>()

  const handleOpenCertModal = (certId?: string) => {
    setActiveCertId(certId)
    setIsCertModalOpen(true)
  }
  return (
    <div className="CONTAINER MENU-CHANGE-Y-100-STAGGER relative mt-[10vh]">
      <div className="CHILD-STAGGER mb-24" id="experiences">
        <TitleSummaries text={t('summary_experiences')} observeId="experiences" />
        <TimelineExperience />
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="CHILD-STAGGER" id="selected-project">
          <TitleSummaries text={t('summary_selected_projects')} observeId="selected-project" />
          <ul className="list-disc marker:text-white">
            <Experience
              title="SIPENA"
              badge={lang === 'id' ? 'Pre-Deployment' : 'Completed System'}
              sentences={[
                lang === 'id'
                  ? 'Sistem Informasi Ujian & Absensi Multi-Platform (Android Flutter, iOS PWA, Web Admin React) · Koordinasi Teknis Staf IT FEB UNSAP'
                  : 'Multi-Platform Digital Exam & Attendance System (Android Flutter, iOS PWA, React Admin) · Technical Coordination w/ FEB UNSAP IT Staff',
                lang === 'id'
                  ? 'System Analyst, Architect & Lead Backend · Heartbeat 10s, Anti-Cheat, Cloud Functions, Auto-PDF & FCM · 2026'
                  : 'System Analyst, Architect & Lead Backend · 10s Heartbeat, Anti-Cheat, Cloud Functions, Auto-PDF & FCM · 2026'
              ]}
              link="https://github.com/Renohidayat/feb-unsap-exam"
              techStack={[
                { name: 'Flutter', icon: SiFlutter },
                { name: 'Dart', icon: SiDart },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'React PWA', icon: SiReact }
              ]}
            />
            <Experience
              title="Website FEB UNSAP"
              sentences={[
                lang === 'id'
                  ? 'Portal Resmi & CMS Akademik (30 Model · 59 Migrasi · 23 Modul Admin CMS · 201 Views)'
                  : 'Official Portal & CMS (30 Models · 59 Migrations · 23 Admin CMS Modules · 201 Views)',
                lang === 'id'
                  ? 'Melayani 3 Prodi, 1.500+ Mahasiswa, 45+ Dosen & 5.000+ Alumni · Layanan Surat DOCX, Google OAuth & RBAC · Turut mendukung transparansi Akreditasi Unggul LAMEMBA (2026)'
                  : 'Serving 3 Study Programs, 1,500+ Students, 45+ Lecturers & 5,000+ Alumni · Automated DOCX Letters, Google OAuth & RBAC · Supporting LAMEMBA Unggul Accreditation Transparency (2026)',
                lang === 'id'
                  ? 'Developer Web Independen (Proyek Klien Eksternal) · Laravel 12, PHP 8.2, MySQL, Tailwind CSS · 2025 - 2026'
                  : 'Independent Web Developer (External Client Project) · Laravel 12, PHP 8.2, MySQL, Tailwind CSS · 2025 - 2026'
              ]}
              link="https://feb.unsap.ac.id/"
              className="mt-5"
              techStack={[
                { name: 'Laravel 12', icon: SiLaravel },
                { name: 'PHP 8.2', icon: SiPhp },
                { name: 'MySQL', icon: SiMysql },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Vite', icon: SiVite }
              ]}
            />
            <Experience
              title="Jelajah Nusantara AI"
              sentences={[
                lang === 'id'
                  ? 'AI Travel Planner: Itinerary Cerdas, Interactive Map & Visual Budget'
                  : 'AI Travel Planner: Smart Itinerary, Interactive Map & Visual Budget',
                lang === 'id'
                  ? 'Full Stack Monorepo Developer · ES6 JS, Vite, Node.js, Express, Firebase, DeepSeek AI · 2026'
                  : 'Full Stack Monorepo Developer · ES6 JS, Vite, Node.js, Express, Firebase, DeepSeek AI · 2026'
              ]}
              link="https://jelajah-nusantara-ai.vercel.app/"
              className="mt-5"
              techStack={[
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Vite', icon: SiVite },
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Express', icon: SiExpress },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'DeepSeek AI', icon: SiOpenai }
              ]}
            />
            <Experience
              title="Sentimen Ijazah"
              sentences={[
                lang === 'id'
                  ? 'Riset Machine Learning Sentimen Komentar YouTube Isu Ijazah Jokowi (2.561 Komentar)'
                  : 'Machine Learning YouTube Sentiment Analysis on Jokowi Degree Issue (2,561 Comments)',
                lang === 'id'
                  ? 'Peneliti Utama & Full Stack ML · SVM-RBF (Akurasi 75.24%), PySastrawi, FastAPI, React · 2025 - 2026'
                  : 'Lead Researcher & Full Stack ML · SVM-RBF (75.24% Acc), PySastrawi, FastAPI, React · 2025 - 2026'
              ]}
              link="https://sentimen-ijazah.vercel.app/"
              className="mt-5"
              techStack={[
                { name: 'Python', icon: SiPython },
                { name: 'Scikit-learn', icon: SiScikitlearn },
                { name: 'FastAPI', icon: SiFastapi },
                { name: 'React', icon: SiReact },
                { name: 'Vite', icon: SiVite }
              ]}
            />
            <Experience
              title="CGMI Assessment App"
              sentences={[
                lang === 'id'
                  ? 'Platform Web Asesmen Tata Kelola Kolaborasi Pemerintah Kab. Sumedang'
                  : 'Collaboration Governance Assessment Platform for Sumedang Regency Government',
                lang === 'id'
                  ? 'Vanilla JS (ES Modules), Tailwind CSS, Firebase, Radar Chart.js · 2026'
                  : 'Vanilla JS (ES Modules), Tailwind CSS, Firebase, Radar Chart.js · 2026'
              ]}
              link="https://cgmi-assessmentt.web.app/"
              className="mt-5"
              techStack={[
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'Chart.js', icon: SiChartdotjs },
                { name: 'HTML5', icon: SiHtml5 }
              ]}
            />
            <Experience
              title="NimeXx"
              sentences={['Anime Streaming Mobile Application', 'Flutter, Dart, Firebase · 2025']}
              link="https://apkpure.com/id/nimexx/com.rennv.nimexxv2"
              className="mt-5"
              techStack={[
                { name: 'Flutter', icon: SiFlutter },
                { name: 'Dart', icon: SiDart },
                { name: 'Firebase', icon: SiFirebase }
              ]}
            />
            <Experience
              title="Dapoer Sari Pohaci"
              sentences={[
                lang === 'id'
                  ? 'Etalase Web 12 SKU UMKM Tradisional Serang (Rp10k–Rp17k) · Order WhatsApp 1-Klik & Google Maps (4 Reels · 2.628 Views)'
                  : '12-SKU Digital MSME Storefront (Rp10k–Rp17k) · 1-Click WhatsApp & Google Maps (4 Reels · 2,628 Views)',
                lang === 'id'
                  ? 'KKN Tematik Desa Serang (Tim PDD: 66 Konten · 27.598 Views) · Tailwind CSS, JS, Firebase · 2026'
                  : 'KKN Tematik Desa Serang (PDD Team: 66 Posts/Reels · 27,598 Views) · Tailwind CSS, JS, Firebase · 2026'
              ]}
              link="https://dapoer-saripohaci.web.app/"
              className="mt-5"
              techStack={[
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'Firebase', icon: SiFirebase }
              ]}
            />
          </ul>
        </div>
        <div className="CHILD-STAGGER" id="education">
          <TitleSummaries text={t('summary_education')} observeId="education" />
          <ul className="list-disc marker:text-white">
            <Experience
              title="Universitas Sebelas April"
              sentences={[
                lang === 'id' ? 'Informatika · Sarjana Komputer (S.Kom.) · IPK 3.52' : 'Informatics · Bachelor of Computer Science (S.Kom.) · GPA 3.52',
                lang === 'id' ? 'Fresh Graduate · Kab. Sumedang, Provinsi Jawa Barat' : 'Fresh Graduate · Sumedang Regency, West Java, Indonesia',
                '2022 - 2026'
              ]}
              link="https://unsap.ac.id/"
            />
            <Experience
              title="SMAN 2 Cimalaka"
              sentences={[
                lang === 'id' ? 'Sekolah Menengah Atas (SMA · 3 Tahun)' : 'Senior High School (SMA · 3 Years)',
                lang === 'id' ? 'Kab. Sumedang, Provinsi Jawa Barat' : 'Sumedang Regency, West Java',
                '2019 - 2022'
              ]}
              link="https://www.google.com/search?kgmid=%2Fg%2F1hm5kmx3g"
              className="mt-5"
            />
            <Experience
              title="SMP Terpadu El Bustany"
              sentences={[
                lang === 'id' ? 'Sekolah Menengah Pertama (SMP · 3 Tahun)' : 'Junior High School (SMP · 3 Years)',
                lang === 'id' ? 'Kec. Bukit, Kab. Bener Meriah, Provinsi Aceh' : 'Bukit, Bener Meriah Regency, Aceh',
                '2016 - 2019'
              ]}
              link="https://www.google.com/goto?url=CAESfAHrOzAVfVZSeOGo6dGXKJNWOpD8lIvK-RIUIixqRD2vXEipLs40Z-eMP1M5FZrYk9mFfPo27f8u6SuBReF6kPtDy4ohHHXtCRLEeRS_kfh37lqME8z4pouUMGw6wbAR-nylPUT_dlm0ZqIAUZGpnJXj-DcK4BL-Rhha5Wg"
              className="mt-5"
            />
            <Experience
              title="SD Negeri Mutiara"
              sentences={[
                lang === 'id' ? 'Sekolah Dasar (SD · 6 Tahun)' : 'Elementary School (SD · 6 Years)',
                lang === 'id' ? 'Kec. Bandar, Kab. Bener Meriah, Provinsi Aceh' : 'Bandar, Bener Meriah Regency, Aceh',
                '2010 - 2016'
              ]}
              link="https://www.google.com/search?kgmid=%2Fg%2F11c6cdtz_4"
              className="mt-5"
            />
          </ul>
        </div>
        <div className="CHILD-STAGGER" id="selected-activities">
          <TitleSummaries text={t('summary_selected_activities')} observeId="selected-activities" />
          <ul className="list-disc marker:text-white">
            <Experience
              title="Pengaruh Kesadaran & Persepsi Keamanan Informasi terhadap Pengalaman Ancaman Siber"
              sentences={[
                lang === 'id'
                  ? 'Pendekatan Partial Least Squares Structural Equation Modeling (PLS-SEM)'
                  : 'Partial Least Squares Structural Equation Modeling (PLS-SEM) Approach',
                'ResearchGate · DOI: 10.13140/RG.2.2.28607.68009 · Juli 2025'
              ]}
              link="https://www.researchgate.net/publication/393644925_Pengaruh_Kesadaran_dan_Persepsi_terhadap_Keamanan_Informasi_terhadap_Pengalaman_Menghadapi_Ancaman_Siber_Pendekatan_PLS-SEM"
              techStack={[
                { name: 'ResearchGate', icon: SiResearchgate }
              ]}
            />
          </ul>
        </div>
        <div className="CHILD-STAGGER" id="selected-certificate">
          <TitleSummaries text={t('summary_selected_certificate')} observeId="selected-certificate" />
          <ul className="list-disc marker:text-white">
            <Experience
              title="Dicoding Indonesia · AWS AI Academy 2026"
              badge={lang === 'id' ? '4 Sertifikat Resmi' : '4 Verified Credentials'}
              sentences={[
                lang === 'id'
                  ? 'Spec-Driven Development dengan Kiro · Dasar Cloud & Gen AI AWS · Python (60 Jam) · Machine Learning (90 Jam)'
                  : 'Spec-Driven Development with Kiro · AWS Cloud & Gen AI · Python (60h) · Machine Learning (90h)',
                lang === 'id'
                  ? 'Dicoding Academy · AWS & Google Developers Partner · 25 Nov 2026 (Total 173 Jam)'
                  : 'Dicoding Academy · AWS & Google Developers Partner · Nov 25, 2026 (173 Hours Total)',
                lang === 'id'
                  ? '👉 Klik di sini untuk membuka & melihat seluruh 4 sertifikat'
                  : '👉 Click here to view & open all 4 full certificates'
              ]}
              onClick={() => handleOpenCertModal('dicoding-sdd-kiro')}
              techStack={[
                { name: 'Dicoding Academy' },
                { name: 'AWS & Gen AI', icon: SiAmazonaws },
                { name: 'Python', icon: SiPython },
                { name: 'Machine Learning', icon: SiScikitlearn },
                { name: 'Kiro SDD' }
              ]}
            />
            <Experience
              title="IBM SkillsBuild"
              badge={lang === 'id' ? 'Sertifikat Terverifikasi' : 'Verified Certificate'}
              className="mt-5"
              sentences={[
                lang === 'id'
                  ? 'Web Development Fundamentals · Kredensial Resmi Credly'
                  : 'Web Development Fundamentals · Official Credly Credential',
                'IBM SkillsBuild · Nov 2026',
                lang === 'id'
                  ? '👉 Klik di sini untuk membuka & melihat sertifikat'
                  : '👉 Click here to view & open certificate'
              ]}
              onClick={() => handleOpenCertModal('ibm-skillsbuild-web-dev')}
              techStack={[
                { name: 'IBM SkillsBuild', icon: SiIbm },
                { name: 'Web Development' },
                { name: 'HTML5 & CSS3' },
                { name: 'JavaScript' }
              ]}
            />
            <Experience
              title="ASEAN Foundation"
              badge={lang === 'id' ? '7 Sertifikat Resmi' : '7 Verified Credentials'}
              sentences={[
                lang === 'id'
                  ? 'Cybersecurity Skilling, AI Career Readiness & Literasi Digital'
                  : 'Cybersecurity Skilling, AI Career Readiness & Digital Literacy',
                'ASEAN Foundation · Google.org · Microsoft · Infoxchange · LinkedIn · Okt 2026',
                lang === 'id'
                  ? '👉 Klik di sini untuk membuka & melihat seluruh 7 sertifikat'
                  : '👉 Click here to view & open all 7 full certificates'
              ]}
              onClick={() => handleOpenCertModal('ai-career-readiness')}
              className="mt-5"
              techStack={[
                { name: 'ASEAN Foundation' },
                { name: 'Cybersecurity' },
                { name: 'AI Readiness' },
                { name: 'Google.org', icon: SiGoogle },
                { name: 'Microsoft', icon: SiMicrosoft },
                { name: 'LinkedIn', icon: SiLinkedin }
              ]}
            />
            <Experience
              title="Vibe Coding Study Jam (#JuaraVibeCoding)"
              badge={lang === 'id' ? 'Sertifikat Terverifikasi' : 'Verified Certificate'}
              sentences={[
                lang === 'id'
                  ? 'Certificate of Completion · Code Less, Build More'
                  : 'Certificate of Completion · Code Less, Build More',
                'Google Developer Groups · Mei 2026 · Credential ID: JVC2605-ABH7-5MXU',
                lang === 'id'
                  ? '👉 Klik di sini untuk membuka & melihat sertifikat'
                  : '👉 Click here to view & open certificate'
              ]}
              onClick={() => handleOpenCertModal('vibe-coding-study-jam')}
              className="mt-5"
              techStack={[
                { name: 'Google Developers', icon: SiGoogle },
                { name: 'Vibe Coding' },
                { name: 'AI Workflows' }
              ]}
            />
            <Experience
              title="Google Cloud Computing Foundations & Skill Badges"
              badge="Gold League (8 Badges)"
              sentences={[
                lang === 'id'
                  ? 'Infrastruktur, Networking, Data, ML & AI, Dasar Cloud · 10.195 Poin'
                  : 'Infrastructure, Networking, Data, ML & AI, Cloud Basics · 10,195 Pts',
                'Google Cloud Skills Boost · Juni 2025',
                lang === 'id'
                  ? '👉 Klik di sini untuk membuka profil kredensial'
                  : '👉 Click here to view credential profile'
              ]}
              onClick={() => handleOpenCertModal('google-cloud-foundations')}
              className="mt-5"
              techStack={[
                { name: 'Google Cloud', icon: SiGoogle },
                { name: 'Cloud Computing' },
                { name: 'Networking' }
              ]}
            />
            <Experience
              title="Seminar Literasi Digital Mahasiswa"
              badge={lang === 'id' ? 'Sertifikat Resmi' : 'Official Certificate'}
              sentences={[
                lang === 'id'
                  ? 'Direktorat Pemberdayaan Informatika, Kemenkominfo RI'
                  : 'Ministry of Communication and Informatics (Kominfo)',
                'Sektor Pendidikan Tinggi · Februari 2024 · No: 27737076/23-30519/LITDIG/2024',
                lang === 'id'
                  ? '👉 Klik di sini untuk membuka sertifikat resmi'
                  : '👉 Click here to view official certificate'
              ]}
              onClick={() => handleOpenCertModal('literasi-digital-kominfo')}
              className="mt-5"
              techStack={[
                { name: 'Kemenkominfo RI' },
                { name: 'Literasi Digital' }
              ]}
            />
          </ul>
        </div>
      </div>

      <div className="CHILD-STAGGER mt-24" id="tech">
        <TitleSummaries text={t('summary_tech')} observeId="tech" />
        <p className="font-poppins text-base text-secondary lg:text-2xl">
          Flutter · Dart · Laravel · PHP · JavaScript · HTML5 · CSS3 · Tailwind CSS · Firebase · Cloud Firestore · Realtime Database · MySQL · Python · FastAPI · Scikit-learn (SVM, TF-IDF) · REST API · Google Cloud · Git & GitHub · System Analysis
          <span className="ml-2 font-medium text-yellow-100">· {t('summary_keep_learning')}</span>
        </p>
      </div>
      <div className="CHILD-STAGGER mt-24" id="contact">
        <TitleSummaries text={t('summary_contact')} observeId="contact" />
        <ul className="list-disc marker:text-white">
          <Experience title="Github" sentences={['@Renohidayat']} link="https://github.com/Renohidayat" />
          <Experience title="LinkedIn" sentences={['M. Reno Hidayat']} link="https://www.linkedin.com/in/renohidayat" className="mt-5" />
          <Experience title="Email" sentences={['hidayatreno085@gmail.com']} link="mailto:hidayatreno085@gmail.com" className="mt-5" />
          <Experience title="Instagram" sentences={['@renohidayt']} link="https://www.instagram.com/renohidayt/" className="mt-5" />
          <Experience title="Location" sentences={['Sumedang, Jawa Barat, Indonesia']} link="https://maps.google.com/?q=Sumedang,+Jawa+Barat,+Indonesia" className="mt-5" />
        </ul>
      </div>

      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </div>
  )
}

export default React.memo(Experiences)
