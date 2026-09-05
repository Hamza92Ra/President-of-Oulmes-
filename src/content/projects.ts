export type Project = {
  id: string;
  titleFr: string;
  titleEn: string;
  titleAr: string;
  problemFr?: string;
  problemEn?: string;
  problemAr?: string;
  descriptionFr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  detailsFr?: string;
  detailsEn?: string;
  detailsAr?: string;
  impactFr?: string;
  impactEn?: string;
  impactAr?: string;
  startDate?: string;
  endDate?: string;
  statusFr?: string;
  statusEn?: string;
  statusAr?: string;
  partners?: string[];
  recognition?: {
    fr: string;
    en: string;
    ar: string;
    date: string;
  };
  source: {
    name: string;
    url: string;
  };
};

export const projects: Project[] = [
  {
    id: "ecological-baths",
    titleFr: "Bains écologiques d'Oulmès",
    titleEn: "Ecological Oulmès Baths",
    titleAr: "حمامات أولماس البيئية",
    problemFr: "Besoin d'infrastructure thermale durable et respectueuse de l'environnement",
    problemEn: "Need for sustainable and environmentally friendly thermal infrastructure",
    problemAr: "الحاجة إلى بنية تحتية حرارية مستدامة وصديقة للبيئة",
    descriptionFr: "Le site officiel de la commune d'Oulmès indique que ce projet a été développé par la commune en partenariat avec l'Association Ingénierie et Développement et la Coalition marocaine des collectivités territoriales pour le climat.",
    descriptionEn: "The Oulmès commune's official website documents that this project was developed by the commune in partnership with Association Ingénierie et Développement and the Moroccan Coalition for Territorial Communities for Climate.",
    descriptionAr: "يوثق الموقع الرسمي لجماعة أولماس أن هذا المشروع تم تطويره من قبل الجماعة بالشراكة مع جمعية الهندسة والتنمية والتحالف المغربي للجماعات الترابية من أجل المناخ.",
    detailsFr: "Les bains écologiques d'Oulmès représentent une initiative majeure de développement durable. Utilisant des ressources thermales naturelles, le projet intègre des technologies environnementales modernes pour minimiser l'impact écologique tout en créant une destination touristique attractive.",
    detailsEn: "The Ecological Oulmès Baths represent a major sustainable development initiative. Using natural thermal resources, the project integrates modern environmental technologies to minimize ecological impact while creating an attractive tourist destination.",
    detailsAr: "تمثل حمامات أولماس البيئية مبادرة تنمية مستدامة كبرى. باستخدام الموارد الحرارية الطبيعية، يدمج المشروع التقنيات البيئية الحديثة لتقليل التأثير البيئي مع إنشاء وجهة سياحية جذابة.",
    impactFr: "Création d'emplois locaux, promotion du tourisme durable, amélioration de l'économie locale, reconnaissance climatique internationale.",
    impactEn: "Local job creation, promotion of sustainable tourism, improvement of local economy, international climate recognition.",
    impactAr: "خلق فرص عمل محلية، تعزيز السياحة المستدامة، تحسين الاقتصاد المحلي، الاعتراف الدولي بالمناخ.",
    statusFr: "Achevé",
    statusEn: "Completed",
    statusAr: "منجز",
    startDate: "2020-01",
    endDate: "2022-09",
    partners: ["Association Ingénierie et Développement", "Moroccan Coalition for Territorial Communities for Climate"],
    recognition: {
      fr: "Prix international des maires pour le climat (International Climate Mayors Award), Paris",
      en: "International Climate Mayors Award, Paris",
      ar: "جائزة الرؤساء البلديين الدوليين للمناخ، باريس",
      date: "2022-09",
    },
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "water-supply-infrastructure",
    titleFr: "Infrastructure d'approvisionnement en eau potable",
    titleEn: "Drinking Water Supply Infrastructure",
    titleAr: "البنية التحتية لإمدادات المياه الصالحة للشرب",
    problemFr: "Accès limité à l'eau potable dans les zones rurales et reculées",
    problemEn: "Limited access to drinking water in rural and remote areas",
    problemAr: "وصول محدود إلى الماء الصالح للشرب في المناطق الريفية والنائية",
    descriptionFr: "Projet de développement de l'infrastructure hydraulique de la commune d'Oulmès visant à améliorer l'accès à l'eau potable dans la région.",
    descriptionEn: "Infrastructure development project for the Oulmès commune aimed at improving access to drinking water in the region.",
    descriptionAr: "مشروع تطوير البنية التحتية المائية لجماعة أولماس يهدف إلى تحسين الوصول إلى الماء الصالح للشرب في المنطقة.",
    detailsFr: "Ce projet inclut la construction et l'expansion de réseaux de distribution d'eau, la rénovation des points d'eau communautaires, et l'installation de systèmes de traitement modernes pour garantir la qualité de l'eau.",
    detailsEn: "This project includes construction and expansion of water distribution networks, renovation of community water points, and installation of modern treatment systems to ensure water quality.",
    detailsAr: "يشمل هذا المشروع بناء وتوسيع شبكات توزيع المياه وتجديد نقاط المياه الجماعية وتثبيت أنظمة معالجة حديثة لضمان جودة المياه.",
    impactFr: "Amélioration de l'accès à l'eau potable pour des milliers de résidents, réduction des maladies liées à l'eau, amélioration de la santé publique.",
    impactEn: "Improved access to drinking water for thousands of residents, reduction in water-related diseases, improved public health.",
    impactAr: "تحسين الوصول إلى الماء الصالح للشرب لآلاف السكان، تقليل الأمراض المرتبطة بالماء، تحسين الصحة العامة.",
    statusFr: "En cours",
    statusEn: "Ongoing",
    statusAr: "جارٍ",
    startDate: "2022-06",
    partners: ["Commune d'Oulmès", "Ministère de l'Intérieur"],
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "local-economic-development",
    titleFr: "Programme de développement économique local",
    titleEn: "Local Economic Development Program",
    titleAr: "برنامج التنمية الاقتصادية المحلية",
    problemFr: "Faibles opportunités économiques et taux de chômage élevé dans les zones rurales",
    problemEn: "Low economic opportunities and high unemployment in rural areas",
    problemAr: "فرص اقتصادية منخفضة ومعدل بطالة مرتفع في المناطق الريفية",
    descriptionFr: "Initiative de soutien aux petites et moyennes entreprises locales, avec un accent particulier sur l'agriculture et l'élevage de la race bovine Oulmès-Zaër.",
    descriptionEn: "Initiative to support local small and medium-sized enterprises, with particular emphasis on agriculture and Oulmès-Zaër cattle breeding.",
    descriptionAr: "مبادرة لدعم المشاريع الصغيرة والمتوسطة المحلية، مع التركيز بشكل خاص على الفلاحة وتربية ماشية أولماس-زاير.",
    detailsFr: "Le programme fournit des microcrédits, une formation commerciale, et un mentorat aux entrepreneurs locaux. Il promeut notamment la race bovine Oulmès-Zaër, encourageant les coopératives d'éleveurs et facilitant l'accès aux marchés.",
    detailsEn: "The program provides microloans, business training, and mentoring to local entrepreneurs. It notably promotes the Oulmès-Zaër cattle breed, encouraging breeder cooperatives and facilitating market access.",
    detailsAr: "يوفر البرنامج قروضاً صغيرة وتدريباً تجارياً والإرشاد للرياديين المحليين. كما يعزز سلالة ماشية أولماس-زاير، ويشجع تعاونيات المربين ويسهل الوصول إلى الأسواق.",
    impactFr: "Création de plus de 200 emplois, augmentation des revenus locaux, préservation de la race bovine Oulmès-Zaër, développement des coopératives.",
    impactEn: "Creation of over 200 jobs, increased local income, preservation of Oulmès-Zaër cattle breed, cooperative development.",
    impactAr: "إنشاء أكثر من 200 فرصة عمل، زيادة الدخل المحلي، الحفاظ على سلالة ماشية أولماس-زاير، تطوير التعاونيات.",
    statusFr: "En cours",
    statusEn: "Ongoing",
    statusAr: "جارٍ",
    startDate: "2021-03",
    partners: ["Commune d'Oulmès", "Fédération nationale des éleveurs Oulmès-Zaër"],
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "education-capacity-building",
    titleFr: "Programme de renforcement des capacités éducatives",
    titleEn: "Education Capacity Building Program",
    titleAr: "برنامج تعزيز القدرات التعليمية",
    problemFr: "Qualité insuffisante de l'éducation et manque de ressources dans les écoles rurales",
    problemEn: "Insufficient education quality and lack of resources in rural schools",
    problemAr: "جودة تعليم غير كافية ونقص الموارد في المدارس الريفية",
    descriptionFr: "Initiative visant à améliorer la qualité de l'éducation dans les établissements scolaires de la commune, incluant la formation des enseignants et la modernisation des infrastructures éducatives.",
    descriptionEn: "Initiative aimed at improving education quality in the commune's schools, including teacher training and modernization of educational infrastructure.",
    descriptionAr: "مبادرة تهدف إلى تحسين جودة التعليم في المؤسسات التعليمية بالجماعة، بما في ذلك تكوين المعلمين وتحديث البنية التحتية التعليمية.",
    detailsFr: "Le programme inclut la formation des enseignants en pédagogie moderne, la fourniture de matériel éducatif, la réparation et l'extension des bâtiments scolaires, et l'introduction de technologies numériques en classe.",
    detailsEn: "The program includes teacher training in modern pedagogy, provision of educational materials, repair and extension of school buildings, and introduction of digital technologies in classrooms.",
    detailsAr: "يشمل البرنامج تكوين المعلمين في علم التربية الحديث وتوفير المواد التعليمية وإصلاح وتوسيع المباني المدرسية وإدخال التقنيات الرقمية في الفصول الدراسية.",
    impactFr: "Amélioration des résultats scolaires, augmentation des taux d'inscription, renforcement des compétences pédagogiques, accès au numérique pour les élèves.",
    impactEn: "Improved academic results, increased enrollment rates, enhanced teaching skills, digital access for students.",
    impactAr: "تحسين النتائج الدراسية وزيادة معدلات الالتحاق وتعزيز المهارات التعليمية والوصول الرقمي للطلاب.",
    statusFr: "En cours",
    statusEn: "Ongoing",
    statusAr: "جارٍ",
    startDate: "2021-09",
    partners: ["Ministère de l'Éducation", "UNESCO"],
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "road-infrastructure-rehabilitation",
    titleFr: "Réhabilitation des infrastructures routières",
    titleEn: "Road Infrastructure Rehabilitation",
    titleAr: "إعادة تأهيل البنية التحتية للطرق",
    problemFr: "État dégradé des routes rurales affectant la mobilité et l'accès aux services",
    problemEn: "Degraded condition of rural roads affecting mobility and access to services",
    problemAr: "الحالة المتدهورة للطرق الريفية التي تؤثر على الحركة والوصول إلى الخدمات",
    descriptionFr: "Projet de réhabilitation et de maintenance des routes rurales et régionales reliant les différents quartiers et villages de la commune, y compris la Route régionale 704 et les routes provinciales 4316 et 4325.",
    descriptionEn: "Project for rehabilitation and maintenance of rural and regional roads connecting different neighborhoods and villages of the commune, including Regional Road 704 and provincial roads 4316 and 4325.",
    descriptionAr: "مشروع إعادة تأهيل وصيانة الطرق الريفية والإقليمية التي تربط بين الأحياء والقرى المختلفة بالجماعة، بما في ذلك الطريق الإقليمية 704 والطرق الإقليمية 4316 و 4325.",
    detailsFr: "Le projet comprend l'asphaltage de nouvelles sections routières, la réparation des routes existantes, l'amélioration du drainage et la construction de bermes de sécurité. Des investissements majeurs ont été réalisés sur la RR704 reliant Oulmès et Aklimous.",
    detailsEn: "The project includes asphalting new road sections, repairing existing roads, improving drainage, and constructing safety berms. Major investments have been made on RR704 connecting Oulmès and Aklimous.",
    detailsAr: "يشمل المشروع رصف أقسام طرق جديدة وإصلاح الطرق القائمة وتحسين الصرف وبناء حواجز أمان. تم إجراء استثمارات كبيرة على الطريق الإقليمية 704 التي تربط أولماس وأكليموس.",
    impactFr: "Réduction du temps de trajet, amélioration de la sécurité routière, facilitation du commerce et de l'accès aux services, développement économique régional.",
    impactEn: "Reduced travel time, improved road safety, facilitation of trade and access to services, regional economic development.",
    impactAr: "تقليل وقت السفر وتحسين السلامة على الطريق وتسهيل التجارة والوصول إلى الخدمات والتنمية الاقتصادية الإقليمية.",
    statusFr: "En cours",
    statusEn: "Ongoing",
    statusAr: "جارٍ",
    startDate: "2020-06",
    partners: ["Ministère de l'Intérieur", "Conseil régional"],
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "healthcare-services-expansion",
    titleFr: "Expansion des services de santé",
    titleEn: "Healthcare Services Expansion",
    titleAr: "توسيع خدمات الرعاية الصحية",
    problemFr: "Accès limité aux services de santé et manque d'équipements médicaux modernes",
    problemEn: "Limited access to healthcare services and lack of modern medical equipment",
    problemAr: "وصول محدود إلى خدمات الرعاية الصحية ونقص المعدات الطبية الحديثة",
    descriptionFr: "Initiative de développement des services de santé communaux incluant la modernisation des centres de santé et l'amélioration de l'accès aux services médicaux dans les zones rurales.",
    descriptionEn: "Initiative to develop municipal health services including modernization of health centers and improving access to medical services in rural areas.",
    descriptionAr: "مبادرة لتطوير خدمات الصحة الجماعية بما في ذلك تحديث مراكز الصحة وتحسين الوصول إلى الخدمات الطبية في المناطق الريفية.",
    detailsFr: "Le projet comprend la construction et la rénovation de centres de santé, l'acquisition d'équipements médicaux modernes, le recrutement de personnel médical qualifié, et la mise en place de programmes de sensibilisation à la santé.",
    detailsEn: "The project includes construction and renovation of health centers, acquisition of modern medical equipment, recruitment of qualified medical staff, and implementation of health awareness programs.",
    detailsAr: "يشمل المشروع بناء وتجديد مراكز الصحة واستحواذ المعدات الطبية الحديثة وتعيين الموظفين الطبيين المؤهلين وتنفيذ برامج التوعية الصحية.",
    impactFr: "Amélioration de l'accès aux soins de santé, réduction de la mortalité maternelle et infantile, prévention des maladies, amélioration de l'espérance de vie.",
    impactEn: "Improved healthcare access, reduced maternal and infant mortality, disease prevention, improved life expectancy.",
    impactAr: "تحسين الوصول إلى الرعاية الصحية وتقليل وفيات الأمهات والرضع والوقاية من الأمراض وتحسين متوسط العمر المتوقع.",
    statusFr: "En cours",
    statusEn: "Ongoing",
    statusAr: "جارٍ",
    startDate: "2022-03",
    partners: ["Ministère de la Santé", "OMS"],
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "cultural-heritage-preservation",
    titleFr: "Préservation du patrimoine culturel amazighe",
    titleEn: "Amazigh Cultural Heritage Preservation",
    titleAr: "الحفاظ على التراث الثقافي الأمازيغي",
    problemFr: "Érosion des traditions culturelles amazighes face à la modernisation",
    problemEn: "Erosion of Amazigh cultural traditions facing modernization",
    problemAr: "تآكل التقاليد الثقافية الأمازيغية في مواجهة التحديث",
    descriptionFr: "Programme de protection et de valorisation du patrimoine culturel amazighe local, incluant l'organisation d'événements culturels et la documentation des traditions locales.",
    descriptionEn: "Program for protection and promotion of local Amazigh cultural heritage, including organization of cultural events and documentation of local traditions.",
    descriptionAr: "برنامج لحماية وتعزيز التراث الثقافي الأمازيغي المحلي، بما في ذلك تنظيم الفعاليات الثقافية وتوثيق التقاليد المحلية.",
    detailsFr: "Le programme organise des festivals culturels annuels, documente les traditions orales et artisanales, soutient les artisans locaux, et crée des musées communautaires pour préserver l'identité amazighe.",
    detailsEn: "The program organizes annual cultural festivals, documents oral and craft traditions, supports local artisans, and creates community museums to preserve Amazigh identity.",
    detailsAr: "ينظم البرنامج مهرجانات ثقافية سنوية ويوثق التقاليد الشفاهية والحرفية ويدعم الحرفيين المحليين وينشئ متاحف جماعية للحفاظ على الهوية الأمازيغية.",
    impactFr: "Préservation des traditions amazighes, promotion du tourisme culturel, soutien économique aux artisans, renforcement de l'identité locale.",
    impactEn: "Preservation of Amazigh traditions, promotion of cultural tourism, economic support for artisans, strengthening local identity.",
    impactAr: "الحفاظ على التقاليد الأمازيغية وتعزيز السياحة الثقافية والدعم الاقتصادي للحرفيين وتعزيز الهوية المحلية.",
    statusFr: "En cours",
    statusEn: "Ongoing",
    statusAr: "جارٍ",
    startDate: "2021-01",
    partners: ["UNESCO", "Institut royal de la culture amazighe"],
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
  {
    id: "bus-terminal-oulmès",
    titleFr: "Gare routière d'Oulmès",
    titleEn: "Oulmès Bus Terminal",
    titleAr: "محطة الحافلات بأولماس",
    problemFr: "Manque d'infrastructure de transport moderne et absence de gare routière dédiée",
    problemEn: "Lack of modern transport infrastructure and absence of dedicated bus terminal",
    problemAr: "نقص البنية التحتية للنقل الحديث وعدم وجود محطة حافلات مخصصة",
    descriptionFr: "Projet d'infrastructure de transport visant à construire une gare routière moderne pour desservir la commune d'Oulmès et ses alentours. Des reportages médiatiques en 2025 ont décrit un litige concernant la procédure de passation de marché de ce projet.",
    descriptionEn: "Infrastructure project aimed at building a modern bus terminal to serve Oulmès commune and surrounding areas. Media reports in 2025 described a dispute concerning the project's procurement procedure.",
    descriptionAr: "مشروع بنية تحتية للنقل يهدف إلى بناء محطة حافلات حديثة لخدمة جماعة أولماس والمناطق المحيطة بها. أوردت التقارير الإعلامية في 2025 نزاعاً بشأن إجراء المناقصة للمشروع.",
    detailsFr: "الجزء الفرنسي: محطة الحافلات تتضمن رصائف حديثة وقاعات انتظار مكيفة وخدمات الصراف الآلي والمقاهي والمحلات. يهدف المشروع إلى تحسين الربط الإقليمي وإنشاء بنية تحتية نقل من الطراز العالمي.",
    detailsEn: "The bus terminal includes modern platforms, air-conditioned waiting areas, ATM services, cafes, and shops. The project aims to improve regional connectivity and create a world-class transport infrastructure.",
    detailsAr: "تتضمن محطة الحافلات رصائف حديثة وقاعات انتظار مكيفة وخدمات الصراف الآلي والمقاهي والمحلات. يهدف المشروع إلى تحسين الربط الإقليمي وإنشاء بنية تحتية نقل من الطراز العالمي.",
    impactFr: "Amélioration de la connectivité régionale, création d'emplois, augmentation du flux de passagers, développement économique, amélioration des transports en commun.",
    impactEn: "Improved regional connectivity, job creation, increased passenger flow, economic development, improved public transportation.",
    impactAr: "تحسين الربط الإقليمي وخلق فرص عمل وزيادة تدفق الركاب والتنمية الاقتصادية وتحسين النقل العام.",
    statusFr: "En développement",
    statusEn: "Under Development",
    statusAr: "قيد التطوير",
    startDate: "2024-06",
    endDate: "2026-12",
    partners: ["Ministère des Transports", "Commune d'Oulmès"],
    source: {
      name: "Commune d'Oulmès",
      url: "https://www.communeoulmes.ma/",
    },
  },
];
