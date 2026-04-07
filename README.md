
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yohan DIBY | Portfolio Technicien Systèmes & Réseaux</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #0078D7; /* Azure Blue */
            --secondary: #004080;
            --accent: #00AFF0;
            --bg-light: #F0F4F8;
            --text-dark: #1A202C;
            --text-gray: #4A5568;
            --white: #FFFFFF;
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* --- UI Components --- */
        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-title {
            font-size: 2.25rem;
            color: var(--secondary);
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: var(--primary);
            margin: 10px auto 0;
            border-radius: 2px;
        }

        /* --- Navigation --- */
        nav {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            height: 70px;
            display: flex;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: var(--shadow);
        }

        nav .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--primary);
            text-decoration: none;
            letter-spacing: -1px;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-gray);
            font-weight: 500;
            font-size: 0.95rem;
            transition: var(--transition);
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        /* --- Hero Section --- */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            background: radial-gradient(circle at top right, #e2e8f0, #f0f4f8);
            padding-top: 70px;
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            align-items: center;
            gap: 2rem;
        }

        .hero-text h1 {
            font-size: 4rem;
            line-height: 1.1;
            margin-bottom: 1rem;
            color: var(--secondary);
        }

        .hero-text h2 {
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 1.5rem;
            font-weight: 500;
        }

        .hero-contact {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .contact-pill {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--white);
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.9rem;
            box-shadow: var(--shadow);
            color: var(--text-gray);
        }

        .hero-image {
            display: flex;
            justify-content: center;
        }

        .avatar-box {
            width: 300px;
            height: 300px;
            background: var(--primary);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 5rem;
            font-weight: 700;
            box-shadow: 20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff;
            animation: blob 8s infinite alternate;
        }

        @keyframes blob {
            from { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            to { border-radius: 50% 50% 33% 67% / 63% 38% 62% 37%; }
        }

        /* --- About Section --- */
        .about {
            padding: 8rem 0;
            background: var(--white);
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .about-bio p {
            font-size: 1.1rem;
            color: var(--text-gray);
            margin-bottom: 1.5rem;
        }

        .qualities {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .quality-tag {
            background: #EBF8FF;
            color: #2B6CB0;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.9rem;
        }

        /* --- Skills Section --- */
        .skills {
            padding: 8rem 0;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .skill-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .skill-card:hover {
            transform: translateY(-5px);
        }

        .skill-card h3 {
            color: var(--primary);
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            border-bottom: 2px solid var(--bg-light);
            padding-bottom: 0.5rem;
        }

        .skill-list {
            list-style: none;
        }

        .skill-list li {
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-gray);
        }

        .skill-list li::before {
            content: "→";
            color: var(--accent);
            font-weight: bold;
        }

        /* --- Projects Section --- */
        .projects {
            padding: 8rem 0;
            background: var(--secondary);
            color: var(--white);
        }

        .projects .section-title {
            color: var(--white);
        }

        .projects-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            gap: 2.5rem;
        }

        .project-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 2.5rem;
            border-radius: 16px;
            transition: var(--transition);
        }

        .project-card:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .project-card h3 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            color: var(--accent);
        }

        .project-card p {
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        .tech-badge {
            font-family: 'Fira Code', monospace;
            font-size: 0.8rem;
            background: rgba(0, 175, 240, 0.2);
            color: var(--accent);
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
        }

        /* --- Experience & Formation --- */
        .timeline-section {
            padding: 8rem 0;
            background: var(--white);
        }

        .dual-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .timeline-item {
            margin-bottom: 2.5rem;
            padding-left: 1.5rem;
            border-left: 3px solid var(--primary);
            position: relative;
        }

        .timeline-item::after {
            content: '';
            position: absolute;
            left: -9px;
            top: 0;
            width: 15px;
            height: 15px;
            background: var(--white);
            border: 3px solid var(--primary);
            border-radius: 50%;
        }

        .timeline-date {
            font-weight: 700;
            color: var(--primary);
            font-size: 0.9rem;
            text-transform: uppercase;
        }

        .timeline-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin: 0.25rem 0;
        }

        .timeline-place {
            color: var(--text-gray);
            font-style: italic;
            margin-bottom: 0.5rem;
        }

        /* --- Extras --- */
        .extras {
            padding: 6rem 0;
            background: var(--bg-light);
        }

        .extras-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            text-align: center;
        }

        .extra-card {
            padding: 2rem;
        }

        .extra-card h4 {
            color: var(--secondary);
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        /* --- Footer --- */
        footer {
            padding: 4rem 0;
            background: var(--secondary);
            color: var(--white);
            text-align: center;
        }

        .social-links {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        .social-links a {
            color: var(--white);
            text-decoration: none;
            opacity: 0.7;
            transition: var(--transition);
        }

        .social-links a:hover {
            opacity: 1;
            color: var(--accent);
        }

        /* --- Responsive --- */
        @media (max-width: 968px) {
            .hero-content, .about-grid, .dual-grid { grid-template-columns: 1fr; }
            .hero { height: auto; padding-bottom: 4rem; }
            .hero-text h1 { font-size: 3rem; }
            .nav-links { display: none; }
            .projects-container { grid-template-columns: 1fr; }
            .extras-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <nav>
        <div class="container">
            <a href="#" class="logo">Portfolio</a>
            <ul class="nav-links">
                <li><a href="#about">À propos</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#experience">Parcours</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h2>Bienvenue, je suis</h2>
                    <h1>Yohan DIBY</h1>
                    <h2>Technicien Systèmes et Réseaux</h2>
                    <p>Spécialisé dans l'administration d'infrastructures hybrides, l'automatisation et la cybersécurité. Étudiant en BTS SIO SISR passionné par l'innovation technologique.</p>
                    
                    <div class="hero-contact">
                        <div class="contact-pill">📍 Île-de-France</div>
                        <div class="contact-pill">📞 07 84 73 36 24</div>
                        <div class="contact-pill">✉️ dibyyohan02@gmail.com</div>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="avatar-box">YD</div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">À propos de moi</h2>
            <div class="about-grid">
                <div class="about-bio">
                    <p>Âgé de 22 ans, je suis actuellement en alternance chez <strong>Insertec</strong> dans le cadre de mon BTS SIO SISR.</p>
                    <p>Mon parcours m'a permis de développer une vision transverse de l'informatique : du support utilisateur (Helpdesk) à l'automatisation de déploiements complexes via des outils DevOps comme Ansible et Docker.</p>
                    <p>Je m'efforce d'allier rigueur technique et qualités humaines pour garantir la stabilité et l'évolution des systèmes d'information.</p>
                </div>
                <div class="about-qualities">
                    <h3>Mes Valeurs</h3>
                    <div class="qualities">
                        <span class="quality-tag">Esprit d'équipe</span>
                        <span class="quality-tag">Sens de l'effort</span>
                        <span class="quality-tag">Honnêteté</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Expertise Technique</h2>
            <div class="skills-grid">
                <!-- Réseaux -->
                <div class="skill-card">
                    <h3>Réseaux & Sécurité</h3>
                    <ul class="skill-list">
                        <li>Certification CCNA 1 & 2</li>
                        <li>VLAN & STP (Spanning Tree)</li>
                        <li>Routage Inter-VLAN</li>
                        <li>Switching (Cisco, HPE)</li>
                    </ul>
                </div>
                <!-- Systèmes -->
                <div class="skill-card">
                    <h3>Systèmes & Virtualisation</h3>
                    <ul class="skill-list">
                        <li>Windows Server 2019/2022</li>
                        <li>Linux (Debian, Ubuntu)</li>
                        <li>VMware ESXi & vSphere</li>
                        <li>Cloud Microsoft Azure</li>
                    </ul>
                </div>
                <!-- DevOps -->
                <div class="skill-card">
                    <h3>DevOps & Automatisation</h3>
                    <ul class="skill-list">
                        <li>Ansible (Playbooks & Automation)</li>
                        <li>Docker (Containerisation)</li>
                        <li>Scripting Python & Bash</li>
                        <li>Infrastructure as Code (IaC)</li>
                    </ul>
                </div>
                <!-- Services -->
                <div class="skill-card">
                    <h3>Services & Développement</h3>
                    <ul class="skill-list">
                        <li>Apache & Tomcat</li>
                        <li>GLPI (Gestion de parc/tickets)</li>
                        <li>PHP / SQL (MySQL, MariaDB)</li>
                        <li>Gestion de bases de données</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Projets Réalisés</h2>
            <div class="projects-container">
                <!-- Project 1 -->
                <div class="project-card">
                    <div class="timeline-date">ESIEA - Projet Académique</div>
                    <h3>EasyVM</h3>
                    <p>Développement d'une solution d'automatisation permettant la création de machines virtuelles via une interface web simplifiée. Utilisation d'Ansible pour le provisionnement et Docker pour l'isolation des services.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Ansible</span>
                        <span class="tech-badge">Docker</span>
                        <span class="tech-badge">Azure</span>
                        <span class="tech-badge">PHP/MariaDB</span>
                    </div>
                </div>
                <!-- Project 2 -->
                <div class="project-card">
                    <div class="timeline-date">ESIEA - Projet Infrastructure</div>
                    <h3>Projet DIV</h3>
                    <p>Optimisation d'une infrastructure réseau locale : automatisation de la création de VLANs sur équipements Cisco/HPE et mise en place d'une gestion dynamique des adresses IP via script.</p>
                    <div class="tech-stack">
                        <span class="tech-badge">Cisco/HPE</span>
                        <span class="tech-badge">Ansible</span>
                        <span class="tech-badge">Linux</span>
                        <span class="tech-badge">PHPMyAdmin</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="experience" class="timeline-section">
        <div class="container">
            <div class="dual-grid">
                <div>
                    <h2 class="section-title" style="text-align: left; margin-bottom: 2rem;">Expériences</h2>
                    <div class="timeline-item">
                        <div class="timeline-date">En cours</div>
                        <div class="timeline-title">Alternant Technicien SISR</div>
                        <div class="timeline-place">Insertec</div>
                        <p>Missions d'administration système et support infrastructure.</p>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">Stage / CDD</div>
                        <div class="timeline-title">Technicien IT Helpdesk</div>
                        <div class="timeline-place">WEBEDIA</div>
                        <p>Gestion du parc matériel, assistance utilisateur (tickets), préparation et installation de postes de travail (Windows/Mac).</p>
                    </div>
                </div>
                <div>
                    <h2 class="section-title" style="text-align: left; margin-bottom: 2rem;">Formation</h2>
                    <div class="timeline-item">
                        <div class="timeline-date">2023 - 2025</div>
                        <div class="timeline-title">BTS SIO Option SISR</div>
                        <div class="timeline-place">Insertec & IEF2I</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2022 - 2023</div>
                        <div class="timeline-title">Bachelor AIS</div>
                        <div class="timeline-place">ESIEA - Titre RNCP Niveau 6</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="extras">
        <div class="container">
            <div class="extras-grid">
                <div class="extra-card">
                    <h4>🌍 Langues</h4>
                    <p>Anglais (Niveau Intermédiaire)</p>
                </div>
                <div class="extra-card">
                    <h4>🥋 Loisirs</h4>
                    <p>Arts Martiaux, Football</p>
                </div>
                <div class="extra-card">
                    <h4>📚 Lecture</h4>
                    <p>Veille technologique & Littérature</p>
                </div>
            </div>
        </div>
    </section>

    <footer id="contact">
        <div class="container">
            <h2>Prêt à collaborer ?</h2>
            <p>Disponible pour de nouvelles opportunités en systèmes et réseaux.</p>
            <div class="hero-contact" style="justify-content: center;">
                <div class="contact-pill" style="background: rgba(255,255,255,0.1); color: white;">📞 07 84 73 36 24</div>
                <div class="contact-pill" style="background: rgba(255,255,255,0.1); color: white;">✉️ dibyyohan02@gmail.com</div>
            </div>
            <div class="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
            </div>
            <p style="margin-top: 3rem; font-size: 0.8rem; opacity: 0.5;">&copy; 2024 Yohan DIBY - Tous droits réservés.</p>
        </div>
    </footer>

    <script>
        // Reveal animation on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        });

        // Init visibility
        document.querySelectorAll('section').forEach(s => {
            s.style.opacity = '0';
            s.style.transform = 'translateY(20px)';
            s.style.transition = 'all 0.8s ease-out';
        });
        
        // Initial reveal for Hero
        window.onload = () => {
            const hero = document.querySelector('.hero');
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        };
    </script>
</body>
</html>
