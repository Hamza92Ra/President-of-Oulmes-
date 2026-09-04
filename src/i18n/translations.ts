export type Lang = "fr" | "ar" | "en";

export const translations = {
    fr: {
        nav: {
            biography: "Biographie",
            parliament: "Parlement",
            oulmes: "Oulmès",
            projects: "Projets",
            timeline: "Parcours",
            media: "Médias",
            transparency: "Transparence",
            sources: "Sources",
            contact: "Contact",
        },
        footer: {
            updatedAt: "Dernière mise à jour :",
            sourcesNote:
                "Les informations sont présentées avec leurs sources lorsqu'elles sont disponibles.",
        },
        hero: {
            role: "Ingénieur · Élu local · Parlementaire",
            intro:
                "Découvrez son parcours professionnel, son expérience politique, son activité parlementaire et les initiatives documentées au niveau local.",
            ctaBiography: "Découvrir le parcours",
            ctaParliament: "Voir l'activité parlementaire",
        },
        pillars: {
            parliament: {
                title: "Parlement",
                description: "Son activité et bilan parlementaires.",
            },
            oulmes: {
                title: "Oulmès",
                description: "Activité au niveau de la commune locale.",
            },
            territory: {
                title: "Territoire",
                description: "Infrastructure, agriculture, eau et développement.",
            },
            biography: {
                title: "Parcours",
                description: "Biographie professionnelle et politique.",
            },
        },
        common: {
            loading: "Chargement...",
            source: "Source",
            date: "Date",
            ministry: "Ministère",
            seeMore: "Voir la suite →",
            seeAll: "Voir tout →",
            documented: "Documenté",
            toBeVerified: "À vérifier",
        },
        home: {
            territoryTitle: "Territoire — Khémisset & Oulmès",
            latestParliamentaryActivity: "Dernière activité parlementaire",
            seeFullRegistry: "Voir le registre complet →",
            oulmesAction: "Action à Oulmès",
            seeOulmesAction: "Voir l'action à Oulmès →",
            documentedProjects: "Projets communaux documentés",
            localThemes: "Thématiques locales",
            sourcesIntro:
                "Tout ce que vous lisez sur ce site devrait être traçable.",
            exploreSources: "Explorer les sources",
        },
        stats: {
            parliamentaryQuestions: "Questions parlementaires",
            period2021_2026: "2021–2026",
            presidencyEngineers:
                "Présidence du Conseil national des ingénieurs géomètres-topographes",
            period2012_2015: "2012–2015",
            pamGroupLeader:
                "Élection rapportée à la tête du groupe parlementaire PAM",
            year2017: "2017",
            pamCandidate: "Candidat PAM",
            khemissetOulmes: "Khémisset–Oulmès",
        },
        storyFlow: {
            eyebrow: "Parcours",
            title:
                "Un parcours entre expertise, territoire et service public",
            steps: [
                "Ingénierie",
                "Expertise professionnelle",
                "Expérience politique",
                "Parlement",
                "Oulmès",
                "Candidature 2026",
            ],
        },
        parliament: {
            title: "Activité parlementaire",
            description:
                "{count} questions parlementaires sont actuellement recensées sur le profil de la Chambre des Représentants pour la législature 2021–2026.",
            noQuestions:
                "Aucune question dans cette catégorie pour le moment.",
            categories: {
                ALL: "Tous",
                Infrastructure: "Infrastructure",
                Transport: "Transport",
                Health: "Santé",
                Education: "Éducation",
                Agriculture: "Agriculture",
                Water: "Eau",
                Employment: "Emploi",
                "Local Government": "Administration locale",
                Economy: "Économie",
                Environment: "Environnement",
                Other: "Autre",
            },
        },
        oulmesPreview: {
            title: "Oulmès",
            seeMore: "Voir l'action à Oulmès →",
            forum: "Forum de développement local",
            programme: "Programme d'action communal 2023–2028",
        },
        forum: {
            editionDetails: "Détails de l'édition {year}",
            editionToVerify:
                "Détails spécifiques de l'édition {year} du Forum de développement local d'Oulmès — à vérifier.",
            reportedThemes:
                "Thématiques généralement rapportées dans la couverture du forum",
        },
        map: {
            loading: "Chargement de la carte...",
        },
        contact: {
            email: "Email",
            phone: "Téléphone",
            office: "Bureau",
            note: "Ces coordonnées sont configurables dans src/config/site.ts.",
        },
        transparency: {
            title: "Registre public",
            description:
                "Ce site vise à donner une vue transparente, sourcée et vérifiable du parcours et de l'activité de Mohamed Achrourou.",
            corrections: "Corrections",
            correctionsText:
                "Si une information présentée sur ce site est inexacte ou incomplète, merci de nous contacter afin qu'elle puisse être corrigée.",
        },
        sources: {
            howWeSource: "Comment nous sourçons l'information",
            method1:
                "Les sources officielles du Parlement sont priorisées pour l'activité parlementaire.",
            method2:
                "Les sources municipales officielles sont priorisées pour les projets communaux.",
            method3:
                "Les sources officielles du PAM sont utilisées pour les déclarations du parti.",
            method4:
                "Les médias réputés sont utilisés pour le contexte historique et le reportage.",
            method5: "Les allégations contestées sont clairement identifiées.",
            method6:
                "Les allégations ne sont jamais présentées comme des faits établis.",
        },
        media: {
            reported: "Ce qui a été rapporté",
            officialResponse: "Réponse officielle",
            currentStatus: "Statut actuel",
            notFound: "non trouvée dans les sources examinées",
            toVerify: "À vérifier",
            updateNote:
                "Cette page sera mise à jour si une réponse officielle vérifiée devient disponible. Les allégations rapportées ne constituent pas des faits établis.",
        },
        biography: {
            professionalPath: "Parcours professionnel",
            politicalPath: "Parcours politique",
        },
        election2026: {
            candidate: "Candidat",
            party: "Parti",
            constituency: "Circonscription",
            toVerify: "Détails officiels de la liste des candidats à vérifier.",
        },
        pages: {
            waterEnvironment: "Voir aussi le projet des",
            developmentProgramme: "Programme d'action communal",
            territoryAgriculture: "Territoire & Agriculture",
            educationYouth: "Éducation & Jeunesse",
            health: "Santé",
            cultureIdentity: "Culture & Identité",
            transportInfrastructure: "Transport & Infrastructure",
        },
    },

    ar: {
        nav: {
            biography: "السيرة الذاتية",
            parliament: "البرلمان",
            oulmes: "أولماس",
            projects: "المشاريع",
            timeline: "المسار",
            media: "وسائل الإعلام",
            transparency: "الشفافية",
            sources: "المصادر",
            contact: "اتصل بنا",
        },
        footer: {
            updatedAt: "آخر تحديث:",
            sourcesNote: "المعلومات معروضة مع مصادرها عند توفرها.",
        },
        hero: {
            role: "مهندس · منتخب محلي · برلماني",
            intro:
                "اكتشف مساره المهني، تجربته السياسية، نشاطه البرلماني والمبادرات الموثقة على المستوى المحلي.",
            ctaBiography: "اكتشف المسار",
            ctaParliament: "شاهد النشاط البرلماني",
        },
        pillars: {
            parliament: {
                title: "البرلمان",
                description: "نشاطه وحصيلته البرلمانية.",
            },
            oulmes: {
                title: "أولماس",
                description: "النشاط على مستوى الجماعة المحلية.",
            },
            territory: {
                title: "التراب",
                description: "البنية التحتية، الفلاحة، الماء والتنمية.",
            },
            biography: {
                title: "المسار",
                description: "السيرة المهنية والسياسية.",
            },
        },
        common: {
            loading: "جار التحميل...",
            source: "المصدر",
            date: "التاريخ",
            ministry: "الوزارة",
            seeMore: "عرض المزيد →",
            seeAll: "عرض الكل →",
            documented: "موثق",
            toBeVerified: "يُرجى التحقق",
        },
        home: {
            territoryTitle: "التراب — الخميسات وأولماس",
            latestParliamentaryActivity: "آخر النشاط البرلماني",
            seeFullRegistry: "عرض السجل الكامل →",
            oulmesAction: "العمل في أولماس",
            seeOulmesAction: "عرض العمل في أولماس →",
            documentedProjects: "المشاريع الجماعية الموثقة",
            localThemes: "المواضيع المحلية",
            sourcesIntro:
                "كل ما تقرأه على هذا الموقع يجب أن يكون قابلاً للتتبع.",
            exploreSources: "استكشف المصادر",
        },
        stats: {
            parliamentaryQuestions: "الأسئلة البرلمانية",
            period2021_2026: "٢٠٢١–٢٠٢٦",
            presidencyEngineers:
                "رئاسة المجلس الوطني للمهندسين الطوبوغرافيين",
            period2012_2015: "٢٠١٢–٢٠١٥",
            pamGroupLeader:
                "انتخاب مُبلَّغ عنه على رأس الفريق البرلماني للأصالة والمعاصرة",
            year2017: "٢٠١٧",
            pamCandidate: "مرشح حزب الأصالة والمعاصرة",
            khemissetOulmes: "الخميسات–أولماس",
        },
        storyFlow: {
            eyebrow: "المسار",
            title: "مسار بين الخبرة والتراب والخدمة العامة",
            steps: [
                "الهندسة",
                "الخبرة المهنية",
                "التجربة السياسية",
                "البرلمان",
                "أولماس",
                "ترشيح ٢٠٢٦",
            ],
        },
        parliament: {
            title: "النشاط البرلماني",
            description:
                "يتم حالياً إحصاء {count} سؤالاً برلمانياً في ملف الغرفة للفترة التشريعية ٢٠٢١–٢٠٢٦.",
            noQuestions: "لا توجد أسئلة في هذا التصنيف حالياً.",
            categories: {
                ALL: "الكل",
                Infrastructure: "البنية التحتية",
                Transport: "النقل",
                Health: "الصحة",
                Education: "التعليم",
                Agriculture: "الفلاحة",
                Water: "الماء",
                Employment: "الشغل",
                "Local Government": "الجماعات الترابية",
                Economy: "الاقتصاد",
                Environment: "البيئة",
                Other: "آخر",
            },
        },
        oulmesPreview: {
            title: "أولماس",
            seeMore: "عرض العمل في أولماس →",
            forum: "منتدى التنمية المحلية",
            programme: "برنامج العمل الجماعي ٢٠٢٣–٢٠٢٨",
        },
        forum: {
            editionDetails: "تفاصيل دورة {year}",
            editionToVerify:
                "تفاصيل محددة لدورة {year} لمنتدى التنمية المحلية بأولماس — يُرجى التحقق.",
            reportedThemes:
                "المواضيع المُبلَّغ عنها عادةً في تغطية المنتدى",
        },
        map: {
            loading: "جار تحميل الخريطة...",
        },
        contact: {
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            office: "المكتب",
            note: "يمكن تعديل هذه الإحداثيات في src/config/site.ts.",
        },
        transparency: {
            title: "السجل العام",
            description:
                "يهدف هذا الموقع إلى تقديم رؤية شفافة وموثقة وقابلة للتحقق من مسار ونشاط محمد أشرورو.",
            corrections: "التصحيحات",
            correctionsText:
                "إذا كانت المعلومات المعروضة على هذا الموقع غير دقيقة أو ناقصة، يرجى الاتصال بنا لتصحيحها.",
        },
        sources: {
            howWeSource: "كيف نستقصي المعلومات",
            method1:
                "تُعطى الأولوية للمصادر الرسمية للبرلمان فيما يتعلق بالنشاط البرلماني.",
            method2:
                "تُعطى الأولوية للمصادر الجماعية الرسمية فيما يتعلق بالمشاريع الجماعية.",
            method3:
                "تُستخدم المصادر الرسمية للأصالة والمعاصرة للتصريحات الحزبية.",
            method4:
                "تُستخدم وسائل الإعلام الموثوقة للسياق التاريخي والتغطية الإعلامية.",
            method5: "يتم تحديد الادعاءات المُثارَة بوضوح.",
            method6: "لا تُعرض الادعاءات أبداً كحقائق ثابتة.",
        },
        media: {
            reported: "ما تم الإبلاغ عنه",
            officialResponse: "الرد الرسمي",
            currentStatus: "الوضعية الحالية",
            notFound: "غير موجودة في المصادر المدروسة",
            toVerify: "يُرجى التحقق",
            updateNote:
                "سيتم تحديث هذه الصفحة إذا أصبح رد رسمي مُتحقَّق منه متاحاً. الادعاءات المُبلَّغ عنها لا تشكل حقائق ثابتة.",
        },
        biography: {
            professionalPath: "المسار المهني",
            politicalPath: "المسار السياسي",
        },
        election2026: {
            candidate: "مرشح",
            party: "الحزب",
            constituency: "الدائرة",
            toVerify: "يُرجى التحقق من التفاصيل الرسمية لقائمة المرشحين.",
        },
        pages: {
            waterEnvironment: "انظر أيضاً مشروع",
            developmentProgramme: "برنامج العمل الجماعي",
            territoryAgriculture: "التراب والفلاحة",
            educationYouth: "التعليم والشباب",
            health: "الصحة",
            cultureIdentity: "الثقافة والهوية",
            transportInfrastructure: "النقل والبنية التحتية",
        },
    },

    en: {
        nav: {
            biography: "Biography",
            parliament: "Parliament",
            oulmes: "Oulmès",
            projects: "Projects",
            timeline: "Timeline",
            media: "Media",
            transparency: "Transparency",
            sources: "Sources",
            contact: "Contact",
        },
        footer: {
            updatedAt: "Last updated:",
            sourcesNote:
                "Information is presented with its sources when available.",
        },
        hero: {
            role: "Engineer · Local elected official · Member of Parliament",
            intro:
                "Discover his professional background, political experience, parliamentary activity and documented local initiatives.",
            ctaBiography: "Discover his background",
            ctaParliament: "View parliamentary activity",
        },
        pillars: {
            parliament: {
                title: "Parliament",
                description: "His parliamentary activity and record.",
            },
            oulmes: {
                title: "Oulmès",
                description: "Activity at the local municipality level.",
            },
            territory: {
                title: "Territory",
                description: "Infrastructure, agriculture, water and development.",
            },
            biography: {
                title: "Background",
                description: "Professional and political biography.",
            },
        },
        common: {
            loading: "Loading...",
            source: "Source",
            date: "Date",
            ministry: "Ministry",
            seeMore: "See more →",
            seeAll: "View all →",
            documented: "Documented",
            toBeVerified: "To be verified",
        },
        home: {
            territoryTitle: "Territory — Khémisset & Oulmès",
            latestParliamentaryActivity: "Latest parliamentary activity",
            seeFullRegistry: "View full registry →",
            oulmesAction: "Action in Oulmès",
            seeOulmesAction: "View action in Oulmès →",
            documentedProjects: "Documented municipal projects",
            localThemes: "Local themes",
            sourcesIntro:
                "Everything you read on this site should be traceable.",
            exploreSources: "Explore sources",
        },
        stats: {
            parliamentaryQuestions: "Parliamentary questions",
            period2021_2026: "2021–2026",
            presidencyEngineers:
                "Presidency of the National Council of Surveying Engineers",
            period2012_2015: "2012–2015",
            pamGroupLeader:
                "Reported election as head of PAM parliamentary group",
            year2017: "2017",
            pamCandidate: "PAM Candidate",
            khemissetOulmes: "Khémisset–Oulmès",
        },
        storyFlow: {
            eyebrow: "Background",
            title:
                "A background of expertise, territory and public service",
            steps: [
                "Engineering",
                "Professional expertise",
                "Political experience",
                "Parliament",
                "Oulmès",
                "2026 Candidacy",
            ],
        },
        parliament: {
            title: "Parliamentary activity",
            description:
                "{count} parliamentary questions are currently recorded on the House of Representatives profile for the 2021–2026 legislature.",
            noQuestions: "No questions in this category at the moment.",
            categories: {
                ALL: "All",
                Infrastructure: "Infrastructure",
                Transport: "Transport",
                Health: "Health",
                Education: "Education",
                Agriculture: "Agriculture",
                Water: "Water",
                Employment: "Employment",
                "Local Government": "Local Government",
                Economy: "Economy",
                Environment: "Environment",
                Other: "Other",
            },
        },
        oulmesPreview: {
            title: "Oulmès",
            seeMore: "View action in Oulmès →",
            forum: "Local development forum",
            programme: "Municipal action program 2023–2028",
        },
        forum: {
            editionDetails: "Details of the {year} edition",
            editionToVerify:
                "Specific details of the {year} edition of the Oulmès Local Development Forum — to be verified.",
            reportedThemes:
                "Themes generally reported in forum coverage",
        },
        map: {
            loading: "Loading map...",
        },
        contact: {
            email: "Email",
            phone: "Phone",
            office: "Office",
            note: "These details can be configured in src/config/site.ts.",
        },
        transparency: {
            title: "Public record",
            description:
                "This site aims to provide a transparent, sourced and verifiable view of Mohamed Achrourou's background and activity.",
            corrections: "Corrections",
            correctionsText:
                "If information presented on this site is inaccurate or incomplete, please contact us so it can be corrected.",
        },
        sources: {
            howWeSource: "How we source information",
            method1:
                "Official Parliament sources are prioritized for parliamentary activity.",
            method2:
                "Official municipal sources are prioritized for municipal projects.",
            method3:
                "Official PAM sources are used for party statements.",
            method4:
                "Reputable media are used for historical context and reporting.",
            method5: "Contested allegations are clearly identified.",
            method6: "Allegations are never presented as established facts.",
        },
        media: {
            reported: "What has been reported",
            officialResponse: "Official response",
            currentStatus: "Current status",
            notFound: "not found in examined sources",
            toVerify: "To be verified",
            updateNote:
                "This page will be updated if a verified official response becomes available. Reported allegations do not constitute established facts.",
        },
        biography: {
            professionalPath: "Professional background",
            politicalPath: "Political background",
        },
        election2026: {
            candidate: "Candidate",
            party: "Party",
            constituency: "Constituency",
            toVerify: "Official candidate list details to be verified.",
        },
        pages: {
            waterEnvironment: "See also the project of",
            developmentProgramme: "Municipal action program",
            territoryAgriculture: "Territory & Agriculture",
            educationYouth: "Education & Youth",
            health: "Health",
            cultureIdentity: "Culture & Identity",
            transportInfrastructure: "Transport & Infrastructure",
        },
    },
} as const;

export type TranslationShape = typeof translations.fr;