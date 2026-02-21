export const INITIAL_STARTUPS = [
  // 1. FINTECH STARTAPI (Yüksək Bal - Scale Stage)
  { 
    id: 1, 
    name: "Finomica", 
    sector: "FinTech", 
    founded: "Yanvar 2022",
    teamSize: "25 nəfər",
    stage: "Series A",
    problem: "Kiçik və orta sahibkarlar üçün banklararası köçürmələrin ləngliyi və yüksək komissiya haqları.",
    solution: "Blockchain texnologiyası əsasında qurulmuş, saniyələr içində və sıfır komissiya ilə daxili ödəniş sistemi.",
    techStack: ["Node.js", "Solidity", "React", "AWS"],
    milestones: [
      { date: "Mart 2022", event: "Lisenziyanın alınması" },
      { date: "Dekabr 2022", event: "1 milyon AZN dövriyyə" },
      { date: "Avqust 2023", event: "Türkiyə bazarına çıxış" }
    ],
    description: "Finomica regionun ən sürətli böyüyən maliyyə texnologiyası startapıdır. Şirkət ödəniş proseslərini tamamilə avtomatlaşdırır.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    score: 94, 
    history: [70, 78, 85, 90, 94], 
    insight: "Arxitektura mükəmməldir. Təhlükəsizlik protokolları beynəlxalq standartlara cavab verir.",
    repo: "github.com/finomica/core-engine" 
  },

  // 2. GREENTECH STARTAPI (Orta/Riskli Bal - MVP Stage)
  { 
    id: 2, 
    name: "EcoPulse IoT", 
    sector: "GreenTech", 
    founded: "Sentyabr 2023",
    teamSize: "6 nəfər",
    stage: "MVP Stage",
    problem: "Sənaye zonalarında havanın çirklənmə səviyyəsinin real vaxtda ölçülə bilməməsi.",
    solution: "Şəhərin müxtəlif nöqtələrində quraşdırılan ucuz və effektiv IoT sensorlar vasitəsilə mərkəzi monitorinq sistemi.",
    techStack: ["C++", "Python", "MQTT", "Raspberry Pi"],
    milestones: [
      { date: "Oktyabr 2023", event: "Prototipin hazırlanması" },
      { date: "Yanvar 2024", event: "Sumqayıt Sənaye Parkında sınaq" }
    ],
    description: "EcoPulse IoT şəhərlərimizi daha yaşıl və təmiz etmək üçün texnoloji həllər təklif edir.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
    score: 45, 
    history: [30, 35, 40, 48, 45], 
    insight: "Kod bazasında çoxlu 'hardcoded' dəyərlər var. IoT cihazları ilə sinxronizasiya ləngdir.",
    repo: "github.com/ecopulse/iot-firmware" 
  },

  // 3. EDTECH STARTAPI (Yüksələn Bal - Seed Stage)
  { 
    id: 3, 
    name: "EduVibe AI", 
    sector: "EdTech", 
    founded: "Fevral 2023",
    teamSize: "10 nəfər",
    stage: "Seed Stage",
    problem: "Məktəblilərin fərdi öyrənmə sürətinə uyğun olmayan vahid tədris proqramı.",
    solution: "Şagirdin zəif və güclü tərəflərini analiz edərək ona fərdi dərs planı hazırlayan Süni İntellekt müəllimi.",
    techStack: ["Next.js", "OpenAI API", "PostgreSQL", "Tailwind"],
    milestones: [
      { date: "Aprel 2023", event: "Beta versiyanın buraxılması" },
      { date: "Noyabr 2023", event: "10,000 aktiv istifadəçi" }
    ],
    description: "EduVibe AI təhsildə bərabərliyi təmin etmək üçün hər bir uşağa özəl repetitor xidmətini rəqəmsallaşdırır.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    score: 72, 
    history: [40, 50, 62, 68, 72], 
    insight: "İnkişaf sürəti (Velocity) əladır. Front-end və Back-end inteqrasiyası optimallaşdırılmalıdır.",
    repo: "github.com/eduvibe/platform-v2" 
  },

  // 4. HEALTHTECH STARTAPI (Stabil/Müsbət Bal - Bootstrapped)
  { 
    id: 4, 
    name: "MediSync", 
    sector: "HealthTech", 
    founded: "Noyabr 2022",
    teamSize: "15 nəfər",
    stage: "Growth",
    problem: "Xəstəxanalar və laboratoriyalar arasında xəstə tarixçələrinin kağız üzərində və pərakəndə idarə olunması.",
    solution: "Bütün tibbi datanı vahid, şifrələnmiş bulud bazasında saxlayan və həkimlər üçün əlçatan edən CRM sistemi.",
    techStack: ["Java", "Spring Boot", "Angular", "Oracle"],
    milestones: [
      { date: "Yanvar 2023", event: "İlk özəl klinika ilə müqavilə" },
      { date: "İyun 2023", event: "Dövlət İcbari Tibbi Sığorta ilə inteqrasiya" }
    ],
    description: "MediSync pasiyent məlumatlarının idarə olunmasını asanlaşdıraraq həkimlərin vaxtına 30% qənaət edir.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    score: 64, 
    history: [55, 58, 60, 62, 64], 
    insight: "Sistem stabil işləyir, lakin köhnə Java kitabxanalarından istifadə olunur. Yenilənmə tövsiyə edilir.",
    repo: "github.com/medisync/backend-service" 
  },
  // 5. AGRITECH STARTAPI (Yüksək Bal - Growth Stage)
  { 
    id: 5, 
    name: "AgroVision AI", 
    sector: "AgriTech", 
    founded: "Mart 2022",
    teamSize: "12 nəfər",
    stage: "Series A",
    problem: "Böyük təsərrüfatlarda bitki xəstəliklərinin vaxtında müəyyən edilməməsi və məhsul itkisi.",
    solution: "Dronlar vasitəsilə tarlaların üzərindən keçərək multispektral analizlə xəstəlikləri 98% dəqiqliklə tapan sistem.",
    techStack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    milestones: [
      { date: "May 2022", event: "İlk kənd təsərrüfatı holdinqi ilə müqavilə" },
      { date: "Sentyabr 2023", event: "İsrail investorlarından investisiya" }
    ],
    description: "AgroVision AI kənd təsərrüfatını rəqəmsallaşdıraraq məhsuldarlığı artırır.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800",
    score: 82, 
    history: [50, 60, 70, 75, 82], 
    insight: "Modelin öyrənmə sürəti əladır, lakin böyük dataların emalında gecikmələr var.",
    repo: "github.com/agrovision/core-ai" 
  },

  // 6. CYBERSECURITY STARTAPI (Yüksək Bal - Scale Stage)
  { 
    id: 6, 
    name: "CypherGuard", 
    sector: "CyberSecurity", 
    founded: "İyun 2021",
    teamSize: "30 nəfər",
    stage: "Series B",
    problem: "Kritik dövlət infrastrukturuna qarşı yönəlmiş mürəkkəb kiberhücumlar (APT).",
    solution: "Sıfır etimad (Zero Trust) modelinə əsaslanan və anomaliyaları real vaxtda bloklayan təhlükəsizlik divarı.",
    techStack: ["Rust", "C++", "Go", "ElasticSearch"],
    milestones: [
      { date: "Yanvar 2022", event: "Beynəlxalq ISO sertifikatının alınması" },
      { date: "Noyabr 2023", event: "5 fərqli ölkənin bank sistemi ilə inteqrasiya" }
    ],
    description: "CypherGuard rəqəmsal dünyanı ən qabaqcıl şifrələmə texnologiyaları ilə qoruyur.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    score: 91, 
    history: [85, 88, 90, 92, 91], 
    insight: "Rust istifadəsi yaddaş idarəetməsini mükəmməl edir. Kod çox təmizdir.",
    repo: "github.com/cypherguard/shield-v3" 
  },

  // 7. PROPTECH STARTAPI (Orta Bal - Seed Stage)
  { 
    id: 7, 
    name: "UrbanMap AI", 
    sector: "PropTech", 
    founded: "Oktyabr 2022",
    teamSize: "8 nəfər",
    stage: "Seed Stage",
    problem: "Şəhər planlaşdırmasında binaların günəş işığı və külək axınına təsirinin düzgün hesablanmaması.",
    solution: "Şəhərin rəqəmsal ekizini (Digital Twin) yaradan və tikinti simulyasiyalarını aparan platforma.",
    techStack: ["Three.js", "Python", "Docker", "Node.js"],
    milestones: [
      { date: "Yanvar 2023", event: "Bakı şəhərinin 3D modelinin tamamlanması" },
      { date: "Avqust 2023", event: "Memarlıq büroları ilə tərəfdaşlıq" }
    ],
    description: "UrbanMap AI gələcəyin ağıllı şəhərlərini dizayn etmək üçün mühəndislərə kömək edir.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    score: 68, 
    history: [30, 45, 55, 62, 68], 
    insight: "Vizualizasiya hissəsi çox resurs tələb edir. Brauzer tərəfində optimallaşdırma lazımdır.",
    repo: "github.com/urbanmap/engine-3d" 
  },

  // 8. LOGISTECH STARTAPI (Yüksək Bal - Growth Stage)
  { 
    id: 8, 
    name: "LogiSmart", 
    sector: "Logistics", 
    founded: "Aprel 2022",
    teamSize: "18 nəfər",
    stage: "Growth",
    problem: "Şəhərdaxili kuryer çatdırılmalarında marşrutların səmərəsizliyi və yanacaq itkisi.",
    solution: "AI vasitəsilə kuryerlər üçün ən optimal marşrutu saniyələr içində hesablayan alqoritm.",
    techStack: ["Go", "React Native", "Google Maps API", "Redis"],
    milestones: [
      { date: "May 2023", event: "100.000-ci uğurlu çatdırılma" },
      { date: "Sentyabr 2023", event: "Böyük bir supermarket şəbəkəsi ilə müqavilə" }
    ],
    description: "LogiSmart logistika xərclərini 40% azaldan intellektual çatdırılma platformasıdır.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    score: 75, 
    history: [45, 55, 65, 70, 75], 
    insight: "Redis bazası yüksək yük altında stabil deyil. Cluster rejiminə keçilməlidir.",
    repo: "github.com/logismart/routing-api" 
  },

  // 9. RETAILTECH STARTAPI (Riskli Bal - MVP Stage)
  { 
    id: 9, 
    name: "SmartShelf", 
    sector: "RetailTech", 
    founded: "Avqust 2023",
    teamSize: "4 nəfər",
    stage: "MVP",
    problem: "Mağazalarda rəflərdə bitən məhsulların işçilər tərəfindən gec aşkar edilməsi.",
    solution: "Rəflərə bərkidilmiş kameralar vasitəsilə bitən məhsulları dərhal anbara xəbər verən vizual analiz sistemi.",
    techStack: ["OpenCV", "Python", "Flask", "SQLite"],
    milestones: [
      { date: "Oktyabr 2023", event: "İlk prototipin testi" }
    ],
    description: "SmartShelf mağazalarda itmiş satışların qarşısını alan süni intellekt həllidir.",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800",
    score: 38, 
    history: [10, 20, 30, 35, 38], 
    insight: "Görüntü emalı üçün server gücü çatmır. Edge computing tətbiq edilməlidir.",
    repo: "github.com/smartshelf/vision-core" 
  },

  // 10. LEGALTECH STARTAPI (Yüksələn Bal - Seed Stage)
  { 
    id: 10, 
    name: "LegalBot", 
    sector: "LegalTech", 
    founded: "Yanvar 2023",
    teamSize: "7 nəfər",
    stage: "Seed",
    problem: "Hüquqi müqavilələrin uzunluğu və içindəki gizli risklərin insanlar tərəfindən gözündən qaçması.",
    solution: "100 səhifəlik müqaviləni 10 saniyəyə analiz edərək riskli bəndləri çıxaran LLM əsaslı platforma.",
    techStack: ["Next.js", "GPT-4 API", "Python", "MongoDB"],
    milestones: [
      { date: "Mart 2023", event: "İlk 5 vəkil bürosu ilə test" },
      { date: "Dekabr 2023", event: "Xarici investisiya fondundan qrant" }
    ],
    description: "LegalBot hüquqşünasların işini sürətləndirən süni intellekt köməkçisidir.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    score: 81, 
    history: [20, 45, 60, 75, 81], 
    insight: "Prompt engineering hissəsi çox mürəkkəbdir, kodun oxunurluğu aşağıdır.",
    repo: "github.com/legalbot/analyser" 
  },

  // 11. BIOTECH STARTAPI (Stabil Bal - R&D Stage)
  { 
    id: 11, 
    name: "GeneLink", 
    sector: "BioTech", 
    founded: "İyun 2022",
    teamSize: "14 nəfər",
    stage: "Research",
    problem: "Fərdi genetik xüsusiyyətlərə uyğun olmayan dərman dozalarının effektivsizliyi.",
    solution: "DNT testlərinə əsasən pasiyentə ən uyğun dərman və müalicə planını çıxaran bio-informatika sistemi.",
    techStack: ["R", "Python", "Hadoop", "PostgreSQL"],
    milestones: [
      { date: "Avqust 2022", event: "Laboratoriya qurulması" },
      { date: "Oktyabr 2023", event: "İlk 100 xəstə üzərində uğurlu sınaq" }
    ],
    description: "GeneLink gələcəyin fərdiləşdirilmiş tibbini bu günə gətirir.",
    image: "https://images.unsplash.com/photo-1532187863486-abf51ad990d9?w=800",
    score: 74, 
    history: [60, 62, 65, 70, 74], 
    insight: "Böyük data emalı Hadoop tərəfində optimallaşdırılmalıdır. Gecikmələr var.",
    repo: "github.com/genelink/dna-mapper" 
  },

  // 12. ENERGYTECH STARTAPI (Yüksək Bal - Growth Stage)
  { 
    id: 12, 
    name: "SolarEdge AI", 
    sector: "Energy", 
    founded: "May 2022",
    teamSize: "11 nəfər",
    stage: "Growth",
    problem: "Günəş panellərinin quraşdırıldığı yerlərdə hava dəyişikliyinə görə enerji istehsalının proqnozlaşdırıla bilməməsi.",
    solution: "Peyk görüntüləri və hava proqnozları ilə enerji istehsalını 95% dəqiqliklə hesablayan proqram təminatı.",
    techStack: ["Python", "PyTorch", "Django", "React"],
    milestones: [
      { date: "İyul 2022", event: "Dövlət Enerji Agentliyi ilə pilot layihə" },
      { date: "Noyabr 2023", event: "Enerji qənaəti mükafatı" }
    ],
    description: "SolarEdge AI bərpa olunan enerji mənbələrini daha səmərəli idarə edir.",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?w=800",
    score: 88, 
    history: [50, 65, 75, 82, 88], 
    insight: "Frontend hissəsində dashboard animasiyaları tətbiqi ləngidir. SVG optimallaşdırılmalıdır.",
    repo: "github.com/solaredge/predict-v1" 
  },

  // 13. FOODTECH STARTAPI (Orta Bal - Seed Stage)
  { 
    id: 13, 
    name: "FoodCycle", 
    sector: "FoodTech", 
    founded: "Sentyabr 2023",
    teamSize: "5 nəfər",
    stage: "Seed",
    problem: "Restoran və kafelərdə gün sonunda qalan artıq yeməklərin atılması.",
    solution: "Gün sonu qalan təzə yeməklərin 50-70% endirimlə vətəndaşlara satılmasını təmin edən mobil tətbiq.",
    techStack: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    milestones: [
      { date: "Oktyabr 2023", event: "Bakıda 50 restoranla tərəfdaşlıq" },
      { date: "Yanvar 2024", event: "1 ton yemək israfının qarşısının alınması" }
    ],
    description: "FoodCycle dünyada israfın qarşısını almaq üçün sosial yönümlü startapdır.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    score: 63, 
    history: [20, 35, 45, 55, 63], 
    insight: "Firebase real-time DB istifadəsi bildirişlər üçün əladır, lakin sorğular baha başa gəlir.",
    repo: "github.com/foodcycle/app-mobile" 
  },

  // 14. INFRASTRUCTURE STARTAPI (Riskli Bal - R&D Stage)
  { 
    id: 14, 
    name: "DeepScan AI", 
    sector: "Infrastructure", 
    founded: "Fevral 2023",
    teamSize: "9 nəfər",
    stage: "Research",
    problem: "Körpü və tunellərdəki mikroskopik çatların insan gözü tərəfindən aşkar edilə bilməməsi.",
    solution: "Rentgen və ultrasəs görüntülərini analiz edərək gələcək çökmə riskini tapan AI.",
    techStack: ["C#", "Unity 3D", "Python", "SQL Server"],
    milestones: [
      { date: "Mart 2023", event: "Laboratoriya testi" },
      { date: "Oktyabr 2023", event: "İlk qəza proqnozunun uğurlu çıxması" }
    ],
    description: "DeepScan AI mühəndislik obyektlərinin təhlükəsizliyini rəqəmsal analizlərlə təmin edir.",
    image: "https://images.unsplash.com/photo-1545459720-aac8309b4ef1?w=800",
    score: 41, 
    history: [30, 32, 35, 38, 41], 
    insight: "Dataset çox kiçikdir. AI-ın yanlış cavab vermə ehtimalı (False Positive) yüksəkdir.",
    repo: "github.com/deepscan/crack-detection" 
  }

];