"""Generate a balanced, ATS-friendly, justified PDF CV for M. Reno Hidayat."""

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


def build_pdf(filename: str) -> None:
    """Build the two-page ATS CV PDF with exact zero-padding rail alignment."""
    left_margin = 42
    right_margin = 42
    top_margin = 34
    bottom_margin = 34

    page_w, page_h = A4
    usable_width = page_w - left_margin - right_margin
    usable_height = page_h - top_margin - bottom_margin

    doc = BaseDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=left_margin,
        rightMargin=right_margin,
        topMargin=top_margin,
        bottomMargin=bottom_margin,
        title="M. Reno Hidayat - Curriculum Vitae",
        author="M. Reno Hidayat",
    )

    # Zero frame padding guarantees Tables, HRFlowables, and Paragraphs share identical left/right rails.
    main_frame = Frame(
        left_margin,
        bottom_margin,
        usable_width,
        usable_height,
        id="main",
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc.addPageTemplates([PageTemplate(id="CVTemplate", frames=[main_frame])])

    styles = getSampleStyleSheet()
    primary_color = colors.HexColor("#1A1A1A")
    muted_color = colors.HexColor("#444444")
    link_color = "#0D529C"
    rule_color = colors.HexColor("#2B2B2B")
    subtle_rule_color = colors.HexColor("#D0D5DD")

    name_style = ParagraphStyle(
        "CVName",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=17.5,
        leading=21,
        alignment=TA_CENTER,
        textColor=primary_color,
        spaceAfter=2,
    )

    tagline_style = ParagraphStyle(
        "CVTagline",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9.2,
        leading=12,
        alignment=TA_CENTER,
        textColor=muted_color,
        spaceAfter=3,
    )

    contact_style = ParagraphStyle(
        "CVContact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=12,
        alignment=TA_CENTER,
        textColor=primary_color,
        spaceAfter=6,
    )

    section_header_style = ParagraphStyle(
        "CVSectionHeader",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=12.5,
        alignment=TA_LEFT,
        textColor=primary_color,
        spaceBefore=7,
        spaceAfter=2,
    )

    body_style = ParagraphStyle(
        "CVBody",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=12.3,
        alignment=TA_JUSTIFY,
        textColor=primary_color,
        spaceAfter=3,
    )

    bullet_style = ParagraphStyle(
        "CVBullet",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=12.1,
        alignment=TA_JUSTIFY,
        textColor=primary_color,
        bulletIndent=2,
        leftIndent=12,
        firstLineIndent=0,
        spaceAfter=2.4,
    )

    item_title_style = ParagraphStyle(
        "CVItemTitle",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.2,
        leading=11.6,
        alignment=TA_LEFT,
        textColor=primary_color,
    )

    item_right_style = ParagraphStyle(
        "CVItemRight",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=11.6,
        alignment=TA_RIGHT,
        textColor=muted_color,
    )

    item_sub_style = ParagraphStyle(
        "CVItemSub",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=8.8,
        leading=11.6,
        alignment=TA_LEFT,
        textColor=muted_color,
    )

    skill_cat_style = ParagraphStyle(
        "CVSkillCategory",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=8.8,
        leading=12.2,
        alignment=TA_LEFT,
        textColor=primary_color,
    )

    skill_list_style = ParagraphStyle(
        "CVSkillList",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=12.2,
        alignment=TA_LEFT,
        textColor=primary_color,
    )

    story = []

    def link(url: str, label: str) -> str:
        return f'<a href="{url}"><font color="{link_color}">{label}</font></a>'

    def add_section_header(title: str) -> None:
        story.append(Paragraph(f"<b>{title}</b>", section_header_style))
        story.append(
            HRFlowable(
                width="100%",
                thickness=0.8,
                color=rule_color,
                spaceBefore=1,
                spaceAfter=5,
            )
        )

    def make_header_table(
        left_title: str,
        right_info: str,
        left_sub: str = "",
        right_sub: str = "",
        right_width: float = 128,
    ) -> Table:
        rows = [
            [
                Paragraph(f"<b>{left_title}</b>", item_title_style),
                Paragraph(right_info, item_right_style),
            ]
        ]
        if left_sub or right_sub:
            rows.append(
                [
                    Paragraph(f"<i>{left_sub}</i>", item_sub_style),
                    Paragraph(f"<i>{right_sub}</i>" if right_sub else "", item_right_style),
                ]
            )
        table = Table(rows, colWidths=[usable_width - right_width, right_width])
        table.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0.5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
                ]
            )
        )
        return table

    def add_entry(
        left_title: str,
        right_info: str,
        left_sub: str,
        right_sub: str,
        bullets: list[str],
        right_width: float = 128,
        after_space: float = 4,
    ) -> None:
        block = [
            make_header_table(left_title, right_info, left_sub, right_sub, right_width),
            Spacer(1, 1.5),
            *[Paragraph(text, bullet_style, bulletText="•") for text in bullets],
            Spacer(1, after_space),
        ]
        story.append(KeepTogether(block))

    # 1. Header
    story.append(Paragraph("M. RENO HIDAYAT", name_style))
    story.append(
        Paragraph(
            "Full-Stack Software Engineer &nbsp;|&nbsp; Informatics Graduate (S.Kom.)",
            tagline_style,
        )
    )
    contact_html = (
        "Sumedang, West Java, Indonesia &nbsp;|&nbsp; +62 821-1087-8470 &nbsp;|&nbsp; "
        f"{link('mailto:hidayatreno085@gmail.com', 'hidayatreno085@gmail.com')}<br/>"
        f"{link('https://www.linkedin.com/in/renohidayat', 'linkedin.com/in/renohidayat')} &nbsp;|&nbsp; "
        f"{link('https://github.com/Renohidayat', 'github.com/Renohidayat')} &nbsp;|&nbsp; "
        f"{link('https://renohidayat.my.id/', 'renohidayat.my.id')}"
    )
    story.append(Paragraph(contact_html, contact_style))
    story.append(
        HRFlowable(
            width="100%",
            thickness=1.0,
            color=subtle_rule_color,
            spaceBefore=0,
            spaceAfter=4,
        )
    )

    # 2. Summary
    add_section_header("SUMMARY")
    story.append(
        Paragraph(
            "Informatics graduate (S.Kom., GPA 3.52/4.00) from Universitas Sebelas April specializing in full-stack "
            "web and mobile software engineering, backend architectures, and applied AI/ML integration. Experienced "
            "in shipping end-to-end systems—including university portals serving 1,500+ students, distributed exam "
            "monitoring platforms, FastAPI ML services, and civic GovTech tools using Laravel, Flutter, React, "
            "Python, and Firebase. Published researcher in information security behavior (PLS-SEM) and holder of "
            "15+ verified credentials across Dicoding AWS AI Academy (173 hours), IBM SkillsBuild, Google Cloud "
            "Gold League, and ASEAN Foundation.",
            body_style,
        )
    )

    # 3. Experience
    add_section_header("EXPERIENCE")
    add_entry(
        "Fakultas Ekonomi dan Bisnis (FEB) UNSAP",
        "Sumedang, Indonesia",
        "Full-Stack Web Developer (Project-Based)",
        "Nov 2025 - May 2026",
        [
            "Redesigned and engineered the official faculty web portal and CMS (feb.unsap.ac.id) using Laravel 12, "
            "PHP 8.2, MySQL, and Tailwind CSS across 30 Eloquent models, 59 migrations, 64 controllers (23 Admin "
            "CMS modules), and 201 Blade views serving 3 study programs, 1,500+ students, 45+ lecturers, and "
            "5,000+ alumni.",
            "Built automated student letter workflows with DOCX generation via PHPWord, bulk student Excel imports, "
            "Google Socialite OAuth, Multi-Role RBAC, and Spatie CSP/reCAPTCHA security—supporting faculty governance "
            "transparency during S1 Management's LAMEMBA 'Unggul' accreditation achievement (Nov 2026).",
        ],
        right_width=125,
    )
    add_entry(
        "KKN Tematik Desa Serang - Universitas Sebelas April",
        "Sumedang, Indonesia",
        "Web Developer &amp; Digital Documentation (PDD Team)",
        "Jan 2026 - Feb 2026",
        [
            "Built and deployed a 12-SKU digital storefront (Rp10k-Rp17k) for local MSME Dapoer Sari Pohaci on "
            "Firebase Hosting with 1-click pre-filled WhatsApp ordering, Google Maps routing, and on-site owner "
            "banner/web handoff (documented in 4 Reels totaling 2,628 views).",
            "Co-managed a 2-person Publication &amp; Documentation (PDD) team supporting 20 KKN members over a "
            "32-day field cycle (@kkndesaserang2026.archive), producing 33 split-grid feed posts, 33 Reels "
            "(27,598 total views, 575 likes, 7 Reels &gt; 1k views), and 35 Story Highlights.",
            "Delivered community digital security literacy outreach (3 Reels, 1,556 views) and cross-account "
            "school collaboration campaigns with SDN Malangbong and Disdik Sumedang.",
        ],
        right_width=125,
    )

    # 4. Projects
    add_section_header("PROJECTS")
    add_entry(
        "SIPENA - Digital Examination &amp; Attendance Platform",
        "2026",
        "System Analyst, Architect &amp; Lead Backend (Flutter, React PWA, Node.js, Firebase)",
        "Pre-Deployment",
        [
            "Architected a multi-platform examination ecosystem in technical coordination with FEB UNSAP IT staff, "
            "unifying an Android Flutter student client, iOS React PWA, React Web Admin dashboard, and serverless "
            "Node.js/Firebase backend.",
            "Implemented 10-second real-time heartbeat tracking via Firebase Realtime Database, background anti-cheat "
            "guards, automated PDF attendance minutes (Berita Acara), and batch FCM push notifications.",
        ],
        right_width=105,
    )
    add_entry(
        "Jelajah Nusantara AI - Intelligent Travel Planner",
        "2026",
        "Full-Stack Developer (JavaScript, Vite, Node.js, Express, Firebase, DeepSeek AI)",
        "Vercel",
        [
            "Engineered a monorepo AI travel planner pairing a Vite client and Express API deployed on Vercel, "
            "integrating the DeepSeek AI API for personalized daily itineraries and Firebase persistence.",
            "Implemented interactive destination mapping via Leaflet.js and visual budget breakdowns (radar and bar "
            "charts) via Chart.js.",
        ],
        right_width=95,
    )
    add_entry(
        "Sentiment Analysis of YouTube Comments - ML Research",
        "2025 - 2026",
        "Lead Researcher &amp; Full-Stack ML Engineer (Python, Scikit-learn, PySastrawi, FastAPI, React)",
        "Vercel",
        [
            "Built a web scraping and Indonesian NLP pipeline (PySastrawi stemming, stopword removal, TF-IDF "
            "vectorization) analyzing 2,561 comments across 11 viral YouTube videos on Joko Widodo's academic "
            "degree discourse (Fleiss' Kappa: 0.8635).",
            "Trained an SVM classifier with an RBF kernel achieving 75.24% accuracy and 73.46% F1-score, served "
            "through a FastAPI REST API and interactive React visualization dashboard.",
        ],
        right_width=95,
    )
    add_entry(
        "CGMI Assessment App - Civic GovTech Platform",
        "2026",
        "Web Developer (Vanilla ES6 JavaScript, Tailwind CSS, Cloud Firestore, Chart.js)",
        "Firebase Hosting",
        [
            "Developed a Collaborative Governance Maturity Index assessment platform for Sumedang Regency local "
            "government measuring 30 indicators across 6 governance dimensions with automated 5-level maturity "
            "scoring and Chart.js radar analytics.",
            "Built with zero-framework modular Vanilla ES6 JavaScript, Tailwind CSS, Cloud Firestore, and hybrid "
            "authentication combining respondent access codes and Google OAuth admin whitelists.",
        ],
        right_width=105,
    )
    add_entry(
        "NimeXx - Cross-Platform Anime Streaming Mobile App",
        "2025",
        "Mobile App Developer (Flutter, Dart, Firebase)",
        "Android Release",
        [
            "Developed a cross-platform Flutter streaming mobile app featuring clean Material Design navigation, "
            "search and discovery views, custom video player controls, and Firebase cloud state synchronization.",
        ],
        right_width=105,
        after_space=3,
    )

    # 5. Education
    add_section_header("EDUCATION")
    story.append(
        KeepTogether(
            [
                make_header_table(
                    "Universitas Sebelas April (UNSAP)",
                    "Sumedang, Indonesia",
                    "Bachelor of Computer Science (S.Kom.) in Informatics - GPA: 3.52 / 4.00",
                    "2022 - 2026",
                    right_width=125,
                ),
                Spacer(1, 4),
            ]
        )
    )

    # 6. Scientific Publication
    add_section_header("PUBLICATION")
    story.append(
        KeepTogether(
            [
                make_header_table(
                    "ResearchGate - Information Security Empirical Research",
                    "Jul 2025",
                    f"DOI: {link('https://www.researchgate.net/publication/393644925', '10.13140/RG.2.2.28607.68009')}",
                    "PLS-SEM",
                    right_width=100,
                ),
                Spacer(1, 1.5),
                Paragraph(
                    "Authored and published &ldquo;Pengaruh Kesadaran dan Persepsi terhadap Keamanan Informasi "
                    "terhadap Pengalaman Menghadapi Ancaman Siber: Pendekatan PLS-SEM,&rdquo; investigating empirical "
                    "links between user security awareness, risk perception, and cyber threat exposure.",
                    bullet_style,
                    bulletText="•",
                ),
                Spacer(1, 4),
            ]
        )
    )

    # 7. Certifications & Training
    add_section_header("CERTIFICATIONS &amp; TRAINING")
    cert_bullets = [
        "<b>Dicoding Indonesia - AWS AI Academy 2026 (Nov 2026 | 4 Certificates, 173 Hours):</b> Completed "
        "<i>Spec-Driven Development dengan Kiro</i> (10h, AWS), <i>Belajar Dasar Cloud dan Gen AI di AWS</i> "
        "(13h, AWS), <i>Memulai Pemrograman dengan Python</i> (60h), and <i>Belajar Machine Learning untuk Pemula</i> "
        "(90h + Final Tabular ML Project).",
        "<b>IBM SkillsBuild - Web Development Fundamentals (Nov 2026 | Credly Verified):</b> Verified foundation "
        "in modern web architecture, HTTP protocols, semantic HTML5/CSS3, responsive layout, and JavaScript "
        "engineering.",
        "<b>ASEAN Foundation - AI, Cybersecurity &amp; Digital Literacy (Oct 2026 | 7 Certificates):</b> Earned "
        "joint credentials with Google.org, Microsoft, Infoxchange, and LinkedIn covering <i>AI Career "
        "Readiness</i>, <i>Cybersecurity Hygiene &amp; Incident Response</i>, and <i>Digital Literacy</i>.",
        "<b>Google Cloud, GDG Indonesia &amp; Kemenkominfo (2024 - 2026):</b> Reached Google Cloud Skills Boost "
        "<i>Gold League</i> (10,195 pts, 8 badges, Jun 2025); completed GDG <i>#JuaraVibeCoding Study Jam</i> "
        "(May 2026, ID: JVC2605-ABH7-5MXU); attended Kemenkominfo <i>Digital Literacy Seminar</i> (Feb 2024).",
    ]
    for item in cert_bullets:
        story.append(Paragraph(item, bullet_style, bulletText="•"))
    story.append(Spacer(1, 4))

    # 8. Technical Skills
    add_section_header("TECHNICAL SKILLS")
    skills_rows = [
        ("Languages", "JavaScript, TypeScript, Dart, PHP, Python, SQL, HTML5, CSS3"),
        ("Frontend", "React, Vite, Tailwind CSS, Progressive Web Apps (PWA), Chart.js, Leaflet.js"),
        ("Mobile", "Flutter, Android Development, Cross-Platform UI, Firebase Cloud Messaging (FCM)"),
        ("Backend &amp; APIs", "Laravel 12, Node.js, Express.js, FastAPI, REST APIs, PHPWord, Google OAuth 2.0"),
        ("Database &amp; Cloud", "MySQL, Firebase (Firestore, Realtime DB, Auth, Hosting, Functions), Google Cloud, AWS Basics, Vercel"),
        ("AI &amp; Data Science", "Scikit-learn (SVM, TF-IDF), NLP, PySastrawi, DeepSeek / LLM API Integration, PLS-SEM"),
        ("Tools &amp; Security", "Git, GitHub, Postman, Kiro (Spec-Driven Dev), Spatie CSP, Multi-Role RBAC, reCAPTCHA, Agile"),
    ]
    cat_width = 98
    skills_table_data = [
        [
            Paragraph(f"<b>{cat}:</b>", skill_cat_style),
            Paragraph(items, skill_list_style),
        ]
        for cat, items in skills_rows
    ]
    skills_table = Table(
        skills_table_data,
        colWidths=[cat_width, usable_width - cat_width],
    )
    skills_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1.2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2.2),
            ]
        )
    )
    story.append(skills_table)

    doc.build(story)
    print(f"Successfully generated {filename}")


if __name__ == "__main__":
    build_pdf("public/m_reno_hidayat_cv.pdf")
