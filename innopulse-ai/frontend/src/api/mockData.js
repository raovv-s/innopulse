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
  }
];