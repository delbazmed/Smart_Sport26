/**
 * Smart Sport - High School Edition (v2.0)
 * Core Logic Engine
 */

// ==========================================
// 1. Translation System & Localization Dictionary
// ==========================================
const TRANSLATIONS = {
    ar: {
        "app-subtitle": "التربية البدنية والرياضية - الطور الثانوي",
        "menu-dashboard-short": "الرئيسية",
        "menu-students-short": "الأقسام",
        "menu-grading-short": "التقويم",
        "menu-pedagogical-tools-short": "الوسائل",
        "menu-pedagogical-short": "الملف",
        "menu-settings-short": "الإعدادات",
        "menu-dashboard": "لوحة القيادة",
        "menu-students": "الأقسام والتلاميذ",
        "menu-grading": "التقويم والنتائج",
        "menu-settings": "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",
        "menu-lottery": "\u0627\u0644\u0642\u0631\u0639\u0629 \u0627\u0644\u062b\u0646\u0627\u0626\u064a\u0629 \u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629",
        "title-lottery": "\u0627\u0644\u0642\u0631\u0639\u0629 \u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629 \u0627\u0644\u0645\u0636\u0627\u062f\u0629 \u0644\u0644\u062a\u062d\u064a\u0632",
        "lottery-remaining-badge": "\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: ",
        "lottery-completed": "[ \ud83c\udfc1 \u0627\u0643\u062a\u0645\u0644\u062a \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0627\u062a \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0627\u0636\u0631\u064a\u0646 ]",
        "btn-lottery-draw": "\ud83c\udfb2 \u0625\u062c\u0631\u0627\u0621 \u0627\u0644\u0642\u0631\u0639\u0629 \u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629",
        "btn-lottery-reset": "\ud83d\udd04 \u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0642\u0631\u0639\u0629 \u0644\u0644\u062c\u0645\u064a\u0639",
        "lottery-winner-header": "\ud83c\udfaf \u0627\u0644\u062a\u0644\u0645\u064a\u0630 \u0627\u0644\u0642\u0627\u062f\u0645:",
        "title-dashboard": "لوحة القيادة العامة",
        "title-classes": "تسيير الأقسام والتلاميذ",
        "title-grading": "دفتر التقويم والنتائج",
        "title-settings": "إعدادات التطبيق العامة",
        "status-classes": "الأقسام:",
        "status-students": "التلاميذ:",
        "status-attendance": "الحضور السنوي:",
        "dash-total-classes": "إجمالي الأقسام",
        "dash-total-students": "إجمالي التلاميذ",
        "dash-avg-attendance": "نسبة الحضور السنوية",
        "dash-avg-grade": "المعدل السنوي العام",
        "dash-panel-leaderboard": "ترتيب الأقسام حسب النتائج السنوية",
        "dash-panel-info": "التوجيه البيداغوجي اليومي",
        "dash-quote-title": "الرياضة المدرسية بالثانوي",
        "dash-quote-text": "«العقل السليم في الجسم السليم». تساهم التربية البدنية والرياضية في بناء شخصية التلميذ، تعزيز الانضباط، وتطوير المهارات الحركية والاجتماعية للنجاح في الامتحانات الرسمية.",
        "dash-quick-links": "روابط سريعة",
        "btn-add-student": "إضافة تلميذ",
        "btn-evaluate": "تقييم الأقسام",
        "th-class": "القسم الدراسي",
        "th-students-count": "عدد التلاميذ",
        "th-attendance": "نسبة الحضور",
        "th-avg-score": "معدل القسم",
        "th-actions": "الإجراءات",
        "lbl-select-class": "اختر القسم الدراسي:",
        "btn-new-class": "قسم جديد",
        "btn-new-student": "تلميذ جديد",
        "btn-import-excel": "استيراد إكسل (XLSX)",
        "btn-export-class": "تصدير كشف القسم",
        "btn-export-all": "تصدير كل الأقسام",
        "btn-delete-class-text": "حذف القسم",
        "roster-panel-title": "تلاميذ القسم:",
        "badge-boys": "ذكور:",
        "badge-girls": "إناث:",
        "badge-exempted": "إعفاء كلي:",
        "th-student-lastname": "اللقب",
        "th-student-firstname": "الاسم",
        "th-gender": "الجنس",
        "th-birthdate": "تاريخ الميلاد",
        "th-student-phone": "رقم هاتف الولي",
        "th-exemptions-status": "الإعفاءات (ف1/ف2/ف3)",
        "lbl-select-term": "الفصل الدراسي:",
        "lbl-ind-sport": "النشاط الفردي:",
        "lbl-col-sport": "النشاط الجماعي:",
        "btn-save-all-grades": "حفظ جميع النقاط",
        "menu-continuous": "المراقبة المستمرة",
        "menu-assignment": "الفرض",
        "menu-exam": "الاختبار",
        "menu-summary": "كشف الفصل الحالي",
        "lbl-school": "المؤسسة:",
        "lbl-teacher": "الأستاذ:",
        "lbl-year": "السنة الدراسية:",
        "btn-undo": "تراجع",
        "btn-guide": "دليل المستخدم",
        "btn-scales": "سلم التنقيط",
        "btn-export-backup": "نسخة احتياطية",
        "btn-import-backup": "استعادة",
        "btn-archive": "أرشيف وسنة جديدة",
        "btn-config-activities": "إعداد الأنشطة الرياضية للفصول",
        "modal-class-title": "إضافة قسم جديد",
        "lbl-class-name": "اسم القسم (مثال: 1 ج م ع ت 1 أو 3 ع ت 2):",
        "lbl-class-grade": "المستوى الدراسي للقسم:",
        "btn-cancel": "إلغاء",
        "btn-confirm": "تأكيد وحفظ",
        "modal-student-title": "إضافة / تعديل بيانات التلميذ",
        "lbl-student-phone": "رقم هاتف الولي (لإرسال النتائج):",
        "lbl-exemptions": "إعفاء التلميذ من التقييم خلال الفصول:",
        "gender-m": "ذكر",
        "gender-f": "أنثى",
        "term-1": "الفصل الأول",
        "term-2": "الفصل الثاني",
        "term-3": "الفصل الثالث",
        "edit": "تعديل",
        "delete": "حذف",
        "saved-success": "تم حفظ البيانات بنجاح!",
        "reset-confirm": "هل أنت متأكد من إعادة تهيئة التطبيق؟ سيتم حذف كل البيانات نهائيا.",
        "class-delete-confirm": "هل أنت متأكد من حذف هذا القسم؟ سيتم حذف جميع التلاميذ المسجلين به مع كافة نقاطهم.",
        "csv-imported-success": "تم استيراد {count} تلاميذ بنجاح!",
        "invalid-csv-format": "ملف الإكسل غير متوافق. يرجى مطابقة أعمدة الجدول بالترتيب المطلوب (الاسم، اللقب، الجنس) في الورقة الأولى.",
        "student-added-success": "تم إضافة التلميذ بنجاح!",
        "student-updated-success": "تم تحديث بيانات التلميذ بنجاح!",
        "class-added-success": "تم إضافة القسم الجديد بنجاح!",
        "backup-imported-success": "تم استعادة النسخة الاحتياطية بنجاح!",
        "invalid-backup-file": "ملف الاستعادة غير صالح.",
        "no-students-in-class": "لا يوجد تلاميذ مسجلين في هذا القسم.",
        "sport-speed-run": "سرعة (60م)",
        "sport-endurance": "مداومة (800م / 600م)",
        "sport-long-jump": "الوثب الطويل",
        "sport-shot-put": "رمي الجلة",
        "sport-triple-jump": "الوثب الثلاثي",
        "sport-volleyball": "كرة الطائرة",
        "sport-handball": "كرة اليد",
        "sport-basketball": "كرة السلة",
        "th-performance": "الإنجاز",
        "th-calculated-grade": "المعدل النهائي",
        "exempted-abrv": "معفى",
        "active-abrv": "مؤهل",
        "btn-close": "إغلاق",
        "manual-title": "دليل استخدام تطبيق Smart Sport",
        "scale-manager-title": "تعديل سلم تنقيط الأنشطة الفردية",
        "modal-config-activities-title": "توزيع الأنشطة الرياضية للفصول",
        "menu-pedagogical": "الملف البيداغوجي",
        "title-pedagogical": "التحضير البيداغوجي والملف التربوي للأستاذ",
        "menu-stopwatch": "\u0627\u0644\u0645\u064a\u0642\u0627\u062a\u064a\u0020\u0627\u0644\u0630\u0643\u064a",
        "title-stopwatch": "\u0627\u0644\u0645\u064a\u0642\u0627\u062a\u064a\u0020\u0627\u0644\u0630\u0643\u064a",
        "menu-pedagogical-tools": "\u0627\u0644\u0648\u0633\u0627\u0626\u0644\u0020\u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629",
        "title-pedagogical-tools": "\u0627\u0644\u0648\u0633\u0627\u0626\u0644\u0020\u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629"
    },
    fr: {
        "app-subtitle": "Gestion de l'EPS - Enseignement Secondaire",
        "menu-dashboard-short": "Accueil",
        "menu-students-short": "Classes",
        "menu-grading-short": "Notes",
        "menu-pedagogical-tools-short": "Outils",
        "menu-pedagogical-short": "Dossier",
        "menu-settings-short": "R\u00e9glages",
        "menu-dashboard": "Tableau de bord",
        "menu-students": "Classes & Élèves",
        "menu-grading": "Notes & Évaluations",
        "menu-settings": "ParamÃ¨tres",
        "menu-lottery": "Tirage au Sort",
        "title-lottery": "Tirage au Sort Anti-Biais",
        "lottery-remaining-badge": "Restants : ",
        "lottery-completed": "[ \ud83c\udfc1 Tous les \u00e9l\u00e8ves pr\u00e9sents ont \u00e9t\u00e9 tir\u00e9s ]",
        "btn-lottery-draw": "\ud83c\udfb2 Effectuer le tirage",
        "btn-lottery-reset": "\ud83d\udd04 R\u00e9initialiser le tirage",
        "lottery-winner-header": "\ud83c\udfaf Prochain \u00e9l\u00e8ve :",
        "title-dashboard": "Tableau de Bord Général",
        "title-classes": "Gestion des Classes & Élèves",
        "title-grading": "Carnet de Notes & Résultats",
        "title-settings": "Paramètres de l'Application",
        "status-classes": "Classes:",
        "status-students": "Élèves:",
        "status-attendance": "Présence Annuelle:",
        "dash-total-classes": "Total des Classes",
        "dash-total-students": "Total des Élèves",
        "dash-avg-attendance": "Taux de Présence Annuel",
        "dash-avg-grade": "Moyenne Annuelle Générale",
        "dash-panel-leaderboard": "Classement des Classes par Résultats Annuels",
        "dash-panel-info": "Orientation Pédagogique Quotidienne",
        "dash-quote-title": "Sport Scolaire au Lycée",
        "dash-quote-text": "« Un esprit sain dans un corps sain ». L'éducation physique et sportive (EPS) contribue à forger la personnalité de l'élève, à renforcer la discipline et à développer les aptitudes physiques.",
        "dash-quick-links": "Raccourcis Rapides",
        "btn-add-student": "Ajouter Élève",
        "btn-evaluate": "Évaluer Classe",
        "th-class": "Classe",
        "th-students-count": "Nombre d'Élèves",
        "th-attendance": "Taux Présence",
        "th-avg-score": "Moyenne Classe",
        "th-actions": "Actions",
        "lbl-select-class": "Sélectionner la classe:",
        "btn-new-class": "Nouvelle Classe",
        "btn-new-student": "Nouvel Élève",
        "btn-import-excel": "Importer Excel (XLSX)",
        "btn-export-class": "Exporter Fiche Classe",
        "btn-export-all": "Exporter Toutes les Classes",
        "btn-delete-class-text": "Supprimer Classe",
        "roster-panel-title": "Élèves de la classe:",
        "badge-boys": "Garçons:",
        "badge-girls": "Filles:",
        "badge-exempted": "Exemptés Totaux:",
        "th-student-lastname": "Nom",
        "th-student-firstname": "Prénom",
        "th-gender": "Genre",
        "th-birthdate": "Date de Naissance",
        "th-student-phone": "Tél. Tuteur",
        "th-exemptions-status": "Exemptions (T1/T2/T3)",
        "lbl-select-term": "Trimestre:",
        "lbl-ind-sport": "Activité Individuelle:",
        "lbl-col-sport": "Activité Collective:",
        "btn-save-all-grades": "Enregistrer Notes",
        "menu-continuous": "Contrôle Continu",
        "menu-assignment": "Devoir",
        "menu-exam": "Composition",
        "menu-summary": "Fiche Trimestrielle",
        "lbl-school": "Lycée:",
        "lbl-teacher": "Enseignant:",
        "lbl-year": "Année Scolaire:",
        "btn-undo": "Annuler",
        "btn-guide": "Guide d'utilisation",
        "btn-scales": "Barèmes",
        "btn-export-backup": "Sauvegarde",
        "btn-import-backup": "Restaurer",
        "btn-archive": "Archiver & Nouvelle Année",
        "btn-config-activities": "Configurer les Épreuves Sportives",
        "modal-class-title": "Créer une Nouvelle Classe",
        "lbl-class-name": "Nom de la classe (ex: 1AS1 ou 3AS2):",
        "lbl-class-grade": "Niveau d'études:",
        "btn-cancel": "Annuler",
        "btn-confirm": "Sauvegarder",
        "modal-student-title": "Ajouter / Modifier Élève",
        "lbl-student-phone": "Tél. Parent (pour envoi résultats) :",
        "lbl-exemptions": "Exempter l'élève par trimestre :",
        "gender-m": "Masculin",
        "gender-f": "Féminin",
        "term-1": "1er Trimestre",
        "term-2": "2ème Trimestre",
        "term-3": "3ème Trimestre",
        "edit": "Modifier",
        "delete": "Supprimer",
        "saved-success": "Enregistré avec succès !",
        "reset-confirm": "Êtes-vous sûr de vouloir tout effacer ? Cette action est irréversible.",
        "class-delete-confirm": "Confirmez-vous la suppression de cette classe ? Tous les élèves et leurs notes seront supprimés.",
        "csv-imported-success": "{count} élèves importés avec succès !",
        "invalid-csv-format": "Format Excel invalide. Veuillez faire correspondre les colonnes (Prénom, Nom, Genre) dans la première feuille.",
        "student-added-success": "Élève ajouté !",
        "student-updated-success": "Données élève mises à jour !",
        "class-added-success": "Nouvelle classe créée !",
        "backup-imported-success": "Sauvegarde restaurée !",
        "invalid-backup-file": "Fichier invalide.",
        "no-students-in-class": "Aucun élève dans cette classe.",
        "sport-speed-run": "Vitesse (60m)",
        "sport-endurance": "Demi-fond (800m / 600m)",
        "sport-long-jump": "Saut en longueur",
        "sport-shot-put": "Lancer de poids",
        "sport-triple-jump": "Triple saut",
        "sport-volleyball": "Volleyball",
        "sport-handball": "Handball",
        "sport-basketball": "Basketball",
        "th-performance": "Performance",
        "th-calculated-grade": "Moyenne Finale",
        "exempted-abrv": "Exempté",
        "active-abrv": "Apte",
        "btn-close": "Fermer",
        "manual-title": "Guide d'Utilisation - Smart Sport",
        "scale-manager-title": "Modifier les Barèmes Physiques",
        "modal-config-activities-title": "Répartition des activités par trimestre",
        "menu-pedagogical": "Dossier Pédagogique",
        "title-pedagogical": "Dossier Pédagogique et Préparation de l'Enseignant",
        "menu-stopwatch": "Chronom\u00e8tre Intelligent",
        "title-stopwatch": "Chronom\u00e8tre Intelligent",
        "menu-pedagogical-tools": "Outils P\u00e9dagogiques",
        "title-pedagogical-tools": "Outils P\u00e9dagogiques"
    }
};

// ==========================================
// 2. Default State Database
// ==========================================
const DEFAULT_DATABASE = {
    metadata: {
        schoolName: "ثانوية مصطفى بن بولعيد",
        teacherName: "الأستاذ خالد",
        academicYear: "2026/2027",
        wilaya: "مديرية التربية لولاية الجزائر غرب",
        messageTemplateExcellent: "السلام عليكم ولي أمر التلميذ(ة) {الاسم}.\nتهانينا الحارة! لقد حصل ابننا/ابنتنا على معدل سنوي ممتاز في مادة التربية البدنية والرياضية بـ {المؤسسة} وقدره {السنوي} (ف1: {ف1}، ف2: {ف2}، ف3: {ف3}). نتمنى له/لها دوام التميز والنجاح.\nمع تحيات أستاذ المادة.",
        messageTemplateAverage: "السلام عليكم ولي أمر التلميذ(ة) {الاسم}.\nنرسل إليكم نتائج مادة التربية البدنية والرياضية بـ {المؤسسة} للعام الدراسي {السنة}. حصل التلميذ(ة) على معدل سنوي قدره {السنوي} (ف1: {ف1}، ف2: {ف2}، ف3: {ف3}). نتمنى له/لها مزيداً من الجد والاجتهاد.\nمع تحيات أستاذ المادة.",
        messageTemplateWeak: "السلام عليكم ولي أمر التلميذ(ة) {الاسم}.\nنسترعي انتباهكم إلى نتائج مادة التربية البدنية والرياضية بـ {المؤسسة} للعام الدراسي {السنة}.\nمعدل ابننا/ابنتنا السنوي غير كافٍ وقدره {السنوي} (ف1: {ف1}، ف2: {ف2}، ف3: {ف3}). يرجى حثه/حثها على تحسين الانضباط والحضور للارتقاء بنتائجه.\nمع تحيات أستاذ المادة.",
        messageTemplateExempt: "السلام عليكم ولي أمر التلميذ(ة) {الاسم}.\nنود إعلامكم بأن ابننا/ابنتنا معفى من تقييم مادة التربية البدنية والرياضية بـ {المؤسسة} للعام الدراسي {السنة} بموجب شهادة طبية معتمدة.\nمع تحيات أستاذ المادة."
    },
    termActivities: {
        term_1: { individual: "speed-run", collective: "volleyball" },
        term_2: { individual: "endurance-run", collective: "handball" },
        term_3: { individual: "long-jump", collective: "basketball" }
    },
    sports: {
        individual: [
            { id: "speed-run", name: "سرعة (60م)", unit: "sec", lowerIsBetter: true },
            { id: "endurance-run", name: "مداومة (800م / 600م)", unit: "sec", lowerIsBetter: true },
            { id: "long-jump", name: "الوثب الطويل", unit: "m", lowerIsBetter: false },
            { id: "shot-put", name: "رمي الجلة", unit: "m", lowerIsBetter: false },
            { id: "triple-jump", name: "الوثب الثلاثي", unit: "m", lowerIsBetter: false }
        ],
        collective: [
            { id: "volleyball", name: "كرة الطائرة" },
            { id: "handball", name: "كرة اليد" },
            { id: "basketball", name: "كرة السلة" }
        ]
    },
    scales: {
        "speed-run": {
            "1": {
                M: { best: 7.8, worst: 10.5, lowerIsBetter: true },
                F: { best: 8.8, worst: 11.8, lowerIsBetter: true }
            },
            "2": {
                M: { best: 7.5, worst: 10.2, lowerIsBetter: true },
                F: { best: 8.5, worst: 11.5, lowerIsBetter: true }
            },
            "3": {
                M: { best: 7.2, worst: 9.8, lowerIsBetter: true },
                F: { best: 8.2, worst: 11.2, lowerIsBetter: true }
            }
        },
        "endurance-run": {
            "1": {
                M: { best: 2.8, worst: 4.8, lowerIsBetter: true }, // e.g. 2m48s to 4m48s
                F: { best: 3.2, worst: 5.2, lowerIsBetter: true }
            },
            "2": {
                M: { best: 2.6, worst: 4.6, lowerIsBetter: true },
                F: { best: 3.0, worst: 5.0, lowerIsBetter: true }
            },
            "3": {
                M: { best: 2.4, worst: 4.4, lowerIsBetter: true },
                F: { best: 2.8, worst: 4.8, lowerIsBetter: true }
            }
        },
        "long-jump": {
            "1": {
                M: { best: 5.5, worst: 3.2, lowerIsBetter: false },
                F: { best: 4.2, worst: 2.0, lowerIsBetter: false }
            },
            "2": {
                M: { best: 5.8, worst: 3.5, lowerIsBetter: false },
                F: { best: 4.5, worst: 2.2, lowerIsBetter: false }
            },
            "3": {
                M: { best: 6.0, worst: 3.8, lowerIsBetter: false },
                F: { best: 4.8, worst: 2.5, lowerIsBetter: false }
            }
        },
        "shot-put": {
            "1": {
                M: { best: 10.5, worst: 5.5, lowerIsBetter: false },
                F: { best: 8.0, worst: 4.0, lowerIsBetter: false }
            },
            "2": {
                M: { best: 11.0, worst: 6.0, lowerIsBetter: false },
                F: { best: 8.5, worst: 4.5, lowerIsBetter: false }
            },
            "3": {
                M: { best: 11.5, worst: 6.5, lowerIsBetter: false },
                F: { best: 9.0, worst: 5.0, lowerIsBetter: false }
            }
        },
        "triple-jump": {
            "1": {
                M: { best: 11.5, worst: 8.5, lowerIsBetter: false },
                F: { best: 9.5, worst: 6.5, lowerIsBetter: false }
            },
            "2": {
                M: { best: 12.0, worst: 9.0, lowerIsBetter: false },
                F: { best: 10.0, worst: 7.0, lowerIsBetter: false }
            },
            "3": {
                M: { best: 12.5, worst: 9.5, lowerIsBetter: false },
                F: { best: 10.5, worst: 7.5, lowerIsBetter: false }
            }
        }
    },
    classes: [
        { id: "class_1", name: "1 ج م ع ت 1", grade: 1 },
        { id: "class_2", name: "3 ع ت 2", grade: 3 }
    ],
    students: [
        { id: "std_1", classId: "class_1", firstname: "أحمد", lastname: "بن علي", gender: "M", birthdate: "2010-04-12", phone: "0661122334", exemptions: [false, false, false], order: 0 },
        { id: "std_2", classId: "class_1", firstname: "فاطمة", lastname: "منصوري", gender: "F", birthdate: "2010-08-25", phone: "0770998877", exemptions: [false, false, false], order: 1 },
        { id: "std_3", classId: "class_1", firstname: "ياسين", lastname: "بلقاسم", gender: "M", birthdate: "2010-01-05", phone: "0550112233", exemptions: [false, false, false], order: 2 },
        { id: "std_4", classId: "class_1", firstname: "أمين", lastname: "بوعلام", gender: "M", birthdate: "2009-11-15", phone: "0663445566", exemptions: [true, false, false], order: 3 }, // Term 1 Exempted
        { id: "std_5", classId: "class_1", firstname: "مريم", lastname: "جبار", gender: "F", birthdate: "2010-09-02", phone: "0772113355", exemptions: [false, false, false], order: 4 },
        
        { id: "std_6", classId: "class_2", firstname: "خالد", lastname: "حداد", gender: "M", birthdate: "2008-05-18", phone: "0667332211", exemptions: [false, false, false], order: 0 },
        { id: "std_7", classId: "class_2", firstname: "سارة", lastname: "بوزيد", gender: "F", birthdate: "2009-02-14", phone: "0771889900", exemptions: [false, false, false], order: 1 },
        { id: "std_8", classId: "class_2", firstname: "عبد النور", lastname: "لونيس", gender: "M", birthdate: "2008-12-30", phone: "0556114422", exemptions: [false, false, false], order: 2 }
    ],
    // Grading stores continuous, assignment and exam details
    grades: {
        // Continuous: { sessions: [P/M/A, P/M/A, ... 7 times], discipline: 0-2, participation: 0-2, creativity: 0-2 }
        // Assignment/Exam: { attempts: [float, float, float], collective: float }
        "std_1_1_continuous": { sessions: ["P", "P", "M", "P", "P", "P", "P"], discipline: 2, participation: 2, creativity: 1.5 },
        "std_1_1_assignment": { attempts: [8.2, 7.9, 8.0], collective: 14.5 },
        "std_1_1_exam": { attempts: [8.0, 7.8, 8.1], collective: 15.0 },
        
        "std_2_1_continuous": { sessions: ["P", "A", "P", "P", "P", "P", "P"], discipline: 1.5, participation: 2, creativity: 2 },
        "std_2_1_assignment": { attempts: [9.2, 9.0, 9.4], collective: 12.0 },
        "std_2_1_exam": { attempts: [9.0, 8.8, 8.9], collective: 13.0 }
    }
};

// ==========================================
// 3. Collective Sport Evaluation Rubrics
// ==========================================
const COLLECTIVE_RUBRIC = [
    { code: "A2", score: 20, appreciation: "نخبوية", indicator: "صانع فارق. يغيّر نتيجة اللعب بقدراته الفردية والجماعية." },
    { code: "A1", score: 19, appreciation: "ممتاز", indicator: "تحكم عال في المهارات. ذكاء تكتيكي ملحوظ." },
    { code: "A", score: 18, appreciation: "ممتاز", indicator: "دور قيادي واضح. يندمج في جميع خطط اللعب." },
    { code: "B2", score: 18, appreciation: "جيد جداً", indicator: "قلة الأخطاء التقنية. أداء فعّال في الميدان." },
    { code: "B1", score: 17, appreciation: "جيد جداً", indicator: "أداء إيجابي في مختلف الأدوار الدفاعية والهجومية." },
    { code: "B", score: 16, appreciation: "جيد جداً", indicator: "يكيف دوره حسب المستجدات. يتحكم في المهارات الأساسية." },
    { code: "C2", score: 15, appreciation: "حسن", indicator: "أداء جيد في الدفاع والهجوم. قليل من الأخطاء." },
    { code: "C1", score: 14, appreciation: "حسن", indicator: "يساهم في الدفاع. يطبق القوانين المنظمة للنشاط." },
    { code: "C", score: 13, appreciation: "متوسط", indicator: "يتحكم في اللعب الجماعي والتعاون. يؤدي دوره الهجومي بشكل مقبول." },
    { code: "D2", score: 12, appreciation: "مقبول", indicator: "بداية التفاعل مع الزملاء. تطبيق بعض القوانين." },
    { code: "D1", score: 11, appreciation: "مقبول", indicator: "مشاركة متحسنة قليلاً. يحترم أحياناً حدود الملعب." },
    { code: "D", score: 10, appreciation: "مقبول", indicator: "مشاركة فردية جزئية. يعرف بعض القوانين الأساسية. أخطاء تقنية كثيرة." }
];

// ==========================================
// 4. Application Class Engine Definition
// ==========================================
class SmartSport {
    constructor() {
        this.currentLang = localStorage.getItem("Smart_Sport_lang") || "ar";
        this.theme = localStorage.getItem("Smart_Sport_theme") || "dark";
        this.database = null;
        this.activeTab = "dashboard";
        
        // Navigation states
        this.activeRosterClassId = "";
        this.activeGradingClassId = "";
        this.activeGradingType = "continuous"; // continuous | assignment | exam | term-summary
        
        // Undo stack history
        this.undoStack = [];

        // Timer state variables
        this.timerInterval = null;
        this.timerTotalSeconds = 15 * 60;
        this.timerCurrentSeconds = 15 * 60;
        this.isTimerRunning = false;
        this.timerLabel = "المرحلة التحضيرية (الإحماء والتهيئة البدنية)";

        // Sprint Stopwatch state (Flexible Dual-Mode Sprint Stopwatch)
        this.stopwatch = {
            mode: "multi", // "multi" or "single"
            running: [false, false, false, false],
            frozen: [false, false, false, false],
            startTimes: [0, 0, 0, 0],
            elapsed: [0, 0, 0, 0],
            animationFrameId: null,
            whistleActive: false,
            audioContext: null,
            audioStream: null,
            audioProcessor: null
        };
    }

    /**
     * App initialization
     */
    init() {
        this.loadDatabase();
        this.applyTheme();
        this.applyLanguage();
        this.bindGlobalEvents();
        this.initRouting();
        
        this.populateClassDropdowns();
        this.populateSportDropdowns();
        this.populateCollectiveRubricTable();
        
        // Listen to print preview event
        window.addEventListener("beforeprint", () => {
            this.updatePrintHeader();
        });
        
        this.switchTab(this.activeTab);
        this.updateGlobalStats();
        this.toggleNewSportFields("individual"); // default custom sport form to individual
        
        // Generate initial QR Code after short delay to ensure DOM is ready
        setTimeout(() => this.updateQRCode(), 500);
    }

    /**
     * Load state
     */
    loadDatabase() {
        let stored = localStorage.getItem("smart_sport_db_v2");
        if (!stored) {
            const legacy = localStorage.getItem("Smart_Sport_db_v2");
            if (legacy) {
                stored = legacy;
                localStorage.setItem("smart_sport_db_v2", legacy);
            }
        }
        if (stored) {
            try {
                this.database = JSON.parse(stored);
                // Schema checks
                if (!this.database.metadata) this.database.metadata = {};
                if (!this.database.metadata.schoolName) this.database.metadata.schoolName = "";
                if (!this.database.metadata.teacherName) this.database.metadata.teacherName = "";
                if (!this.database.metadata.academicYear) this.database.metadata.academicYear = "";
                if (!this.database.metadata.wilaya) this.database.metadata.wilaya = "مديرية التربية لولاية الجزائر غرب";
                if (!this.database.metadata.messageTemplateExcellent) this.database.metadata.messageTemplateExcellent = DEFAULT_DATABASE.metadata.messageTemplateExcellent;
                if (!this.database.metadata.messageTemplateAverage) this.database.metadata.messageTemplateAverage = DEFAULT_DATABASE.metadata.messageTemplateAverage;
                if (!this.database.metadata.messageTemplateWeak) this.database.metadata.messageTemplateWeak = DEFAULT_DATABASE.metadata.messageTemplateWeak;
                if (!this.database.metadata.messageTemplateExempt) this.database.metadata.messageTemplateExempt = DEFAULT_DATABASE.metadata.messageTemplateExempt;
                
                if (!this.database.termActivities) this.database.termActivities = DEFAULT_DATABASE.termActivities;
                if (!this.database.sports) this.database.sports = DEFAULT_DATABASE.sports;
                if (!this.database.scales) this.database.scales = DEFAULT_DATABASE.scales;
                if (!this.database.classes) this.database.classes = [];
                if (!this.database.students) this.database.students = [];
                if (!this.database.grades) this.database.grades = {};
                if (!this.database.lockedLedgers) this.database.lockedLedgers = {};
                if (!this.database.dailyLogbook) this.database.dailyLogbook = [];
                if (this.database.dailyLogbook.length === 0) {
                    const defaultClassName = this.database.classes[0] ? this.database.classes[0].name : "1 ج م ع ت 1";
                    this.database.dailyLogbook.push({
                        id: "default_entry_1",
                        date: "2026-04-20",
                        className: defaultClassName,
                        session: "08:00 - 10:00",
                        sport: "كرة اليد",
                        objective: "أن يتعلم التلميذ كيفية التحكم في الكرة ومختلف تقنيات التعامل معها",
                        situations: "الإحماء حول الملعب. ت1: التكيف مع الكرة من مواقف مختلفة. ت2: لعبة التمريرات العشر. ت3: منافسة تطبيقية مصغرة في نصف الملعب فوج في الهجوم وفوج في الدفاع.",
                        evaluation: "تفاعل إيجابي جداً من طرف التلاميذ. المهارات الأساسية جيدة، لكن نحتاج للتركيز أكثر على الانتشار الدفاعي وتجنب التكتل حول حامل الكرة."
                    });
                    this.database.dailyLogbook.push({
                        id: "default_entry_2",
                        date: "2026-04-27",
                        className: defaultClassName,
                        session: "10:00 - 12:00",
                        sport: "كرة اليد",
                        objective: "أن يبني التلميذ تبادل كروي سريع للوصول الى منطقة الخصم والإنهاء بالتصويب",
                        situations: "الإحماء العام وحركات التمديد. ت1: تمرير سريع للكرة من اليمين لليسار بالاعتماد على المحور والأجنحة والتصويب. ت2: منافسة بين الأفواج مع تطبيق قوانين اللعب.",
                        evaluation: "مشاركة نشطة وتطبيق خطة التمرير السريع. بعض الأخطاء التقنية في استقبال الكرات الطويلة تم تصحيحها في الميدان."
                    });
                }
                 
                 // Migrate legacy scales to grade-specific if needed
                 if (this.database.scales) {
                     let needsMigration = false;
                     for (let sportId in this.database.scales) {
                         const sportScale = this.database.scales[sportId];
                         if (sportScale && (sportScale.M || sportScale.F)) {
                             needsMigration = true;
                             break;
                         }
                     }
                     if (needsMigration) {
                         const migratedScales = {};
                         for (let sportId in this.database.scales) {
                             const legacyScale = this.database.scales[sportId];
                             if (legacyScale && (legacyScale.M || legacyScale.F)) {
                                 migratedScales[sportId] = {
                                     "1": JSON.parse(JSON.stringify(legacyScale)),
                                     "2": JSON.parse(JSON.stringify(legacyScale)),
                                     "3": JSON.parse(JSON.stringify(legacyScale))
                                 };
                             } else {
                                 migratedScales[sportId] = legacyScale;
                             }
                         }
                         this.database.scales = migratedScales;
                     }
                 }
            } catch (e) {
                console.error("DB parsing error. Seeding default database.", e);
                this.database = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
            }
        } else {
            this.database = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
            this.saveDatabase(false); // don't push initial state to undo stack
        }

        if (!this.database.lotteryCalled) {
            this.database.lotteryCalled = {};
        }

        // Initialize header text fields
        document.getElementById("meta-school-name").value = this.database.metadata.schoolName || "";
        document.getElementById("meta-teacher-name").value = this.database.metadata.teacherName || "";
        document.getElementById("meta-academic-year").value = this.database.metadata.academicYear || "";

        // Initialize settings fields
        document.getElementById("settings-school-name").value = this.database.metadata.schoolName || "";
        document.getElementById("settings-school-wilaya").value = this.database.metadata.wilaya || "";
        document.getElementById("settings-teacher-name").value = this.database.metadata.teacherName || "";
        document.getElementById("settings-academic-year").value = this.database.metadata.academicYear || "";
        
        document.getElementById("settings-msg-excellent").value = this.database.metadata.messageTemplateExcellent || "";
        document.getElementById("settings-msg-average").value = this.database.metadata.messageTemplateAverage || "";
        document.getElementById("settings-msg-weak").value = this.database.metadata.messageTemplateWeak || "";
        document.getElementById("settings-msg-exempt").value = this.database.metadata.messageTemplateExempt || "";
    }

    saveDatabase(pushUndo = true) {
        if (pushUndo) {
            // Keep stack size limited to 20
            if (this.undoStack.length >= 20) this.undoStack.shift();
            this.undoStack.push(JSON.stringify(this.database));
        }
        localStorage.setItem("Smart_Sport_db_v2", JSON.stringify(this.database));
        this.updateGlobalStats();
        this.updateQRCode();
    }

    undo() {
        if (this.undoStack.length === 0) {
            this.showToast(this.currentLang === "ar" ? "لا يوجد خطوات للتراجع عنها!" : "Aucune action à annuler !");
            return;
        }
        const previousState = this.undoStack.pop();
        try {
            this.database = JSON.parse(previousState);
            localStorage.setItem("Smart_Sport_db_v2", previousState);
            this.populateClassDropdowns();
            this.updateGlobalStats();
            this.renderActiveViewContent();
            this.showToast(this.currentLang === "ar" ? "تم التراجع بنجاح!" : "Action annulée avec succès !");
        } catch (e) {
            console.error("Undo parsing error", e);
        }
    }

    /**
     * Night & Day Themes Toggler
     */
    applyTheme() {
        const bodyClass = document.body.classList;
        const themeIcon = document.getElementById("theme-icon");
        const themeText = document.getElementById("theme-text");
        
        if (this.theme === "dark") {
            bodyClass.add("dark-theme");
            bodyClass.remove("light-theme");
            if (themeIcon) themeIcon.style.fill = "#fbbf24"; // gold sun
            if (themeText) themeText.textContent = this.currentLang === "ar" ? "تغيير للنهار" : "Mode Jour";
        } else {
            bodyClass.add("light-theme");
            bodyClass.remove("dark-theme");
            if (themeIcon) themeIcon.style.fill = "#3b82f6"; // blue moon
            if (themeText) themeText.textContent = this.currentLang === "ar" ? "تغيير لليل" : "Mode Nuit";
        }
    }

    toggleTheme() {
        this.theme = this.theme === "dark" ? "light" : "dark";
        localStorage.setItem("Smart_Sport_theme", this.theme);
        this.applyTheme();
    }

    /**
     * Custom Localisation Switching
     */
    applyLanguage() {
        const htmlTag = document.documentElement;
        htmlTag.setAttribute("lang", this.currentLang);
        
        if (this.currentLang === "ar") {
            htmlTag.setAttribute("dir", "rtl");
            document.body.classList.remove("ltr-layout");
            document.getElementById("lang-toggle-btn").innerHTML = "<span>Français</span>";
        } else {
            htmlTag.setAttribute("dir", "ltr");
            document.body.classList.add("ltr-layout");
            document.getElementById("lang-toggle-btn").innerHTML = "<span>العربية</span>";
        }

        // Apply string keys
        document.querySelectorAll("[data-i18n]").forEach(node => {
            const key = node.getAttribute("data-i18n");
            const translation = this.getTranslation(key);
            if (translation) {
                if (node.tagName === "INPUT" && (node.type === "text" || node.type === "search")) {
                    node.setAttribute("placeholder", translation);
                } else {
                    node.textContent = translation;
                }
            }
        });

        // Option groups translation
        document.querySelectorAll("[data-i18n-group]").forEach(node => {
            const key = node.getAttribute("data-i18n-group");
            const translation = this.getTranslation(key);
            if (translation) node.setAttribute("label", translation);
        });

        this.applyTheme(); // Refresh theme text string
        this.updatePageTitle();
        this.renderActiveViewContent();
    }

    getTranslation(key) {
        return TRANSLATIONS[this.currentLang][key] || TRANSLATIONS["ar"][key] || key;
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === "ar" ? "fr" : "ar";
        localStorage.setItem("Smart_Sport_lang", this.currentLang);
        this.applyLanguage();
    }

    /**
     * Routing Switcher
     */
    initRouting() {
        const hash = window.location.hash.replace("#", "");
        if (hash && document.querySelector(`.menu-item[data-tab="${hash}"]`)) {
            this.activeTab = hash;
        } else {
            this.activeTab = "dashboard";
        }
    }

    switchTab(tabName) {
        if (this.activeTab === "pedagogical-tools" && tabName !== "pedagogical-tools") {
            this.releaseStopwatchAudio();
        }
        this.activeTab = tabName;
        window.location.hash = tabName;
        
        document.querySelectorAll(".menu-item").forEach(item => {
            if (item.getAttribute("data-tab") === tabName) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        document.querySelectorAll(".app-view").forEach(view => {
            if (view.id === `view-${tabName}`) {
                view.classList.add("active");
            } else {
                view.classList.remove("active");
            }
        });

        this.updatePageTitle();
        this.renderActiveViewContent();
    }

    updatePageTitle() {
        const titleKey = `title-${this.activeTab}`;
        const titleElement = document.getElementById("page-title");
        if (titleElement) {
            titleElement.textContent = this.getTranslation(titleKey);
        }
    }

    /**
     * UI Event Binding
     */
    bindGlobalEvents() {
        // Sidebar Navigation links
        document.querySelectorAll(".menu-item").forEach(item => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                this.switchTab(item.getAttribute("data-tab"));
            });
        });

        // Pedagogical Tools sub-tabs switching
        const btnToolStopwatch = document.getElementById("btn-tool-stopwatch");
        const btnToolLottery = document.getElementById("btn-tool-lottery");
        if (btnToolStopwatch && btnToolLottery) {
            btnToolStopwatch.addEventListener("click", () => {
                btnToolStopwatch.classList.add("active");
                btnToolLottery.classList.remove("active");
                document.getElementById("tool-stopwatch-container").style.display = "block";
                document.getElementById("tool-lottery-container").style.display = "none";
                this.initStopwatchView();
            });
            btnToolLottery.addEventListener("click", () => {
                btnToolLottery.classList.add("active");
                btnToolStopwatch.classList.remove("active");
                document.getElementById("tool-stopwatch-container").style.display = "none";
                document.getElementById("tool-lottery-container").style.display = "block";
                this.updateLotteryPool();
            });
        }

        // Header controls (Manual, backup, restore, scales, undo)
        document.getElementById("theme-toggle-btn").addEventListener("click", () => this.toggleTheme());
        
        // Lottery Event Listeners
        const lotterySelect = document.getElementById("lottery-class-select");
        if (lotterySelect) {
            lotterySelect.addEventListener("change", (e) => {
                this.activeLotteryClassId = e.target.value;
                const winnerContainer = document.getElementById("lottery-winner-container");
                if (winnerContainer) winnerContainer.style.display = "none";
                this.updateLotteryPool();
            });
        }
        const lotteryTermSelect = document.getElementById("lottery-term-select");
        if (lotteryTermSelect) {
            lotteryTermSelect.addEventListener("change", () => {
                const winnerContainer = document.getElementById("lottery-winner-container");
                if (winnerContainer) winnerContainer.style.display = "none";
                this.updateLotteryPool();
            });
        }
        const btnDraw = document.getElementById("btn-lottery-draw");
        if (btnDraw) {
            btnDraw.addEventListener("click", () => {
                this.drawLotteryStudent();
            });
        }
        const btnReset = document.getElementById("btn-lottery-reset");
        if (btnReset) {
            btnReset.addEventListener("click", () => {
                this.resetLotteryPool();
            });
        }
        document.getElementById("lang-toggle-btn").addEventListener("click", () => this.toggleLanguage());
        document.getElementById("btn-undo-action").addEventListener("click", () => this.undo());
        
        // Metadata inputs autosave and syncing
        const saveMeta = () => {
            this.database.metadata.schoolName = document.getElementById("meta-school-name").value.trim();
            this.database.metadata.teacherName = document.getElementById("meta-teacher-name").value.trim();
            this.database.metadata.academicYear = document.getElementById("meta-academic-year").value.trim();
            
            // Sync to settings
            document.getElementById("settings-school-name").value = this.database.metadata.schoolName;
            document.getElementById("settings-teacher-name").value = this.database.metadata.teacherName;
            document.getElementById("settings-academic-year").value = this.database.metadata.academicYear;
            
            this.saveDatabase(false); // auto-save metadata changes without polluting undo stack
            this.updatePrintHeader();
        };
        const saveMetaSettings = (showToast = false) => {
            this.database.metadata.schoolName = document.getElementById("settings-school-name").value.trim();
            this.database.metadata.wilaya = document.getElementById("settings-school-wilaya").value.trim();
            this.database.metadata.teacherName = document.getElementById("settings-teacher-name").value.trim();
            this.database.metadata.academicYear = document.getElementById("settings-academic-year").value.trim();
            
            this.database.metadata.messageTemplateExcellent = document.getElementById("settings-msg-excellent").value;
            this.database.metadata.messageTemplateAverage = document.getElementById("settings-msg-average").value;
            this.database.metadata.messageTemplateWeak = document.getElementById("settings-msg-weak").value;
            this.database.metadata.messageTemplateExempt = document.getElementById("settings-msg-exempt").value;
            
            // Sync to header
            document.getElementById("meta-school-name").value = this.database.metadata.schoolName;
            document.getElementById("meta-teacher-name").value = this.database.metadata.teacherName;
            document.getElementById("meta-academic-year").value = this.database.metadata.academicYear;
            
            this.saveDatabase(false);
            this.updatePrintHeader();

            if (showToast) {
                this.showToast(this.currentLang === "ar" ? "تم حفظ إعدادات التطبيق بنجاح!" : "Paramètres enregistrés !");
            }
        };
        document.getElementById("meta-school-name").addEventListener("input", saveMeta);
        document.getElementById("meta-teacher-name").addEventListener("input", saveMeta);
        document.getElementById("meta-academic-year").addEventListener("input", saveMeta);

        document.getElementById("settings-school-name").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-school-wilaya").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-teacher-name").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-academic-year").addEventListener("input", () => saveMetaSettings(false));

        document.getElementById("settings-msg-excellent").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-msg-average").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-msg-weak").addEventListener("input", () => saveMetaSettings(false));
        document.getElementById("settings-msg-exempt").addEventListener("input", () => saveMetaSettings(false));

        // Save buttons click events in settings
        document.getElementById("btn-save-settings-meta").addEventListener("click", () => saveMetaSettings(true));
        document.getElementById("btn-save-settings-templates").addEventListener("click", () => saveMetaSettings(true));

        // Modals listeners
        const bindModal = (triggerId, modalId, closeId, cancelId) => {
            const trg = document.getElementById(triggerId);
            const mdl = document.getElementById(modalId);
            const cls = document.getElementById(closeId);
            const cnc = document.getElementById(cancelId);
            if (trg) trg.addEventListener("click", () => mdl.classList.add("active"));
            if (cls) cls.addEventListener("click", () => mdl.classList.remove("active"));
            if (cnc) cnc.addEventListener("click", () => mdl.classList.remove("active"));
        };
        bindModal("btn-open-add-class", "modal-add-class", "modal-close-class", "btn-cancel-class");
        bindModal("btn-open-add-student", "modal-add-student", "modal-close-student", "btn-cancel-student");
        bindModal("btn-open-import-csv", "modal-import-csv", "modal-close-import", "btn-close-import");
        bindModal("btn-open-user-manual", "modal-user-manual", "modal-close-manual", "btn-close-manual-bottom");
        bindModal("btn-open-activities-config", "modal-activities-config", "modal-close-activities", "btn-cancel-activities");
        bindModal("btn-open-scale-manager", "modal-scale-manager", "modal-close-scales", "btn-cancel-scales");
        document.getElementById("btn-open-scale-manager").addEventListener("click", () => this.loadScaleValuesToModal());
        bindModal("btn-open-collective-rubric-guide", "modal-collective-rubric", "modal-close-collective-rubric", "btn-close-collective-rubric");

        // Custom sports handler trigger
        document.getElementById("btn-add-new-sport").addEventListener("click", () => this.addNewSport());

        // Backups from headers
        document.getElementById("btn-export-backup-hdr").addEventListener("click", () => this.exportDatabaseBackup());
        document.getElementById("btn-import-backup-hdr").addEventListener("click", () => document.getElementById("backup-file-input").click());

        // Backups and database operations from settings panel
        document.getElementById("btn-settings-export").addEventListener("click", () => this.exportDatabaseBackup());
        document.getElementById("btn-settings-import").addEventListener("click", () => document.getElementById("settings-backup-file-input").click());
        document.getElementById("settings-backup-file-input").addEventListener("change", (e) => this.importDatabaseBackup(e.target.files[0]));
        document.getElementById("btn-settings-reset").addEventListener("click", () => {
            if (confirm(this.getTranslation("reset-confirm"))) {
                this.database = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
                this.saveDatabase();
                this.populateClassDropdowns();
                this.switchTab("dashboard");
                this.showToast(this.currentLang === "ar" ? "تم إعادة تهيئة قاعدة البيانات وضبط المصنع بنجاح!" : "Base de données réinitialisée !");
            }
        });

        // Dynamic Class Roster inputs loading
        document.getElementById("class-select-roster").addEventListener("change", (e) => {
            this.activeRosterClassId = e.target.value;
            this.renderActiveViewContent();
        });

        // Add class submit
        document.getElementById("form-add-class").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("class-name-input").value.trim();
            const grade = parseInt(document.getElementById("class-grade-input").value);
            
            const newClass = {
                id: `class_${Date.now()}`,
                name: name,
                grade: grade
            };

            this.database.classes.push(newClass);
            this.saveDatabase();
            
            this.populateClassDropdowns();
            this.activeRosterClassId = newClass.id;
            document.getElementById("class-select-roster").value = newClass.id;

            document.getElementById("form-add-class").reset();
            document.getElementById("modal-add-class").classList.remove("active");
            this.showToast(this.getTranslation("class-added-success"));
            this.renderActiveViewContent();
        });

        // Add/Edit student submit
        document.getElementById("form-add-student").addEventListener("submit", (e) => {
            e.preventDefault();
            const idFlag = document.getElementById("student-id-edit-flag").value;
            const fname = document.getElementById("student-firstname-input").value.trim();
            const lname = document.getElementById("student-lastname-input").value.trim();
            const gender = document.getElementById("student-gender-input").value;
            const birth = document.getElementById("student-birth-input").value;
            const phone = document.getElementById("student-phone-input").value.trim();
            
            const ex1 = document.getElementById("student-ex-1").checked;
            const ex2 = document.getElementById("student-ex-2").checked;
            const ex3 = document.getElementById("student-ex-3").checked;

            const activeClassId = this.activeRosterClassId || (this.database.classes[0] ? this.database.classes[0].id : "");

            if (!activeClassId) {
                alert(this.currentLang === "ar" ? "يرجى إنشاء قسم دراسي أولاً" : "Créez une classe d'abord.");
                return;
            }

            if (idFlag) {
                // Update mode
                const student = this.database.students.find(s => s.id === idFlag);
                if (student) {
                    student.firstname = fname;
                    student.lastname = lname;
                    student.gender = gender;
                    student.birthdate = birth;
                    student.phone = phone;
                    student.exemptions = [ex1, ex2, ex3];
                    this.showToast(this.getTranslation("student-updated-success"));
                }
            } else {
                // Create mode
                const classStudents = this.database.students.filter(s => s.classId === activeClassId);
                const orderIndex = classStudents.length;

                const newStudent = {
                    id: `std_${Date.now()}`,
                    classId: activeClassId,
                    firstname: fname,
                    lastname: lname,
                    gender: gender,
                    birthdate: birth,
                    phone: phone,
                    exemptions: [ex1, ex2, ex3],
                    order: orderIndex
                };
                this.database.students.push(newStudent);
                this.showToast(this.getTranslation("student-added-success"));
            }

            this.saveDatabase();
            document.getElementById("form-add-student").reset();
            document.getElementById("student-id-edit-flag").value = "";
            document.getElementById("modal-add-student").classList.remove("active");
            this.renderActiveViewContent();
        });

        // Search roster
        document.getElementById("roster-search-input").addEventListener("input", () => this.renderRosterStudents());

        // Bulk delete and select all
        document.getElementById("cb-select-all-students").addEventListener("change", (e) => {
            const checkboxes = document.querySelectorAll(".cb-student-select");
            checkboxes.forEach(cb => cb.checked = e.target.checked);
            this.updateBulkDeleteButton();
        });
        document.getElementById("btn-delete-selected-students").addEventListener("click", () => this.deleteSelectedStudents());


        // Class delete
        document.getElementById("btn-delete-class").addEventListener("click", () => this.deleteActiveClass());

        // Excel imports
        document.getElementById("btn-export-csv").addEventListener("click", () => this.exportRosterToExcel());
        document.getElementById("btn-export-all-classes").addEventListener("click", () => this.exportAllClassesCSV());
        document.getElementById("btn-export-all-grades-pdf").addEventListener("click", () => this.exportAllGradesPDF());
        document.getElementById("btn-export-all-grades-excel").addEventListener("click", () => this.exportAllGradesExcel());

        const dragArea = document.getElementById("csv-drag-area");
        const csvInput = document.getElementById("csv-file-input");
        dragArea.addEventListener("click", () => csvInput.click());
        csvInput.addEventListener("change", (e) => this.handleExcelFileSelect(e.target.files[0]));

        // Sports activities configuration submit
        document.getElementById("form-activities-config").addEventListener("submit", (e) => {
            e.preventDefault();
            this.database.termActivities.term_1.individual = document.getElementById("act-ind-1").value;
            this.database.termActivities.term_1.collective = document.getElementById("act-col-1").value;
            this.database.termActivities.term_2.individual = document.getElementById("act-ind-2").value;
            this.database.termActivities.term_2.collective = document.getElementById("act-col-2").value;
            this.database.termActivities.term_3.individual = document.getElementById("act-ind-3").value;
            this.database.termActivities.term_3.collective = document.getElementById("act-col-3").value;

            this.saveDatabase();
            document.getElementById("modal-activities-config").classList.remove("active");
            this.showToast(this.getTranslation("saved-success"));
            this.renderActiveViewContent();
        });

        // Interactive scales manager selectors
        const scaleSportSelect = document.getElementById("scale-select-sport");
        const scaleGradeSelect = document.getElementById("scale-select-grade");
        if (scaleSportSelect) scaleSportSelect.addEventListener("change", () => this.loadScaleValuesToModal());
        if (scaleGradeSelect) scaleGradeSelect.addEventListener("change", () => this.loadScaleValuesToModal());
        
        const btnSaveScales = document.getElementById("btn-save-scales-data");
        if (btnSaveScales) btnSaveScales.addEventListener("click", () => this.saveScalesDataFromModal());

        const scaleTabIndividual = document.getElementById("scale-tab-btn-individual");
        const scaleTabCollective = document.getElementById("scale-tab-btn-collective");
        const scaleContentIndividual = document.getElementById("scale-tab-content-individual");
        const scaleContentCollective = document.getElementById("scale-tab-content-collective");

        if (scaleTabIndividual && scaleTabCollective) {
            scaleTabIndividual.addEventListener("click", () => {
                scaleTabIndividual.classList.add("active");
                scaleTabCollective.classList.remove("active");
                scaleTabIndividual.style.borderBottom = "3px solid var(--color-primary)";
                scaleTabIndividual.style.color = "#fff";
                scaleTabCollective.style.borderBottom = "3px solid transparent";
                scaleTabCollective.style.color = "var(--text-secondary)";
                
                if (scaleContentIndividual) scaleContentIndividual.style.display = "block";
                if (scaleContentCollective) scaleContentCollective.style.display = "none";
                if (btnSaveScales) btnSaveScales.style.display = "flex";
            });

            scaleTabCollective.addEventListener("click", () => {
                scaleTabCollective.classList.add("active");
                scaleTabIndividual.classList.remove("active");
                scaleTabCollective.style.borderBottom = "3px solid var(--color-primary)";
                scaleTabCollective.style.color = "#fff";
                scaleTabIndividual.style.borderBottom = "3px solid transparent";
                scaleTabIndividual.style.color = "var(--text-secondary)";
                
                if (scaleContentIndividual) scaleContentIndividual.style.display = "none";
                if (scaleContentCollective) scaleContentCollective.style.display = "block";
                if (btnSaveScales) btnSaveScales.style.display = "none";
            });
        }

        const btnPrintCollective = document.getElementById("btn-print-collective-rubric");
        if (btnPrintCollective) btnPrintCollective.addEventListener("click", () => this.printCollectiveRubric());

        const btnDownloadCollective = document.getElementById("btn-download-collective-rubric");
        if (btnDownloadCollective) btnDownloadCollective.addEventListener("click", () => this.downloadCollectiveRubricExcel());

        const btnPrintAllScales = document.getElementById("btn-print-all-scales");
        if (btnPrintAllScales) btnPrintAllScales.addEventListener("click", () => this.printAllScales());

        // Grading selectors
        document.getElementById("class-select-grading").addEventListener("change", (e) => {
            this.activeGradingClassId = e.target.value;
            this.renderActiveViewContent();
        });

        document.getElementById("term-select-grading").addEventListener("change", () => this.renderActiveViewContent());

        document.querySelectorAll(".grading-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".grading-tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.activeGradingType = btn.getAttribute("data-eval");
                this.renderGradingSheet();
            });
        });

        // Grading submit save
        document.getElementById("btn-save-grading").addEventListener("click", () => this.saveActiveGradingSheetData());
        document.getElementById("btn-print-grading-sheet").addEventListener("click", () => this.printGradingSheet());
        
        const btnLockGrading = document.getElementById("btn-lock-grading");
        if (btnLockGrading) {
            btnLockGrading.addEventListener("click", () => this.toggleGradeLedgerLock());
        }

        const btnExportMinistry = document.getElementById("btn-export-ministry");
        if (btnExportMinistry) {
            btnExportMinistry.addEventListener("click", () => this.exportMinistryCompliantCSV());
        }

        // Archiving
        document.getElementById("btn-archive-year").addEventListener("click", () => this.archiveAndNewYear());

        // ==========================================
        // PEDAGOGICAL VIEW EVENT BINDINGS
        // ==========================================
        document.querySelectorAll(".ped-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".ped-tab-btn").forEach(b => {
                    b.classList.remove("active");
                    b.style.background = "transparent";
                    b.style.color = "var(--text-secondary)";
                });
                btn.classList.add("active");
                btn.style.background = "var(--color-primary-soft)";
                btn.style.color = "var(--color-primary)";
                
                const tabId = btn.getAttribute("data-ped-tab");
                document.querySelectorAll(".ped-tab-content").forEach(content => {
                    content.style.display = content.id === `ped-content-${tabId}` ? "block" : "none";
                });
            });
        });

        const formCahier = document.getElementById("form-add-cahier-entry");
        if (formCahier) {
            formCahier.addEventListener("submit", (e) => {
                e.preventDefault();
                this.saveCahierJournalEntry();
            });
        }

        const btnGenFiche = document.getElementById("btn-generate-fiche");
        if (btnGenFiche) {
            btnGenFiche.addEventListener("click", () => this.generateFichePreview());
        }

        const btnPrintCycle = document.getElementById("btn-print-cycle");
        if (btnPrintCycle) {
            btnPrintCycle.addEventListener("click", () => this.printActiveCycle());
        }

        const btnPrintInspection = document.getElementById("btn-print-inspection-file");
        if (btnPrintInspection) {
            btnPrintInspection.addEventListener("click", () => this.printFullInspectionFile());
        }

        const btnTimerToggle = document.getElementById("btn-timer-toggle");
        if (btnTimerToggle) {
            btnTimerToggle.addEventListener("click", () => this.toggleFieldTimer());
        }
        const btnTimerReset = document.getElementById("btn-timer-reset");
        if (btnTimerReset) {
            btnTimerReset.addEventListener("click", () => this.resetFieldTimer());
        }
        const btnTimerWhistle = document.getElementById("btn-timer-whistle");
        if (btnTimerWhistle) {
            btnTimerWhistle.addEventListener("click", () => this.playWhistleSound());
        }

        document.querySelectorAll(".btn-timer-select").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".btn-timer-select").forEach(b => {
                    b.classList.remove("active");
                    b.style.background = "transparent";
                    b.style.borderColor = "var(--border-color)";
                    b.style.color = "var(--text-secondary)";
                });
                btn.classList.add("active");
                btn.style.background = "var(--color-primary-soft)";
                btn.style.borderColor = "var(--color-primary)";
                btn.style.color = "var(--color-primary)";
                this.setupFieldTimerMinutes(parseInt(btn.getAttribute("data-timer-mins")), btn.getAttribute("data-timer-label"));
            });
        });
        
        const customMinsInput = document.getElementById("timer-custom-mins");
        if (customMinsInput) {
            customMinsInput.addEventListener("change", (e) => {
                const mins = parseInt(e.target.value);
                if (!isNaN(mins) && mins > 0) {
                    this.setupFieldTimerMinutes(mins, this.currentLang === "ar" ? "توقيت مخصص" : "Temps personnalisé");
                }
            });
        }
    }

    /**
     * Populate selectors
     */
    populateClassDropdowns() {
        const rosterSelect = document.getElementById("class-select-roster");
        const gradingSelect = document.getElementById("class-select-grading");
        const lotterySelect = document.getElementById("lottery-class-select");
        
        const selectors = [rosterSelect, gradingSelect, lotterySelect];
        selectors.forEach(sel => {
            if (sel) sel.innerHTML = "";
        });

        if (this.database.classes.length === 0) {
            selectors.forEach(sel => {
                if (sel) {
                    const opt = document.createElement("option");
                    opt.value = "";
                    opt.textContent = this.currentLang === "ar" ? "-- لا يوجد أقسام --" : "-- Aucune classe --";
                    sel.appendChild(opt);
                }
            });
            this.activeRosterClassId = "";
            this.activeGradingClassId = "";
            return;
        }

        const checkActive = (id) => this.database.classes.some(c => c.id === id) ? id : this.database.classes[0].id;
        this.activeRosterClassId = checkActive(this.activeRosterClassId);
        this.activeGradingClassId = checkActive(this.activeGradingClassId);
        this.activeLotteryClassId = checkActive(this.activeLotteryClassId);

        this.database.classes.forEach(c => {
            selectors.forEach(sel => {
                if (sel) {
                    const opt = document.createElement("option");
                    opt.value = c.id;
                    opt.textContent = `${c.name} (${c.grade}AS)`;
                    sel.appendChild(opt);
                }
            });
        });

        if (rosterSelect) rosterSelect.value = this.activeRosterClassId;
        if (gradingSelect) gradingSelect.value = this.activeGradingClassId;
        if (lotterySelect) lotterySelect.value = this.activeLotteryClassId;
    }

    /**
     * Content views router
     */
    renderActiveViewContent() {
        switch(this.activeTab) {
            case "dashboard":
                this.renderDashboard();
                break;
            case "classes":
                this.renderRosterStudents();
                break;
            case "grading":
                this.renderGradingSheet();
                break;
            case "settings":
                // Static fields populated on load
                break;
            case "pedagogical":
                this.renderPedagogicalView();
                break;
            case "pedagogical-tools":
                this.initStopwatchView();
                this.updateLotteryPool();
                break;
        }
    }

    updateGlobalStats() {
        const classesCount = this.database.classes.length;
        const studentsCount = this.database.students.length;
        
        document.getElementById("global-stat-classes").textContent = classesCount;
        document.getElementById("global-stat-students").textContent = studentsCount;
        
        // Cumulative presence rate
        let totalSessions = 0;
        let totalPresents = 0;
        
        Object.keys(this.database.grades).forEach(key => {
            if (key.endsWith("_continuous")) {
                const logs = this.database.grades[key];
                if (logs && logs.sessions) {
                    logs.sessions.forEach(s => {
                        totalSessions++;
                        if (s === "P" || s === "M") totalPresents++;
                    });
                }
            }
        });

        const attendanceRate = totalSessions > 0 ? Math.round((totalPresents / totalSessions) * 100) : 100;
        document.getElementById("global-stat-attendance").textContent = `${attendanceRate}%`;
    }

    /**
     * ==========================================
     * VIEW 1: DASHBOARD VIEW
     * ==========================================
     */
    renderDashboard() {
        const classesCount = this.database.classes.length;
        const studentsCount = this.database.students.length;
        
        document.getElementById("dash-stat-classes").textContent = classesCount;
        document.getElementById("dash-stat-students").textContent = studentsCount;

        // Dynamic daily quote
        const quoteEl = document.querySelector('[data-i18n="dash-quote-text"]');
        if (quoteEl) {
            if (this.currentLang === "ar") {
                quoteEl.textContent = this.getDailyPedagogicalGuidance();
            } else {
                quoteEl.textContent = this.getTranslation("dash-quote-text");
            }
        }

        // Presence
        let totalSessions = 0;
        let totalPresents = 0;
        Object.keys(this.database.grades).forEach(key => {
            if (key.endsWith("_continuous")) {
                const logs = this.database.grades[key];
                if (logs && logs.sessions) {
                    logs.sessions.forEach(s => {
                        totalSessions++;
                        if (s === "P" || s === "M") totalPresents++;
                    });
                }
            }
        });
        const attendanceRate = totalSessions > 0 ? Math.round((totalPresents / totalSessions) * 100) : 100;
        document.getElementById("dash-stat-attendance").textContent = `${attendanceRate}%`;

        // Calculate overall average
        let sumAverages = 0;
        let countAverages = 0;
        
        this.database.students.forEach(student => {
            const annualAvgObj = this.calculateStudentAnnualAverage(student.id);
            if (annualAvgObj && annualAvgObj.value !== null) {
                sumAverages += annualAvgObj.value;
                countAverages++;
            }
        });

        const totalAvg = countAverages > 0 ? (sumAverages / countAverages).toFixed(2) : "--";
        document.getElementById("dash-stat-average").textContent = totalAvg !== "--" ? `${totalAvg}/20` : "--/20";

        // Table ranking
        const leaderboardTbody = document.getElementById("dashboard-leaderboard-tbody");
        leaderboardTbody.innerHTML = "";

        if (this.database.classes.length === 0) {
            leaderboardTbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted">${this.currentLang === "ar" ? "لا يوجد أقسام مسجلة حالياً." : "Aucune classe enregistrée."}</td></tr>`;
            return;
        }

        const leaderboardData = this.database.classes.map(c => {
            const classStudents = this.database.students.filter(s => s.classId === c.id);
            const studentIds = classStudents.map(s => s.id);
            
            // Presence per class
            let classSessions = 0;
            let classPresents = 0;
            studentIds.forEach(stdId => {
                for (let term = 1; term <= 3; term++) {
                    const logs = this.database.grades[`${stdId}_${term}_continuous`];
                    if (logs && logs.sessions) {
                        logs.sessions.forEach(s => {
                            classSessions++;
                            if (s === "P" || s === "M") classPresents++;
                        });
                    }
                }
            });
            const presRate = classSessions > 0 ? Math.round((classPresents / classSessions) * 100) : 100;

            // Class annual average
            let classGradesCount = 0;
            let classGradesSum = 0;
            let annualAverages = [];
            let term1Averages = [];
            let term2Averages = [];
            let term3Averages = [];
            
            studentIds.forEach(stdId => {
                const annualAvgObj = this.calculateStudentAnnualAverage(stdId);
                if (annualAvgObj && annualAvgObj.value !== null) {
                    classGradesSum += annualAvgObj.value;
                    classGradesCount++;
                    annualAverages.push(annualAvgObj.value);
                }
                
                const t1Res = this.calculateStudentTermAverage(stdId, 1);
                if (t1Res && t1Res.termAverage !== null) {
                    term1Averages.push(t1Res.termAverage);
                }
                
                const t2Res = this.calculateStudentTermAverage(stdId, 2);
                if (t2Res && t2Res.termAverage !== null) {
                    term2Averages.push(t2Res.termAverage);
                }
                
                const t3Res = this.calculateStudentTermAverage(stdId, 3);
                if (t3Res && t3Res.termAverage !== null) {
                    term3Averages.push(t3Res.termAverage);
                }
            });
            const classAvg = classGradesCount > 0 ? parseFloat((classGradesSum / classGradesCount).toFixed(2)) : 0;
            
            const maxAvg = annualAverages.length > 0 ? Math.max(...annualAverages).toFixed(2) : "--";
            const minAvg = annualAverages.length > 0 ? Math.min(...annualAverages).toFixed(2) : "--";
            
            const calcPassRate = (arr) => {
                if (arr.length === 0) return 0;
                const passed = arr.filter(v => v >= 10).length;
                return Math.round((passed / arr.length) * 100);
            };
            
            const passRateT1 = calcPassRate(term1Averages);
            const passRateT2 = calcPassRate(term2Averages);
            const passRateT3 = calcPassRate(term3Averages);
            const passRateAnnual = calcPassRate(annualAverages);

            return {
                id: c.id,
                name: c.name,
                studentsCount: classStudents.length,
                presenceRate: presRate,
                averageScore: classAvg,
                maxAverage: maxAvg,
                minAverage: minAvg,
                passRateT1: passRateT1,
                passRateT2: passRateT2,
                passRateT3: passRateT3,
                passRateAnnual: passRateAnnual,
                hasData: annualAverages.length > 0
            };
        });

        leaderboardData.sort((a, b) => b.averageScore - a.averageScore);

        leaderboardData.forEach(row => {
            const tr = document.createElement("tr");
            let statsHtml = "";
            if (row.hasData) {
                if (this.currentLang === "ar") {
                    statsHtml = `
                        <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">
                            <div>\u0623\u0639\u0644\u0649: <strong style="color: var(--emerald-color);">${row.maxAverage}</strong> | \u062a\u062f\u0646\u0649: <strong style="color: #ef4444;">${row.minAverage}</strong></div>
                            <div>\u0627\u0644\u0646\u062c\u0627\u062d: \u06411: <strong>${row.passRateT1}%</strong> | \u06412: <strong>${row.passRateT2}%</strong> | \u06413: <strong>${row.passRateT3}%</strong> | \u0633\u0646\u0648\u064a: <strong style="color: var(--primary-color);">${row.passRateAnnual}%</strong></div>
                        </div>
                    `;
                } else {
                    statsHtml = `
                        <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">
                            <div>Max: <strong style="color: var(--emerald-color);">${row.maxAverage}</strong> | Min: <strong style="color: #ef4444;">${row.minAverage}</strong></div>
                            <div>Réussite: T1: <strong>${row.passRateT1}%</strong> | T2: <strong>${row.passRateT2}%</strong> | T3: <strong>${row.passRateT3}%</strong> | Annuel: <strong style="color: var(--primary-color);">${row.passRateAnnual}%</strong></div>
                        </div>
                    `;
                }
            } else {
                statsHtml = `
                    <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">
                        ${this.currentLang === "ar" ? "\u0644\u0627\u0020\u062a\u0648\u062c\u062f\u0020\u0646\u062a\u0627\u0626\u062c\u0020\u0645\u0633\u062c\u0644\u0629" : "Aucun résultat"}
                    </div>
                `;
            }

            tr.innerHTML = `
                <td><strong>${row.name}</strong></td>
                <td><span class="badge badge-blue">${row.studentsCount}</span></td>
                <td><span class="badge badge-emerald">${row.presenceRate}%</span></td>
                <td>
                    <div style="display: flex; flex-direction: column; align-items: flex-start;">
                        <span class="badge badge-amber font-bold">${row.averageScore > 0 ? row.averageScore + '/20' : '--'}</span>
                        ${statsHtml}
                    </div>
                </td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="app.navigateToClass('${row.id}')">
                        <svg viewBox="0 0 24 24" style="width:14px; height:14px;"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                        <span>${this.currentLang === 'ar' ? '\u0643\u0634\u0641\u0020\u0627\u0644\u0642\u0633\u0645' : 'Détails'}</span>
                    </button>
                </td>
            `;
            leaderboardTbody.appendChild(tr);
        });
    }

    navigateToClass(classId) {
        this.activeRosterClassId = classId;
        document.getElementById("class-select-roster").value = classId;
        this.switchTab("classes");
    }

    /**
     * ==========================================
     * VIEW 2: ROSTER & STUDENTS MANAGEMENT
     * ==========================================
     */
    renderRosterStudents() {
        const tbody = document.getElementById("roster-students-tbody");
        const classNameSpan = document.getElementById("roster-class-name");
        tbody.innerHTML = "";

        // Reset badge counters
        document.getElementById("roster-stat-boys").textContent = 0;
        document.getElementById("roster-stat-girls").textContent = 0;
        document.getElementById("roster-stat-exempted").textContent = 0;

        const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
        
        if (!activeClass) {
            classNameSpan.textContent = "--";
            tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${this.getTranslation("no-data-select-class")}</td></tr>`;
            return;
        }

        classNameSpan.textContent = activeClass.name;

        // Fetch students & sort by order index
        const query = document.getElementById("roster-search-input").value.toLowerCase().trim();
        let classStudents = this.database.students.filter(s => s.classId === activeClass.id);
        
        // Ensure student ordering indexes exist
        classStudents.forEach((s, idx) => {
            if (s.order === undefined) s.order = idx;
        });
        classStudents.sort((a, b) => a.order - b.order);

        // Statistics badges
        const boys = classStudents.filter(s => s.gender === "M").length;
        const girls = classStudents.filter(s => s.gender === "F").length;
        // Total exemption is when exempted in all three terms
        const exempted = classStudents.filter(s => s.exemptions && s.exemptions[0] && s.exemptions[1] && s.exemptions[2]).length;

        document.getElementById("roster-stat-boys").textContent = boys;
        document.getElementById("roster-stat-girls").textContent = girls;
        document.getElementById("roster-stat-exempted").textContent = exempted;

        if (query) {
            classStudents = classStudents.filter(s => 
                s.firstname.toLowerCase().includes(query) || s.lastname.toLowerCase().includes(query)
            );
        }

        if (classStudents.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted">${this.getTranslation("no-students-in-class")}</td></tr>`;
            return;
        }

        classStudents.forEach((student, index) => {
            const tr = document.createElement("tr");
            
            const genderBadge = student.gender === "M" 
                ? `<span class="badge badge-blue">${this.getTranslation("gender-m")}</span>`
                : `<span class="badge badge-pink">${this.getTranslation("gender-f")}</span>`;
                
            // Exemption display per term
            const exLabels = student.exemptions.map((ex, termIdx) => {
                if (ex) return `<span class="badge badge-danger">ف${termIdx+1}</span>`;
                return `<span class="badge badge-emerald">ف${termIdx+1}</span>`;
            }).join(" ");

            tr.innerHTML = `
                <td style="text-align: center;">
                    <input type="checkbox" class="cb-student-select" value="${student.id}" style="transform: scale(1.2); cursor: pointer;" onchange="app.updateBulkDeleteButton()">
                </td>
                <td>
                    <div class="order-btn-col">
                        <button class="order-arrow-btn" onclick="app.moveStudentInRoster('${student.id}', -1)" title="رفع للأعلى">
                            <svg viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>
                        </button>
                        <span style="font-size:0.75rem;">${index + 1}</span>
                        <button class="order-arrow-btn" onclick="app.moveStudentInRoster('${student.id}', 1)" title="خفّض للأسفل">
                            <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                        </button>
                    </div>
                </td>
                <td class="col-lastname"><strong>${student.lastname}</strong></td>
                <td class="col-firstname"><strong>${student.firstname}</strong></td>
                <td>${genderBadge}</td>
                <td>${student.birthdate}</td>
                <td>${student.phone || "--"}</td>
                <td>${exLabels}</td>
                <td>
                    <div style="display:flex; gap: 8px;">
                        <button class="btn btn-secondary btn-sm" onclick="app.openEditStudent('${student.id}')">${this.getTranslation("edit")}</button>
                        <button class="btn btn-danger btn-sm" onclick="app.deleteStudent('${student.id}')">${this.getTranslation("delete")}</button>
                        <div class="contact-actions">
                            <button class="contact-icon-btn whatsapp-color" onclick="app.sendMessageToParent('${student.id}', 'whatsapp')" title="إرسال عبر الواتساب">
                                <svg viewBox="0 0 24 24" style="fill:currentColor;"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.966L2 22l5.222-1.37a9.924 9.924 0 0 0 4.782 1.22c5.504 0 9.986-4.478 9.988-9.985 0-2.669-1.039-5.176-2.927-7.068A9.907 9.907 0 0 0 12.012 2zm5.72 13.916c-.244.688-1.201 1.26-1.649 1.345-.448.085-.826.31-2.775-.461-2.493-.988-4.088-3.528-4.212-3.693-.125-.164-1.01-1.342-1.01-2.559 0-1.218.636-1.815.862-2.062.227-.248.497-.31.662-.31.166 0 .332.002.476.008.149.006.349-.056.545.419.2.485.682 1.662.742 1.785.06.124.099.269.017.433-.082.164-.124.269-.247.412-.124.145-.262.325-.375.437-.124.123-.254.257-.109.505.145.247.643 1.057 1.38 1.713.95.843 1.748 1.106 1.996 1.229.248.124.393.104.538-.063.146-.166.621-.722.787-.968.165-.247.331-.206.559-.124.227.082 1.446.68 1.694.804.248.123.413.185.474.288.06.104.06.598-.184 1.286z"/></svg>
                            </button>
                            <button class="contact-icon-btn sms-color" onclick="app.sendMessageToParent('${student.id}', 'sms')" title="إرسال رسالة نصية SMS">
                                <svg viewBox="0 0 24 24" style="fill:currentColor;"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
                            </button>
                        </div>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    /**
     * Shifts order index of a student record up/down in array list
     */
    moveStudentInRoster(studentId, direction) {
        const student = this.database.students.find(s => s.id === studentId);
        if (!student) return;

        const classStudents = this.database.students.filter(s => s.classId === student.classId);
        classStudents.sort((a, b) => a.order - b.order);

        const currentIdx = classStudents.findIndex(s => s.id === studentId);
        const targetIdx = currentIdx + direction;

        if (targetIdx < 0 || targetIdx >= classStudents.length) return;

        // Swap order values
        const tempOrder = classStudents[currentIdx].order;
        classStudents[currentIdx].order = classStudents[targetIdx].order;
        classStudents[targetIdx].order = tempOrder;

        this.saveDatabase();
        this.renderRosterStudents();
    }

    openEditStudent(studentId) {
        const student = this.database.students.find(s => s.id === studentId);
        if (student) {
            document.getElementById("student-id-edit-flag").value = student.id;
            document.getElementById("student-firstname-input").value = student.firstname;
            document.getElementById("student-lastname-input").value = student.lastname;
            document.getElementById("student-gender-input").value = student.gender;
            document.getElementById("student-birth-input").value = student.birthdate;
            document.getElementById("student-phone-input").value = student.phone || "";
            
            document.getElementById("student-ex-1").checked = student.exemptions[0];
            document.getElementById("student-ex-2").checked = student.exemptions[1];
            document.getElementById("student-ex-3").checked = student.exemptions[2];
            
            document.getElementById("modal-student-title-text").textContent = this.currentLang === "ar" ? "تعديل بيانات التلميذ" : "Modifier l'élève";
            document.getElementById("modal-add-student").classList.add("active");
        }
    }

    deleteStudent(studentId) {
        if (confirm(this.currentLang === "ar" ? "هل أنت متأكد من حذف هذا التلميذ؟" : "Confirmez-vous la suppression de cet élève ?")) {
            this.database.students = this.database.students.filter(s => s.id !== studentId);
            // Clean associated scores
            for (let term = 1; term <= 3; term++) {
                delete this.database.grades[`${studentId}_${term}_continuous`];
                delete this.database.grades[`${studentId}_${term}_assignment`];
                delete this.database.grades[`${studentId}_${term}_exam`];
            }
            this.saveDatabase();
            this.renderActiveViewContent();
        }
    }

    updateBulkDeleteButton() {
        const checkboxes = document.querySelectorAll(".cb-student-select:checked");
        const btnDeleteSelected = document.getElementById("btn-delete-selected-students");
        if (checkboxes.length > 0) {
            btnDeleteSelected.style.display = "flex";
            btnDeleteSelected.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg> حذف المحدد (${checkboxes.length})`;
        } else {
            btnDeleteSelected.style.display = "none";
        }
    }

    deleteSelectedStudents() {
        const checkboxes = document.querySelectorAll(".cb-student-select:checked");
        if (checkboxes.length === 0) return;

        if (confirm(this.currentLang === "ar" ? `هل أنت متأكد من حذف ${checkboxes.length} تلاميذ؟` : `Confirmez-vous la suppression de ${checkboxes.length} élèves ?`)) {
            const idsToDelete = Array.from(checkboxes).map(cb => cb.value);
            
            this.database.students = this.database.students.filter(s => !idsToDelete.includes(s.id));
            
            idsToDelete.forEach(studentId => {
                for (let term = 1; term <= 3; term++) {
                    delete this.database.grades[`${studentId}_${term}_continuous`];
                    delete this.database.grades[`${studentId}_${term}_assignment`];
                    delete this.database.grades[`${studentId}_${term}_exam`];
                }
            });

            document.getElementById("cb-select-all-students").checked = false;
            this.updateBulkDeleteButton();
            
            this.saveDatabase();
            this.renderActiveViewContent();
            this.showToast(this.currentLang === "ar" ? "تم الحذف بنجاح" : "Suppression réussie");
        }
    }

    deleteActiveClass() {
        const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
        if (!activeClass) return;

        if (confirm(this.getTranslation("class-delete-confirm"))) {
            this.database.classes = this.database.classes.filter(c => c.id !== activeClass.id);
            const classStudents = this.database.students.filter(s => s.classId === activeClass.id);
            classStudents.forEach(s => {
                for (let term = 1; term <= 3; term++) {
                    delete this.database.grades[`${s.id}_${term}_continuous`];
                    delete this.database.grades[`${s.id}_${term}_assignment`];
                    delete this.database.grades[`${s.id}_${term}_exam`];
                }
            });
            this.database.students = this.database.students.filter(s => s.classId !== activeClass.id);
            this.saveDatabase();
            this.activeRosterClassId = "";
            this.populateClassDropdowns();
            this.renderActiveViewContent();
        }
    }

    /**
     * ==========================================
     * VIEW 3: GRADING SHEET & SCORING CALCULATIONS
     * ==========================================
     */
    renderGradingSheet() {
        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        const termSelectVal = document.getElementById("term-select-grading").value;
        const activeTerm = termSelectVal === "annual" ? "annual" : parseInt(termSelectVal);
        
        // Hide/show guide buttons and badge sports info for annual term
        const indSportBadge = document.getElementById("grading-ind-sport-name");
        const colSportBadge = document.getElementById("grading-col-sport-name");
        
        if (activeTerm === "annual") {
            if (indSportBadge) indSportBadge.textContent = "السنوي";
            if (colSportBadge) colSportBadge.textContent = "السنوي";
        } else {
            const termActivity = this.database.termActivities[`term_${activeTerm}`];
            if (indSportBadge) indSportBadge.textContent = this.getSportName(termActivity.individual, "individual");
            if (colSportBadge) colSportBadge.textContent = this.getSportName(termActivity.collective, "collective");
        }



        const sheetTable = document.getElementById("table-grading-sheet");
        sheetTable.innerHTML = "";

        if (!activeClass) {
            sheetTable.innerHTML = `<tr><td class="text-center text-muted">${this.getTranslation("no-data-select-class")}</td></tr>`;
            return;
        }

        const classStudents = this.database.students.filter(s => s.classId === activeClass.id);
        classStudents.sort((a, b) => a.order - b.order);

        if (classStudents.length === 0) {
            sheetTable.innerHTML = `<tr><td class="text-center text-muted">${this.getTranslation("no-students-in-class")}</td></tr>`;
            return;
        }

        if (activeTerm === "annual") {
            this.renderAnnualTermSheet(sheetTable, classStudents);
            return;
        }

        // Branching according to active grading tab (continuous, assignment, exam, term-summary)
        const type = this.activeGradingType;
        const termActivity = this.database.termActivities[`term_${activeTerm}`];
        
        if (type === "continuous") {
            this.renderContinuousAssessmentSheet(sheetTable, classStudents, activeTerm);
        } else if (type === "assignment" || type === "exam") {
            this.renderAssignmentExamSheet(sheetTable, classStudents, activeTerm, type, termActivity, activeClass);
        } else if (type === "term-summary") {
            this.renderTermSummarySheet(sheetTable, classStudents, activeTerm);
        }
        this.applyLedgerLockState();
    }

    toggleGradeLedgerLock() {
        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        if (!activeClass) return;

        const termSelectVal = document.getElementById("term-select-grading").value;
        const activeTerm = termSelectVal === "annual" ? "annual" : parseInt(termSelectVal);
        const type = this.activeGradingType;

        const lockKey = `${activeClass.id}_${activeTerm}_${type}`;
        this.database.lockedLedgers = this.database.lockedLedgers || {};
        this.database.lockedLedgers[lockKey] = !this.database.lockedLedgers[lockKey];

        this.saveDatabase();
        this.applyLedgerLockState();

        const isLocked = this.database.lockedLedgers[lockKey];
        if (isLocked) {
            this.showToast(this.currentLang === "ar" ? "\u2705\u0020\u062a\u0645\u0020\u0642\u0641\u0644\u0020\u0648\u062a\u062c\u0645\u064a\u062f\u0020\u0646\u0642\u0627\u0637\u0020\u0627\u0644\u0641\u0635\u0644\u0020\u0628\u0646\u062c\u0627\u062d" : "Saisie des notes verrouill\u00e9e avec succ\u00e8s");
        } else {
            this.showToast(this.currentLang === "ar" ? "\u2705\u0020\u062a\u0645\u0020\u0625\u0644\u063a\u0627\u0621\u0020\u0642\u0641\u0644\u0020\u0648\u062a\u062c\u0645\u064a\u062f\u0020\u0627\u0644\u0646\u0642\u0627\u0637" : "Saisie des notes d\u00e9verrouill\u00e9e");
        }
    }

    applyLedgerLockState() {
        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        const termSelectVal = document.getElementById("term-select-grading") ? document.getElementById("term-select-grading").value : "1";
        const activeTerm = termSelectVal === "annual" ? "annual" : parseInt(termSelectVal);
        const type = this.activeGradingType;

        const lockBtn = document.getElementById("btn-lock-grading");
        const lockBtnText = document.getElementById("btn-lock-grading-text");
        const saveBtn = document.getElementById("btn-save-grading");

        if (!activeClass) {
            if (lockBtn) lockBtn.style.display = "none";
            return;
        }

        if (lockBtn) lockBtn.style.display = "flex";

        const lockKey = `${activeClass.id}_${activeTerm}_${type}`;
        this.database.lockedLedgers = this.database.lockedLedgers || {};
        const isLocked = !!this.database.lockedLedgers[lockKey];

        // Update button text and style
        if (lockBtnText) {
            if (isLocked) {
                lockBtnText.textContent = this.currentLang === "ar" ? "\ud83d\udd13\u0020\u0625\u0644\u063a\u0627\u0621\u0020\u062a\u062c\u0645\u064a\u062f\u0020\u0646\u0642\u0627\u0637\u0020\u0627\u0644\u0641\u0635\u0644" : "\ud83d\udd13 D\u00e9verrouiller la saisie";
                lockBtn.className = "btn btn-danger";
            } else {
                lockBtnText.textContent = this.currentLang === "ar" ? "\ud83d\udd12\u0020\u0642\u0641\u0644\u0020\u0648\u062a\u062c\u0645\u064a\u062f\u0020\u0646\u0642\u0627\u0637\u0020\u0627\u0644\u0641\u0635\u0644" : "\ud83d\udd12 Verrouiller la saisie";
                lockBtn.className = "btn btn-secondary";
            }
        }

        if (saveBtn) {
            saveBtn.disabled = isLocked;
            if (isLocked) {
                saveBtn.style.opacity = "0.5";
                saveBtn.style.pointerEvents = "none";
            } else {
                saveBtn.style.opacity = "1";
                saveBtn.style.pointerEvents = "auto";
            }
        }

        // Loop through all inputs and elements in the table viewport
        const sheetTable = document.getElementById("table-grading-sheet");
        if (!sheetTable) return;

        const inputs = sheetTable.querySelectorAll(".grading-input");
        const selects = sheetTable.querySelectorAll(".role-select, .rubric-select");
        const sessionLabels = sheetTable.querySelectorAll(".session-lbl");
        const cardBtns = sheetTable.querySelectorAll(".card-btn");

        inputs.forEach(input => {
            if (isLocked) {
                input.disabled = true;
                input.readOnly = true;
                const td = input.closest("td");
                if (td) td.classList.add("locked-cell-frosted");
            } else {
                input.disabled = false;
                input.readOnly = false;
                const td = input.closest("td");
                if (td) td.classList.remove("locked-cell-frosted");
            }
        });

        selects.forEach(select => {
            if (isLocked) {
                select.disabled = true;
                const td = select.closest("td");
                if (td) td.classList.add("locked-cell-frosted");
            } else {
                select.disabled = false;
                const td = select.closest("td");
                if (td) td.classList.remove("locked-cell-frosted");
            }
        });

        sessionLabels.forEach(lbl => {
            if (isLocked) {
                lbl.style.pointerEvents = "none";
                lbl.style.opacity = "0.6";
                const td = lbl.closest("td");
                if (td) td.classList.add("locked-cell-frosted");
            } else {
                lbl.style.pointerEvents = "auto";
                lbl.style.opacity = "1";
                const td = lbl.closest("td");
                if (td) td.classList.remove("locked-cell-frosted");
            }
        });

        cardBtns.forEach(btn => {
            if (isLocked) {
                btn.style.pointerEvents = "none";
                btn.style.opacity = "0.6";
                const td = btn.closest("td");
                if (td) td.classList.add("locked-cell-frosted");
            } else {
                btn.style.pointerEvents = "auto";
                btn.style.opacity = "1";
                const td = btn.closest("td");
                if (td) td.classList.remove("locked-cell-frosted");
            }
        });
    }

    exportMinistryCompliantCSV() {
        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        if (!activeClass) {
            alert(this.currentLang === "ar" ? "\u064a\u0631\u062c\u064a\u0020\u062a\u062d\u062f\u064a\u062f\u0020\u0642\u0633\u0645\u0020\u0623\u0648\u0644\u0627\u064b" : "Veuillez d'abord s\u00e9lectionner une classe");
            return;
        }

        const termSelectVal = document.getElementById("term-select-grading").value;
        const activeTerm = termSelectVal === "annual" ? 3 : parseInt(termSelectVal || "3");
        const termNames = {
            1: "\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u0623\u0648\u0644",
            2: "\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u062b\u0627\u0646\u064a",
            3: "\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u062b\u0627\u0644\u062b"
        };
        const activeTermName = termNames[activeTerm] || termNames[3];

        const classIndex = this.database.classes.findIndex(c => c.id === activeClass.id);
        let classCode = "";
        if (activeClass.id === "class_1") {
            classCode = "3221001";
        } else if (activeClass.id === "class_2") {
            classCode = "3333001";
        } else {
            classCode = String(32073001 + classIndex);
        }

        const classStudents = this.database.students.filter(s => s.classId === activeClass.id);
        classStudents.sort((a, b) => a.order - b.order);

        // Pre-build 6-row ministry header
        let csvContent = "";
        csvContent += "\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629\u0020\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u064a\u0629\u0020\u0627\u0644\u062f\u064a\u0645\u0642\u0631\u0627\u0637\u064a\u0629\u0020\u0634\u0639\u0628\u064a\u0629,,,,,,,,\n";
        csvContent += "\u0648\u0632\u0627\u0631\u0629\u0020\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u0020\u0627\u0644\u0648\u0637\u0646\u064a\u0629,,,,,,,,\n";
        csvContent += "\u0645\u062f\u064a\u0631\u064a\u0629\u0020\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u0020\u0644\u0648\u0644\u0627\u064a\u0629\u0020\u0627\u0644\u062b\u064a\u0636,,,,,,,,\n";
        csvContent += "\u062b\u0627\u0646\u0648\u064a\u0629\u0020\u0627\u0644\u0645\u062c\u0627\u0647\u062f\u0020\u0627\u0644\u0645\u062a\u0648\u0641\u064a\u0020\u0633\u0645\u0627\u062d\u064a\u0020\u0628\u0648\u0639\u0645\u0627\u0645\u0629\u0020\u0628\u0646\u0020\u0623\u062d\u0645\u062f\u0020(\u0627\u0644\u0623\u0628\u064a\u0636\u0020\u0633\u064a\u062f\u064a\u0020\u0627\u0644\u0634\u064a\u062e),,,,,,,,\n";
        csvContent += `\u0648\u062b\u064a\u0642\u0629\u0020\u062d\u062c\u0632\u0020\u0627\u0644\u0646\u0642\u0627\u0637\u0020\u0627\u0644\u062e\u0627\u0635\u0629\u0020\u0628\u0640:${activeTermName}\u060c\u0627\u0644\u0633\u0646\u0629\u0020\u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629\u0020\u061a\u0020\u0662\u0660\u0662\u0665\u002d\u0662\u0660\u0662\u0666\u060c\u0627\u0644\u0641\u0648\u062c\u0620\u0627\u0644\u062a\u0631\u0628\u0648\u064a\u061a${activeClass.name}\u060c\u0645\u0627\u062f\u0629\u061a\u062a\u0020\u0627\u0644\u0628\u062f\u0646\u064a\u0629\u0020\u0648\u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629,,,,,,,,\n`;
        csvContent += `${classCode},20253,10,32073004,,,,,\n`;
        csvContent += "matricule,nom,prenom,date_n,01,03,09,obs,cons\n";
        csvContent += "\u0631\u0642\u0645\u0020\u0627\u0644\u062a\u0639\u0631\u064a\u0641,\u0627\u0644\u0644\u0642\u0628,\u0627\u0644\u0627\u0633\u0645,\u062a\u0627\u0631\u064a\u062e\u0020\u0627\u0644\u0645\u064a\u0644\u0627\u062f,\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0020\u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0020\u0644\u0644\u0641\u0635\u0644\u0020\u0662\u0660,\u0645\u0639\u062f\u0644\u0020\u0627\u0644\u0641\u0631\u0648\u0636\u0020\u0644\u0644\u0641\u0635\u0644\u0020\u0662\u0660,\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631\u0020\u0644\u0644\u0641\u0635\u0644\u0020\u0662\u0660,\u0627\u0644\u062a\u0642\u062f\u064a\u0631\u0627\u062a,\u0627\u0644\u0627\u0631\u0634\u0627\u062f\u0627\u062a\n";

        classStudents.forEach((student, index) => {
            let matricule = student.matricule || student.registrationNumber || "";
            if (!matricule || matricule.length !== 16) {
                matricule = "2525" + classCode.padStart(8, "0") + String(index + 1).padStart(4, "0");
            }

            const results = this.calculateStudentTermAverage(student.id, activeTerm);
            const isExempted = student.exemptions && student.exemptions[activeTerm - 1];

            let caVal = "";
            let assVal = "";
            let examVal = "";
            let appreciation = "";
            let guideline = "";

            if (isExempted) {
                caVal = "\u0645\u0639\u0641\u0649"; // معفى
                assVal = "\u0645\u0639\u0641\u0649";
                examVal = "\u0645\u0639\u0641\u0649";
                appreciation = "\u0645\u0639\u0641\u0649\u0020\u0645\u0646\u0020\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u0020\u0627\u0644\u062b\u062f\u0646\u064a\u0629"; // معفى من التربية البدنية
                guideline = "--";
            } else {
                // Continuous
                const caKey = `${student.id}_${activeTerm}_continuous`;
                const caObj = this.database.grades[caKey];
                if (caObj) {
                    const discStr = String(caObj.discipline || "").trim().toLowerCase();
                    const partStr = String(caObj.participation || "").trim().toLowerCase();
                    const creaStr = String(caObj.creativity || "").trim().toLowerCase();
                    if (discStr === "a" || partStr === "a" || creaStr === "a") {
                        caVal = "\u063a"; // غ
                    } else if (discStr === "m" || partStr === "m" || creaStr === "m") {
                        caVal = "\u0645"; // م
                    } else {
                        caVal = results.ca !== null ? results.ca.toFixed(1) : "0.0";
                    }
                } else {
                    caVal = "0.0";
                }

                // Assignment
                const assKey = `${student.id}_${activeTerm}_assignment`;
                const assObj = this.database.grades[assKey];
                if (assObj) {
                    const colStr = String(assObj.collective || "").trim().toLowerCase();
                    const atts = assObj.attempts || [];
                    if (colStr === "a" || atts.includes("a")) {
                        assVal = "\u063a"; // غ
                    } else if (colStr === "m" || atts.includes("m")) {
                        assVal = "\u0645"; // م
                    } else {
                        assVal = results.assignment !== null ? results.assignment.toFixed(1) : "0.0";
                    }
                } else {
                    assVal = "0.0";
                }

                // Exam
                const examKey = `${student.id}_${activeTerm}_exam`;
                const examObj = this.database.grades[examKey];
                if (examObj) {
                    const colStr = String(examObj.collective || "").trim().toLowerCase();
                    const atts = examObj.attempts || [];
                    if (colStr === "a" || atts.includes("a")) {
                        examVal = "\u063a"; // غ
                    } else if (colStr === "m" || atts.includes("m")) {
                        examVal = "\u0645"; // م
                    } else {
                        examVal = results.exam !== null ? results.exam.toFixed(1) : "0.0";
                    }
                } else {
                    examVal = "0.0";
                }

                // Appreciation & Guideline
                if (results.termAverage !== null) {
                    const avg = results.termAverage;
                    if (avg < 10) { 
                        appreciation = "\u062f\u0648\u0646\u0627\u0644\u0645\u062a\u0648\u0635\u0637"; // دون المتوسط
                        guideline = "\u0628\u0630\u0644\u0645\u062c\u0647\u0648\u062f\u0623\u0643\u0628\u0631"; // بذل مجهود أكبر
                    } else if (avg < 13) { 
                        appreciation = "\u0642\u0631\u064a\u0628\u0645\u0646\u0627\u0644\u0645\u062a\u0648\u0635\u0637"; // قريب من المتوسط
                        guideline = "\u0648\u0627\u0635\u0644\u0627\u0644\u0639\u0645\u0644"; // واصل العمل
                    } else if (avg <= 14.5) { 
                        appreciation = "\u062d\u0633\u0646"; // حسن
                        guideline = "\u0648\u0627\u0635\u0644"; // واصل
                    } else if (avg < 17) { 
                        appreciation = "\u062c\u064a\u062f\u062c\u062f\u0627"; // جيد جدا
                        guideline = "\u0648\u0627\u0635\u0644"; // واصل
                    } else { 
                        appreciation = "\u0645\u0645\u062a\u0627\u0632"; // ممتاز
                        guideline = "\u0648\u0627\u0635\u0644"; // واصل
                    }
                } else {
                    appreciation = "--";
                    guideline = "--";
                }
            }

            csvContent += `${matricule},${student.lastname},${student.firstname},${student.birthdate},${caVal},${assVal},${examVal},${appreciation},${guideline}\n`;
        });

        // Prepend UTF-8 BOM
        const blobPayload = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
        const fileName = `\u0646\u0642\u0627\u0637\u005f\u0645\u0627\u062f\u0629\u005f\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u005f\u0627\u0644\u062f\u062f\u0646\u064a\u0629\u005f${classCode}\u005f${activeTermName.replace(/\s+/g, "\u005f")}.csv`;

        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blobPayload);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    printGradingSheet() {
        const sheetTable = document.getElementById("table-grading-sheet");
        if (!sheetTable || sheetTable.innerHTML.trim() === "") return;

        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        if (!activeClass) return;

        const termSelectVal = document.getElementById("term-select-grading").value;
        const activeTerm = termSelectVal === "annual" ? "annual" : parseInt(termSelectVal);
        
        let printTitleBase = "";
        if (activeTerm === "annual") {
            printTitleBase = "\u0643\u0634\u0641 \u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0633\u0646\u0648\u064a";
        } else {
            const type = this.activeGradingType;
            if (type === "continuous") printTitleBase = "\u062c\u062f\u0648\u0644 \u062a\u0646\u0642\u064a\u0637 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0629 \u0644\u0644\u0641\u0635\u0644 " + activeTerm;
            else if (type === "assignment") printTitleBase = "\u0643\u0634\u0641 \u0646\u0642\u0627\u0637 \u0627\u0644\u0641\u0631\u0636 \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u0641\u0635\u0644 " + activeTerm;
            else if (type === "exam") printTitleBase = "\u0643\u0634\u0641 \u0646\u0642\u0627\u0637 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0644\u0644\u0641\u0635\u0644 " + activeTerm;
            else if (type === "term-summary") printTitleBase = "\u0643\u0634\u0641 \u0646\u0642\u0627\u0637 \u0627\u0644\u0641\u0635\u0644 " + activeTerm;
        }
        
        const title = `${printTitleBase} - \u0642\u0633\u0645: ${activeClass.name}`;

        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "\u0645\u062f\u064a\u0631\u064a\u0629 \u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0644\u0648\u0644\u0627\u064a\u0629 \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u063a\u0631\u0628";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        // Get inner HTML of table but replace inputs with their values for printing
        let tableClone = sheetTable.cloneNode(true);
        const inputs = sheetTable.querySelectorAll("input");
        const clonedInputs = tableClone.querySelectorAll("input");
        inputs.forEach((input, index) => {
            if (clonedInputs[index]) {
                const span = document.createElement("span");
                span.textContent = input.value;
                clonedInputs[index].parentNode.replaceChild(span, clonedInputs[index]);
            }
        });

        const selects = sheetTable.querySelectorAll("select");
        const clonedSelects = tableClone.querySelectorAll("select");
        selects.forEach((select, index) => {
            if (clonedSelects[index]) {
                const span = document.createElement("span");
                span.textContent = select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : "";
                span.style.fontWeight = "bold";
                clonedSelects[index].parentNode.replaceChild(span, clonedSelects[index]);
            }
        });

        // Also replace interactive session labels with static text
        const sessionLabels = tableClone.querySelectorAll(".session-lbl");
        sessionLabels.forEach(lbl => {
            const span = document.createElement("span");
            span.textContent = lbl.textContent;
            span.style.fontWeight = "bold";
            if (lbl.classList.contains("session-lbl-sick") || lbl.classList.contains("session-lbl-absent")) {
                span.style.color = "#ef4444";
            } else {
                span.style.color = "#10b981";
            }
            lbl.parentNode.replaceChild(span, lbl);
        });

        let html = `
            <div class="print-page" style="padding: 10px; font-family: 'Cairo', sans-serif; direction: rtl;">
                <div style="text-align: center; margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                    <div style="font-weight: bold; font-size: 0.9rem;">\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u062c\u0632\u0627\u0626\u0631\u064a\u0629 \u0627\u0644\u062f\u064a\u0645\u0642\u0631\u0627\u0637\u064a\u0629 \u0627\u0644\u0634\u0639\u0628\u064a\u0629</div>
                    <div style="font-weight: bold; font-size: 0.9rem;">\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062a\u0631\u0628\u064a\u0629 \u0627\u0644\u0648\u0637\u0646\u064a\u0629</div>
                    <div style="display: flex; justify-content: space-between; margin-top: 5px; font-size: 0.8rem;">
                        <div style="text-align: right;">
                            <div>${wilaya}</div>
                            <div>\u0627\u0644\u0645\u0624\u0633\u0633\u0629: ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div>\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629: ${academicYear}</div>
                            <div>\u0627\u0644\u0623\u0633\u062a\u0627\u0630(\u0629): ${teacherName}</div>
                        </div>
                    </div>
                    <h2 style="margin: 10px 0 5px 0; font-size: 1.1rem;">${title}</h2>
                </div>
                <div style="overflow-x: hidden;">
                    <table style="width: 100%; max-width: 100%; border-collapse: collapse; text-align: right; font-size: 0.75rem; table-layout: auto;">
                        ${tableClone.innerHTML}
                    </table>
                </div>
                <div style="margin-top: 20px; display: flex; justify-content: space-between; font-weight: bold; font-size: 0.9rem;">
                    <div>\u0625\u0645\u0636\u0627\u0621 \u0627\u0644\u0623\u0633\u062a\u0627\u0630:</div>
                    <div>\u0625\u0645\u0636\u0627\u0621 \u0627\u0644\u0645\u062f\u064a\u0631(\u0629):</div>
                </div>
                <div style="text-align: center; font-size: 0.6rem; color: #666; margin-top: 30px;">
                    Smart_Sport | Mai26 | Delbaz_Med
                </div>
            </div>
        `;

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;
        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>\u0637\u0628\u0627\u0639\u0629 ${title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Cairo', sans-serif; }
                    table, th, td { border: 1px solid #000; padding: 4px 2px; }
                    th { background: #f3f4f6; }
                    .badge { padding: 1px 4px; border-radius: 4px; font-size: 0.65rem; }
                    .badge-blue { background: #e0f2fe; color: #0284c7; }
                    .badge-pink { background: #fce7f3; color: #db2777; }
                    .badge-danger { background: #fee2e2; color: #ef4444; }
                    .badge-amber { background: #fef3c7; color: #d97706; }
                    .badge-emerald { background: #d1fae5; color: #059669; }
                    .text-center { text-align: center; }
                    .session-cell-group { display: flex; gap: 2px; justify-content: center; }
                    @media print {
                        @page { size: landscape; margin: 10mm; }
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; zoom: 95%; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0;" lang="fr">
                ${html}
                <div class="no-print" style="text-align: center; margin: 10px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem;">\u0637\u0628\u0627\u0639\u0629 \u0648\u0631\u0642\u0629 \u0627\u0644\u062a\u0646\u0642\u064a\u0637</button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }
    renderContinuousAssessmentSheet(tableNode, students, term) {
        // Table headers
        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-lastname">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-firstname">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th style="width: 200px;" class="text-center">7 حصص حضور وعمل (14 ن)</th>
                    <th style="width: 80px;" class="text-center">الانضباط (2ن)</th>
                    <th style="width: 80px;" class="text-center">المشاركة (2ن)</th>
                    <th style="width: 80px;" class="text-center">الإبداع (2ن)</th>
                    <th style="width: 120px;" class="text-center">الدور القيادي</th>
                    <th style="width: 150px;" class="text-center">البطاقات التربوية</th>
                    <th style="width: 80px;" class="text-center">مجموع (20)</th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const isExempted = student.exemptions && student.exemptions[term - 1];
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            // Load saved continuous scores
            const gradeKey = `${student.id}_${term}_continuous`;
            const scoreObj = this.database.grades[gradeKey] || { sessions: ["P","P","P","P","P","P","P"], discipline: 2, participation: "", creativity: "" };
            if (!scoreObj.sessions || !Array.isArray(scoreObj.sessions)) {
                scoreObj.sessions = ["P","P","P","P","P","P","P"];
            }

            if (isExempted) {
                // Disabled row for exempted students
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted col-lastname">${student.lastname}</td>
                        <td class="text-muted col-firstname">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td colspan="6" class="text-center"><span class="badge badge-danger">${this.getTranslation("exempted-abrv")}</span></td>
                        <td><strong class="highlight-text">${this.getTranslation("exempted-abrv")}</strong></td>
                    </tr>
                `;
            } else {
                // Interactive sessions grid
                let sessionsHtml = `<div class="session-cell-group">`;
                for (let sIdx = 0; sIdx < 7; sIdx++) {
                    const status = scoreObj.sessions[sIdx] || "P";
                    let labelText = "✓";
                    let labelClass = "session-lbl-present";
                    if (status === "M") {
                        labelText = "M";
                        labelClass = "session-lbl-sick active";
                    } else if (status === "A") {
                        labelText = "A";
                        labelClass = "session-lbl-absent active";
                    }

                    sessionsHtml += `
                        <span class="session-lbl ${labelClass}" 
                               id="lbl_${student.id}_${sIdx}" 
                               onclick="app.cycleSessionStatus('${student.id}', ${sIdx})">${labelText}</span>
                    `;
                }
                sessionsHtml += `</div>`;

                // Calculate current sum
                const caSumObj = this.calculateStudentContinuousSum(scoreObj);
                
                // Excluded row styling & responsibility highlights
                let rowClasses = [];
                if (scoreObj.redCards && scoreObj.redCards > 0) rowClasses.push("row-excluded-red");
                if (scoreObj.role === "captain" || scoreObj.role === "both") rowClasses.push("captain-row");
                else if (scoreObj.role === "equipment") rowClasses.push("equipment-row");

                // Check if student is absent or sick based on stored values
                const discStr = String(scoreObj.discipline !== undefined ? scoreObj.discipline : "").trim().toLowerCase();
                const partStr = String(scoreObj.participation !== undefined ? scoreObj.participation : "").trim().toLowerCase();
                const creaStr = String(scoreObj.creativity !== undefined ? scoreObj.creativity : "").trim().toLowerCase();
                
                const isAbsent = discStr === "a" || partStr === "a" || creaStr === "a";
                const isSick = discStr === "m" || partStr === "m" || creaStr === "m";

                if (isAbsent) rowClasses.push("row-absent-dim");
                if (isSick) rowClasses.push("row-sick-blue");
                
                const rowClassStr = rowClasses.join(" ");

                // Participation display including leadership bonus
                let displayPart = scoreObj.participation !== undefined ? scoreObj.participation : "";
                if (displayPart.toString().trim().toLowerCase() !== "a" && displayPart.toString().trim().toLowerCase() !== "m") {
                    const partBaseline = parseFloat(scoreObj.participation);
                    const baselinePart = isNaN(partBaseline) ? 0.0 : partBaseline;
                    if (scoreObj.role === "both") {
                        displayPart = Math.min(2.00, baselinePart + 1.00).toFixed(2);
                    } else if (scoreObj.participation !== "" && scoreObj.participation !== undefined) {
                        displayPart = baselinePart.toFixed(2);
                    }
                }

                // Creativity display including leadership bonus
                let displayCrea = scoreObj.creativity !== undefined ? scoreObj.creativity : "";
                if (displayCrea.toString().trim().toLowerCase() !== "a" && displayCrea.toString().trim().toLowerCase() !== "m") {
                    const creaBaseline = parseFloat(scoreObj.creativity);
                    const baselineCrea = isNaN(creaBaseline) ? 0.0 : creaBaseline;
                    if (scoreObj.role === "captain" || scoreObj.role === "equipment" || scoreObj.role === "both") {
                        displayCrea = Math.min(2.00, baselineCrea + 1.00).toFixed(2);
                    } else if (scoreObj.creativity !== "" && scoreObj.creativity !== undefined) {
                        displayCrea = baselineCrea.toFixed(2);
                    }
                }

                headers += `
                    <tr class="${rowClassStr}" id="row_${student.id}">
                        <td>${index + 1}</td>
                        <td class="col-lastname"><strong>${student.lastname}</strong></td>
                        <td class="col-firstname"><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td>${sessionsHtml}</td>
                        <td>
                            <input type="text" inputmode="decimal" lang="fr" class="grading-input ca-input disc-input" id="discipline_${student.id}"
                                   value="${scoreObj.discipline}" data-student="${student.id}" data-field="discipline" style="width: 70px;">
                        </td>
                        <td>
                            <input type="text" inputmode="decimal" lang="fr" class="grading-input ca-input part-input" id="participation_${student.id}"
                                   value="${displayPart}" data-student="${student.id}" data-field="participation" style="width: 70px;">
                        </td>
                        <td>
                            <input type="text" inputmode="decimal" lang="fr" class="grading-input ca-input crea-input" id="creativity_${student.id}"
                                   value="${displayCrea}" data-student="${student.id}" data-field="creativity" style="width: 70px;">
                        </td>
                        <td>
                            <select class="role-select" onchange="app.changeStudentRole('${student.id}', this)" data-student="${student.id}" style="width: 110px;">
                                <option value="none" ${scoreObj.role === "none" || !scoreObj.role ? "selected" : ""}>طالب عادي</option>
                                <option value="captain" ${scoreObj.role === "captain" ? "selected" : ""}>👑 قائد فوج</option>
                                <option value="equipment" ${scoreObj.role === "equipment" ? "selected" : ""}>🎒 مسؤول عتاد</option>
                                <option value="both" ${scoreObj.role === "both" ? "selected" : ""}>👑🎒 قائد ومسؤول عتاد</option>
                            </select>
                        </td>
                        <td>
                            <div class="card-board-container" data-student="${student.id}">
                                <button class="card-btn green-card-btn" onclick="app.applyPedagogicalCard('${student.id}', 'green', this)" oncontextmenu="event.preventDefault(); app.revertPedagogicalCard('${student.id}', 'green', this)" title="البطاقة الخضراء - تميز ولعب نظيف (نقرتين متتاليتين أو زر الفأرة الأيمن للتراجع)">
                                    <span class="card-icon">🟢</span>
                                    <span class="card-badge" id="green_badge_${student.id}">${scoreObj.greenCards || 0}</span>
                                </button>
                                <button class="card-btn yellow-card-btn" onclick="app.applyPedagogicalCard('${student.id}', 'yellow', this)" oncontextmenu="event.preventDefault(); app.revertPedagogicalCard('${student.id}', 'yellow', this)" title="البطاقة الصفراء - تنبيه وانضباط (نقرتين متتاليتين أو زر الفأرة الأيمن للتراجع)">
                                    <span class="card-icon">🟡</span>
                                    <span class="card-badge" id="yellow_badge_${student.id}">${scoreObj.yellowCards || 0}</span>
                                </button>
                                <button class="card-btn red-card-btn" onclick="app.applyPedagogicalCard('${student.id}', 'red', this)" oncontextmenu="event.preventDefault(); app.revertPedagogicalCard('${student.id}', 'red', this)" title="البطاقة الحمراء - طرد وعقوبة (نقرتين متتاليتين أو زر الفأرة الأيمن للتراجع)">
                                    <span class="card-icon">🔴</span>
                                    <span class="card-badge" id="red_badge_${student.id}">${scoreObj.redCards || 0}</span>
                                </button>
                            </div>
                        </td>
                        <td class="final-grade-cell" id="ca_total_${student.id}"><strong>${caSumObj.total}</strong></td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;

        // Register dynamic event listeners for inputs
        tableNode.querySelectorAll(".ca-input").forEach(input => {
            const handleUpdate = (e) => {
                const tr = e.target.closest("tr");
                const stdId = e.target.getAttribute("data-student");
                this.recalculateContinuousSumRow(stdId, tr);
                this.updateStopwatchStudents();
            };
            input.addEventListener("input", handleUpdate);
            input.addEventListener("change", handleUpdate);
        });
    }
    cycleSessionStatus(studentId, sessionIndex) {
        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const gradeKey = `${studentId}_${activeTerm}_continuous`;

        // Initialize object if not existing
        if (!this.database.grades[gradeKey]) {
            this.database.grades[gradeKey] = {
                sessions: ["P","P","P","P","P","P","P"],
                discipline: 2,
                participation: "",
                creativity: 2
            };
        }

        const log = this.database.grades[gradeKey];
        const current = log.sessions[sessionIndex] || "P";
        
        let nextStatus = "P";
        let nextLabel = "\u2713";
        
        if (current === "P") {
            nextStatus = "M";
            nextLabel = "M";
        } else if (current === "M") {
            nextStatus = "A";
            nextLabel = "A";
        }

        log.sessions[sessionIndex] = nextStatus;

        // Update DOM labels
        const node = document.getElementById(`lbl_${studentId}_${sessionIndex}`);
        if (node) {
            node.className = "session-lbl";
            if (nextStatus === "P") {
                node.classList.add("session-lbl-present");
            } else if (nextStatus === "M") {
                node.classList.add("session-lbl-sick", "active");
            } else if (nextStatus === "A") {
                node.classList.add("session-lbl-absent", "active");
            }
            node.textContent = nextLabel;
        }

        // Update row total
        const tr = node ? node.closest("tr") : null;
        if (tr) {
            this.recalculateContinuousSumRow(studentId, tr);
        }
    }

    calculateStudentContinuousSum(scoreObj) {
        let attScore = 0;
        if (scoreObj && scoreObj.sessions && Array.isArray(scoreObj.sessions)) {
            scoreObj.sessions.forEach(status => {
                if (status === "P" || status === "?" || status === "âœ“") attScore += 2;
                else if (status === "M") attScore += 1;
            });
        }

        const parseScoreVal = (val) => {
            if (val === undefined || val === null) return 0;
            const sVal = String(val).trim().toLowerCase();
            if (sVal === "a" || sVal === "m" || sVal === "") return 0;
            const parsed = parseFloat(sVal);
            return isNaN(parsed) ? 0 : parsed;
        };

        const disc = parseScoreVal(scoreObj.discipline);
        
        const partBaseline = parseScoreVal(scoreObj.participation);
        let part = partBaseline;
        if (scoreObj.role === "both") {
            part = Math.min(2.0, part + 1.0);
        }

        const creaBaseline = parseScoreVal(scoreObj.creativity);
        let crea = creaBaseline;
        if (scoreObj.role === "captain" || scoreObj.role === "equipment" || scoreObj.role === "both") {
            crea = Math.min(2.0, crea + 1.0);
        }

        const penalty = parseFloat(scoreObj.redCardPenalty) || 0;

        const total = attScore + disc + part + crea - penalty;
        return {
            attendance: attScore,
            total: Math.min(20, Math.max(0, total))
        };
    }

    recalculateContinuousSumRow(studentId, rowElement) {
        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const gradeKey = `${studentId}_${activeTerm}_continuous`;
        
        if (!this.database.grades[gradeKey]) {
            this.database.grades[gradeKey] = {
                sessions: ["P","P","P","P","P","P","P"],
                discipline: 2,
                participation: "",
                creativity: "",
                greenCards: 0,
                yellowCards: 0,
                redCards: 0,
                redCardPenalty: 0
            };
        }
        
        const log = this.database.grades[gradeKey];
        
        // Grab current values from inputs
        const discVal = rowElement.querySelector(".disc-input").value;
        const partVal = rowElement.querySelector(".part-input").value;
        const creaVal = rowElement.querySelector(".crea-input").value;

        // Apply/remove absent and sick classes dynamically
        const discStr = discVal.trim().toLowerCase();
        const partStr = partVal.trim().toLowerCase();
        const creaStr = creaVal.trim().toLowerCase();

        const isAbsent = discStr === "a" || partStr === "a" || creaStr === "a";
        const isSick = discStr === "m" || partStr === "m" || creaStr === "m";

        if (isAbsent) {
            rowElement.classList.add("row-absent-dim");
        } else {
            rowElement.classList.remove("row-absent-dim");
        }

        if (isSick) {
            rowElement.classList.add("row-sick-blue");
        } else {
            rowElement.classList.remove("row-sick-blue");
        }

        // 1. Discipline parsing
        let disc;
        if (discStr === "a" || discStr === "m") {
            disc = discVal;
        } else {
            disc = parseFloat(discVal);
            if (isNaN(disc)) disc = 2.0;
            // Clamp discipline
            if (disc > 2.0) {
                disc = 2.0;
                rowElement.querySelector(".disc-input").value = "2.00";
            }
            if (disc < 0) {
                disc = 0;
                rowElement.querySelector(".disc-input").value = "0.00";
            }
        }
        log.discipline = disc;

        // 2. Participation parsing
        let part;
        if (partStr === "a" || partStr === "m") {
            part = partVal;
            log.participation = part;
        } else {
            part = parseFloat(partVal);
            if (isNaN(part)) part = 0.0;
            // Clamp participation
            if (part > 2.0) {
                part = 2.0;
                rowElement.querySelector(".part-input").value = "2.00";
            }
            if (part < 0) {
                part = 0;
                rowElement.querySelector(".part-input").value = "0.00";
            }

            // Role bonus calculation
            const oldPart = parseFloat(log.participation);
            const baselinePart = isNaN(oldPart) ? 0.0 : oldPart;
            const expectedPartDisplay = (log.role === "both") ? Math.min(2.0, baselinePart + 1.0) : baselinePart;
            if (Math.abs(part - expectedPartDisplay) > 0.001) {
                if (log.role === "both") {
                    log.participation = Math.max(0.0, part - 1.0);
                } else {
                    log.participation = partVal === "" ? "" : part;
                }
            } else if (partVal === "") {
                log.participation = "";
            }
        }

        // 3. Creativity parsing
        let crea;
        if (creaStr === "a" || creaStr === "m") {
            crea = creaVal;
            log.creativity = crea;
        } else {
            crea = parseFloat(creaVal);
            if (isNaN(crea)) crea = 0.0;
            // Clamp creativity
            if (crea > 2.0) {
                crea = 2.0;
                rowElement.querySelector(".crea-input").value = "2.00";
            }
            if (crea < 0) {
                crea = 0;
                rowElement.querySelector(".crea-input").value = "0.00";
            }

            // Role bonus calculation
            const oldCrea = parseFloat(log.creativity);
            const baselineCrea = isNaN(oldCrea) ? 0.0 : oldCrea;
            const expectedCreaDisplay = (log.role === "captain" || log.role === "equipment" || log.role === "both") ? Math.min(2.0, baselineCrea + 1.0) : baselineCrea;
            if (Math.abs(crea - expectedCreaDisplay) > 0.001) {
                if (log.role === "captain" || log.role === "equipment" || log.role === "both") {
                    log.creativity = Math.max(0.0, crea - 1.0);
                } else {
                    log.creativity = creaVal === "" ? "" : crea;
                }
            } else if (creaVal === "") {
                log.creativity = "";
            }
        }

        const sumObj = this.calculateStudentContinuousSum(log);
        rowElement.querySelector(".final-grade-cell").textContent = sumObj.total;
    }

    changeStudentRole(studentId, selectNode) {
        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const gradeKey = `${studentId}_${activeTerm}_continuous`;
        
        if (!this.database.grades[gradeKey]) {
            this.database.grades[gradeKey] = {
                sessions: ["P","P","P","P","P","P","P"],
                discipline: 2,
                participation: "",
                creativity: "",
                greenCards: 0,
                yellowCards: 0,
                redCards: 0,
                redCardPenalty: 0
            };
        }
        
        const log = this.database.grades[gradeKey];
        const oldRole = log.role || "none";
        const newRole = selectNode.value || "none";
        
        if (oldRole === newRole) return;
        
        log.role = newRole;
        
        const tr = selectNode.closest("tr");
        if (tr) {
            tr.classList.remove("captain-row", "equipment-row");
            if (newRole === "captain" || newRole === "both") {
                tr.classList.add("captain-row");
            } else if (newRole === "equipment") {
                tr.classList.add("equipment-row");
            }
        }
        
        const partInput = document.getElementById(`participation_${studentId}`);
        if (partInput) {
            const baseline = (log.participation !== undefined && log.participation !== "" && !isNaN(parseFloat(log.participation))) ? parseFloat(log.participation) : 0.0;
            let displayVal = baseline;
            if (newRole === "both") {
                displayVal = Math.min(2.0, baseline + 1.0);
            }
            if (newRole === "both" || (log.participation !== "" && log.participation !== undefined)) {
                partInput.value = displayVal.toFixed(2);
            } else {
                partInput.value = "";
            }
        }
        
        const creaInput = document.getElementById(`creativity_${studentId}`);
        if (creaInput) {
            const baseline = (log.creativity !== undefined && log.creativity !== "" && !isNaN(parseFloat(log.creativity))) ? parseFloat(log.creativity) : 0.0;
            let displayVal = baseline;
            if (newRole === "captain" || newRole === "equipment" || newRole === "both") {
                displayVal = Math.min(2.0, baseline + 1.0);
            }
            if (newRole === "captain" || newRole === "equipment" || newRole === "both" || (log.creativity !== "" && log.creativity !== undefined)) {
                creaInput.value = displayVal.toFixed(2);
            } else {
                creaInput.value = "";
            }
        }
        
        if (tr) {
            this.recalculateContinuousSumRow(studentId, tr);
        }
        this.saveDatabase();
    }

    checkStudentQualification(studentId, term) {
        const results = this.calculateStudentTermAverage(studentId, term);
        const termAvg = results.termAverage;
        
        // 1. Term average >= 18.0
        if (termAvg !== null && termAvg >= 18.0) {
            return { qualified: true, reason: "term-average", value: termAvg.toFixed(2) };
        }
        
        // 2. Absolute zero absenteeism
        const caKey = `${studentId}_${term}_continuous`;
        const caObj = this.database.grades[caKey];
        if (caObj && caObj.sessions && Array.isArray(caObj.sessions)) {
            const hasAbsence = caObj.sessions.includes("A");
            const hasPresence = caObj.sessions.includes("P") || caObj.sessions.includes("✓");
            if (!hasAbsence && hasPresence) {
                return { qualified: true, reason: "perfect-attendance", value: "0" };
            }
        }
        
        // 3. Elite athletic barrier (best attempt score in assignment or exam >= 18.0)
        const student = this.database.students.find(s => s.id === studentId);
        if (student) {
            const activeClass = this.database.classes.find(c => c.id === student.classId);
            const grade = activeClass ? activeClass.grade : 1;
            const sports = this.database.termActivities[`term_${term}`];
            
            if (sports) {
                const assKey = `${studentId}_${term}_assignment`;
                const assObj = this.database.grades[assKey];
                if (assObj && assObj.attempts && Array.isArray(assObj.attempts)) {
                    const indMath = this.calculateStudentAttemptsMark(grade, sports.individual, student.gender, assObj.attempts);
                    if (indMath.score >= 18.0) {
                        return { qualified: true, reason: "elite-performance", value: indMath.score.toFixed(1) };
                    }
                }
                
                const examKey = `${studentId}_${term}_exam`;
                const examObj = this.database.grades[examKey];
                if (examObj && examObj.attempts && Array.isArray(examObj.attempts)) {
                    const indMath = this.calculateStudentAttemptsMark(grade, sports.individual, student.gender, examObj.attempts);
                    if (indMath.score >= 18.0) {
                        return { qualified: true, reason: "elite-performance", value: indMath.score.toFixed(1) };
                    }
                }
            }
        }
        
        return { qualified: false };
    }

    generateDigitalDiploma(studentId, term) {
        const activeTerm = term || parseInt(document.getElementById("term-select-grading").value) || 1;
        const student = this.database.students.find(s => s.id === studentId);
        if (!student) return;

        const activeClass = this.database.classes.find(c => c.id === student.classId);
        const className = activeClass ? activeClass.name : "";
        const academicYear = this.database.metadata.academicYear || "2026/2027";
        const schoolName = this.database.metadata.schoolName || "";

        const qualification = this.checkStudentQualification(studentId, activeTerm);
        if (!qualification.qualified) {
            this.showToast(this.currentLang === "ar" ? "التلميذ غير مؤهل للشهادة الرقمية!" : "L'élève n'est pas éligible au diplôme !");
            return;
        }

        // Create canvas
        const canvas = document.createElement("canvas");
        canvas.width = 1200;
        canvas.height = 800;
        const ctx = canvas.getContext("2d");

        // 1. Background gradient
        const bgGrad = ctx.createRadialGradient(600, 400, 50, 600, 400, 700);
        bgGrad.addColorStop(0, "#1e293b"); // Deep slate
        bgGrad.addColorStop(1, "#0f172a"); // Rich dark slate
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 1200, 800);

        // 2. Subtle abstract sports/athletics lanes overlay
        ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
        ctx.lineWidth = 2;
        for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.arc(600, 900, 500 + i * 60, Math.PI, 0);
            ctx.stroke();
        }

        // 3. Ornate gold borders
        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 4;
        ctx.strokeRect(30, 30, 1140, 740);

        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(42, 42, 1116, 716);

        // Border corners ornaments
        ctx.fillStyle = "#d4af37";
        const corners = [
            [30, 30], [1170, 30], [30, 770], [1170, 770]
        ];
        corners.forEach(([x, y]) => {
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fill();
        });

        // 4. Header: Republic and Wreath
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 16px 'Cairo', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("الجمهورية الجزائرية الديمقراطية الشعبية", 600, 75);
        ctx.fillText("وزارة التربية الوطنية", 600, 100);

        // Draw Trophy Emoji scaled
        ctx.font = "60px 'Cairo', sans-serif";
        ctx.fillText("🏆", 600, 170);

        // 5. Certificate Title
        ctx.fillStyle = "#d4af37";
        ctx.font = "bold 38px 'Cairo', sans-serif";
        ctx.fillText("شهادة شرف وتفوق رياضي", 600, 240);

        ctx.fillStyle = "#94a3b8";
        ctx.font = "20px 'Cairo', sans-serif";
        ctx.fillText("تمنح هذه الشهادة فخراً واعتزازاً للتلميذ(ة):", 600, 290);

        // Student Name in large bold
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 46px 'Cairo', sans-serif";
        ctx.fillText(`${student.lastname} ${student.firstname}`, 600, 355);

        // Underline name in gold
        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(400, 375);
        ctx.lineTo(800, 375);
        ctx.stroke();

        // 6. Achievement Details text
        let detailText = "";
        let reasonTitle = "";
        if (qualification.reason === "term-average") {
            reasonTitle = "لتحقيقه معدلاً فصلياً ممتازاً";
            detailText = `في مادة التربية البدنية والرياضية قدره ${qualification.value}/20`;
        } else if (qualification.reason === "perfect-attendance") {
            reasonTitle = "لانضباطه المثالي وحضوره الكامل";
            detailText = "بدون تسجيل أي غيابات طيلة الفصل الدراسي الحالي";
        } else if (qualification.reason === "elite-performance") {
            reasonTitle = "لتخطيه حاجز النخبة الرياضية";
            detailText = `وتسجيله علامة ممتازة في الأداء الميداني بلغت ${qualification.value}/20`;
        }

        ctx.fillStyle = "#d4af37";
        ctx.font = "bold 24px 'Cairo', sans-serif";
        ctx.fillText(reasonTitle, 600, 425);

        ctx.fillStyle = "#cbd5e1";
        ctx.font = "20px 'Cairo', sans-serif";
        ctx.fillText(detailText, 600, 465);

        ctx.font = "16px 'Cairo', sans-serif";
        ctx.fillText(`القسم: ${className} | المؤسسة: ${schoolName}`, 600, 510);
        ctx.fillText(`الفصل الدراسي: ${activeTerm} | العام الدراسي: ${academicYear}`, 600, 545);

        // 7. Stamp (Left)
        ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(250, 650, 60, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(250, 650, 52, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
        ctx.font = "bold 10px 'Cairo', sans-serif";
        ctx.fillText("الجمهورية الجزائرية", 250, 630);
        ctx.fillText("وزارة التربية الوطنية", 250, 645);
        ctx.fillText("★ Smart Sport ★", 250, 660);
        ctx.fillText("ختم المؤسسة", 250, 675);

        // 8. Teacher Signature Watermark (Right)
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.font = "bold 56px 'Outfit', sans-serif";
        ctx.fillText("Delbaz_Med", 950, 630);

        ctx.fillStyle = "#d4af37";
        ctx.font = "bold 18px 'Cairo', sans-serif";
        ctx.fillText("توقيع أستاذ المادة", 950, 640);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 18px 'Outfit', sans-serif";
        ctx.fillText("Delbaz_Med", 950, 675);

        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(880, 690);
        ctx.bezierCurveTo(920, 680, 960, 700, 1020, 680);
        ctx.stroke();

        // Convert canvas to image and show in modal
        const imgData = canvas.toDataURL("image/png");
        this.showDiplomaModal(student, activeTerm, qualification, imgData);
    }

    showDiplomaModal(student, term, qualification, imgData) {
        // Remove existing modal if any
        const existing = document.getElementById("diploma-modal-overlay");
        if (existing) existing.remove();

        const overlay = document.createElement("div");
        overlay.id = "diploma-modal-overlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.85)";
        overlay.style.backdropFilter = "blur(8px)";
        overlay.style.zIndex = "15000";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.padding = "20px";
        overlay.style.direction = "rtl";

        let shareText = `تهانينا للتلميذ(ة) المتميز(ة) ${student.lastname} ${student.firstname} لحصوله على شهادة شرف وتفوق رياضي في مادة التربية البدنية والرياضية للفصل الدراسي ${term}! 🏆`;

        overlay.innerHTML = `
            <div class="modal-content" style="background:#0b0f19; border:2px solid #d4af37; border-radius:16px; width:100%; max-width:850px; padding:20px; box-shadow:0 10px 40px rgba(0,0,0,0.8); display:flex; flex-direction:column; gap:16px; color:#ffffff; font-family:'Cairo', sans-serif;">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
                    <h3 style="margin:0; font-size:1.3rem; color:#d4af37; font-weight:800;">🏆 الشهادة الرقمية للتفوق الرياضي</h3>
                    <span id="close-diploma-modal" style="font-size:1.8rem; cursor:pointer; color:#94a3b8; transition:color 0.2s;">&times;</span>
                </div>
                <div style="display:flex; justify-content:center; align-items:center; background:#05070c; border:1px solid rgba(255,255,255,0.05); border-radius:8px; padding:10px; overflow:hidden;">
                    <img src="${imgData}" alt="Certificate" style="max-width:100%; max-height:480px; border-radius:4px; box-shadow:0 4px 20px rgba(0,0,0,0.5); object-fit:contain;">
                </div>
                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-top:8px;">
                    <button id="btn-download-diploma" class="btn" style="background:linear-gradient(135deg, #d4af37 0%, #aa841c 100%); color:#000000; font-weight:bold; padding:10px 20px; border-radius:50px; display:inline-flex; align-items:center; gap:8px; border:none; cursor:pointer;">
                        <span>📥</span> تحميل الشهادة (PNG)
                    </button>
                    <button id="btn-share-whatsapp-diploma" class="btn" style="background:linear-gradient(135deg, #25D366 0%, #128C7E 100%); color:#ffffff; font-weight:bold; padding:10px 20px; border-radius:50px; display:inline-flex; align-items:center; gap:8px; border:none; cursor:pointer;">
                        <span>💬</span> مشاركة عبر الواتساب
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // Close event
        const closeBtn = overlay.querySelector("#close-diploma-modal");
        closeBtn.addEventListener("click", () => overlay.remove());
        closeBtn.addEventListener("mouseover", () => closeBtn.style.color = "#ef4444");
        closeBtn.addEventListener("mouseout", () => closeBtn.style.color = "#94a3b8");

        // Download event
        const downloadBtn = overlay.querySelector("#btn-download-diploma");
        downloadBtn.addEventListener("click", () => {
            const link = document.createElement("a");
            link.download = `شهادة_تفوق_${student.lastname}_${student.firstname}.png`;
            link.href = imgData;
            link.click();
        });

        // WhatsApp share event
        const shareBtn = overlay.querySelector("#btn-share-whatsapp-diploma");
        shareBtn.addEventListener("click", async () => {
            // Check if Web Share API is supported and can share files
            if (navigator.canShare && navigator.share) {
                try {
                    const response = await fetch(imgData);
                    const blob = await response.blob();
                    const file = new File([blob], `شهادة_تفوق_${student.lastname}_${student.firstname}.png`, { type: "image/png" });
                    
                    await navigator.share({
                        title: "شهادة تفوق رياضي",
                        text: shareText,
                        files: [file]
                    });
                    return;
                } catch (e) {
                    console.error("Error sharing via Web Share API:", e);
                }
            }

            // Fallback for WhatsApp Web / Mobile URL
            const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + "\n\n(قم بتحميل الصورة وإرفاقها مع هذه الرسالة)")}`;
            window.open(url, "_blank");
        });
    }

    applyPedagogicalCard(studentId, cardType, buttonNode) {
        // Double-click/double-tap detection to revert/undo
        const now = Date.now();
        const lastClick = parseInt(buttonNode.dataset.lastClick || "0");
        buttonNode.dataset.lastClick = now;

        if (now - lastClick < 350) {
            buttonNode.dataset.lastClick = "0";
            this.revertPedagogicalCard(studentId, cardType, buttonNode);
            return;
        }

        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const gradeKey = `${studentId}_${activeTerm}_continuous`;
        
        // Ensure grade object exists
        if (!this.database.grades[gradeKey]) {
            this.database.grades[gradeKey] = {
                sessions: ["P","P","P","P","P","P","P"],
                discipline: 2,
                participation: "",
                creativity: 2,
                greenCards: 0,
                yellowCards: 0,
                redCards: 0,
                redCardPenalty: 0
            };
        }
        
        const log = this.database.grades[gradeKey];
        const tr = buttonNode.closest("tr");

        if (cardType === "green") {
            // Check green cards limit of 8 presses
            if ((log.greenCards || 0) >= 8) {
                this.showToast(this.currentLang === "ar" ? "تم الوصول للحد الأقصى للبطاقات الخضراء (8 ضغطات)!" : "Limite de cartes vertes atteinte (8 clics) !");
                return;
            }
            // Green Card: target participation
            const input = document.getElementById(`participation_${studentId}`);
            if (input) {
                let val = parseFloat(input.value);
                if (isNaN(val)) val = 0.0;
                val += 0.25;
                if (val > 2.0) val = 2.0;
                if (val < 0.0) val = 0.0;
                input.value = val.toFixed(2);
                log.participation = val;
                
                // Flash green
                input.classList.remove("flash-green");
                void input.offsetWidth; // trigger reflow
                input.classList.add("flash-green");
                setTimeout(() => input.classList.remove("flash-green"), 1000);
            }
            log.greenCards = (log.greenCards || 0) + 1;
            
            // Update badge
            const badge = document.getElementById(`green_badge_${studentId}`);
            if (badge) badge.textContent = log.greenCards;
        } 
        else if (cardType === "yellow") {
            // Check yellow cards limit of 8 presses
            if ((log.yellowCards || 0) >= 8) {
                this.showToast(this.currentLang === "ar" ? "تم الوصول للحد الأقصى للبطاقات الصفراء (8 ضغطات)!" : "Limite de cartes jaunes atteinte (8 clics) !");
                return;
            }
            // Yellow Card: target discipline
            const input = document.getElementById(`discipline_${studentId}`);
            if (input) {
                let val = parseFloat(input.value);
                if (isNaN(val)) val = 2.0;
                val -= 0.25;
                if (val > 2.0) val = 2.0;
                if (val < 0.0) val = 0.0;
                input.value = val.toFixed(2);
                log.discipline = val;
                
                // Flash yellow
                input.classList.remove("flash-yellow");
                void input.offsetWidth; // trigger reflow
                input.classList.add("flash-yellow");
                setTimeout(() => input.classList.remove("flash-yellow"), 1000);
            }
            log.yellowCards = (log.yellowCards || 0) + 1;

            // Update badge
            const badge = document.getElementById(`yellow_badge_${studentId}`);
            if (badge) badge.textContent = log.yellowCards;
        } 
        else if (cardType === "red") {
            // Red Card: Expulsion & Penalty
            // 1. Switch first non-Absent session status to Absent
            let sessionIndex = log.sessions.findIndex(s => s !== "A");
            if (sessionIndex === -1) sessionIndex = 0; // fallback to 0 if all are absent
            
            log.sessions[sessionIndex] = "A";
            
            // Update attendance DOM label
            const sessionNode = document.getElementById(`lbl_${studentId}_${sessionIndex}`);
            if (sessionNode) {
                sessionNode.className = "session-lbl session-lbl-absent active";
                sessionNode.textContent = "A";
            }
            
            // 2. Add heavy penalty of minus two full points (-2.00 pts)
            log.redCardPenalty = (log.redCardPenalty || 0) + 2.00;
            log.redCards = (log.redCards || 0) + 1;
            
            // Apply permanent striking crimson row background tint
            if (tr) {
                tr.classList.add("row-excluded-red");
            }

            // Update badge
            const badge = document.getElementById(`red_badge_${studentId}`);
            if (badge) badge.textContent = log.redCards;
        }

        // Recalculate dynamic row total instantly (0ms latency)
        if (tr) {
            this.recalculateContinuousSumRow(studentId, tr);
        }
        
        // Save to LocalStorage permanently
        this.saveDatabase();
    }

    revertPedagogicalCard(studentId, cardType, buttonNode) {
        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const gradeKey = `${studentId}_${activeTerm}_continuous`;
        
        if (!this.database.grades[gradeKey]) return;
        
        const log = this.database.grades[gradeKey];
        const tr = buttonNode.closest("tr");

        if (cardType === "green") {
            if (!log.greenCards || log.greenCards <= 0) return;
            
            const input = document.getElementById(`participation_${studentId}`);
            if (input) {
                let val = parseFloat(input.value);
                if (isNaN(val)) val = 0.0;
                val -= 0.25;
                if (val < 0.0) val = 0.0;
                input.value = val === 0 ? "" : val.toFixed(2);
                log.participation = input.value === "" ? "" : val;
                
                // Flash soft amber
                input.classList.remove("flash-yellow");
                void input.offsetWidth;
                input.classList.add("flash-yellow");
                setTimeout(() => input.classList.remove("flash-yellow"), 1000);
            }
            log.greenCards--;
            
            const badge = document.getElementById(`green_badge_${studentId}`);
            if (badge) badge.textContent = log.greenCards;
            
            this.showToast(this.currentLang === "ar" ? "تم التراجع عن البطاقة الخضراء" : "Carte verte annulée");
        }
        else if (cardType === "yellow") {
            if (!log.yellowCards || log.yellowCards <= 0) return;
            
            const input = document.getElementById(`discipline_${studentId}`);
            if (input) {
                let val = parseFloat(input.value);
                if (isNaN(val)) val = 2.0;
                val += 0.25;
                if (val > 2.0) val = 2.0;
                input.value = val.toFixed(2);
                log.discipline = val;
                
                // Flash green
                input.classList.remove("flash-green");
                void input.offsetWidth;
                input.classList.add("flash-green");
                setTimeout(() => input.classList.remove("flash-green"), 1000);
            }
            log.yellowCards--;
            
            const badge = document.getElementById(`yellow_badge_${studentId}`);
            if (badge) badge.textContent = log.yellowCards;
            
            this.showToast(this.currentLang === "ar" ? "تم التراجع عن البطاقة الصفراء" : "Carte jaune annulée");
        }
        else if (cardType === "red") {
            if (!log.redCards || log.redCards <= 0) return;
            
            // Revert red card:
            // Find the last session that is "A" and change it back to "P"
            let sessionIndex = -1;
            for (let i = 6; i >= 0; i--) {
                if (log.sessions[i] === "A") {
                    sessionIndex = i;
                    break;
                }
            }
            if (sessionIndex !== -1) {
                log.sessions[sessionIndex] = "P";
                const sessionNode = document.getElementById(`lbl_${studentId}_${sessionIndex}`);
                if (sessionNode) {
                    sessionNode.className = "session-lbl session-lbl-present";
                    sessionNode.textContent = "✓";
                }
            }
            
            // Revert penalty and count
            log.redCardPenalty = Math.max(0, (log.redCardPenalty || 0) - 2.00);
            log.redCards--;
            
            // Remove row class if no red cards left
            if (log.redCards === 0 && tr) {
                tr.classList.remove("row-excluded-red");
            }
            
            const badge = document.getElementById(`red_badge_${studentId}`);
            if (badge) badge.textContent = log.redCards;
            
            this.showToast(this.currentLang === "ar" ? "تم التراجع عن البطاقة الحمراء" : "Carte rouge annulée");
        }

        // Recalculate dynamic row total instantly
        if (tr) {
            this.recalculateContinuousSumRow(studentId, tr);
        }
        
        // Save to LocalStorage permanently
        this.saveDatabase();
    }

    /**
     * Renders Fard (Assignment) / Ikhtibar (Exam) sheets
     */
    renderAssignmentExamSheet(tableNode, students, term, type, sports, activeClass) {
        const indSportName = this.getSportName(sports.individual, "individual");
        const colSportName = this.getSportName(sports.collective, "collective");

        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-lastname">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-firstname">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th colspan="3" class="text-center">النشاط الفردي: ${indSportName} (3 محاولات)</th>
                    <th style="width: 90px;" class="text-center">ن. الفردي</th>
                    <th style="width: 160px;" class="text-center">ن. الجماعي: ${colSportName}</th>
                    <th style="width: 100px;" class="text-center">المعدل النهائي</th>
                </tr>
                <tr class="subheader-attempts">
                    <th colspan="4"></th>
                    <th style="width: 70px;" class="text-center">1</th>
                    <th style="width: 70px;" class="text-center">2</th>
                    <th style="width: 70px;" class="text-center">3</th>
                    <th colspan="3"></th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const isExempted = student.exemptions && student.exemptions[term - 1];
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            // Load saved marks
            const gradeKey = `${student.id}_${term}_${type}`;
            const scoreObj = this.database.grades[gradeKey] || { attempts: ["", "", ""], collective: "" };

            if (isExempted) {
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted col-lastname">${student.lastname}</td>
                        <td class="text-muted col-firstname">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td colspan="5" class="text-center"><span class="badge badge-danger">${this.getTranslation("exempted-abrv")}</span></td>
                        <td><strong class="highlight-text">${this.getTranslation("exempted-abrv")}</strong></td>
                    </tr>
                `;
            } else {
                const att1 = scoreObj.attempts[0] !== undefined ? scoreObj.attempts[0] : "";
                const att2 = scoreObj.attempts[1] !== undefined ? scoreObj.attempts[1] : "";
                const att3 = scoreObj.attempts[2] !== undefined ? scoreObj.attempts[2] : "";
                const colScore = scoreObj.collective !== undefined ? scoreObj.collective : "";
 
                // Calculate best attempt and convert to score out of 20
                const gradingMath = this.calculateStudentAttemptsMark(activeClass.grade || 1, sports.individual, student.gender, [att1, att2, att3]);
                const indPoints = gradingMath.score > 0 ? gradingMath.score.toFixed(1) : "--";
 
                const hasInd = gradingMath.score > 0;
                const hasCol = colScore !== "" && !isNaN(parseFloat(colScore));
                let finalSum = "--";
                if (hasInd && hasCol) {
                    finalSum = ((gradingMath.score + parseFloat(colScore)) / 2).toFixed(1);
                } else if (hasInd) {
                    finalSum = gradingMath.score.toFixed(1);
                } else if (hasCol) {
                    finalSum = parseFloat(colScore).toFixed(1);
                }
 
                const rubricOptions = COLLECTIVE_RUBRIC.map(r => {
                    const selected = colScore !== "" && parseFloat(colScore) === r.score ? "selected" : "";
                    return `<option value="${r.score}" ${selected} title="${r.appreciation} - ${r.indicator}">${r.code} (${r.score})</option>`;
                }).join("");
 
                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="col-lastname"><strong>${student.lastname}</strong></td>
                        <td class="col-firstname"><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td>
                            <input type="text" inputmode="decimal" lang="fr" class="grading-input attempt-input att1" id="m1_${student.id}" 
                                   value="${att1}" data-student="${student.id}" placeholder="0.0" style="width: 70px;">
                        </td>
                        <td>
                            <input type="text" inputmode="decimal" lang="fr" class="grading-input attempt-input att2" id="m2_${student.id}" 
                                   value="${att2}" data-student="${student.id}" placeholder="0.0" style="width: 70px;">
                        </td>
                        <td>
                            <input type="text" inputmode="decimal" lang="fr" class="grading-input attempt-input att3" id="m3_${student.id}" 
                                   value="${att3}" data-student="${student.id}" placeholder="0.0" style="width: 70px;">
                        </td>
                        <td class="text-center font-bold text-blue ind-points-cell" id="ind_score_${student.id}">${indPoints}</td>
                        <td>
                            <div class="collective-grade-container">
                                <input type="text" inputmode="decimal" lang="fr" class="grading-input collective-input" 
                                       value="${colScore}" data-student="${student.id}" placeholder="0" style="width: 60px;">
                                <select class="rubric-select" data-student="${student.id}" style="width: 60px; font-family: inherit; font-size: 0.75rem; padding: 2px;" title="اختر رمز التقييم للرياضة الجماعية">
                                    <option value="">-- بدون تقييم --</option>
                                    ${rubricOptions}
                                </select>
                            </div>
                        </td>
                        <td class="final-grade-cell" id="final_term_avg_${student.id}"><strong>${finalSum}</strong></td>
                    </tr>
                `;
            }
        });
 
        headers += `</tbody>`;
        tableNode.innerHTML = headers;
 
        // Listeners for instant calculations
        tableNode.querySelectorAll(".attempt-input, .collective-input").forEach(input => {
            const handleInput = (e) => {
                const tr = e.target.closest("tr");
                const stdId = e.target.getAttribute("data-student");
                if (e.target.classList.contains("collective-input")) {
                    const select = tr.querySelector(".rubric-select");
                    if (select) {
                        const val = e.target.value;
                        const optionExists = Array.from(select.options).some(opt => opt.value === val);
                        if (optionExists) {
                            select.value = val;
                        } else {
                            select.value = "";
                        }
                    }
                }
                this.recalculateAttemptExamRow(stdId, tr, sports.individual);
                this.updateStopwatchStudents();
            };
            input.addEventListener("input", handleInput);
            input.addEventListener("change", handleInput);
        });
 
        tableNode.querySelectorAll(".rubric-select").forEach(select => {
            select.addEventListener("change", (e) => {
                const tr = e.target.closest("tr");
                const stdId = e.target.getAttribute("data-student");
                const colInput = tr.querySelector(".collective-input");
                if (colInput) {
                    colInput.value = e.target.value;
                }
                this.recalculateAttemptExamRow(stdId, tr, sports.individual);
                this.updateStopwatchStudents();
            });
        });
    }

    /**
     * Determines best attempt and scales to /20
     */
    calculateStudentAttemptsMark(grade, sportId, gender, attemptsArray) {
        const floatAttempts = attemptsArray.map(a => parseFloat(a)).filter(a => !isNaN(a) && a > 0);
        if (floatAttempts.length === 0) return { best: 0, score: 0 };

        let scale = null;
        if (this.database.scales[sportId]) {
            const sportScales = this.database.scales[sportId];
            if (sportScales[grade] && sportScales[grade][gender]) {
                scale = sportScales[grade][gender];
            } else if (sportScales["1"] && sportScales["1"][gender]) {
                scale = sportScales["1"][gender];
            } else if (sportScales[gender]) {
                scale = sportScales[gender];
            }
        }
        if (!scale) return { best: 0, score: 0 };

        // Best attempt depends on lowerIsBetter (running vs jumping/throwing)
        let best = floatAttempts[0];
        if (scale.lowerIsBetter) {
            best = Math.min(...floatAttempts);
        } else {
            best = Math.max(...floatAttempts);
        }

        // Interpolate out of 20 (limits: best gives 20/20, worst gives 5/20)
        let score = 5;
        const bLimit = scale.best;
        const wLimit = scale.worst;

        if (scale.lowerIsBetter) {
            if (best <= bLimit) score = 20;
            else if (best >= wLimit) score = 5;
            else {
                score = 20 - ((best - bLimit) / (wLimit - bLimit)) * 15;
            }
        } else {
            if (best >= bLimit) score = 20;
            else if (best <= wLimit) score = 5;
            else {
                score = 5 + ((best - wLimit) / (bLimit - wLimit)) * 15;
            }
        }

        return {
            best: best,
            score: Math.min(20, Math.max(0, score))
        };
    }

    recalculateAttemptExamRow(studentId, rowElement, sportId) {
        const student = this.database.students.find(s => s.id === studentId);
        if (!student) return;
        
        const activeTerm = parseInt(document.getElementById("term-select-grading").value) || 1;
        const type = this.activeGradingType; // "assignment" or "exam"
        const gradeKey = `${studentId}_${activeTerm}_${type}`;
        
        const att1 = rowElement.querySelector(".att1").value.trim();
        const att2 = rowElement.querySelector(".att2").value.trim();
        const att3 = rowElement.querySelector(".att3").value.trim();
        const colVal = rowElement.querySelector(".collective-input").value.trim();

        const activeClass = this.database.classes.find(c => c.id === student.classId);
        const grade = activeClass ? activeClass.grade : 1;

        const gradingMath = this.calculateStudentAttemptsMark(grade, sportId, student.gender, [att1, att2, att3]);
        
        // Show points out of 20
        const indPointsCell = rowElement.querySelector(".ind-points-cell");
        if (gradingMath.score > 0) {
            indPointsCell.textContent = gradingMath.score.toFixed(1);
        } else {
            indPointsCell.textContent = "--";
        }

        // Recalculate average
        const finalCell = rowElement.querySelector(".final-grade-cell");
        const hasInd = gradingMath.score > 0;
        const hasCol = colVal !== "" && !isNaN(parseFloat(colVal));
        if (hasInd && hasCol) {
            const avg = (gradingMath.score + parseFloat(colVal)) / 2;
            finalCell.innerHTML = `<strong>${avg.toFixed(1)}</strong>`;
        } else if (hasInd) {
            finalCell.innerHTML = `<strong>${gradingMath.score.toFixed(1)}</strong>`;
        } else if (hasCol) {
            finalCell.innerHTML = `<strong>${parseFloat(colVal).toFixed(1)}</strong>`;
        } else {
            finalCell.innerHTML = `<strong>--</strong>`;
        }

        // Update database in real-time
        this.database.grades[gradeKey] = {
            attempts: [
                att1 !== "" ? parseFloat(att1) : "",
                att2 !== "" ? parseFloat(att2) : "",
                att3 !== "" ? parseFloat(att3) : ""
            ],
            collective: colVal !== "" ? parseFloat(colVal) : ""
        };
        this.saveDatabase();
    }

    /**
     * Renders term grade summary sheet (with printing options)
     */
    renderTermSummarySheet(tableNode, students, term) {
        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-lastname">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-firstname">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th class="text-center">المراقبة المستمرة (/20)</th>
                    <th class="text-center">الفرض (/20)</th>
                    <th class="text-center">الاختبار (/20)</th>
                    <th class="text-center" style="width: 110px;">معدل الفصل ${term}</th>
                    <th class="text-center">التقدير</th>
                    <th class="text-center" style="min-width: 150px;">الإرشاد</th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const isExempted = student.exemptions && student.exemptions[term - 1];
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            if (isExempted) {
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted col-lastname">${student.lastname}</td>
                        <td class="text-muted col-firstname">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td colspan="3" class="text-center"><span class="badge badge-danger">${this.getTranslation("exempted-abrv")}</span></td>
                        <td><strong class="highlight-text">${this.getTranslation("exempted-abrv")}</strong></td>
                        <td class="text-center">--</td>
                        <td class="text-center">--</td>
                    </tr>
                `;
            } else {
                const results = this.calculateStudentTermAverage(student.id, term);
                
                const caText = results.ca !== null ? results.ca.toFixed(1) : "--";
                const assText = results.assignment !== null ? results.assignment.toFixed(1) : "--";
                const examText = results.exam !== null ? results.exam.toFixed(1) : "--";
                const termAvgText = results.termAverage !== null ? results.termAverage.toFixed(2) : "--";

                let appreciation = "";
                let appreciationClass = "";
                let guideline = "";
                if (results.termAverage !== null) {
                    if (results.termAverage < 10) {
                        appreciation = "دون المتوسط";
                        appreciationClass = "badge-danger";
                        guideline = "عليك بمضاعفة الجهود";
                    } else if (results.termAverage < 13) {
                        appreciation = "عمل حسن";
                        appreciationClass = "badge-amber";
                        guideline = student.gender === "F" ? "حاولي أكثر" : "حاول أكثر";
                    } else if (results.termAverage <= 14.5) {
                        appreciation = "جيد";
                        appreciationClass = "badge-blue";
                        guideline = "واصل";
                    } else if (results.termAverage < 17) {
                        appreciation = "جيد جدا";
                        appreciationClass = "badge-emerald";
                        guideline = "واصل";
                    } else {
                        appreciation = "ممتاز";
                        appreciationClass = "badge-pink";
                        guideline = "مميز واصل";
                    }
                }

                const qualification = this.checkStudentQualification(student.id, term);
                let awardButton = "";
                if (qualification.qualified) {
                    let tooltipText = "";
                    if (qualification.reason === "term-average") tooltipText = `معدل ممتاز: ${qualification.value}/20`;
                    else if (qualification.reason === "perfect-attendance") tooltipText = "حضور كامل وانضباط مثالي (خالٍ من الغيابات)";
                    else if (qualification.reason === "elite-performance") tooltipText = `إنجاز رياضي خارق: ${qualification.value}/20`;
                    
                    awardButton = `
                        <button class="award-diploma-btn no-print" onclick="app.generateDigitalDiploma('${student.id}', ${term})" title="${tooltipText}" style="background: none; border: none; font-size: 1.15rem; cursor: pointer; padding: 0 4px; vertical-align: middle; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
                            🏆
                        </button>
                    `;
                }

                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="col-lastname"><strong>${student.lastname}</strong> ${awardButton}</td>
                        <td class="col-firstname"><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td class="text-center">${caText}</td>
                        <td class="text-center">${assText}</td>
                        <td class="text-center">${examText}</td>
                        <td class="final-grade-cell text-center" style="font-size:1.1rem;color:var(--color-primary);"><strong>${termAvgText}</strong></td>
                        <td class="text-center"><span class="badge ${appreciationClass}">${appreciation || "--"}</span></td>
                        <td class="text-center" style="font-size: 0.85rem; color: #555;">${guideline || "--"}</td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;
    }

    renderAnnualTermSheet(tableNode, students) {
        let headers = `
            <thead>
                <tr>
                    <th style="width: 50px;">#</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-lastname">${this.getTranslation("th-student-lastname")}</th>
                    <th style="white-space: nowrap; padding: 0 10px;" class="col-hdr-firstname">${this.getTranslation("th-student-firstname")}</th>
                    <th>${this.getTranslation("th-gender")}</th>
                    <th class="text-center">معدل الفصل الأول</th>
                    <th class="text-center">معدل الفصل الثاني</th>
                    <th class="text-center">معدل الفصل الثالث</th>
                    <th class="text-center" style="width: 130px;">المعدل السنوي</th>
                    <th class="text-center">التقدير</th>
                </tr>
            </thead>
            <tbody>
        `;

        students.forEach((student, index) => {
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            const isExemptedAll = student.exemptions && student.exemptions[0] && student.exemptions[1] && student.exemptions[2];

            if (isExemptedAll) {
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted col-lastname">${student.lastname}</td>
                        <td class="text-muted col-firstname">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td class="text-center"><span class="badge badge-danger">معفى</span></td>
                        <td class="text-center"><span class="badge badge-danger">معفى</span></td>
                        <td class="text-center"><span class="badge badge-danger">معفى</span></td>
                        <td class="text-center"><strong class="highlight-text">إعفاء كلي</strong></td>
                        <td class="text-center">--</td>
                    </tr>
                `;
            } else {
                const term1 = this.calculateStudentTermAverage(student.id, 1);
                const term2 = this.calculateStudentTermAverage(student.id, 2);
                const term3 = this.calculateStudentTermAverage(student.id, 3);
                
                const t1Avg = term1.termAverage !== null ? term1.termAverage : null;
                const t2Avg = term2.termAverage !== null ? term2.termAverage : null;
                const t3Avg = term3.termAverage !== null ? term3.termAverage : null;

                const validTerms = [t1Avg, t2Avg, t3Avg].filter(a => a !== null);
                let annualAvg = null;
                if (validTerms.length > 0) {
                    annualAvg = validTerms.reduce((sum, val) => sum + val, 0) / validTerms.length;
                }

                const formatAvg = (avg) => avg !== null ? avg.toFixed(2) : '<span class="badge badge-danger">معفى</span>';
                const annualAvgText = annualAvg !== null ? annualAvg.toFixed(2) : "--";

                let appreciation = "";
                let appreciationClass = "";
                if (annualAvg !== null) {
                    if (annualAvg < 10) {
                        appreciation = "دون المتوسط";
                        appreciationClass = "badge-danger";
                    } else if (annualAvg < 13) {
                        appreciation = "عمل حسن";
                        appreciationClass = "badge-amber";
                    } else if (annualAvg < 14.5) {
                        appreciation = "جيد";
                        appreciationClass = "badge-blue";
                    } else if (annualAvg < 17) {
                        appreciation = "جيد جدا";
                        appreciationClass = "badge-emerald";
                    } else {
                        appreciation = "ممتاز";
                        appreciationClass = "badge-pink";
                    }
                }

                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="col-lastname"><strong>${student.lastname}</strong></td>
                        <td class="col-firstname"><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td class="text-center">${formatAvg(t1Avg)}</td>
                        <td class="text-center">${formatAvg(t2Avg)}</td>
                        <td class="text-center">${formatAvg(t3Avg)}</td>
                        <td class="final-grade-cell text-center" style="font-size:1.1rem;color:var(--color-primary);"><strong>${annualAvgText}</strong></td>
                        <td class="text-center"><span class="badge ${appreciationClass}">${appreciation || "--"}</span></td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;
    }

    /**
     * Compute term average: (CA + Assignment + Exam * 2) / 4
     */
    calculateStudentTermAverage(studentId, term) {
        const student = this.database.students.find(s => s.id === studentId);
        if (student && student.exemptions && student.exemptions[term - 1]) {
            return { ca: null, assignment: null, exam: null, termAverage: null };
        }

        const activeClass = student ? this.database.classes.find(c => c.id === student.classId) : null;
        const grade = activeClass ? activeClass.grade : 1;

        // 1. Continuous
        const caKey = `${studentId}_${term}_continuous`;
        const caObj = this.database.grades[caKey];
        let caScore = null;
        if (caObj) {
            caScore = this.calculateStudentContinuousSum(caObj).total;
        }

        // 2. Assignment
        const assKey = `${studentId}_${term}_assignment`;
        const assObj = this.database.grades[assKey];
        let assScore = null;
        if (assObj) {
            const sports = this.database.termActivities ? this.database.termActivities[`term_${term}`] : null;
            const indSportId = sports ? sports.individual : null;
            const attempts = assObj.attempts || ["", "", ""];
            const indMath = indSportId ? this.calculateStudentAttemptsMark(grade, indSportId, student.gender, attempts) : { score: 0 };
            const hasInd = indMath.score > 0;
            const hasCol = assObj.collective !== undefined && assObj.collective !== "" && !isNaN(parseFloat(assObj.collective));
            if (hasInd && hasCol) {
                assScore = (indMath.score + parseFloat(assObj.collective)) / 2;
            } else if (hasInd) {
                assScore = indMath.score;
            } else if (hasCol) {
                assScore = parseFloat(assObj.collective);
            }
        }
 
        // 3. Exam
        const examKey = `${studentId}_${term}_exam`;
        const examObj = this.database.grades[examKey];
        let examScore = null;
        if (examObj) {
            const sports = this.database.termActivities ? this.database.termActivities[`term_${term}`] : null;
            const indSportId = sports ? sports.individual : null;
            const attempts = examObj.attempts || ["", "", ""];
            const indMath = indSportId ? this.calculateStudentAttemptsMark(grade, indSportId, student.gender, attempts) : { score: 0 };
            const hasInd = indMath.score > 0;
            const hasCol = examObj.collective !== undefined && examObj.collective !== "" && !isNaN(parseFloat(examObj.collective));
            if (hasInd && hasCol) {
                examScore = (indMath.score + parseFloat(examObj.collective)) / 2;
            } else if (hasInd) {
                examScore = indMath.score;
            } else if (hasCol) {
                examScore = parseFloat(examObj.collective);
            }
        }

        // Average
        let termAverage = null;
        if (caScore !== null && assScore !== null && examScore !== null) {
            termAverage = (caScore + assScore + (examScore * 2)) / 4;
        }

        return {
            ca: caScore,
            assignment: assScore,
            exam: examScore,
            termAverage: termAverage
        };
    }

    /**
     * Compute Annual average considering per-term exemptions
     */
    calculateStudentAnnualAverage(studentId) {
        const student = this.database.students.find(s => s.id === studentId);
        if (!student) return { value: null, label: "--" };

        const exemptions = student.exemptions || [false, false, false];
        
        // Count active terms
        const activeTerms = [];
        for (let term = 1; term <= 3; term++) {
            if (!exemptions[term - 1]) {
                const termResults = this.calculateStudentTermAverage(studentId, term);
                if (termResults.termAverage !== null) {
                    activeTerms.push(termResults.termAverage);
                }
            }
        }

        if (activeTerms.length === 0) {
            return { value: null, label: this.getTranslation("exempted-abrv") }; // "معفى"
        }

        // Annual average is sum of active terms divided by count
        const sum = activeTerms.reduce((a, b) => a + b, 0);
        const avg = sum / activeTerms.length;

        return {
            value: parseFloat(avg.toFixed(2)),
            label: avg.toFixed(1)
        };
    }

    getDailyPedagogicalGuidance() {
        const sportsQuotes = [
            "\u0627\u0644\u0631\u064a\u0627\u0636\u0629\u0020\u0644\u064a\u0633\u062a\u0020\u0644\u062f\u0645\u062c\u0020\u0627\u0644\u0623\u062c\u0633\u0627\u0645\u0020\u0628\u0644\u0020\u0644\u0628\u0646\u0627\u0621\u0020\u0627\u0644\u0639\u0642\u0648\u0644\u0020\u0648\u062a\u0637\u0648\u064a\u0631\u0020\u0627\u0644\u0646\u0641\u0648\u0633\u002e",
            "\u0627\u0644\u0646\u062c\u0627\u062d\u0020\u0641\u064a\u0020\u0627\u0644\u0631\u064a\u0627\u0636\u0629\u0020\u0648\u0641\u064a\u0020\u0627\u0644\u062f\u0631\u0627\u0633\u0629\u0020\u0644\u0627\u0020\u064a\u0623\u062a\u064a\u0020\u0628\u0627\u0644\u0645\u0635\u0627\u062f\u0641\u0629\u060c\u0020\u0628\u0644\u0020\u0628\u0627\u0644\u0627\u0646\u0636\u0628\u0627\u0637\u0020\u0648\u0627\u0644\u0627\u0633\u062a\u0645\u0631\u0627\u0631\u064a\u0629\u002e",
            "\u0627\u0644\u0639\u0632\u064a\u0645\u0629\u0020\u0627\u0644\u0642\u0648\u064a\u0629\u0020\u062a\u062a\u0634\u0643\u0644\u0020\u0641\u064a\u0020\u0627\u0644\u0645\u0644\u0627\u0639\u0628\u0020\u0648\u062a\u0646\u0639\u0643\u0633\u0020\u0646\u062a\u0627\u0626\u062c\u0647\u0627\u0020\u0641\u064a\u0020\u0627\u0644\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a\u002e",
            "\u0627\u0644\u0631\u064a\u0627\u0636\u0629\u0020\u062a\u0639\u0644\u0645\u0643\u0020\u0643\u064a\u0641\u0020\u062a\u0642\u0641\u0020\u0020\u0648\u062a\u0633\u062a\u0645\u0631\u0020\u0628\u0639\u062f\u0020\u0643\u0644\u0020\u0639\u062b\u0631\u0629\u060c\u0020\u0648\u0647\u064a\u0020\u0633\u0631\u0020\u0627\u0644\u0646\u062c\u0627\u062d\u0020\u0641\u064a\u0020\u0627\u0644\u062d\u064a\u0627\u0629\u002e",
            "\u0627\u0644\u0642\u062f\u0631\u0629\u0020\u0627\u0644\u0628\u062f\u0646\u064a\u0629\u0020\u062a\u0651\u0645\u0646\u062d\u0643\u0020\u0627\u0644\u0628\u062f\u0627\u064a\u0629\u060c\u0020\u0020\u0648\u0644\u0643\u0646\u0020\u0627\u0644\u0627\u0646\u0636\u0628\u0627\u0637\u0020\u0627\u0644\u0630\u0647\u0646\u064a\u0020\u0647\u0648\u0020\u0645\u0627\u0020\u064a\u0648\u0635\u0644\u0643\u0020\u0625\u0644\u0649\u0020\u062e\u0637\u0020\u0627\u0644\u0646\u0647\u0627\u064a\u0629\u002e",
            "\u0627\u0644\u0641\u0648\u0632\u0020\u0644\u0627\u0020\u064a\u0639\u0646\u064a\u0020\u062f\u0627\u0626\u0645\u0627\u064b\u0020\u0623\u0646\u0020\u062a\u0633\u0643\u0648\u0646\u0020\u0627\u0644\u0623\u0648\u0644\u060c\u0020\u0628\u0644\u0020\u0623\u0646\u0020\u062a\u0643\u0648\u0646\u0020\u0623\u0641\u0636\u0644\u0020\u0645\u0645\u0627\u0020\u0643\u0646\u062a\u0020\u0639\u0644\u064a\u0647\u0020\u0628\u0627\u0644\u0623\u0645\u0633\u002e",
            "\u0627\u0644\u0645\u0648\u0647\u0628\u0629\u0020\u062a\u0648\u0641\u0631\u0020\u0644\u0633\u0643\u0020\u0627\u0644\u0641\u0631\u0635\u0629\u060c\u0020\u0644\u0643\u0646\u0020\u0627\u0644\u0639\u0645\u0644\u0020\u0627\u0644\u062c\u0645\u0627\u0639\u064a\u0020\u0648\u0627\u0644\u0631\u0648\u062d\u0020\u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629\u0020\u064a\u0635\u0646\u0639\u0627\u0646\u0020\u0627\u0644\u0641\u0627\u0631\u0642\u002e",
            "\u0627\u0644\u062d\u0631\u0643\u0629\u0020\u0647\u064a\u0020\u0627\u0644\u0646\u0628\u0636\u0602\u0020\u064a\u063a\u0630\u064a\u0020\u0627\u0644\u0639\u0642\u0644\u0020\u0628\u0627\u0644\u0646\u0634\u0627\u0637\u0020\u0648\u0627\u0644\u062a\u0631\u0643\u064a\u0632\u002e",
            "\u0645\u0646\u0020\u0623\u062a\u0642\u0646\u0020\u0627\u0644\u0627\u0636\u0628\u0627\u0637\u0020\u0641\u064a\u0020\u0633\u0627\u062d\u0629\u0020\u0627\u0644\u0631\u064a\u0627\u0636\u0629\u060c\u0020\u0633\u0647\u0644\u0020\u0639\u0644\u064a\u0647\u0020\u062a\u0646\u0638\u064a\u0645\u0020\u0020\u0648\u0642\u062a\u0647\u0020\u0648\u0627\u0644\u0646\u062c\u0627\u062d\u0020\u0641\u064a\u0020\u062f\u0631\u0627\u0633\u062a\u0647\u002e",
            "\u0627\u0644\u0631\u064a\u0627\u0636\u0629\u0020\u0647\u064a\u0020\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u0020\u0641\u064a\u0020\u0627\u0644\u0635\u062d\u0629\u060c\u0020\u0648\u0627\u0644\u0639\u0642\u0644\u0020\u0627\u0644\u0646\u0634\u064a\u0637\u0020\u0647\u0648\u0020\u0627\u0644\u0633\u0644\u0627\u062d\u0020\u0627\u0644\u0623\u0642\u0648\u0649\u0020\u0644\u0645\u0648\u0627\u062c\u0647\u0629\u0020\u0627\u0644\u062a\u062d\u062f\u064a\u0627\u062a\u002e",
            "\u0628\u0646\u0627\u0621\u0020\u0627\u0644\u0623\u062c\u0633\u0627\u0645\u0020\u0627\u0644\u0642\u0648\u064a\u0629\u0020\u0647\u0648\u0020\u0627\u0644\u062e\u0637\u0648\u0629\u0020\u0627\u0644\u0623\u0648\u0644\u0649\u0020\u0646\u062d\u0648\u0020\u0628\u0646\u0627\u0621\u0020\u0627\u0644\u0623\u0637\u0648\u0627\u0646\u0020\u0627\u0644\u0645\u0632\u062f\u0647\u0631\u0629\u002e",
            "\u0627\u0644\u0625\u0631\u0627\u062f\u0629\u0020\u0647\u064a\u0020\u0627\u0644\u0639\u0636\u0644\u0629\u0020\u0627\u0644\u0623\u0647\u0645\u0020\u0627\u0644\u062a\u064a\u0620\u0646\u0637\u0648\u0631\u0647\u0627\u0020\u0645\u0646\u0620\u062e\u0644\u0627\u0644\u0020\u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0629\u0020\u0627\u0631\u064a\u0627\u0636\u064a\u0629\u0020\u064a\u0648\u0645\u064a\u0629\u002e",
            "\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u0020\u0627\u0644\u0628\u062f\u0646\u064a\u0629\u0020\u0644\u0627\u0020\u062a\u0635\u0646\u0639\u0020\u0623\u0628\u0637\u0627\u0644\u0627\u064b\u0020\u0641\u064a\u0020\u0627\u0644\u0645\u0644\u0627\u0639\u0628\u0020\u0641\u0642\u0637\u060c\u0020\u0628\u0644\u0020\u062a\u0635\u0646\u0639\u0020\u0642\u0627\u062f\u0629\u0020\u0641\u064a\u0020\u0627\u0644\u0645\u062c\u062a\u0645\u0639\u002e",
            "\u0627\u0644\u062c\u0647\u062f\u0020\u0627\u0644\u0645\u0628\u0630\u0648\u0644\u0020\u0627\u064a\u0644\u0648\u0645\u0020\u0641\u064a\u0020\u0627\u0644\u0645\u064a\u062f\u0627\u0646\u0020\u064a\u0647\u0648\u0020\u063b\u0627\u0642\u0629\u0020\u0625\u064a\u062c\u0627\u0628\u064a\u0629\u0020\u062a\u062a\u0631\u062c\u0645\u0020\u0625\u0644\u0649\u0020\u062a\u0641\u0648\u0642\u0020\u063a\u062f\u0627\u064b\u0020\u0641\u064a\u0020\u0627\u0644\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a\u002e",
            "\u0627\u0644\u0635\u062d\u0629\u0020\u0648\u0627\u0644\u0646\u0634\u0627\u0637\u0020\u0647\u0645\u0627\u0020\u0627\u0644\u062a\u0627\u062c\u0020\u0627\u0644\u0630\u064a\u0602\u0020\u064a\u0632\u064a\u0646\u0020\u0631\u0623\u0633\u0020\u0627\u0644\u062a\u0644\u0645\u064a\u0630\u0020\u0627\u0644\u0645\u062c\u062a\u0645\u0647\u062f\u002e"
        ];
        const today = new Date();
        const quoteIndex = today.getDate() % sportsQuotes.length;
        const selectedQuote = sportsQuotes[quoteIndex];
        const fixedText = "\u062a\u0633\u0627\u0647\u0645\u0020\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u0020\u0627\u0644\u0628\u062f\u0646\u064a\u0629\u0020\u0648\u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629\u0020\u0641\u064a\u0020\u0628\u0646\u0627\u0621\u0020\u0634\u062e\u0635\u064a\u0629\u0020\u0627\u0644\u062a\u0644\u0645\u064a\u0630\u060c\u0020\u062a\u0639\u0632\u064a\u0632\u0020\u0627\u0644\u0627\u0646\u0636\u0628\u0627\u0637\u0020\u0627\u0644\u0630\u0645\u0647\u0627\u0631\u0627\u062a\u0020\u0627\u0644\u062d\u0631\u0643\u064a\u0629\u0020\u0648\u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629\u0020\u064a\u0644\u0644\u0646\u062c\u0627\u062d\u0020\u0641\u064a\u0020\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a\u0020\u0627\u0644\u0631\u0633\u0645\u064a\u0629\u002e";
        return `\u00ab ${selectedQuote} \u00bb ${fixedText}`;
    }

    /**
     * Saves changes in active sheet to database
     */
    saveActiveGradingSheetData() {
        const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
        if (!activeClass) return;

        const activeTerm = parseInt(document.getElementById("term-select-grading").value);
        const type = this.activeGradingType;

        if (type === "term-summary") return; // Read only summary view

        const tbody = document.querySelector("#table-grading-sheet tbody");
        if (!tbody) return;

        const rows = tbody.querySelectorAll("tr");
        const sports = this.database.termActivities[`term_${activeTerm}`];

        rows.forEach(row => {
            const input = row.querySelector(".grading-input");
            if (!input) return; // Exempted row has no inputs, skip

            const studentId = input.getAttribute("data-student");
            const gradeKey = `${studentId}_${activeTerm}_${type}`;

                        if (type === "continuous") {
                // Read continuous inputs
                const discVal = row.querySelector(".disc-input").value.trim();
                const partVal = row.querySelector(".part-input").value.trim();
                const creaVal = row.querySelector(".crea-input").value.trim();

                const discStr = discVal.toLowerCase();
                const partStr = partVal.toLowerCase();
                const creaStr = creaVal.toLowerCase();

                let disc;
                if (discStr === "a" || discStr === "m") {
                    disc = discStr;
                } else if (discVal === "") {
                    disc = "";
                } else {
                    disc = parseFloat(discVal);
                    if (isNaN(disc)) disc = 0;
                    disc = Math.min(2.0, Math.max(0.0, disc));
                }

                let part;
                if (partStr === "a" || partStr === "m") {
                    part = partStr;
                } else if (partVal === "") {
                    part = "";
                } else {
                    part = parseFloat(partVal);
                    if (isNaN(part)) part = 0;
                    part = Math.min(2.0, Math.max(0.0, part));
                }

                let crea;
                if (creaStr === "a" || creaStr === "m") {
                    crea = creaStr;
                } else if (creaVal === "") {
                    crea = "";
                } else {
                    crea = parseFloat(creaVal);
                    if (isNaN(crea)) crea = 0;
                    crea = Math.min(2.0, Math.max(0.0, crea));
                }

                // Retain current session values from memory
                const currentObj = this.database.grades[gradeKey] || { sessions: ["P","P","P","P","P","P","P"] };
                if (!currentObj.sessions || !Array.isArray(currentObj.sessions)) {
                    currentObj.sessions = ["P","P","P","P","P","P","P"];
                }
                const role = currentObj.role || "none";
                
                // Subtract bonus if role is active
                let savedCrea = crea;
                if (typeof crea === "number" && (role === "captain" || role === "equipment" || role === "both")) {
                    savedCrea = Math.max(0.0, crea - 1.0);
                }

                let savedPart = part;
                if (typeof part === "number" && role === "both") {
                    savedPart = Math.max(0.0, part - 1.0);
                }

                this.database.grades[gradeKey] = {
                    sessions: currentObj.sessions,
                    discipline: disc,
                    participation: savedPart,
                    creativity: savedCrea,
                    role: role,
                    greenCards: currentObj.greenCards || 0,
                    yellowCards: currentObj.yellowCards || 0,
                    redCards: currentObj.redCards || 0,
                    redCardPenalty: currentObj.redCardPenalty || 0
                };
            } else {
                // Assignment / Exam
                const att1 = row.querySelector(".att1").value;
                const att2 = row.querySelector(".att2").value;
                const att3 = row.querySelector(".att3").value;
                const colVal = row.querySelector(".collective-input").value;

                this.database.grades[gradeKey] = {
                    attempts: [
                        att1 !== "" ? parseFloat(att1) : "",
                        att2 !== "" ? parseFloat(att2) : "",
                        att3 !== "" ? parseFloat(att3) : ""
                    ],
                    collective: colVal !== "" ? parseFloat(colVal) : ""
                };
            }
        });

        this.saveDatabase();
        this.showToast(this.getTranslation("saved-success"));
        this.renderActiveViewContent();
    }

    /**
     * ==========================================
     * SCALES BENCHMARKS MANAGER LOGIC
     * ==========================================
     */
    loadScaleValuesToModal() {
        const sport = document.getElementById("scale-select-sport").value;
        const grade = document.getElementById("scale-select-grade").value;
        
        let sportScales = this.database.scales[sport];
        if (!sportScales) {
            this.database.scales[sport] = {
                "1": { M: { best: 0, worst: 0, lowerIsBetter: false }, F: { best: 0, worst: 0, lowerIsBetter: false } },
                "2": { M: { best: 0, worst: 0, lowerIsBetter: false }, F: { best: 0, worst: 0, lowerIsBetter: false } },
                "3": { M: { best: 0, worst: 0, lowerIsBetter: false }, F: { best: 0, worst: 0, lowerIsBetter: false } }
            };
            sportScales = this.database.scales[sport];
        }

        if (sportScales && (sportScales.M || sportScales.F)) {
            this.database.scales[sport] = {
                "1": JSON.parse(JSON.stringify(sportScales)),
                "2": JSON.parse(JSON.stringify(sportScales)),
                "3": JSON.parse(JSON.stringify(sportScales))
            };
            sportScales = this.database.scales[sport];
        }

        const scale = sportScales ? sportScales[grade] : null;

        if (scale) {
            document.getElementById("scale-m-best").value = scale.M ? scale.M.best : 0;
            document.getElementById("scale-m-worst").value = scale.M ? scale.M.worst : 0;
            document.getElementById("scale-f-best").value = scale.F ? scale.F.best : 0;
            document.getElementById("scale-f-worst").value = scale.F ? scale.F.worst : 0;
            
            // Edit label explanations
            const bestLbl = this.currentLang === "ar" ? "الحد الأقصى للأداء (يمنح 20/20):" : "Performance Max (donne 20/20) :";
            const worstLbl = this.currentLang === "ar" ? "الحد الأدنى للأداء (يمنح 05/20):" : "Performance Min (donne 05/20) :";
            
            const unit = (sport === "speed-run" || sport === "endurance-run") ? " (sec)" : " (m)";
            
            document.getElementById("lbl-scale-m-best").textContent = bestLbl + unit;
            document.getElementById("lbl-scale-m-worst").textContent = worstLbl + unit;
            document.getElementById("lbl-scale-f-best").textContent = bestLbl + unit;
            document.getElementById("lbl-scale-f-worst").textContent = worstLbl + unit;
        }
    }

    saveScalesDataFromModal() {
        const sport = document.getElementById("scale-select-sport").value;
        const grade = document.getElementById("scale-select-grade").value;

        let sportScales = this.database.scales[sport];
        if (!sportScales) {
            this.database.scales[sport] = {};
            sportScales = this.database.scales[sport];
        }

        if (sportScales && (sportScales.M || sportScales.F)) {
            this.database.scales[sport] = {
                "1": JSON.parse(JSON.stringify(sportScales)),
                "2": JSON.parse(JSON.stringify(sportScales)),
                "3": JSON.parse(JSON.stringify(sportScales))
            };
            sportScales = this.database.scales[sport];
        }

        const lowerIsBetter = (sport === "speed-run" || sport === "endurance-run");

        if (!sportScales[grade]) {
            sportScales[grade] = {
                M: { best: 0, worst: 0, lowerIsBetter: lowerIsBetter },
                F: { best: 0, worst: 0, lowerIsBetter: lowerIsBetter }
            };
        }

        const scale = sportScales[grade];

        scale.M = {
            best: parseFloat(document.getElementById("scale-m-best").value) || 0,
            worst: parseFloat(document.getElementById("scale-m-worst").value) || 0,
            lowerIsBetter: lowerIsBetter
        };
        scale.F = {
            best: parseFloat(document.getElementById("scale-f-best").value) || 0,
            worst: parseFloat(document.getElementById("scale-f-worst").value) || 0,
            lowerIsBetter: lowerIsBetter
        };

        this.saveDatabase();
        document.getElementById("modal-scale-manager").classList.remove("active");
        this.showToast(this.getTranslation("saved-success"));
        this.renderActiveViewContent();
    }

    printCollectiveRubric() {
        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        const printWindow = window.open("", "_blank");
        if (!printWindow) {
            alert(this.currentLang === "ar" ? "يرجى السماح بالنوافذ المنبثقة لطباعة السلم!" : "Veuillez autoriser les popups pour imprimer !");
            return;
        }

        let tableRowsHtml = COLLECTIVE_RUBRIC.map(row => `
            <tr>
                <td class="col-code">${row.code}</td>
                <td class="col-score">${row.score}</td>
                <td class="col-appreciation">${row.appreciation}</td>
                <td class="col-indicator">${row.indicator}</td>
            </tr>
        `).join("");

        const content = `
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>سلم تنقيط الألعاب الجماعية - Smart Sport</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        padding: 10px 20px;
                        color: #1f2937;
                        background: #fff;
                        font-size: 0.85rem;
                        direction: rtl;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .header-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 15px;
                        border: none;
                    }
                    .header-table td {
                        border: none;
                        padding: 2px 0;
                        font-size: 0.8rem;
                        line-height: 1.5;
                        color: #374151;
                    }
                    .title-container {
                        text-align: center;
                        margin: 10px 0 15px 0;
                    }
                    .title-container h2 {
                        border: 2px solid #b45309;
                        padding: 6px 20px;
                        display: inline-block;
                        border-radius: 8px;
                        font-size: 1.15rem;
                        color: #b45309;
                        background-color: #fffbeb;
                        margin: 0;
                        font-weight: 800;
                        box-shadow: 0 2px 4px rgba(180, 83, 9, 0.08);
                    }
                    .section-title {
                        font-size: 0.95rem;
                        color: #1f2937;
                        border-bottom: 2px solid #b45309;
                        padding-bottom: 4px;
                        margin-top: 10px;
                        margin-bottom: 6px;
                        font-weight: 700;
                    }
                    .rubric-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 15px;
                    }
                    .rubric-table th {
                        border: 1px solid #92400e;
                        padding: 6px 4px;
                        background-color: #b45309;
                        color: #fff;
                        font-weight: 700;
                        text-align: center;
                        font-size: 0.8rem;
                    }
                    .rubric-table td {
                        border: 1px solid #d1d5db;
                        padding: 5px 6px;
                        text-align: center;
                        font-size: 0.8rem;
                        vertical-align: middle;
                    }
                    .col-code {
                        background-color: #fef3c7;
                        color: #92400e;
                        font-weight: 800;
                        font-size: 0.85rem;
                        width: 10%;
                    }
                    .col-score {
                        background-color: #fffbeb;
                        color: #b45309;
                        font-weight: 700;
                        font-size: 0.95rem;
                        width: 15%;
                    }
                    .col-appreciation {
                        background-color: #ffffff;
                        font-weight: 600;
                        width: 20%;
                    }
                    .col-indicator {
                        background-color: #ffffff;
                        text-align: right;
                        padding-right: 15px;
                        direction: rtl;
                        line-height: 1.4;
                        font-size: 0.8rem;
                    }
                    .rubric-table tr:nth-child(even) td.col-appreciation,
                    .rubric-table tr:nth-child(even) td.col-indicator {
                        background-color: #fafafa;
                    }
                    .footer-signatures {
                        margin-top: 20px;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .footer-signatures td {
                        border: none;
                        width: 50%;
                        text-align: center;
                        font-weight: 700;
                        font-size: 0.9rem;
                        color: #374151;
                        padding: 10px;
                    }
                    .signature-box {
                        margin-top: 25px;
                        height: 55px;
                        border: 1px dashed #9ca3af;
                        border-radius: 6px;
                        background: #f9fafb;
                    }
                    @media print {
                        body { padding: 0; margin: 0; }
                        @page { size: A4; margin: 1cm 1.2cm; }
                    }
                </style>
            </head>
            <body lang="fr">
                <table class="header-table">
                    <tr>
                        <td style="text-align: right; width: 50%;">
                            <strong>الجمهورية الجزائرية الديمقراطية الشعبية</strong><br>
                            <strong>وزارة التربية الوطنية</strong><br>
                            ${wilaya}<br>
                            ${schoolName}
                        </td>
                        <td style="text-align: left; width: 50%; vertical-align: top; direction: ltr;">
                            <strong>السنة الدراسية:</strong> ${academicYear}<br>
                            <strong>أستاذ المادة:</strong> ${teacherName}
                        </td>
                    </tr>
                </table>

                <div class="title-container">
                    <h2>سلم تنقيط وتقويم الأنشطة الرياضية الجماعية (موحد لجميع الرياضات الجماعية)</h2>
                </div>

                <table class="rubric-table">
                    <thead>
                        <tr>
                            <th style="width: 10%;">الرمز</th>
                            <th style="width: 15%;">النقطة (/20)</th>
                            <th style="width: 20%;">التقدير</th>
                            <th style="text-align: right; padding-right: 15px;">مؤشرات الأداء التقييمية</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRowsHtml}
                    </tbody>
                </table>

                <table class="footer-signatures">
                    <tr>
                        <td>
                            إمضاء أستاذ المادة
                            <div class="signature-box"></div>
                        </td>
                        <td>
                            إمضاء السيد ناظر المؤسسة
                            <div class="signature-box"></div>
                        </td>
                    </tr>
                </table>

                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() { window.close(); }, 500);
                    };
                </script>
            </body>
            </html>
        `;

        printWindow.document.open();
        printWindow.document.write(content);
        printWindow.document.close();
    }

    calculatePerformanceForScore(scale, score) {
        const bLimit = scale.best;
        const wLimit = scale.worst;
        if (scale.lowerIsBetter) {
            const val = bLimit + (wLimit - bLimit) * (20 - score) / 15;
            return Math.max(0, val);
        } else {
            const val = wLimit + (bLimit - wLimit) * (score - 5) / 15;
            return Math.max(0, val);
        }
    }

    printAllScales() {
        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        const scaleModalActive = document.getElementById("modal-scale-manager").classList.contains("active");
        
        let sportId = "";
        let grade = "1";
        
        if (scaleModalActive) {
            sportId = document.getElementById("scale-select-sport").value;
            grade = document.getElementById("scale-select-grade").value;
        } else {
            const term = parseInt(document.getElementById("term-select-grading")?.value) || 1;
            const activeClassId = this.activeGradingClassId || this.activeRosterClassId || (this.database.classes[0] ? this.database.classes[0].id : "");
            const activeClass = this.database.classes.find(c => c.id === activeClassId);
            grade = activeClass ? activeClass.grade.toString() : "1";
            
            const termSports = this.database.termActivities ? this.database.termActivities[`term_${term}`] : null;
            sportId = termSports ? termSports.individual : "speed-run";
        }

        const sportObj = this.database.sports.individual.find(s => s.id === sportId) || { name: "سرعة (60م)", unit: "sec" };
        const sportName = sportObj.name;
        const unitLabel = (sportObj.unit === "sec") ? "ثانية" : "متر";
        const gradeLabel = grade === "1" ? "السنة الأولى ثانوي (1AS)" : grade === "2" ? "السنة الثانية ثانوي (2AS)" : "السنة الثالثة ثانوي (3AS)";

        let scaleM = null;
        let scaleF = null;
        if (this.database.scales[sportId] && this.database.scales[sportId][grade]) {
            scaleM = this.database.scales[sportId][grade].M;
            scaleF = this.database.scales[sportId][grade].F;
        }

        const printWindow = window.open("", "_blank");
        if (!printWindow) {
            alert(this.currentLang === "ar" ? "يرجى السماح بالنوافذ المنبثقة لطباعة السلم!" : "Veuillez autoriser les popups pour imprimer !");
            return;
        }

        let leftRowsHtml = "";
        let rightRowsHtml = "";
        
        let idx = 0;
        for (let score = 20; score >= 5; score -= 0.5) {
            const scoreVal = score.toFixed(1);
            let mStr = "--";
            let fStr = "--";

            if (scaleM) {
                const val = this.calculatePerformanceForScore(scaleM, score);
                mStr = `${val.toFixed(2)} ${unitLabel}`;
            }
            if (scaleF) {
                const val = this.calculatePerformanceForScore(scaleF, score);
                fStr = `${val.toFixed(2)} ${unitLabel}`;
            }

            const rowHtml = `
                <tr>
                    <td class="col-score">${scoreVal}</td>
                    <td class="col-m">${mStr}</td>
                    <td class="col-f">${fStr}</td>
                </tr>
            `;

            if (idx < 16) {
                leftRowsHtml += rowHtml;
            } else {
                rightRowsHtml += rowHtml;
            }
            idx++;
        }
        
        // Add a spacer row to rightRowsHtml to match heights (since left has 16 and right has 15)
        rightRowsHtml += `
            <tr>
                <td class="col-score" style="color: transparent; user-select: none;">-</td>
                <td class="col-m" style="color: transparent; user-select: none;">-</td>
                <td class="col-f" style="color: transparent; user-select: none;">-</td>
            </tr>
        `;

        let collectiveTableRowsHtml = COLLECTIVE_RUBRIC.map(row => `
            <tr>
                <td class="col-code">${row.code}</td>
                <td class="col-score-c">${row.score}</td>
                <td class="col-appreciation">${row.appreciation}</td>
                <td class="col-indicator">${row.indicator}</td>
            </tr>
        `).join("");

        const content = `
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>سلم تنقيط التربية البدنية والرياضية - Smart Sport</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        padding: 10px 20px;
                        color: #1f2937;
                        background: #fff;
                        font-size: 0.82rem;
                        direction: rtl;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .header-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 12px;
                        border: none;
                    }
                    .header-table td {
                        border: none;
                        padding: 2px 0;
                        font-size: 0.78rem;
                        line-height: 1.4;
                        color: #374151;
                    }
                    .title-container {
                        text-align: center;
                        margin: 5px 0 10px 0;
                    }
                    .title-container h2 {
                        border: 2px solid #0f766e;
                        padding: 4px 15px;
                        display: inline-block;
                        border-radius: 8px;
                        font-size: 1.1rem;
                        color: #0f766e;
                        background-color: #f0fdf4;
                        margin: 0;
                        font-weight: 800;
                        box-shadow: 0 2px 4px rgba(15, 118, 110, 0.08);
                    }
                    .title-container.collective h2 {
                        border-color: #b45309;
                        color: #b45309;
                        background-color: #fffbeb;
                        box-shadow: 0 2px 4px rgba(180, 83, 9, 0.08);
                    }
                    .section-title {
                        font-size: 0.9rem;
                        color: #1f2937;
                        border-bottom: 2px solid #0f766e;
                        padding-bottom: 3px;
                        margin-top: 8px;
                        margin-bottom: 4px;
                        font-weight: 700;
                    }
                    .section-title.collective {
                        border-bottom-color: #b45309;
                    }
                    .tables-container {
                        display: flex;
                        gap: 15px;
                        width: 100%;
                        margin-bottom: 10px;
                    }
                    .rubric-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 10px;
                        flex: 1;
                    }
                    .rubric-table th {
                        border: 1px solid #115e59;
                        padding: 5px 4px;
                        background-color: #0f766e;
                        color: #fff;
                        font-weight: 700;
                        text-align: center;
                        font-size: 0.78rem;
                    }
                    .rubric-table th.header-m {
                        background-color: #1d4ed8;
                        border: 1px solid #1e40af;
                    }
                    .rubric-table th.header-f {
                        background-color: #be185d;
                        border: 1px solid #9d174d;
                    }
                    .rubric-table td {
                        border: 1px solid #d1d5db;
                        padding: 4px 5px;
                        text-align: center;
                        font-size: 0.78rem;
                        vertical-align: middle;
                    }
                    .col-score {
                        background-color: #f3f4f6;
                        font-weight: 700;
                        color: #1f2937;
                        border: 1px solid #d1d5db;
                        width: 20%;
                    }
                    .col-m {
                        background-color: #eff6ff;
                        font-weight: 600;
                        color: #1e40af;
                        border: 1px solid #bfdbfe;
                        width: 40%;
                    }
                    .col-f {
                        background-color: #fff1f2;
                        font-weight: 600;
                        color: #be185d;
                        border: 1px solid #fecdd3;
                        width: 40%;
                    }
                    
                    /* Collective Rubric Colors */
                    .rubric-table.col-rubric th {
                        background-color: #b45309;
                        border-color: #92400e;
                    }
                    .col-code {
                        background-color: #fef3c7;
                        color: #92400e;
                        font-weight: 800;
                        font-size: 0.8rem;
                        width: 10%;
                    }
                    .col-score-c {
                        background-color: #fffbeb;
                        color: #b45309;
                        font-weight: 700;
                        font-size: 0.9rem;
                        width: 15%;
                    }
                    .col-appreciation {
                        background-color: #ffffff;
                        font-weight: 600;
                        width: 20%;
                    }
                    .col-indicator {
                        background-color: #ffffff;
                        text-align: right;
                        padding-right: 12px;
                        direction: rtl;
                        line-height: 1.35;
                        font-size: 0.76rem;
                    }
                    .rubric-table.col-rubric tr:nth-child(even) td.col-appreciation,
                    .rubric-table.col-rubric tr:nth-child(even) td.col-indicator {
                        background-color: #fafafa;
                    }

                    .footer-signatures {
                        margin-top: 15px;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .footer-signatures td {
                        border: none;
                        width: 50%;
                        text-align: center;
                        font-weight: 700;
                        font-size: 0.85rem;
                        color: #374151;
                        padding: 5px;
                    }
                    .signature-box {
                        margin-top: 20px;
                        height: 50px;
                        border: 1px dashed #9ca3af;
                        border-radius: 6px;
                        background: #f9fafb;
                    }
                    @media print {
                        body { padding: 0; margin: 0; }
                        @page { size: A4; margin: 0.8cm 1cm; }
                    }
                </style>
            </head>
            <body lang="fr">
                <!-- Page 1: Individual Scale Details -->
                <table class="header-table">
                    <tr>
                        <td style="text-align: right; width: 50%;">
                            <strong>الجمهورية الجزائرية الديمقراطية الشعبية</strong><br>
                            <strong>وزارة التربية الوطنية</strong><br>
                            ${wilaya}<br>
                            ${schoolName}
                        </td>
                        <td style="text-align: left; width: 50%; vertical-align: top; direction: ltr;">
                            <strong>السنة الدراسية:</strong> ${academicYear}<br>
                            <strong>أستاذ المادة:</strong> ${teacherName}
                        </td>
                    </tr>
                </table>

                <div class="title-container">
                    <h2>سلم تنقيط النشاط الرياضي الفردي التفصيلي</h2>
                </div>

                <div class="section-title">النشاط الرياضي الفردي: ${sportName} - المستوى الدراسي: ${gradeLabel}</div>
                <p style="margin: 0 0 6px 0; font-size: 0.74rem; color: #444;">
                    ملاحظة: هذا الجدول يوضح الإنجاز البدني المطلوب (بالثواني أو الأمتار) المقابل لكل علامة من 20 إلى 5 بخطوات قدرها 0.5 ن.
                </p>

                <div class="tables-container">
                    <table class="rubric-table">
                        <thead>
                            <tr>
                                <th>العلامة (/20)</th>
                                <th class="header-m">ذكور (M)</th>
                                <th class="header-f">إناث (F)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${leftRowsHtml}
                        </tbody>
                    </table>
                    <table class="rubric-table">
                        <thead>
                            <tr>
                                <th>العلامة (/20)</th>
                                <th class="header-m">ذكور (M)</th>
                                <th class="header-f">إناث (F)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rightRowsHtml}
                        </tbody>
                    </table>
                </div>

                <table class="footer-signatures">
                    <tr>
                        <td>
                            إمضاء أستاذ المادة
                            <div class="signature-box"></div>
                        </td>
                        <td>
                            إمضاء السيد ناظر المؤسسة
                            <div class="signature-box"></div>
                        </td>
                    </tr>
                </table>

                <div style="page-break-before: always;"></div>
                
                <!-- Page 2: Collective Rubric -->
                <table class="header-table">
                    <tr>
                        <td style="text-align: right; width: 50%;">
                            <strong>الجمهورية الجزائرية الديمقراطية الشعبية</strong><br>
                            <strong>وزارة التربية الوطنية</strong><br>
                            ${wilaya}<br>
                            ${schoolName}
                        </td>
                        <td style="text-align: left; width: 50%; vertical-align: top; direction: ltr;">
                            <strong>السنة الدراسية:</strong> ${academicYear}<br>
                            <strong>أستاذ المادة:</strong> ${teacherName}
                        </td>
                    </tr>
                </table>

                <div class="title-container collective">
                    <h2>سلم تنقيط الألعاب الجماعية الموحد</h2>
                </div>

                <div class="section-title collective">سلم تقويم ومؤشرات الأداء للرياضة الجماعية (موحد لجميع الرياضات الجماعية والفصول)</div>
                <p style="margin: 0 0 6px 0; font-size: 0.74rem; color: #444;">
                    ملاحظة: هذا السلم موحد ومعتمد رسمياً لتقييم جميع الرياضات الجماعية بالثانويات الجزائرية.
                </p>

                <table class="rubric-table col-rubric">
                    <thead>
                        <tr>
                            <th style="width: 10%;">الرمز</th>
                            <th style="width: 15%;">النقطة (/20)</th>
                            <th style="width: 20%;">التقدير</th>
                            <th style="text-align: right; padding-right: 15px;">مؤشرات الأداء التقييمية</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${collectiveTableRowsHtml}
                    </tbody>
                </table>

                <table class="footer-signatures">
                    <tr>
                        <td>
                            إمضاء أستاذ المادة
                            <div class="signature-box"></div>
                        </td>
                        <td>
                            إمضاء السيد ناظر المؤسسة
                            <div class="signature-box"></div>
                        </td>
                    </tr>
                </table>

                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() { window.close(); }, 500);
                    };
                </script>
            </body>
            </html>
        `;

        printWindow.document.open();
        printWindow.document.write(content);
        printWindow.document.close();
    }

    downloadCollectiveRubricExcel() {
        try {
            const data = COLLECTIVE_RUBRIC.map(row => ({
                "الرمز": row.code,
                "النقطة (/20)": row.score,
                "التقدير": row.appreciation,
                "مؤشرات الأداء التقييمية": row.indicator
            }));

            const worksheet = XLSX.utils.json_to_sheet(data);
            
            // Set sheet direction to RTL
            if (!worksheet['!views']) worksheet['!views'] = [];
            worksheet['!views'].push({ RTL: true });

            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "سلم الألعاب الجماعية");

            XLSX.writeFile(workbook, "سلم_تنقيط_الألعاب_الجماعية_الموحد.xlsx");
            this.showToast(this.currentLang === "ar" ? "تم تحميل ملف الإكسل بنجاح!" : "Fichier Excel téléchargé avec succès !");
        } catch (error) {
            console.error("Error exporting collective rubric to Excel:", error);
            alert(this.currentLang === "ar" ? "فشل تصدير السلم كملف إكسل!" : "Échec de l'exportation du barème en Excel !");
        }
    }

    /**
     * ==========================================
     * COMMUNICATIONS & PARENT MESSAGING (SMS/WhatsApp)
     * ==========================================
     */
    sendMessageToParent(studentId, gateway) {
        const student = this.database.students.find(s => s.id === studentId);
        if (!student || !student.phone) {
            alert(this.currentLang === "ar" ? "رقم هاتف الولي غير متوفر للتلميذ!" : "Tél. parent non disponible !");
            return;
        }

        const metadata = this.database.metadata;
        const year = metadata.academicYear || "";
        const school = metadata.schoolName || "";
        
        const t1 = this.calculateStudentTermAverage(studentId, 1).termAverage;
        const t2 = this.calculateStudentTermAverage(studentId, 2).termAverage;
        const t3 = this.calculateStudentTermAverage(studentId, 3).termAverage;
        const annual = this.calculateStudentAnnualAverage(studentId);

        const t1Text = student.exemptions[0] ? this.getTranslation("exempted-abrv") : (t1 !== null ? `${t1.toFixed(1)}/20` : "--");
        const t2Text = student.exemptions[1] ? this.getTranslation("exempted-abrv") : (t2 !== null ? `${t2.toFixed(1)}/20` : "--");
        const t3Text = student.exemptions[2] ? this.getTranslation("exempted-abrv") : (t3 !== null ? `${t3.toFixed(1)}/20` : "--");
        const annualText = annual.value !== null ? `${annual.value.toFixed(1)}/20` : annual.label;

        let msg = "";
        
        // Select template based on annual average & exemptions
        let selectedTemplate = "";
        if (annual.value === null) {
            selectedTemplate = metadata.messageTemplateExempt || DEFAULT_DATABASE.metadata.messageTemplateExempt;
        } else if (annual.value >= 16) {
            selectedTemplate = metadata.messageTemplateExcellent || DEFAULT_DATABASE.metadata.messageTemplateExcellent;
        } else if (annual.value >= 10) {
            selectedTemplate = metadata.messageTemplateAverage || DEFAULT_DATABASE.metadata.messageTemplateAverage;
        } else {
            selectedTemplate = metadata.messageTemplateWeak || DEFAULT_DATABASE.metadata.messageTemplateWeak;
        }

        msg = selectedTemplate;
        msg = msg.replace(/{الاسم}/g, `${student.lastname} ${student.firstname}`);
        msg = msg.replace(/{المؤسسة}/g, school);
        msg = msg.replace(/{السنة}/g, year);
        msg = msg.replace(/{ف1}/g, t1Text);
        msg = msg.replace(/{ف2}/g, t2Text);
        msg = msg.replace(/{ف3}/g, t3Text);
        msg = msg.replace(/{السنوي}/g, annualText);

        // Clean phone number format for Algerian prefix (+213)
        let cleanPhone = student.phone.replace(/[\s\-\(\)]/g, "");
        if (cleanPhone.startsWith("0")) {
            cleanPhone = "213" + cleanPhone.substring(1);
        }

        if (gateway === "whatsapp") {
            const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
            window.open(url, "_blank");
        } else if (gateway === "sms") {
            const url = `sms:${cleanPhone}?body=${encodeURIComponent(msg)}`;
            window.open(url, "_self");
        }
    }

    /**
     * ==========================================
     * PRINT SHEETS GENERATOR (PDF & ALL CLASSES)
     * ==========================================
     */
    printClassRoster(classId = this.activeRosterClassId, autoPrint = true) {
        const cls = this.database.classes.find(c => c.id === classId);
        if (!cls) return "";

        const classStudents = this.database.students.filter(s => s.classId === cls.id);
        classStudents.sort((a, b) => a.order - b.order);

        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "مديرية التربية لولاية الجزائر غرب";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        let html = `
            <div class="print-page" style="page-break-after: always; padding: 20px; font-family: 'Cairo', sans-serif; direction: rtl;">
                <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">
                    <div style="font-weight: bold;">الجمهورية الجزائرية الديمقراطية الشعبية</div>
                    <div style="font-weight: bold;">وزارة التربية الوطنية</div>
                    <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 0.9rem;">
                        <div style="text-align: right;">
                            <div>${wilaya}</div>
                            <div>المؤسسة: ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div>السنة الدراسية: ${academicYear}</div>
                            <div>الأستاذ: ${teacherName}</div>
                        </div>
                    </div>
                    <h2 style="margin: 15px 0 5px 0;">قائمة تلاميذ القسم: ${cls.name}</h2>
                </div>
                <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.9rem;">
                    <thead>
                        <tr style="background: #f3f4f6;">
                            <th style="border: 1px solid #000; padding: 8px; width: 40px; text-align: center;">الرقم</th>
                            <th style="border: 1px solid #000; padding: 8px;" class="col-hdr-lastname">اللقب</th>
                            <th style="border: 1px solid #000; padding: 8px;" class="col-hdr-firstname">الاسم</th>
                            <th style="border: 1px solid #000; padding: 8px; width: 60px; text-align: center;">الجنس</th>
                            <th style="border: 1px solid #000; padding: 8px;">تاريخ الميلاد</th>
                            <th style="border: 1px solid #000; padding: 8px; width: 80px; text-align: center;">الحالة</th>
                            <th style="border: 1px solid #000; padding: 8px;">ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${classStudents.map((s, idx) => {
                            const isExempted = s.exemptions && s.exemptions[0] && s.exemptions[1] && s.exemptions[2];
                            return `
                            <tr>
                                <td style="border: 1px solid #000; padding: 6px; text-align: center;">${idx + 1}</td>
                                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;" class="col-lastname">${s.lastname}</td>
                                <td style="border: 1px solid #000; padding: 6px; font-weight: bold;" class="col-firstname">${s.firstname}</td>
                                <td style="border: 1px solid #000; padding: 6px; text-align: center;">${s.gender}</td>
                                <td style="border: 1px solid #000; padding: 6px;">${s.birthdate || ""}</td>
                                <td style="border: 1px solid #000; padding: 6px; text-align: center;">${isExempted ? "\u0645\u0639\u0641\u0649" : "\u0645\u0624\u0647\u0644"}</td>
                                <td style="border: 1px solid #000; padding: 6px;"></td>
                            </tr>`;
                        }).join("")}
                    </tbody>
                </table>
                <div style="margin-top: 30px; display: flex; justify-content: space-between; font-weight: bold;">
                    <div>\u0625\u0645\u0636\u0627\u0621\u0020\u0627\u0644\u0623\u0633\u062a\u0627\u0630\u061a</div>
                    <div>\u0625\u0645\u0636\u0627\u0621\u0020\u0627\u0644\u0625\u062f\u0627\u0631\u0625\u0020\u0028\u0627\u0644\u0646\u0627\u0638\u0631\u0029\u061a</div>
                </div>
                <div style="text-align: center; font-size: 0.7rem; color: #666; margin-top: 40px;">
                    Smart_Sport | Mai26 | Delbaz_Med
                </div>
            </div>
        `;

        if (autoPrint) {
            const printWindow = window.open("", "_blank");
            if (!printWindow) return;
            printWindow.document.write(`
                <!DOCTYPE html>
                <html lang="fr" dir="rtl">
                <head>
                    <meta charset="UTF-8">
                    <title>\u0637\u0628\u0627\u0639\u0629\u0020\u0642\u0627\u0626\u0645\u0629\u0020\u0627\u0644\u0642\u0633\u0645 - ${cls.name}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                    <style>
                        .col-hdr-lastname, .col-lastname,
                        .col-hdr-firstname, .col-firstname {
                            width: 1% !important;
                            white-space: nowrap !important;
                            max-width: 130px !important;
                            overflow: hidden !important;
                            text-overflow: ellipsis !important;
                        }
                        @media print {
                            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                            .no-print { display: none !important; }
                            .col-hdr-lastname, .col-lastname,
                            .col-hdr-firstname, .col-firstname {
                                width: 1% !important;
                                white-space: nowrap !important;
                                max-width: 130px !important;
                                overflow: hidden !important;
                                text-overflow: ellipsis !important;
                            }
                        }
                    </style>
                </head>
                <body style="margin: 0; padding: 0;" lang="fr">
                    ${html}
                    <div class="no-print" style="text-align: center; margin: 20px;">
                        <button onclick="window.print()" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem;">\u0637\u0628\u0627\u0639\u0629</button>
                    </div>
                </body>
                </html>
            `);
            printWindow.document.close();
        }
        return html;
    }

    printAllClassesRosters() {
        if (this.database.classes.length === 0) return;
        
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        let allHtml = "";
        this.database.classes.forEach(cls => {
            allHtml += this.printClassRoster(cls.id, false);
        });

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>\u0637\u0628\u0627\u0639\u0629\u0020\u0642\u0648\u0627\u0626\u0645\u0020\u062c\u0645\u064a\u0639\u0020\u0627\u0644\u0623\u0642\u0633\u0627\u0645</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                <style>
                    @media print {
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0;" lang="fr">
                ${allHtml}
                <div class="no-print" style="text-align: center; margin: 20px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background: #fbbf24; color: #000; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem; font-weight: bold;">\u0637\u0628\u0627\u0639\u0629\u0020\u062c\u0645\u064a\u0639\u0020\u0627\u0644\u0642\u0648\u0627\u0626\u0645</button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    exportRosterToExcel() {
        const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
        if (!activeClass) return;

        const classStudents = this.database.students.filter(s => s.classId === activeClass.id);
        classStudents.sort((a, b) => a.order - b.order);

        // Header and Data rows (Expected: First Name, Last Name, Gender)
        const ws_data = [
            ["\u0627\u0644\u0627\u0633\u0645", "\u0627\u0644\u0644\u0642\u0628", "\u0627\u0644\u062c\u0646\u0633", "\u062a\u0627\u0631\u064a\u062e\u0020\u0627\u0644\u0645\u064a\u0644\u0627\u062f", "\u0627\u0644\u0647\u0627\u062a\u0641", "\u0625\u0639\u0641\u0627\u0621\u0020\u0641\u0631\u0636\u0020\u0661", "\u0625\u0639\u0641\u0627\u0621\u0020\u0641\u0631\u0636\u0020\u0662", "\u0625\u0639\u0641\u0627\u0621\u0020\u0641\u0631\u0636\u0020\u0663"]
        ];

        classStudents.forEach(s => {
            ws_data.push([
                s.firstname,
                s.lastname,
                s.gender === "M" ? "\u0630\u0643\u0631" : "\u0623\u0646\u062b\u0649",
                s.birthdate,
                s.phone || "",
                s.exemptions[0] ? '\u0645\u0639\u0641\u0649' : '\u0645\u0624\u0647\u0644',
                s.exemptions[1] ? '\u0645\u0639\u0641\u0649' : '\u0645\u0624\u0647\u0644',
                s.exemptions[2] ? '\u0645\u0639\u0641\u0649' : '\u0645\u0624\u0647\u0644'
            ]);
        });

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(ws_data);

        // Auto-fit column widths
        const colWidths = [];
        ws_data.forEach(row => {
            row.forEach((val, colIdx) => {
                const str = val ? val.toString() : "";
                let len = 0;
                for (let cIdx = 0; cIdx < str.length; cIdx++) {
                    const code = str.charCodeAt(cIdx);
                    if (code > 127) {
                        len += 2;
                    } else {
                        len += 1;
                    }
                }
                if (!colWidths[colIdx] || len > colWidths[colIdx]) {
                    colWidths[colIdx] = len;
                }
            });
        });
        ws['!cols'] = colWidths.map(w => ({ wch: Math.max(w + 3, 10) }));

        // Enable RTL layout in Excel for Arabic layout sheet
        if (this.currentLang === "ar") {
            ws['!views'] = [{ RTL: true }];
        }

        XLSX.utils.book_append_sheet(wb, ws, activeClass.name);
        XLSX.writeFile(wb, `Smart_Sport_Roster_${activeClass.name}.xlsx`);
    }

    exportAllClassesCSV() {
        this.printAllClassesRosters();
    }

    exportAllGradesPDF() {
        if (this.database.classes.length === 0) return;
        let termInput = window.prompt("\u064a\u0631\u062c\u0649\u0020\u0625\u062f\u062e\u0627\u0644\u0020\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u0645\u0631\u0627\u062f\u0020\u0637\u0628\u0627\u0639\u062a\u0647\u0020\u060c\u0623\u0648\u0020\u0643\u062a\u0627\u0628\u0629\u0020\u0027\u0061\u006e\u006e\u0075\u0061\u006c\u0027\u0020\u0644\u0644\u0633\u0646\u0648\u064a\u061a", "1");
        if (!termInput) return; 
        let term = termInput.trim().toLowerCase();
        if (term === "\u0627\u0644\u0633\u0646\u0648\u064a" || term === "\u0633\u0646\u0648\u064a" || term === "annual") term = "annual";
        if (term !== "annual") {
            term = parseInt(term);
            if (![1, 2, 3].includes(term)) {
                alert("\u0625\u062f\u062e\u0627\u0644\u0020\u063a\u064a\u0631\u0020\u0635\u062d\u064a\u062d\u0021");
                return;
            }
        }

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "\u0645\u062f\u064a\u0631\u064a\u0629\u0020\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u0020\u0644\u0648\u0644\u0627\u064a\u0629\u0020\u0627\u0644\u0628\u064a\u0636";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";

        let allHtml = "";

        this.database.classes.forEach(cls => {
            const classStudents = this.database.students.filter(s => s.classId === cls.id);
            classStudents.sort((a, b) => a.order - b.order);

            let tempTable = document.createElement("table");
            if (term === "annual") {
                this.renderAnnualTermSheet(tempTable, classStudents);
            } else {
                this.renderTermSummarySheet(tempTable, classStudents, term);
            }

            const title = term === "annual" ? `\u0643\u0634\u0648\u0641\u0020\u0627\u0644\u0646\u0642\u0627\u0637\u0020\u0627\u0644\u0633\u0646\u0648\u064a\u0020\u002d\u0020\u0642\u0633\u0645\u061a ${cls.name}` : `\u0643\u0634\u0641\u0020\u0646\u0642\u0627\u0637\u0020\u0627\u0644\u0641\u0635\u0644\u0020${term}\u0020\u002d\u0020\u0642\u0633\u0645\u061a ${cls.name}`;

            allHtml += `
                <div class="print-page" style="page-break-after: always; padding: 10px; font-family: 'Cairo', sans-serif; direction: rtl;">
                    <div style="text-align: center; margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 5px;">
                        <div style="font-weight: bold; font-size: 0.9rem;">\u0627\u0644\u062c\u0645\u0647\u0648\u0631\u064a\u0629\u0020\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u064a\u0629\u0020\u0627\u0644\u062f\u064a\u0645\u0642\u0631\u0627\u0637\u064a\u0629\u0020\u0627\u0644\u0634\u0639\u062b\u064a\u0629</div>
                        <div style="font-weight: bold; font-size: 0.9rem;">\u0648\u0632\u0627\u0631\u0629\u0020\u0627\u0644\u062a\u0631\u0628\u064a\u0629\u0020\u0644\u0648\u0644\u0627\u064a\u0629\u0020\u0627\u0644\u0628\u064a\u0636</div>
                        <div style="display: flex; justify-content: space-between; margin-top: 5px; font-size: 0.8rem;">
                            <div style="text-align: right;">
                                <div>${wilaya}</div>
                                <div>\u0627\u0644\u0645\u0624\u0633\u0633\u0629\u061a ${schoolName}</div>
                            </div>
                            <div style="text-align: left;">
                                <div>\u0627\u0644\u0633\u0646\u0629\u0020\u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629\u061a ${academicYear}</div>
                                <div>\u0627\u0644\u0623\u0633\u062a\u0627\u0630\u061a ${teacherName}</div>
                            </div>
                        </div>
                        <h2 style="margin: 10px 0 5px 0; font-size: 1.1rem;">${title}</h2>
                    </div>
                    <div style="overflow-x: hidden;">
                        <table style="width: 100%; max-width: 100%; border-collapse: collapse; text-align: right; font-size: 0.75rem; table-layout: auto;">
                            ${tempTable.innerHTML}
                        </table>
                    </div>
                    <div style="margin-top: 20px; display: flex; justify-content: space-between; font-weight: bold; font-size: 0.9rem;">
                        <div>\u0625\u0645\u0636\u0627\u0621\u0020\u0627\u0644\u0623\u0633\u062a\u0627\u0630\u061a</div>
                        <div>\u0625\u0645\u0636\u0627\u0621\u0020\u0648\u062a\u0623\u0634\u064a\u0631\u0020\u0627\u0644\u0633\u064a\u062f\u0020\u0627\u0644\u0645\u062f\u064a\u0631\u061a</div>
                    </div>
                    <div style="text-align: center; font-size: 0.6rem; color: #666; margin-top: 30px;">
                        Smart_Sport | Mai26 | Delbaz_Med
                    </div>
                </div>
            `;
        });

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>\u0643\u0634\u0648\u0641\u0020\u0646\u0642\u0627\u0637\u0020\u0627\u0644\u0623\u0642\u0633\u0627\u0645</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Cairo', sans-serif; }
                    table, th, td { border: 1px solid #000; padding: 4px 2px; }
                    th { background: #f3f4f6; }
                    .badge { padding: 1px 4px; border-radius: 4px; font-size: 0.65rem; }
                    .badge-blue { background: #e0f2fe; color: #0284c7; }
                    .badge-pink { background: #fce7f3; color: #db2777; }
                    .badge-danger { background: #fee2e2; color: #ef4444; }
                    .badge-amber { background: #fef3c7; color: #d97706; }
                    .badge-emerald { background: #d1fae5; color: #059669; }
                    .text-center { text-align: center; }
                    @media print {
                        @page { size: landscape; margin: 10mm; }
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; zoom: 95%; }
                        .no-print { display: none !important; }
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0;" lang="fr">
                ${allHtml}
                <div class="no-print" style="text-align: center; margin: 20px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background: #fbbf24; color: #000; border: none; border-radius: 5px; font-family: 'Cairo'; cursor: pointer; font-size: 1rem; font-weight: bold;">\u0637\u0628\u0627\u0639\u0629\u0020\u0643\u0634\u0648\u0641\u0020\u0627\u0644\u0646\u0642\u0627\u0637</button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    exportAllGradesExcel() {
        if (this.database.classes.length === 0) return;
        let termInput = window.prompt("\u064a\u0631\u062c\u0649\u0020\u0625\u062f\u062e\u0627\u0644\u0020\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u0645\u0631\u0627\u062f\u0020\u062a\u0635\u062f\u064a\u0631\u0647\u0020\u060c\u0623\u0648\u0020\u0643\u062a\u0627\u0628\u0629\u0020\u0027\u0061\u006e\u006e\u0075\u0061\u006c\u0027\u0020\u0644\u0644\u0633\u0646\u0648\u064a\u061a", "1");
        if (!termInput) return; 
        let term = termInput.trim().toLowerCase();
        if (term === "\u0627\u0644\u0633\u0646\u0648\u064a" || term === "\u0633\u0646\u0648\u064a" || term === "annual") term = "annual";
        if (term !== "annual") {
            term = parseInt(term);
            if (![1, 2, 3].includes(term)) {
                alert("\u0625\u062f\u062e\u0627\u0644\u0020\u063a\u064a\u0631\u0020\u0635\u062d\u064a\u062d\u0021");
                return;
            }
        }

        const wb = XLSX.utils.book_new();

        this.database.classes.forEach(cls => {
            const classStudents = this.database.students.filter(s => s.classId === cls.id);
            classStudents.sort((a, b) => a.order - b.order);

            let ws_data = [];
            if (term === "annual") {
                ws_data.push([
                    "\u0627\u0644\u0631\u0642\u0645", 
                    "\u0627\u0644\u0644\u0642\u0628", 
                    "\u0627\u0644\u0627\u0633\u0645", 
                    "\u0627\u0644\u062c\u0646\u0633", 
                    "\u0645\u0639\u062f\u0644\u0020\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u0623\u0648\u0644", 
                    "\u0645\u0639\u062f\u0644\u0020\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u062b\u0627\u0646\u064a", 
                    "\u0645\u0639\u062f\u0644\u0020\u0627\u0644\u0641\u0635\u0644\u0020\u0627\u0644\u062b\u0627\u0644\u062b", 
                    "\u0627\u0644\u0645\u0639\u062f\u0644\u0020\u0627\u0644\u0633\u0646\u0648\u064a", 
                    "\u0627\u0644\u062a\u0642\u062f\u064a\u0631"
                ]);
                classStudents.forEach((student, index) => {
                    const gender = student.gender === "M" ? "\u0630\u0643\u0631" : "\u0623\u0646\u062b\u0649";
                    const isExemptedAll = student.exemptions && student.exemptions[0] && student.exemptions[1] && student.exemptions[2];
                    if (isExemptedAll) {
                        ws_data.push([
                            index + 1, 
                            student.lastname, 
                            student.firstname, 
                            gender, 
                            "\u0645\u0639\u0641\u0649", 
                            "\u0645\u0639\u0641\u0649", 
                            "\u0645\u0639\u0641\u0649", 
                            "\u0645\u0639\u0641\u0649\u0020\u0643\u0644\u064a", 
                            "--"
                        ]);
                    } else {
                        const t1 = this.calculateStudentTermAverage(student.id, 1);
                        const t2 = this.calculateStudentTermAverage(student.id, 2);
                        const t3 = this.calculateStudentTermAverage(student.id, 3);
                        
                        const t1Avg = t1.termAverage !== null ? t1.termAverage : null;
                        const t2Avg = t2.termAverage !== null ? t2.termAverage : null;
                        const t3Avg = t3.termAverage !== null ? t3.termAverage : null;
                        
                        const validTerms = [t1Avg, t2Avg, t3Avg].filter(a => a !== null);
                        let annualAvg = null;
                        if (validTerms.length > 0) {
                            annualAvg = validTerms.reduce((sum, val) => sum + val, 0) / validTerms.length;
                        }

                        let appreciation = "";
                        if (annualAvg !== null) {
                            if (annualAvg < 10) appreciation = "\u062f\u0648\u0646\u0020\u0627\u0644\u0645\u062a\u0648\u0635\u0637";
                            else if (annualAvg < 13) appreciation = "\u0642\u0631\u064a\u0628\u0020\u0645\u0646\u0020\u0627\u0644\u0645\u062a\u0648\u0635\u0637";
                            else if (annualAvg < 14.5) appreciation = "\u062d\u0633\u0646";
                            else if (annualAvg < 17) appreciation = "\u062c\u064a\u062f\u0020\u062c\u062f\u0627";
                            else appreciation = "\u0645\u0645\u062a\u0627\u0632";
                        }

                        ws_data.push([
                            index + 1, student.lastname, student.firstname, gender,
                            t1Avg !== null ? t1Avg.toFixed(2) : "\u0645\u0639\u0641\u0649",
                            t2Avg !== null ? t2Avg.toFixed(2) : "\u0645\u0639\u0641\u0649",
                            t3Avg !== null ? t3Avg.toFixed(2) : "\u0645\u0639\u0641\u0649",
                            annualAvg !== null ? annualAvg.toFixed(2) : "--",
                            appreciation || "--"
                        ]);
                    }
                });
            } else {
                ws_data.push([
                    "\u0627\u0644\u0631\u0642\u0645", 
                    "\u0627\u0644\u0644\u0642\u0628", 
                    "\u0627\u0644\u0627\u0633\u0645", 
                    "\u0627\u0644\u062c\u0646\u0633", 
                    "\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0020\u0627\u0644\u0645\u0633\u062a\u0645\u0631", 
                    "\u0627\u0644\u0641\u0631\u0636", 
                    "\u0627\u0644\u062e\u062a\u0628\u0627\u0631", 
                    `\u0645\u0639\u062f\u0644\u0020\u0627\u0644\u0641\u0635\u0644\u0020${term}`, 
                    "\u062a\u0642\u062f\u064a\u0631", 
                    "\u0627\u0644\u0625\u0631\u0634\u0627\u062f\u0627\u062a"
                ]);
                classStudents.forEach((student, index) => {
                    const gender = student.gender === "M" ? "\u0630\u0643\u0631" : "\u0623\u0646\u062b\u0649";
                    const isExempted = student.exemptions && student.exemptions[term - 1];
                    
                    if (isExempted) {
                        ws_data.push([
                            index + 1, 
                            student.lastname, 
                            student.firstname, 
                            gender, 
                            "\u0645\u0639\u0641\u0649", 
                            "\u0645\u0639\u0641\u0649", 
                            "\u0645\u0639\u0641\u0649", 
                            "\u0645\u0639\u0641\u0649", 
                            "--", 
                            "--"
                        ]);
                    } else {
                        const results = this.calculateStudentTermAverage(student.id, term);
                        let appreciation = "";
                        let guideline = "";
                        if (results.termAverage !== null) {
                            if (results.termAverage < 10) { 
                                appreciation = "\u062f\u0648\u0646\u0020\u0627\u0644\u0645\u062a\u0648\u0635\u0637"; 
                                guideline = "\u0628\u0630\u0644\u0020\u0645\u062c\u0647\u0648\u062f\u0020\u0623\u0643\u0628\u0631"; 
                            }
                            else if (results.termAverage < 13) { 
                                appreciation = "\u0642\u0631\u064a\u0628\u0020\u0645\u0646\u0020\u0627\u0644\u0645\u062a\u0648\u0635\u0637"; 
                                guideline = "\u0648\u0627\u0635\u0644\u0020\u0627\u0644\u0639\u0645\u0644"; 
                            }
                            else if (results.termAverage <= 14.5) { 
                                appreciation = "\u062d\u0633\u0646"; 
                                guideline = "\u0648\u0627\u0635\u0644"; 
                            }
                            else if (results.termAverage < 17) { 
                                appreciation = "\u062c\u064a\u062f\u0020\u062c\u062f\u0627"; 
                                guideline = "\u0648\u0627\u0635\u0644"; 
                            }
                            else { 
                                appreciation = "\u0645\u0645\u062a\u0627\u0632"; 
                                guideline = "\u0648\u0627\u0635\u0644"; 
                            }
                        }

                        ws_data.push([
                            index + 1, student.lastname, student.firstname, gender,
                            results.ca !== null ? results.ca.toFixed(2) : "--",
                            results.assignment !== null ? results.assignment.toFixed(2) : "--",
                            results.exam !== null ? results.exam.toFixed(2) : "--",
                            results.termAverage !== null ? results.termAverage.toFixed(2) : "--",
                            appreciation || "--",
                            guideline || "--"
                        ]);
                    }
                });
            }

            const ws = XLSX.utils.aoa_to_sheet(ws_data);
            if (this.currentLang === "ar") {
                ws['!views'] = [{ RTL: true }];
            }
            // limit sheet name to 31 characters
            let cleanSheetName = cls.name.substring(0, 31).replace(/[\\/*?\[\]]/g, "");
            XLSX.utils.book_append_sheet(wb, ws, cleanSheetName); 
        });

        const fileName = term === "annual" ? "Smart_Sport_Grades_Annual.xlsx" : `Smart_Sport_Grades_Term_${term}.xlsx`;
        XLSX.writeFile(wb, fileName);
    }

    handleExcelFileSelect(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                
                // Get sheet rows as arrays (header: 1 means raw array of arrays)
                const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                this.parseAndImportExcelRows(rows);
            } catch (err) {
                alert(this.currentLang === "ar" ? "حدث خطأ أثناء قراءة ملف الإكسل. يرجى التأكد من صلاحية الملف وصيغته (xlsx أو xls)." : "Erreur lors de la lecture du fichier Excel.");
            }
        };
        reader.readAsArrayBuffer(file);
    }

    normalizeExcelDate(val) {
        if (val === null || val === undefined || val === "") {
            return "2010-01-01";
        }
        
        // If it's a number (Excel serial date)
        if (typeof val === 'number') {
            const date = new Date(Math.round((val - 25569) * 86400 * 1000));
            if (!isNaN(date.getTime())) {
                return date.toISOString().split('T')[0];
            }
        }
        
        let dateStr = val.toString().trim();
        
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
            return dateStr;
        }
        
        const dmyPattern = /^(\d{1,2})[\/\.-](\d{1,2})[\/\.-](\d{4})$/;
        if (dmyPattern.test(dateStr)) {
            const matches = dateStr.match(dmyPattern);
            let day = matches[1].padStart(2, '0');
            let month = matches[2].padStart(2, '0');
            let year = matches[3];
            return `${year}-${month}-${day}`;
        }
        
        const parsed = new Date(dateStr);
        if (!isNaN(parsed.getTime())) {
            return parsed.toISOString().split('T')[0];
        }
        
        return "2010-01-01";
    }

    parseAndImportExcelRows(rows) {
        const activeClassId = this.activeRosterClassId;
        if (!activeClassId) {
            alert(this.currentLang === "ar" ? "يرجى اختيار القسم أولاً!" : "Sélectionnez une classe.");
            return;
        }

        if (!rows || rows.length < 2) {
            alert(this.getTranslation("invalid-csv-format"));
            return;
        }

        const cleanRows = rows.filter(r => r && r.length > 0 && r.some(cell => cell !== null && cell !== undefined && cell !== ""));
        if (cleanRows.length < 2) {
            alert(this.getTranslation("invalid-csv-format"));
            return;
        }

        const headers = cleanRows[0].map(h => (h || "").toString().trim().toLowerCase());

        let lastnameIdx = -1;
        let firstnameIdx = -1;
        let genderIdx = -1;
        let birthdateIdx = -1;

        headers.forEach((header, idx) => {
            const h = header.trim();
            if (h.includes("اللقب") || h.includes("nom") || h.includes("last") || h.includes("surname")) {
                lastnameIdx = idx;
            } else if (h.includes("الاسم") || h.includes("prenom") || h.includes("prénom") || h.includes("first") || h.includes("name")) {
                firstnameIdx = idx;
            } else if (h.includes("الجنس") || h.includes("genre") || h.includes("gender") || h.includes("sexe") || h.includes("نوع")) {
                genderIdx = idx;
            } else if (h.includes("تاريخ") || h.includes("birth") || h.includes("date") || h.includes("naissance") || h.includes("ميلاد") || h.includes("ازدياد")) {
                birthdateIdx = idx;
            }
        });

        // If we couldn't match, try classic positions 0: first, 1: last, 2: gender, 3: birthdate as fallback
        if (firstnameIdx === -1 && lastnameIdx === -1 && genderIdx === -1) {
            firstnameIdx = 0;
            lastnameIdx = 1;
            genderIdx = 2;
            birthdateIdx = 3;
        }

        if (firstnameIdx === -1 || lastnameIdx === -1 || genderIdx === -1) {
            const rawHeaders = cleanRows[0].map(h => (h || "").toString().trim());
            const errorMsgAr = `تنبيه: لم يتمكن النظام من التعرف على أعمدة الجدول تلقائياً!\n\n` +
                `• الأعمدة المكتشفة في ملفك: [ ${rawHeaders.join(" | ")} ]\n\n` +
                `• يرجى التأكد من تسمية عناوين الأعمدة في السطر الأول كالتالي:\n` +
                `  - الاسم (الاسم الشخصي للتلميذ)\n` +
                `  - اللقب (اللقب العائلي للتلميذ)\n` +
                `  - الجنس (ذكر/أنثى أو M/F)\n` +
                `  - تاريخ الازدياد (تاريخ الميلاد)\n\n` +
                `ملاحظة: يمكن للأعمدة أن تكون بأي ترتيب، شرط تسمية العناوين بوضوح ليتعرف عليها النظام.`;
                
            const errorMsgFr = `Attention : Impossible d'identifier les colonnes automatiquement !\n\n` +
                `• Colonnes détectées : [ ${rawHeaders.join(" | ")} ]\n\n` +
                `• Veuillez nommer vos colonnes dans la première ligne ainsi :\n` +
                `  - Nom (اللقب)\n` +
                `  - Prénom (الاسم)\n` +
                `  - Genre (الجنس : M ou F)\n` +
                `  - Date de naissance (تاريخ الازدياد)`;

            alert(this.currentLang === "ar" ? errorMsgAr : errorMsgFr);
            return;
        }

        let importedCount = 0;
        const currentStudents = this.database.students.filter(s => s.classId === activeClassId);
        let startOrder = currentStudents.length;

        for (let i = 1; i < cleanRows.length; i++) {
            const row = cleanRows[i];
            if (!row || row.length === 0) continue;

            const firstname = (row[firstnameIdx] !== undefined) ? row[firstnameIdx].toString().trim() : "";
            const lastname = (row[lastnameIdx] !== undefined) ? row[lastnameIdx].toString().trim() : "";
            let gender = (row[genderIdx] !== undefined) ? row[genderIdx].toString().toUpperCase().trim() : "M";
            let rawBirthdate = (birthdateIdx !== -1 && row[birthdateIdx] !== undefined) ? row[birthdateIdx] : "";

            if (!firstname && !lastname) continue;

            if (gender.includes("ذ") || gender.includes("M") || gender.includes("GAR") || gender === "ذكر") {
                gender = "M";
            } else {
                gender = "F";
            }

            const birthdate = this.normalizeExcelDate(rawBirthdate);

            const newStudent = {
                id: `std_${Date.now()}_${importedCount}`,
                classId: activeClassId,
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                birthdate: birthdate,
                phone: "",
                exemptions: [false, false, false],
                order: startOrder + importedCount
            };
            this.database.students.push(newStudent);
            importedCount++;
        }

        if (importedCount > 0) {
            this.saveDatabase();
            this.renderActiveViewContent();
            document.getElementById("modal-import-csv").classList.remove("active");
            this.showToast(this.getTranslation("csv-imported-success").replace("{count}", importedCount));
        } else {
            alert(this.getTranslation("invalid-csv-format"));
        }
    }

    /**
     * Complete JSON backups exports
     */
    exportDatabaseBackup() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.database));
        const link = document.createElement("a");
        link.setAttribute("href", dataStr);
        link.setAttribute("download", `Smart_Sport_HighSchoolBackup_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    importDatabaseBackup(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (imported.classes && imported.students) {
                    this.database = imported;
                    this.saveDatabase();
                    this.populateClassDropdowns();
                    this.renderActiveViewContent();
                    this.showToast(this.getTranslation("backup-imported-success"));
                } else {
                    alert(this.getTranslation("invalid-backup-file"));
                }
            } catch (err) {
                alert(this.getTranslation("invalid-backup-file"));
            }
        };
        reader.readAsText(file);
    }

    /**
     * Starts a new academic year: exports backup first, then clears class database
     */
    archiveAndNewYear() {
        if (confirm(this.currentLang === "ar" 
            ? "سيتم تنزيل نسخة احتياطية من هذا العام أولاً تلقائياً، هل تود المتابعة ومسح الأقسام للبدء بسنة جديدة؟" 
            : "Une sauvegarde de cette année sera téléchargée automatiquement. Voulez-vous archiver et démarrer une nouvelle année scolaire ?")) {
            
            // 1. Export backup first
            this.exportDatabaseBackup();
            
            // 2. Factory reset Database state
            this.database.classes = [];
            this.database.students = [];
            this.database.grades = {};
            this.saveDatabase();
            
            this.populateClassDropdowns();
            this.switchTab("dashboard");
            this.showToast(this.currentLang === "ar" ? "تم أرشفة السنة وتطهير قاعدة البيانات!" : "Année archivée et base de données nettoyée !");
        }
    }

    populateSportDropdowns() {
        const indSelects = [
            document.getElementById("act-ind-1"),
            document.getElementById("act-ind-2"),
            document.getElementById("act-ind-3"),
            document.getElementById("scale-select-sport")
        ];
        
        const colSelects = [
            document.getElementById("act-col-1"),
            document.getElementById("act-col-2"),
            document.getElementById("act-col-3")
        ];

        const activeTermConfig = this.database.termActivities || DEFAULT_DATABASE.termActivities;

        indSelects.forEach((sel, idx) => {
            if (!sel) return;
            const savedValue = sel.value || (idx < 3 ? activeTermConfig[`term_${idx + 1}`].individual : "");
            sel.innerHTML = "";
            this.database.sports.individual.forEach(sport => {
                const opt = document.createElement("option");
                opt.value = sport.id;
                opt.textContent = sport.name;
                sel.appendChild(opt);
            });
            if (savedValue && Array.from(sel.options).some(o => o.value === savedValue)) {
                sel.value = savedValue;
            }
        });

        colSelects.forEach((sel, idx) => {
            if (!sel) return;
            const savedValue = sel.value || (idx < 3 ? activeTermConfig[`term_${idx + 1}`].collective : "");
            sel.innerHTML = "";
            this.database.sports.collective.forEach(sport => {
                const opt = document.createElement("option");
                opt.value = sport.id;
                opt.textContent = sport.name;
                sel.appendChild(opt);
            });
            if (savedValue && Array.from(sel.options).some(o => o.value === savedValue)) {
                sel.value = savedValue;
            }
        });

        const logbookSportSelect = document.getElementById("cahier-sport");
        if (logbookSportSelect && logbookSportSelect.tagName === "SELECT") {
            const savedLogbookSport = logbookSportSelect.value;
            logbookSportSelect.innerHTML = "";
            const allSports = [...this.database.sports.individual, ...this.database.sports.collective];
            allSports.forEach(sport => {
                const opt = document.createElement("option");
                opt.value = sport.name; // Use name directly for the logbook text
                opt.textContent = sport.name;
                logbookSportSelect.appendChild(opt);
            });
            if (savedLogbookSport && Array.from(logbookSportSelect.options).some(o => o.value === savedLogbookSport)) {
                logbookSportSelect.value = savedLogbookSport;
            }
        }
    }

    getSportName(sportId, type) {
        if (this.database.sports && this.database.sports[type]) {
            const found = this.database.sports[type].find(s => s.id === sportId);
            if (found) return found.name;
        }
        return this.getTranslation(`sport-${sportId}`);
    }

    toggleNewSportFields(type) {
        const fields = document.getElementById("new-individual-sport-fields");
        if (fields) {
            fields.style.display = type === "individual" ? "block" : "none";
        }
    }

    addNewSport() {
        const type = document.getElementById("new-sport-type").value;
        const name = document.getElementById("new-sport-name").value.trim();
        
        if (!name) {
            alert(this.currentLang === "ar" ? "يرجى كتابة اسم النشاط الرياضي!" : "Veuillez entrer le nom du sport !");
            return;
        }

        const id = `sport_${Date.now()}`;

        if (type === "individual") {
            const unit = document.getElementById("new-sport-unit").value;
            const direction = document.getElementById("new-sport-direction").value;
            const lowerIsBetter = direction === "lower";
            
            const mBest = parseFloat(document.getElementById("new-scale-m-best").value);
            const mWorst = parseFloat(document.getElementById("new-scale-m-worst").value);
            const fBest = parseFloat(document.getElementById("new-scale-f-best").value);
            const fWorst = parseFloat(document.getElementById("new-scale-f-worst").value);

            if (isNaN(mBest) || isNaN(mWorst) || isNaN(fBest) || isNaN(fWorst)) {
                alert(this.currentLang === "ar" ? "يرجى تعبئة جميع قيم السلم للذكور والإناث!" : "Veuillez remplir toutes les valeurs du barème !");
                return;
            }

            const newSport = { id, name, unit, lowerIsBetter };
            this.database.sports.individual.push(newSport);

            // Register in scale
            this.database.scales[id] = {
                M: { best: mBest, worst: mWorst, lowerIsBetter: lowerIsBetter },
                F: { best: fBest, worst: fWorst, lowerIsBetter: lowerIsBetter }
            };
        } else {
            const newSport = { id, name };
            this.database.sports.collective.push(newSport);
        }

        this.saveDatabase();
        this.populateSportDropdowns();
        
        // Reset inputs
        document.getElementById("new-sport-name").value = "";
        document.getElementById("new-scale-m-best").value = "";
        document.getElementById("new-scale-m-worst").value = "";
        document.getElementById("new-scale-f-best").value = "";
        document.getElementById("new-scale-f-worst").value = "";

        this.showToast(this.currentLang === "ar" ? "تم إضافة النشاط الرياضي بنجاح!" : "Sport ajouté avec succès !");
    }

    populateCollectiveRubricTable() {
        const tbody = document.getElementById("collective-rubric-tbody");
        if (tbody) {
            tbody.innerHTML = COLLECTIVE_RUBRIC.map(row => `
                <tr>
                    <td class="text-center font-bold color-gold" style="padding: 10px;">${row.code}</td>
                    <td class="text-center font-bold" style="padding: 10px; font-size:1.1rem; color:var(--color-primary);">${row.score}</td>
                    <td class="text-center" style="padding: 10px;"><span class="badge ${row.score >= 18 ? 'badge-emerald' : row.score >= 14 ? 'badge-blue' : row.score >= 13 ? 'badge-amber' : 'badge-danger'}">${row.appreciation}</span></td>
                    <td style="padding: 10px 15px; text-align: right; line-height: 1.5; font-size: 0.82rem;">${row.indicator}</td>
                </tr>
            `).join("");
        }

        const modalTbody = document.getElementById("modal-collective-rubric-tbody");
        if (modalTbody) {
            modalTbody.innerHTML = COLLECTIVE_RUBRIC.map(row => `
                <tr>
                    <td class="text-center font-bold color-gold" style="padding: 10px;">${row.code}</td>
                    <td class="text-center font-bold" style="padding: 10px; font-size:1.1rem; color:var(--color-primary);">${row.score}</td>
                    <td class="text-center" style="padding: 10px;"><span class="badge ${row.score >= 18 ? 'badge-emerald' : row.score >= 14 ? 'badge-blue' : row.score >= 13 ? 'badge-amber' : 'badge-danger'}">${row.appreciation}</span></td>
                    <td style="padding: 10px 15px; text-align: right; line-height: 1.5; font-size: 0.82rem;">${row.indicator}</td>
                </tr>
            `).join("");
        }
    }

    updatePrintHeader() {
        const schoolName = this.database.metadata.schoolName || "";
        const wilaya = this.database.metadata.wilaya || "";
        const teacherName = this.database.metadata.teacherName || "";
        const academicYear = this.database.metadata.academicYear || "";
        
        const printSchoolName = document.getElementById("print-school-name");
        const printWilaya = document.getElementById("print-school-wilaya");
        const printTeacher = document.getElementById("print-teacher-name");
        const printYear = document.getElementById("print-academic-year");
        
        if (printSchoolName) printSchoolName.textContent = schoolName;
        if (printWilaya) printWilaya.textContent = wilaya;
        if (printTeacher) printTeacher.textContent = teacherName;
        if (printYear) printYear.textContent = academicYear;

        // Fetch current active class and term
        let termLabel = "";
        let className = "";

        if (this.activeTab === "grading") {
            const activeClass = this.database.classes.find(c => c.id === this.activeGradingClassId);
            className = activeClass ? `${activeClass.name} (${activeClass.grade}AS)` : "";
            const activeTerm = document.getElementById("term-select-grading") ? document.getElementById("term-select-grading").value : "1";
            termLabel = activeTerm === "1" ? "الفصل الأول" : activeTerm === "2" ? "الفصل الثاني" : "الفصل الثالث";
        } else if (this.activeTab === "classes") {
            const activeClass = this.database.classes.find(c => c.id === this.activeRosterClassId);
            className = activeClass ? `${activeClass.name} (${activeClass.grade}AS)` : "";
            termLabel = "قائمة تلاميذ القسم الدراسي";
        } else {
            termLabel = "لوحة القيادة العامة";
        }

        const printTerm = document.getElementById("print-term-number");
        const printClass = document.getElementById("print-class-name");
        
        if (printTerm) printTerm.textContent = termLabel;
        if (printClass) printClass.textContent = className;
    }

    renderPedagogicalView() {
        const cahierClassSel = document.getElementById("cahier-class");
        if (cahierClassSel) {
            cahierClassSel.innerHTML = "";
            if (this.database.classes.length === 0) {
                const opt = document.createElement("option");
                opt.value = "";
                opt.textContent = this.currentLang === "ar" ? "-- لا يوجد أقسام --" : "-- Aucune classe --";
                cahierClassSel.appendChild(opt);
            } else {
                this.database.classes.forEach(c => {
                    const opt = document.createElement("option");
                    opt.value = c.name;
                    opt.textContent = `${c.name} (${c.grade}AS)`;
                    cahierClassSel.appendChild(opt);
                });
            }
        }

        const ficheSportSel = document.getElementById("fiche-select-sport");
        if (ficheSportSel && ficheSportSel.children.length === 0) {
            ficheSportSel.innerHTML = "";
            const allSports = [...this.database.sports.individual, ...this.database.sports.collective];
            allSports.forEach(s => {
                const opt = document.createElement("option");
                opt.value = s.id;
                opt.textContent = s.name;
                ficheSportSel.appendChild(opt);
            });
        }

        this.renderCahierJournalList();
        this.updatePortfolioStatus();
        this.renderActiveCycleTable();
    }

    renderCahierJournalList() {
        const tbody = document.getElementById("cahier-journal-tbody");
        if (!tbody) return;
        tbody.innerHTML = "";
        
        const entries = this.database.dailyLogbook || [];
        if (entries.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary); padding: 20px;">${this.currentLang === "ar" ? "لا توجد حصص مسجلة حالياً." : "Aucune séance enregistrée."}</td></tr>`;
            return;
        }

        const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

        sorted.forEach(entry => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td style="text-align: center; font-weight: 700; font-family: 'Outfit', sans-serif;">${entry.date}</td>
                <td style="text-align: center;"><span class="badge-emerald">${entry.className}</span></td>
                <td style="text-align: center; color: var(--text-secondary); font-size: 0.8rem;">${entry.session}</td>
                <td style="text-align: center; font-weight: 700; color: var(--color-primary);">${entry.sport}</td>
                <td style="padding: 10px 15px; line-height: 1.4;">
                    <div style="font-weight: 700; color: #fff; margin-bottom: 4px;">${entry.objective}</div>
                    <div style="font-size: 0.76rem; color: var(--text-secondary); max-width: 450px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${entry.situations}">${entry.situations || ""}</div>
                </td>
                <td style="text-align: center;">
                    <div style="display: flex; gap: 6px; justify-content: center;">
                        <button type="button" class="btn-print-journal" style="padding: 5px 10px; font-size: 0.72rem; display: flex; align-items: center; gap: 4px; background: rgba(16, 185, 129, 0.1); color: var(--color-primary); border: 1px solid var(--color-primary); border-radius: 4px; cursor: pointer;">
                            <svg viewBox="0 0 24 24" style="width: 12px; height: 12px; fill: currentColor;"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                            <span>طباعة</span>
                        </button>
                        <button type="button" class="btn-delete-journal" style="padding: 5px 10px; font-size: 0.72rem; display: flex; align-items: center; gap: 4px; background: rgba(239, 68, 68, 0.1); color: var(--color-danger); border: 1px solid var(--color-danger); border-radius: 4px; cursor: pointer;">
                            <svg viewBox="0 0 24 24" style="width: 12px; height: 12px; fill: currentColor;"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                            <span>حذف</span>
                        </button>
                    </div>
                </td>
            `;

            tr.querySelector(".btn-print-journal").addEventListener("click", () => this.printCahierJournalEntry(entry.id));
            tr.querySelector(".btn-delete-journal").addEventListener("click", () => this.deleteCahierJournalEntry(entry.id));

            tbody.appendChild(tr);
        });
    }

    saveCahierJournalEntry() {
        const date = document.getElementById("cahier-date").value;
        const className = document.getElementById("cahier-class").value;
        const session = document.getElementById("cahier-session").value;
        const sport = document.getElementById("cahier-sport").value.trim();
        const objective = document.getElementById("cahier-objective").value.trim();
        const situations = document.getElementById("cahier-situations").value.trim();
        const evaluation = document.getElementById("cahier-evaluation").value.trim();

        if (!date || !className || !sport || !objective) {
            alert(this.currentLang === "ar" ? "يرجى ملء جميع الحقول المطلوبة!" : "Veuillez remplir tous les champs obligatoires !");
            return;
        }

        const newEntry = {
            id: "journal_" + Date.now(),
            date,
            className,
            session,
            sport,
            objective,
            situations,
            evaluation
        };

        if (!this.database.dailyLogbook) this.database.dailyLogbook = [];
        this.database.dailyLogbook.push(newEntry);
        this.saveDatabase();
        
        document.getElementById("form-add-cahier-entry").reset();
        this.renderPedagogicalView();
        this.showToast(this.currentLang === "ar" ? "تم إضافة الحصة للدفتر اليومي بنجاح!" : "Séance enregistrée dans le cahier journal !");
    }

    deleteCahierJournalEntry(entryId) {
        if (!confirm(this.currentLang === "ar" ? "هل أنت متأكد من حذف هذه الحصة من الدفتر اليومي؟" : "Voulez-vous vraiment supprimer cette séance ?")) {
            return;
        }
        this.database.dailyLogbook = (this.database.dailyLogbook || []).filter(e => e.id !== entryId);
        this.saveDatabase();
        this.renderPedagogicalView();
        this.showToast(this.currentLang === "ar" ? "تم حذف الحصة بنجاح!" : "Séance supprimée !");
    }

    updatePortfolioStatus() {
        const logbookCount = (this.database.dailyLogbook || []).length;
        const cahierStatus = document.getElementById("portfolio-cahier-status");
        if (cahierStatus) {
            cahierStatus.textContent = this.currentLang === "ar" ? `${logbookCount} حصص مضافة` : `${logbookCount} séances`;
        }

        const totalStudents = this.database.students.length;
        let exemptCount = 0;
        this.database.students.forEach(s => {
            const hasExemption = s.exemptions && (s.exemptions[0] || s.exemptions[1] || s.exemptions[2]);
            if (hasExemption) exemptCount++;
        });
        const medicalStatus = document.getElementById("portfolio-medical-status");
        if (medicalStatus) {
            medicalStatus.textContent = this.currentLang === "ar" 
                ? `${exemptCount} معفيين / ${totalStudents - exemptCount} أصحاء` 
                : `${exemptCount} exemptés / ${totalStudents - exemptCount} aptes`;
        }

        let totalGradesCount = 0;
        let gradedCount = 0;
        this.database.classes.forEach(c => {
            const classStudents = this.database.students.filter(s => s.classId === c.id);
            classStudents.forEach(s => {
                totalGradesCount += 3;
                for (let t = 1; t <= 3; t++) {
                    const gradeObj = this.database.grades[`${c.id}_${s.id}_t${t}_summary`];
                    if (gradeObj && gradeObj.value !== undefined && gradeObj.value !== null) {
                        gradedCount++;
                    }
                }
            });
        });
        const percent = totalGradesCount > 0 ? Math.round((gradedCount / totalGradesCount) * 100) : 0;
        const gradesStatus = document.getElementById("portfolio-grades-status");
        if (gradesStatus) {
            gradesStatus.textContent = this.currentLang === "ar" ? `مكتمل بنسبة ${percent}%` : `Complété à ${percent}%`;
        }
    }

    renderActiveCycleTable() {
        const container = document.getElementById("cycle-view-container");
        if (!container) return;

        const grade = document.getElementById("cycle-select-grade").value;
        const term = document.getElementById("cycle-select-term").value;

        let sport1 = "";
        let sport2 = "";
        if (term === "1") {
            sport1 = "سرعة (60م)";
            sport2 = "كرة طائرة";
        } else if (term === "2") {
            sport1 = "القفز الطويل";
            sport2 = "كرة سلة";
        } else {
            sport1 = "رمي الجلة";
            sport2 = "كرة يد";
        }

        const gradeLabel = grade === "1" ? "1AS" : grade === "2" ? "2AS" : "3AS";
        const cycleData = this.getCycleTemplateData(grade, term);

        let html = `
            <div style="background: rgba(0, 0, 0, 0.2); border-radius: 8px; border: 1px solid var(--border-color); padding: 15px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <div>
                    <h3 style="margin: 0; color: #fff; font-size: 1.05rem;">المخطط التعلمي للفصل ${term} - المستوى: ${gradeLabel}</h3>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem; color: var(--text-secondary);">النشاط الأول (فردي): <strong style="color: var(--color-primary);">${sport1}</strong> | النشاط الثاني (جمعي): <strong style="color: var(--color-gold);">${sport2}</strong></p>
                </div>
                <span class="badge-emerald" style="font-size: 0.72rem; padding: 6px 12px; font-weight: 700;">8 حصص مبرمجة (السباعية)</span>
            </div>
            <div class="table-responsive">
                <table class="interactive-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="width: 60px; text-align: center;">الحصة</th>
                            <th style="width: 250px; text-align: right; padding-right: 15px;">الهدف التعلمي الإجرائي</th>
                            <th style="text-align: right; padding-right: 15px;">الوضعيات المقترحة (${sport1})</th>
                            <th style="text-align: right; padding-right: 15px;">الوضعيات المقترحة (${sport2})</th>
                            <th style="width: 160px; text-align: center;">معايير التقويم والنجاح</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        cycleData.forEach(session => {
            html += `
                <tr>
                    <td style="text-align: center; font-weight: 800; color: var(--color-primary); font-family: 'Outfit', sans-serif; font-size: 1.15rem;">${session.num}</td>
                    <td style="font-weight: 700; line-height: 1.4; color: #fff;">${session.objective}</td>
                    <td style="font-size: 0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 10px 15px;">${session.situationsInd}</td>
                    <td style="font-size: 0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 10px 15px;">${session.situationsColl}</td>
                    <td style="text-align: center; font-size: 0.76rem; color: var(--color-gold); font-weight: 700; line-height: 1.35;">${session.criteria}</td>
                </tr>
            `;
        });

        html += `
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = html;
        
        document.getElementById("cycle-select-grade").onchange = () => this.renderActiveCycleTable();
        document.getElementById("cycle-select-term").onchange = () => this.renderActiveCycleTable();
    }

    getCycleTemplateData(grade, term) {
        if (term === "1") {
            return [
                {
                    num: 1,
                    objective: "تقويم تشخيصي للقدرات البدنية وربط الاتصال وتنظيم الأفواج واستكشاف المعالم.",
                    situationsInd: "جري مستمر خفيف، سباقات تتابع قصيرة لحساب زمن رد الفعل الأساسي للتلاميذ.",
                    situationsColl: "تبادلات حرة للكرة باليدين والأصابع لمعرفة مدى تحكم التلاميذ وتوجيههم الحركي.",
                    criteria: "تنظيم الصفوف وتوزيع الأدوار والالتزام بالزي الرياضي."
                },
                {
                    num: 2,
                    objective: "تعديل خطوة الجري والانطلاق السريع من الموقف الصعب + التمرير من الأعلى والاستقبال السليم.",
                    situationsInd: "الجري فوق الشواخص لتعديل خطوة الجري ومد المفاصل. الانطلاق السريع من وضعية الجلوس أو الاستلقاء.",
                    situationsColl: "التمرير من الأعلى بالأصابع بشكل ثنائي مع التركيز على ثني وبسط الركبتين والمرفقين بتناسق حركي.",
                    criteria: "الارتكاز السليم وتأدية الحركات بدون تشنج أو تكتل."
                },
                {
                    num: 3,
                    objective: "تنمية سرعة رد الفعل والاستجابة للإشارات المختلفة + الإرسال من الأسفل وتوجيه الكرة للميدان المقابل.",
                    situationsInd: "سباقات سرعة لمسافة 30م تنطلق باشارات بصرية وسمعية متباينة (تصفيق، شواخص ملونة).",
                    situationsColl: "التدريب على الإرسال السفلي المواجه نحو مناطق محددة بالملعب (الخطوط الخلفية، الأجنحة).",
                    criteria: "دقة التوجيه وزمن الاستجابة الحركية القصير."
                },
                {
                    num: 4,
                    objective: "المحافظة على السرعة القصوى وميكانيكية الجري + استقبال الإرسال السليم وبناء هجوم منظم ثنائي.",
                    situationsInd: "الجري لمسافة 50م مع محاولة الحفاظ على وتيرة الجري القصوى والتركيز على التنفس المنظم العالي.",
                    situationsColl: "استقبل الإرسال بالساعدين وتوجيهه نحو المعد (اللاعب الموزع) لبناء تمريرة هجومية نموذجية.",
                    criteria: "تأمين الاستقبال وبناء المسار الكروي الصاعد للتمرير."
                },
                {
                    num: 5,
                    objective: "تعديل تقنية الوصول لخط النهاية + الهجوم الساحق من الشبكة وتغطية مساحات الدفاع الخلفية.",
                    situationsInd: "الجري السريع لمسافة 60م مع التدريب على الارتماء الطفيف للأمام بالصدر عند خط النهاية.",
                    situationsColl: "التسديد بالضرب الساحق من فوق الشبكة بعد تمريرة عالية من الموزع، مع تموضع زملائه للتغطية.",
                    criteria: "الارتقاء السليم في الضرب وقدرة الدفاع على التغطية."
                },
                {
                    num: 6,
                    objective: "التنسيق الحركي أثناء الجري والتحكم بالسرعة + حائط الصد الفردي والثنائي لوقف الهجمات.",
                    situationsInd: "جري سريع 40م مع القفز فوق حاجزين خفيفين لتعلم التنسيق الحركي وعدم تباطؤ السرعة.",
                    situationsColl: "تدريب لاعبي الشبكة على القفز المشترك بالأيدي الممدودة لتشكيل حائط صد دفاعي منسق.",
                    criteria: "توقيت القفز المشترك وقوة التثبيت للأيدي أمام الشبكة."
                },
                {
                    num: 7,
                    objective: "حصة إدماجية ووضعيات تنافسية وتطبيق القوانين الرسمية للتحكيم والجري الجماعي.",
                    situationsInd: "سباقات سرعة رسمية بنظام التصفيات والمجموعات مع رصد الملاحظات الفردية لكل تلميذ.",
                    situationsColl: "مباريات تطبيقية بين الأفواج الأربعة مع تطبيق كامل لقوانين الكرة الطائرة وتناوب التلاميذ على التحكيم.",
                    criteria: "احترام الزملاء والمنافس والقرارات التحكيمية النبيلة."
                },
                {
                    num: 8,
                    objective: "تقويم تحصيلي نهائي ورصد العلامات والسرعات والمهارات الفردية والجماعية للتلاميذ.",
                    situationsInd: "توقيت رسمي وجري سرعة 60م نهائي لتحديد النقاط بناء على السلم المعتمد بالفصل.",
                    situationsColl: "تقويم مهارات الإرسال والاستقبال والضرب الساحق مع وضع العلامة الجماعية لكل فوج.",
                    criteria: "تحقيق النتائج المستهدفة والانضباط الرياضي."
                }
            ];
        } else if (term === "2") {
            return [
                {
                    num: 1,
                    objective: "تقويم تشخيصي للوثب الطويل ومهارات تنطيط وتمرير كرة السلة.",
                    situationsInd: "الوثب الحر من مكان ثابت والوثب مع خطوات اقتراب قصيرة لتقدير مستويات التلاميذ.",
                    situationsColl: "تمريرات صدرية ومرتدة متبادلة مع الجري بالملعب وتنطيط الكرة باليدين بالتبادل.",
                    criteria: "التموضع وحسن استخدام المساحات بالميدان."
                },
                {
                    num: 2,
                    objective: "تعديل خطوات الاقتراب والارتقاء الصحيح + التنطيط بالكرة وحمايتها باليد المقابلة.",
                    situationsInd: "الركض الايقاعي وتدريب رجل الارتقاء على الضرب القوي للوحة الارتقاء دون تجاوزها.",
                    situationsColl: "التنطيط بالكرة مع وضع الجسم كحاجز لحمايتها من المدافع والالتزام بقوانين المشي بالكرة.",
                    criteria: "دقة ضرب لوحة الارتقاء وحفظ حيازة الكرة."
                },
                {
                    num: 3,
                    objective: "مرحلة الطيران في الهواء للوثب + التمرير من فوق الرأس والإنهاء السهل بالتصويب الثنائي.",
                    situationsInd: "الارتقاء من فوق مسطبة خشبية لزيادة زمن الطيران والتدريب على ضم الركبتين للصدر أثناء الطيران.",
                    situationsColl: "التمرير باليدين من فوق الرأس لتفادي المدافعين، وتصويب الكرة نحو السلة بعد خطوتين (Double-pas).",
                    criteria: "التوازن الحركي في الهواء وسلاسة الإنهاء نحو السلة."
                },
                {
                    num: 4,
                    objective: "وضعية الاستعداد والاندفاع للوثب + الدفاع الفردي (رجل لرجل) وتغطية الممرات الهجومية.",
                    situationsInd: "التركيز على مد الذراعين للأمام والوثب بأقصى زاوية اندفاع ممكنة مع الحفاظ على وضعية الطيران.",
                    situationsColl: "الوقوف في وضعية الدفاع المنخفض والتحرك الجانبي السريع لمنع المهاجم من اختراق المنطقة.",
                    criteria: "امتداد الجسم الكامل في الوثب والانتشار الدفاعي القوي."
                },
                {
                    num: 5,
                    objective: "تنظيم الهبوط السليم لحماية المفاصل + التصويب من المسافات المتوسطة والرميات الحرة.",
                    situationsInd: "التدريب على الهبوط بالقدمين معاً في حفرة الرمل مع ثني الركبتين لامتصاص الصدمة ورمي الجسم للأمام.",
                    situationsColl: "التصويب الثابت نحو السلة من خط الرميات الحرة مع التركيز على قوس مسار الكرة ومتابعتها بالرسغ.",
                    criteria: "أمان الهبوط في الرمل ونسبة نجاح التصويبات الحرة."
                },
                {
                    num: 6,
                    objective: "تنسيق خطوات الاقتراب الكاملة للوثب + التحول السريع من الدفاع للهجوم (المرتدات السريعة).",
                    situationsInd: "تأدية الاقتراب الكامل (12-16 خطوة) بسرعة متزايدة والارتقاء القوي والهبوط الموزون في الرمل.",
                    situationsColl: "قطع الكرة في الدفاع والتمرير الطولي السريع للاعب الجناح لتسجيل نقطة خاطفة (Fast Break).",
                    criteria: "الربط بين سرعة الجري وقوة الارتقاء، وسرعة التحول الجماعي."
                },
                {
                    num: 7,
                    objective: "حصة إدماجية ووضعيات تنافسية وتطبيق القوانين الرسمية للتحكيم والوثب التنافسي.",
                    situationsInd: "مسابقة وثب طويل مصغرة بثلاث محاولات لكل تلميذ بنظام التحكيم الذاتي المتبادل.",
                    situationsColl: "مباريات تطبيقية سريعة لكرة السلة مع تطبيق كامل للأخطاء (المشي، تنطيط مزدوج، 24 ثانية).",
                    criteria: "الروح الرياضية والالتزام بقواعد اللعب النبيل."
                },
                {
                    num: 8,
                    objective: "تقويم تحصيلي نهائي ورصد علامات الوثب الطويل ومهارات كرة السلة الفردية والجماعية.",
                    situationsInd: "قياس وتدوين أفضل محاولة وثب طويل للتلاميذ ورصد العلامات المقابلة في كشف النقاط.",
                    situationsColl: "تقويم مهارات التصويب والدفاع الثنائي الجماعي ورصد العلامات للأفواج المختلفة.",
                    criteria: "تحقيق الكفاءة الحركية والبدنية المستهدفة."
                }
            ];
        } else {
            return [
                {
                    num: 1,
                    objective: "تقويم تشخيصي لمهارة رمي الجلة (دفع) ومبادئ مسك وتمرير كرة اليد.",
                    situationsInd: "رمي جلة خفيفة الوزن من الثبات لتقييم الوضعية الحركية وتناسق الجسم للتلاميذ.",
                    situationsColl: "تمرير واستلام كرة اليد بشكل ثنائي وجري متبادل في خطوط متوازية بالملعب.",
                    criteria: "التموضع السليم وتناسق الحركة."
                },
                {
                    num: 2,
                    objective: "أخذ الوضعية الصحيحة ومسك الجلة باليد + التمرير الكتفي والتنقل المستمر بالكرة.",
                    situationsInd: "تثبيت الجلة تحت الفك وعلى عظمة الترقوة، مع تدوير الجذع للخلف وثني الركبة الخلفية.",
                    situationsColl: "التنقل بالكرة بالملعب مع تنطيط الكرة بشكل قانوني (3 خطوات، تنطيط، 3 خطوات ثم تمرير كروي كتفي).",
                    criteria: "زاوية تثبيت الجلة وسرعة التناقل الكروي المنسق."
                },
                {
                    num: 3,
                    objective: "عملية الدفع القوي للجلة بالذراع + تصويب الكرة نحو المرمى من خارج منطقة 6 أمتار.",
                    situationsInd: "التدريب على دفع الجلة بقوة الأصابع والذراع للأمام والأعلى بزاوية 45 درجة تقريباً دون رميها كركض.",
                    situationsColl: "الجري نحو المرمى والارتقاء فوق خط 6م وتصويب الكرة بقوة نحو زوايا المرمى الأربع.",
                    criteria: "توجيه الجلة لأعلى مسار هجومي، ودقة التسديد في زوايا المرمى."
                },
                {
                    num: 4,
                    objective: "الربط بين تدوير الجسد والدفع + التراجع الدفاعي وتشكيل حائط الصد الدفاعي 6:0.",
                    situationsInd: "الارتكاز على القدم الخلفية، لف الجسد بقوة للأمام لدفع الجلة بالاعتماد على قوة الجذع والذراع معاً.",
                    situationsColl: "التدريب على التراجع السريع عند قطع الكرة وتشكيل جدار دفاعي متماسك على خط 6 أمتار لوقف المصوبين.",
                    criteria: "التحرك الدفاعي المشترك وتنسيق طاقة الدفع للجسم."
                },
                {
                    num: 5,
                    objective: "تقنية الزحف والاقتراب للرمي + الهجوم الخاطف السريع والإنهاء التقني بالارتماء الساقط.",
                    situationsInd: "التدريب على الزحف الخلفي بالقدمين بالدائرة قبل الدفع السريع للجلة للاستفادة من طاقة الحركة.",
                    situationsColl: "بناء هجمات خاطفة عبر الجناح والتسديد بالارتماء الساقط لتقليص المسافة مع الحارس وتجنب المدافع.",
                    criteria: "توازن الجسم أثناء الزحف والارتقاء الموجه للأمام في التسديد."
                },
                {
                    num: 6,
                    objective: "التحكم في دائرة الرمي والاتزان بعد الدفع + الخطط التكتيكية الهجومية البسيطة (التقاطع والتمرير الدائري).",
                    situationsInd: "التدريب على حركة تبديل القدمين بالدائرة بعد خروج الجلة لضمان عدم الخروج وسقوط المحاولة.",
                    situationsColl: "تطبيق خطط التقاطع بين لاعبي الخلف لتشتيت المدافعين وتمرير الكرة للمركز الشاغر للتسجيل.",
                    criteria: "التوازن داخل دائرة الرمي وفعالية الخطط الهجومية."
                },
                {
                    num: 7,
                    objective: "حصة إدماجية ووضعيات تنافسية وتطبيق القوانين الرسمية للتحكيم والرمي الرسمي.",
                    situationsInd: "مسابقة دفع جلة نموذجية بثلاث محاولات لكل تلميذ مع كتابة النتائج ومراقبة الخطوط.",
                    situationsColl: "مباريات تطبيقية بين الأفواج مع تطبيق كامل لقوانين كرة اليد (لمس الكرة بالقدم، خط 6م، المشي، الدفاع العنيف).",
                    criteria: "احترام قرارات التحكيم والمنافسة الشريفة."
                },
                {
                    num: 8,
                    objective: "تقويم تحصيلي نهائي ورصد علامات دفع الجلة ومهارات كرة اليد الفردية والجماعية للتلاميذ.",
                    situationsInd: "تسجيل المسافات الرسمية المحققة من التلاميذ ورصد العلامات المقابلة في كشف النقاط بالفصل.",
                    situationsColl: "تقويم مهارات التسديد والدفاع الفوجي والتحكيم الرياضي ورصد العلامة الجماعية لكل فوج.",
                    criteria: "تحقيق النتائج المستهدفة والانضباط العام للقسم."
                }
            ];
        }
    }

    generateFichePreview() {
        const sportId = document.getElementById("fiche-select-sport").value;
        const grade = document.getElementById("fiche-select-grade").value;
        const sessionNum = document.getElementById("fiche-select-session").value;
        
        const container = document.getElementById("fiche-preview-container");
        if (!container) return;

        const sportName = document.getElementById("fiche-select-sport").options[document.getElementById("fiche-select-sport").selectedIndex]?.text || "كرة اليد";
        const gradeLabel = grade === "1" ? "السنة الأولى ثانوي (1AS)" : grade === "2" ? "السنة الثانية ثانوي (2AS)" : "السنة الثالثة ثانوي (3AS)";

        const ficheData = this.getFicheTemplateData(sportId, grade, sessionNum);

        container.style.display = "block";
        container.innerHTML = `
            <div id="active-fiche-print-area" style="background: var(--bg-card); color: var(--text-main); font-family: 'Cairo', sans-serif; padding: 25px; border-radius: 12px; border: 1.5px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.15); direction: rtl; position: relative;">
                <div class="no-print" style="position: absolute; top: 15px; left: 15px; display: flex; gap: 8px;">
                    <button type="button" id="btn-print-fiche" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.78rem; display: flex; align-items: center; gap: 6px; font-weight: 700; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none;">
                        <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor;"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                        <span>طباعة المذكرة</span>
                    </button>
                </div>

                <div style="border: 2px double var(--border-color); padding: 20px; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1.5px solid var(--border-color); padding-bottom: 12px; margin-bottom: 15px;">
                        <div style="text-align: right; font-size: 0.8rem; line-height: 1.5;">
                            <div><strong>المؤسسة:</strong> <span contenteditable="true">${this.database.metadata.schoolName || ""}</span></div>
                            <div><strong>أستاذ المادة:</strong> <span contenteditable="true">${this.database.metadata.teacherName || ""}</span></div>
                        </div>
                        <div style="text-align: center;">
                            <h2 style="margin: 0; font-size: 1.25rem; color: var(--color-primary); font-weight: 800;" contenteditable="true">بطاقة تحضير بيداغوجية للحصة</h2>
                            <span class="badge-emerald" style="font-size: 0.76rem; font-weight: 700; margin-top: 4px; display: inline-block;">مذكرة تحضير الدرس</span>
                        </div>
                        <div style="text-align: left; font-size: 0.8rem; line-height: 1.5;">
                            <div><strong>المستوى الدراسي:</strong> <span contenteditable="true">${gradeLabel}</span></div>
                            <div><strong>الموسم الدراسي:</strong> <span contenteditable="true">${this.database.metadata.academicYear || ""}</span></div>
                        </div>
                    </div>

                    <div style="background: rgba(255, 255, 255, 0.01); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; margin-bottom: 20px; font-size: 0.85rem; line-height: 1.6;">
                        <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
                            <div style="flex: 1; min-width: 200px;"><strong>النشاط الرياضي:</strong> <span contenteditable="true" style="color: var(--color-primary); font-weight: 700;">${sportName}</span></div>
                            <div style="flex: 1; min-width: 200px;"><strong>المذكرة رقم:</strong> <span contenteditable="true" style="font-family: 'Outfit'; font-weight: 700;">${sessionNum}</span></div>
                            <div style="flex: 1; min-width: 150px;"><strong>زمن الحصة:</strong> <span contenteditable="true">60 دقيقة</span></div>
                        </div>
                        <div style="margin-bottom: 8px;"><strong>الكفاءة الختامية:</strong> <span contenteditable="true" style="color: var(--text-secondary);">${ficheData.finalCompetency}</span></div>
                        <div style="margin-bottom: 8px;"><strong>الكفاءة القاعدية:</strong> <span contenteditable="true" style="color: var(--text-secondary);">${ficheData.baseCompetency}</span></div>
                        <div><strong>الهدف الإجرائي للحصة:</strong> <span contenteditable="true" style="color: var(--color-gold); font-weight: 700;">${ficheData.sessionObjective || sessionNum}</span></div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h3 style="margin: 0 0 10px 0; font-size: 0.95rem; color: var(--color-primary); border-right: 3.5px solid var(--color-primary); padding-right: 8px;">1. المرحلة التحضيرية (التهيئة والإحماء) - المدة: 15 دقيقة</h3>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: right; border: 1px solid var(--border-color);">
                            <thead>
                                <tr style="background: var(--color-primary-soft); color: var(--color-primary);">
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 250px;">وضعيات التعلم المقترحة</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 80px; text-align: center;">الزمن</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px;">طريقة التنظيم وظروف الإنجاز</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 150px; text-align: center;">معايير النجاح والتقويم</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: #fff;">${ficheData.phase1.situations}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; font-weight: 700;">15 دقيقة</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: var(--text-secondary);">${ficheData.phase1.organization}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; color: var(--color-gold); font-weight: 700;">${ficheData.phase1.criteria}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <h3 style="margin: 0 0 10px 0; font-size: 0.95rem; color: var(--color-gold); border-right: 3.5px solid var(--color-gold); padding-right: 8px;">2. المرحلة الرئيسية (التعلم والوضعيات البيداغوجية) - المدة: 40 دقيقة</h3>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: right; border: 1px solid var(--border-color);">
                            <thead>
                                <tr style="background: var(--color-gold-soft); color: var(--color-gold);">
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 250px;">وضعيات التعلم المنهجية</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 80px; text-align: center;">الزمن</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px;">طريقة التنظيم وظروف الإنجاز والوسائل</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 150px; text-align: center;">معايير النجاح والتقويم</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: #fff;">${ficheData.phase2.situations}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; font-weight: 700;">40 دقيقة</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: var(--text-secondary);">${ficheData.phase2.organization}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; color: var(--color-primary); font-weight: 700;">${ficheData.phase2.criteria}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h3 style="margin: 0 0 10px 0; font-size: 0.95rem; color: var(--color-blue); border-right: 3.5px solid var(--color-blue); padding-right: 8px;">3. المرحلة الختامية (التقييم والاسترخاء) - المدة: 05 دقائق</h3>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: right; border: 1px solid var(--border-color);">
                            <thead>
                                <tr style="background: var(--color-blue-soft); color: var(--color-blue);">
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 250px;">وضعيات التعلم المقترحة</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 80px; text-align: center;">الزمن</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px;">طريقة التنظيم وظروف الإنجاز</th>
                                    <th style="border: 1px solid var(--border-color); padding: 6px; width: 150px; text-align: center;">معايير النجاح والتقويم</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: #fff;">${ficheData.phase3.situations}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; font-weight: 700;">05 دقائق</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; line-height: 1.45; vertical-align: top; color: var(--text-secondary);">${ficheData.phase3.organization}</td>
                                    <td contenteditable="true" style="border: 1px solid var(--border-color); padding: 8px; text-align: center; vertical-align: middle; color: var(--color-gold); font-weight: 700;">${ficheData.phase3.criteria}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 35px; border-top: 1.5px solid var(--border-color); padding-top: 15px; font-size: 0.82rem;">
                        <div style="text-align: right; flex: 1;">
                            <strong>إمضاء أستاذ المادة:</strong>
                            <div style="height: 45px;"></div>
                        </div>
                        <div style="text-align: left; flex: 1;">
                            <strong>إمضاء السيد ناظر المؤسسة:</strong>
                            <div style="height: 45px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("btn-print-fiche").addEventListener("click", () => this.printActiveFiche(sportName, gradeLabel, sessionNum, ficheData));
    }

    getFicheTemplateData(sportId, grade, sessionNum) {
        let finalCompetency = "تكيف وترشيد الاستجابات الحركية حسب صيغة وشكل المواجهة في وضعيات متعلقة بالمسافة، بالشدة، بالمدة، وبالفضاء.";
        let baseCompetency = "تقبل المواجهة فرديا وجماعيا والمشاركة الفعالة لتحقيق الفوز أو تحسين نتيجة رياضية باحترام قواعد اللعب النظيفة.";
        
        let sessionObjective = "";
        let p1Situations = "";
        let p1Org = "";
        let p1Crit = "";

        let p2Situations = "";
        let p2Org = "";
        let p2Crit = "";

        let p3Situations = "";
        let p3Org = "";
        let p3Crit = "";

        const num = parseInt(sessionNum);

        if (sportId === "handball" || sportId.includes("hand")) {
            if (num === 1) {
                sessionObjective = "أن يتعلم التلميذ كيفية التحكم في الكرة ومختلف تقنيات التعامل معها بدقة.";
                p1Situations = "إحماء عام: جري خفيف حول الملعب مع حركات تنفس مرافقة (5د).<br>إحماء خاص: الجري مع تدوير المرفقين والكتفين، تمرير خفيف للكرة باليدين بشكل ثنائي (10د).";
                p1Org = "الوقوف في صفوف متوازية، تناقل الكرة بمسافة 3 أمتار.";
                p1Crit = "رفع نبض القلب بشكل متدرج لتفادي الإصابات البدنية.";
                
                p2Situations = "ت1: تقسيم اللاعبين إلى 04 أفواج لممارسة التكيف الفردي مع الكرة (تنطيط، قذف وتلقي) (25د).<br>ت2: لعبة التمريرات العشر في نصف ملعب دون تداخل أو ارتكاب أخطاء المشي (25د).<br>ت3: منافسة تطبيقية مصغرة بين الأفواج مع فرض تمرير الكرة ثلاث مرات على الأقل قبل التسديد (30د).";
                p2Org = "استخدام ملعب كرة اليد، 4 كرات، صفارات، شواخص ملونة لتحديد اتجاه اللعب.";
                p2Crit = "عدم سقوط الكرة على الأرض، المحافظة على الانتشار الجيد والتنافس الإيجابي.";
                
                p3Situations = "العودة إلى الحالة الطبيعية: جري خفيف حول الملعب ينتهي بمشي هادئ (10د).<br>مناقشة إنجازات الحصة ورصد الأخطاء التقنية الملاحظة، التحية الرياضية والانصراف (10د).";
                p3Org = "التجمع وسط الميدان على شكل مربع مفتوح والالتزام بهدوء تام.";
                p3Crit = "استعادة النبض الهادئ الطبيعي والتنفس المنتظم.";
            } else if (num === 2) {
                sessionObjective = "أن يبني التلميذ تبادل كروي سريع للوصول إلى منطقة الخصم والإنهاء بالتصويب الكتفي.";
                p1Situations = "إحماء عام: جري حول الملعب مع لمس الخطوط الجانبية (5د).<br>إحماء خاص: تمرير الكرة باليد من فوق الرأس ثنائياً وجري جانبي بالملعب (10د).";
                p1Org = "الانتشار في خطوط هجومية متبادلة.";
                p1Crit = "الربط الحركي وسرعة رد الفعل.";
                
                p2Situations = "ت1: الجري بالكرة في مجموعات ثلاثية مع تمرير واستقبال سريع كتفي في خطوط متوازية (25د).<br>ت2: التمرين الهجومي المنظم: تمرير الكرة للمحور ثم للجناح والتصويب نحو المرمى من خارج خط 6 أمتار (25د).<br>ت3: منافسة تطبيقية بين الأفواج مع التركيز على بناء المرتدات السريعة (Fast Break) (30د).";
                p2Org = "تقسيم الملعب لنصفين، كرات يد حجم مناسب، شواخص عند خط 6م لتحديد زوايا التسديد.";
                p2Crit = "دقة التمرير أثناء الحركة والارتقاء السليم قبل التصويب.";
                
                p3Situations = "مشي هادئ مع استطالات عضلية للكتفين والأطراف السفلية (10د).<br>تقييم الحصة وتوجيهات الأستاذ بخصوص التحكم الفضائي، التحية والانصراف (10د).";
                p3Org = "الوقوف في مربع مفتوح والهدوء.";
                p3Crit = "استرخاء عضلات الجسم واستعادة الحيوية.";
            } else {
                sessionObjective = "تحسين التماسك الدفاعي وتغطية الفراغات بالاعتماد على التراجع المشترك 6:0.";
                p1Situations = "إحماء عام: جري متنوع سريع وتباطئي حسب إشارة الصافرة (5د).<br>إحماء خاص: حركات الدفاع الجانبية والوثب للاعلى لحظر الكرة (10د).";
                p1Org = "الاصطفاف على خط 9 أمتار.";
                p1Crit = "الجهد المنسق واليقظة البدنية.";
                
                p2Situations = "ت1: حركة دفاعية جماعية متناسقة للاعبي خط 6 أمتار بالتحرك يميناً ويساراً باتجاه موجه الكرة (25د).<br>ت2: وضعية هجوم ضد دفاع: 5 مهاجمين ضد 4 مدافعين يتدربون على إغلاق ممرات التمرير (25د).<br>ت3: منافسة بين الأفواج مع مكافأة الدفاع الناجح بنقطة إضافية (30د).";
                p2Org = "استخدام نصف الملعب، شواخص، كرات.";
                p2Crit = "التنسيق الجماعي وتماسك خط الدفاع لمنع المهاجم من التسديد.";
                
                p3Situations = "المشي والتمدد العضلي وتمارين التنفس العميق (شهيق وزفير) (10د).<br>ملاحظات ختامية للتحضير البيداغوجي للحصة القادمة، التحية والانصراف (10د).";
                p3Org = "تجمع التلاميذ بهدوء حول أستاذ المادة.";
                p3Crit = "خفض الجهد وتوازن النبض.";
            }
        } else if (sportId === "volleyball" || sportId.includes("volley")) {
            sessionObjective = "أن يؤدي التلميذ التمرير السليم بالأصابع من الأعلى وبناء اللمسة الأولى في وضعيات استقبال الإرسال.";
            p1Situations = "إحماء عام: الجري حول الميدان مع ثني الركبتين ولمس الأرض بالتبادل (5د).<br>إحماء خاص: تمرير الكرة للأعلى فردياً بالأصابع والتقاطها، حركات ليونة للرسغ والأصابع (10د).";
            p1Org = "الوقوف في مربع مفتوح، كرات طائرة لكل تلميذين.";
            p1Crit = "تهيئة مفاصل اليد والرسغ للكرات المرتدة.";
            
            p2Situations = "ت1: تمرير واستلام الكرة من الأعلى بالأصابع ثنائياً فوق الشبكة بشكل متبادل (30د).<br>ت2: استقبال الإرسال من الميدان المقابل بالساعدين وتوجيهه للاعب الموزع في المركز 3 (20د).<br>ت3: منافسة تطبيقية بنقاط حقيقية مع الالتزام باللمسات الثلاث لكل فوج قبل العبور (30د).";
            p2Org = "ملعب كرة طائرة، شبكة مثبتة بالارتفاع الرسمي، كرات طائرة، صافرة.";
            p2Crit = "ملامسة الكرة بالأصابع فقط في التمرير العلوي وتأمين الاستقبال بالساعدين.";
            
            p3Situations = "تمارين استرخاء خفيفة للجذع والذراعين مع المشي الهادئ (10د).<br>مناقشة الأخطاء التحكيمية وقواعد التناوب في الملعب، التحية والانصراف (10د).";
            p3Org = "الوقوف حول خط منتصف الشبكة بهدوء.";
            p3Crit = "انخفاض سرعة نبضات القلب والتهوية الجيدة.";
        } else if (sportId === "basketball" || sportId.includes("basket")) {
            sessionObjective = "إتقان التمرير الصدري أثناء الحركة وإنهاء الهجمات بالارتكاز السليم وتصويب Double-pas.";
            p1Situations = "إحماء عام: جري بالملعب مع تغيير الاتجاه السريع عند سماع الصافرة (5د).<br>إحماء خاص: الجري بتنطيط الكرة بالتبادل باليدين اليمنى واليسرى (10د).";
            p1Org = "توزيع التلاميذ على نصف ملعب كرة السلة.";
            p1Crit = "التحكم في الكرة والتنقل بدون ارتكاب خطأ المشي.";
            
            p2Situations = "ت1: الجري الثنائي المتوازي وتمرير الكرة صدرياً بسرعة مع الحفاظ على مسافة التباعد (25د).<br>ت2: التدريب على خطوات الارتقاء للـ Double-pas (يمين-يسار-ارتقاء بالقدم اليسرى والتصويب باليد اليمنى) (25د).<br>ت3: مباراة تطبيقية بين فوجين مع شرط إنهاء الهجمات عبر الارتداد الهجومي والتصويب السريع (30د).";
            p2Org = "سلات كرة السلة، كرات مقاس مناسب، شواخص لتحديد خطوات الارتقاء.";
            p2Crit = "أخذ خطوتين فقط قبل الارتقاء بالكرة والتصويب الموزون باللوحة الخلفية.";
            
            p3Situations = "مشي حول السلة وتمارين استرخاء الذراعين وأسفل الظهر (10د).<br>مناقشة دقة التصويبات والأخطاء التقنية للحصة، التحية والانصراف (10د).";
            p3Org = "تجمع في منتصف الدائرة الكبرى للملعب.";
            p3Crit = "العودة للراحة البدنية التامة.";
        } else if (sportId === "speed-run" || sportId.includes("speed") || sportId.includes("سرعة")) {
            sessionObjective = "تحسين رد الفعل والانطلاق الحركي السريع من مكعبات البدء (الارتكاز السليم).";
            p1Situations = "إحماء عام: جري مستمر خفيف حول المضمار (5د).<br>إحماء خاص: تمديدات عضلية للرجلين والفخذين، تمرين رفع الركبتين للأعلى بسرعة (10د).";
            p1Org = "الاصطفاف في حارات مضمار الجري.";
            p1Crit = "الوصول بالجاهزية العضلية لسرعة الانفجار الحركي.";
            
            p2Situations = "ت1: التدريب على وضعية الانطلاق الثلاثي (خذ مكانك، استعد، انطلق) من مكعبات البدء (25د).<br>ت2: سباقات سرعة قصيرة (20م ثم 30م) لحساب زمن الاستجابة للإشارات السمعية المتنوعة (25د).<br>ت3: مسابقة رسمية في الجري السريع لمسافة 60م بنظام التصفيات الثنائية مع قياس التوقيت (30د).";
            p2Org = "مضمار الجري، ميقاتي رقمي، صافرة، حارات محددة.";
            p2Crit = "الامتداد الكامل للجسم عند الانطلاق وعدم رفع الجذع مبكراً.";
            
            p3Situations = "جري خفيف لخفض الجهد وتمارين استطالة للعضلات الخلفية للفخذ (15د).<br>تسجيل التوقيتات الفردية وتوجيه الملاحظات، التحية والانصراف (5د).";
            p3Org = "التجمع بهدوء على الرمل أو العشب.";
            p3Crit = "عودة النبض لمعدلاته الهادئة.";
        } else {
            sessionObjective = `التحكم في المهارات الأساسية وتطبيق الجوانب التقنية في نشاط ${sportName}.`;
            p1Situations = "إحماء عام: جري خفيف وتغيير الاتجاه بالملعب (5د).<br>إحماء خاص: تمرينات مرونة واستطالة للمجموعات العضلية الكبرى المشاركة بالدرس (10د).";
            p1Org = "الاصطفاف في مربع مفتوح والهدوء.";
            p1Crit = "الاستعداد البدني والنفسي الكامل للتمرين.";
            
            p2Situations = `ت1: تمرين تمهيدي لشرح المهارة الأساسية لنشاط ${sportName} بالخطوات التقنية المناسبة (30د).<br>ت2: تطبيق فردي وجماعي للمهارة في ظروف إنجاز محددة ومدرجة الصعوبة (25د).<br>ت3: مسابقة مصغرة وتطبيق القوانين التحكيمية الرسمية للنشاط لتعزيز التنافس الإيجابي (25د).`;
            p2Org = "استخدام العتاد المتوفر بالمؤسسة (شواخص، ميقاتي، كرات، أشرطة قياس).";
            p2Crit = "تطبيق الخطوات الفنية بدقة والمحافظة على الانضباط والروح الرياضية.";
            
            p3Situations = "مشي مهدئ حول الملعب واستطالات عضلية (10د).<br>استعراض النتائج وتسجيل الملاحظات، التحية الرياضية والانصراف (10د).";
            p3Org = "تجمع في مربع مفتوح والتزام الهدوء.";
            p3Crit = "خفض النبض لضمان راحة التلاميذ الفورية.";
        }

        return {
            finalCompetency,
            baseCompetency,
            sessionObjective,
            phase1: {
                situations: p1Situations,
                organization: p1Org,
                criteria: p1Crit
            },
            phase2: {
                situations: p2Situations,
                organization: p2Org,
                criteria: p2Crit
            },
            phase3: {
                situations: p3Situations,
                organization: p3Org,
                criteria: p3Crit
            }
        };
    }

    printActiveFiche(sportName, gradeLabel, sessionNum, ficheData) {
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "مديرية التربية لولاية الجزائر غرب";
        const academicYear = this.database.metadata.academicYear || "";

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>مذكرة تحضير الحصة - ${sportName}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        background: #fff;
                        color: #000;
                        padding: 20px;
                        margin: 0;
                        direction: rtl;
                    }
                    .fiche-container {
                        border: 3px double #000;
                        padding: 20px;
                        border-radius: 8px;
                        max-width: 900px;
                        margin: 0 auto;
                        box-sizing: border-box;
                    }
                    .header-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    .header-table td {
                        padding: 5px;
                        font-size: 0.85rem;
                        vertical-align: top;
                    }
                    .title-doc {
                        font-size: 1.35rem;
                        font-weight: 800;
                        text-align: center;
                        margin: 0;
                    }
                    .meta-box {
                        border: 1.5px solid #000;
                        padding: 10px;
                        border-radius: 6px;
                        margin-bottom: 20px;
                        font-size: 0.85rem;
                        line-height: 1.6;
                    }
                    .meta-grid {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;
                        border-bottom: 1px solid #ddd;
                        padding-bottom: 8px;
                    }
                    .section-title {
                        font-size: 1rem;
                        font-weight: 700;
                        margin: 15px 0 8px 0;
                        background: #f3f4f6;
                        padding: 5px 10px;
                        border-right: 4px solid #000;
                    }
                    .phase-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 0.8rem;
                        text-align: right;
                        margin-bottom: 15px;
                    }
                    .phase-table th, .phase-table td {
                        border: 1.5px solid #000;
                        padding: 8px;
                        vertical-align: top;
                    }
                    .phase-table th {
                        background: #f3f4f6;
                        font-weight: 700;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.9rem;
                    }
                    .signatures div {
                        width: 45%;
                    }
                    @media print {
                        body { padding: 0; }
                        .no-print { display: none; }
                        .fiche-container { border: 2px solid #000; }
                    }
                </style>
            </head>
            <body lang="fr">
                <div class="fiche-container">
                    <table class="header-table">
                        <tr>
                            <td style="width: 35%; text-align: right;">
                                <div><strong>الجمهورية الجزائرية الديمقراطية الشعبية</strong></div>
                                <div>وزارة التربية الوطنية</div>
                                <div>${wilaya}</div>
                                <div><strong>المؤسسة:</strong> ${schoolName}</div>
                            </td>
                            <td style="width: 30%; text-align: center; vertical-align: middle;">
                                <h1 class="title-doc">مذكرة بيداغوجية تربوية</h1>
                                <div style="font-size: 0.9rem; font-weight: 700; margin-top: 5px;">مذكرة رقم: ${sessionNum}</div>
                            </td>
                            <td style="width: 35%; text-align: left;">
                                <div><strong>أستاذ المادة:</strong> ${teacherName}</div>
                                <div><strong>المستوى:</strong> ${gradeLabel}</div>
                                <div><strong>الموسم الدراسي:</strong> ${academicYear}</div>
                                <div><strong>زمن الحصة:</strong> 120 دقيقة (ساعتان)</div>
                            </td>
                        </tr>
                    </table>

                    <div class="meta-box">
                        <div class="meta-grid">
                            <div><strong>النشاط المختار:</strong> <span style="font-weight: 700;">${sportName}</span></div>
                            <div><strong>الهدف الإجرائي للحصة:</strong> <span style="font-weight: 700;">${ficheData.sessionObjective}</span></div>
                        </div>
                        <div><strong>الكفاءة الختامية:</strong> ${ficheData.finalCompetency}</div>
                        <div style="margin-top: 5px;"><strong>الكفاءة القاعدية:</strong> ${ficheData.baseCompetency}</div>
                    </div>

                    <div class="section-title">1. المرحلة التحضيرية (التهيئة والإحماء) - المدة: 20 دقيقة</div>
                    <table class="phase-table">
                        <thead>
                            <tr>
                                <th style="width: 35%;">وضعيات التعلم المقترحة</th>
                                <th style="width: 45%;">طريقة التنظيم وظروف الإنجاز</th>
                                <th style="width: 20%; text-align: center;">معايير النجاح والتقويم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="line-height: 1.5;">${ficheData.phase1.situations}</td>
                                <td style="line-height: 1.5;">${ficheData.phase1.organization}</td>
                                <td style="text-align: center; vertical-align: middle; font-weight: 700;">${ficheData.phase1.criteria}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="section-title">2. المرحلة الرئيسية (التعلم والوضعيات) - المدة: 80 دقيقة</div>
                    <table class="phase-table">
                        <thead>
                            <tr>
                                <th style="width: 35%;">وضعيات التعلم المقترحة</th>
                                <th style="width: 45%;">طريقة التنظيم وظروف الإنجاز</th>
                                <th style="width: 20%; text-align: center;">معايير النجاح والتقويم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="line-height: 1.5;">${ficheData.phase2.situations}</td>
                                <td style="line-height: 1.5;">${ficheData.phase2.organization}</td>
                                <td style="text-align: center; vertical-align: middle; font-weight: 700;">${ficheData.phase2.criteria}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="section-title">3. المرحلة الختامية (التقييم والاسترخاء) - المدة: 20 دقيقة</div>
                    <table class="phase-table">
                        <thead>
                            <tr>
                                <th style="width: 35%;">وضعيات التعلم المقترحة</th>
                                <th style="width: 45%;">طريقة التنظيم وظروف الإنجاز</th>
                                <th style="width: 20%; text-align: center;">معايير النجاح والتقويم</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="line-height: 1.5;">${ficheData.phase3.situations}</td>
                                <td style="line-height: 1.5;">${ficheData.phase3.organization}</td>
                                <td style="text-align: center; vertical-align: middle; font-weight: 700;">${ficheData.phase3.criteria}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="signatures">
                        <div style="text-align: right;">
                            <strong>إمضاء أستاذ المادة:</strong>
                        </div>
                        <div style="text-align: left;">
                            <strong>إمضاء السيد ناظر المؤسسة:</strong>
                        </div>
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    printCahierJournalEntry(entryId) {
        const entry = (this.database.dailyLogbook || []).find(e => e.id === entryId);
        if (!entry) return;

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "مديرية التربية لولاية الجزائر غرب";
        const academicYear = this.database.metadata.academicYear || "";

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>مذكرة الوثائق البيداغوجية - ${entry.date}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        padding: 30px;
                        background: #fff;
                        color: #000;
                        direction: rtl;
                    }
                    .sheet {
                        border: 2px solid #000;
                        padding: 25px;
                        border-radius: 8px;
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .header-box {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 2px solid #000;
                        padding-bottom: 15px;
                        margin-bottom: 20px;
                        font-size: 0.85rem;
                        line-height: 1.6;
                    }
                    .title-doc {
                        font-size: 1.4rem;
                        font-weight: 800;
                        text-align: center;
                        margin: 0 0 10px 0;
                    }
                    .content-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 15px;
                    }
                    .content-table td {
                        border: 1px solid #000;
                        padding: 10px 15px;
                        vertical-align: top;
                        line-height: 1.6;
                    }
                    .label-td {
                        width: 180px;
                        font-weight: 700;
                        background: #f3f4f6;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.9rem;
                    }
                </style>
            </head>
            <body lang="fr">
                <div class="sheet">
                    <div class="header-box">
                        <div>
                            <div>الجمهورية الجزائرية الديمقراطية الشعبية</div>
                            <div>وزارة التربية الوطنية</div>
                            <div>${wilaya}</div>
                            <div><strong>المؤسسة:</strong> ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div><strong>أستاذ المادة:</strong> ${teacherName}</div>
                            <div><strong>الموسم الدراسي:</strong> ${academicYear}</div>
                            <div><strong>تاريخ اليوم:</strong> <span style="font-family: 'Outfit'; font-weight: 700;">${entry.date}</span></div>
                        </div>
                    </div>

                    <h1 class="title-doc">ورقة الوثائق البيداغوجية ونصوص الحصص</h1>

                    <table class="content-table">
                        <tr>
                            <td class="label-td">القسم الدراسي المبرمج</td>
                            <td style="font-weight: 700; font-size: 1.05rem; color: #10b981;">${entry.className}</td>
                        </tr>
                        <tr>
                            <td class="label-td">الحصة والتوقيت</td>
                            <td style="font-family: 'Outfit'; font-weight: 700;">${entry.session}</td>
                        </tr>
                        <tr>
                            <td class="label-td">النشاط الرياضي المبرمج</td>
                            <td style="font-weight: 700;">${entry.sport}</td>
                        </tr>
                        <tr>
                            <td class="label-td">الهدف الإجرائي للحصة</td>
                            <td style="font-weight: 700; color: #3b82f6;">${entry.objective}</td>
                        </tr>
                        <tr>
                            <td class="label-td">ملخص الوضعيات المنجزة</td>
                            <td>${entry.situations ? entry.situations.replace(/\n/g, "<br>") : "---"}</td>
                        </tr>
                        <tr>
                            <td class="label-td">التقييم الذاتي والملاحظات</td>
                            <td style="font-style: italic; color: #4b5563;">${entry.evaluation ? entry.evaluation.replace(/\n/g, "<br>") : "---"}</td>
                        </tr>
                    </table>

                    <div class="signatures">
                        <div><strong>إمضاء أستاذ المادة:</strong></div>
                        <div><strong>إمضاء السيد ناظر المؤسسة:</strong></div>
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    printActiveCycle() {
        const grade = document.getElementById("cycle-select-grade").value;
        const term = document.getElementById("cycle-select-term").value;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "مديرية التربية لولاية الجزائر غرب";
        const academicYear = this.database.metadata.academicYear || "";

        let sport1 = "";
        let sport2 = "";
        if (term === "1") {
            sport1 = "سرعة (60م)";
            sport2 = "كرة طائرة";
        } else if (term === "2") {
            sport1 = "القفز الطويل";
            sport2 = "كرة سلة";
        } else {
            sport1 = "رمي الجلة";
            sport2 = "كرة يد";
        }

        const gradeLabel = grade === "1" ? "السنة الأولى ثانوي (1AS)" : grade === "2" ? "السنة الثانية ثانوي (2AS)" : "السنة الثالثة ثانوي (3AS)";
        const cycleData = this.getCycleTemplateData(grade, term);

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>المخطط والوحدة التعلمية - الفصل ${term}</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        padding: 20px;
                        background: #fff;
                        color: #000;
                        direction: rtl;
                    }
                    .container {
                        border: 2px solid #000;
                        padding: 20px;
                        border-radius: 8px;
                        max-width: 1000px;
                        margin: 0 auto;
                    }
                    .header {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 2px solid #000;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        font-size: 0.85rem;
                        line-height: 1.6;
                    }
                    .title {
                        font-size: 1.4rem;
                        font-weight: 800;
                        text-align: center;
                        margin: 0 0 10px 0;
                    }
                    .cycle-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 0.8rem;
                        text-align: right;
                    }
                    .cycle-table th, .cycle-table td {
                        border: 1.5px solid #000;
                        padding: 8px;
                        vertical-align: top;
                        line-height: 1.5;
                    }
                    .cycle-table th {
                        background: #f3f4f6;
                        font-weight: 700;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 35px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.9rem;
                    }
                </style>
            </head>
            <body lang="fr">
                <div class="container">
                    <div class="header">
                        <div>
                            <div>الجمهورية الجزائرية الديمقراطية الشعبية</div>
                            <div>وزارة التربية الوطنية</div>
                            <div>${wilaya}</div>
                            <div><strong>المؤسسة:</strong> ${schoolName}</div>
                        </div>
                        <div style="text-align: left;">
                            <div><strong>أستاذ المادة:</strong> ${teacherName}</div>
                            <div><strong>الموسم الدراسي:</strong> ${academicYear}</div>
                            <div><strong>المستوى الدراسي:</strong> ${gradeLabel}</div>
                        </div>
                    </div>

                    <h1 class="title">المخطط وبناء الوحدات التعلمية (السباعية المنهجية)</h1>
                    <div style="text-align: center; font-weight: 700; font-size: 1.05rem; margin-bottom: 20px;">
                        الفصل الدراسي: ${term} | النشاط الفردي: ${sport1} | النشاط الجماعي: ${sport2}
                    </div>

                    <table class="cycle-table">
                        <thead>
                            <tr>
                                <th style="width: 50px; text-align: center;">الحصة</th>
                                <th style="width: 220px;">الهدف التعلمي الإجرائي</th>
                                <th>وضعيات التعلم المقترحة (${sport1})</th>
                                <th>وضعيات التعلم المقترحة (${sport2})</th>
                                <th style="width: 140px; text-align: center;">معايير النجاح والتقويم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cycleData.map(session => `
                                <tr>
                                    <td contenteditable="true" style="text-align: center; font-weight: 800; font-size: 1.1rem; vertical-align: middle;">${session.num}</td>
                                    <td contenteditable="true" style="font-weight: 700;">${session.objective}</td>
                                    <td contenteditable="true">${session.situationsInd}</td>
                                    <td contenteditable="true">${session.situationsColl}</td>
                                    <td contenteditable="true" style="text-align: center; font-weight: 700; vertical-align: middle;">${session.criteria}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>

                    <div class="signatures">
                        <div><strong>إمضاء أستاذ المادة:</strong></div>
                        <div><strong>إمضاء السيد ناظر المؤسسة:</strong></div>
                    </div>
                </div>
                <div style="text-align: center; margin: 20px;" class="no-print">
                    <button onclick="window.print()" style="padding: 10px 20px; font-size: 1rem; background: #10b981; color: white; border: none; border-radius: 5px; cursor: pointer; font-family: 'Cairo', sans-serif;">طباعة المخطط</button>
                    <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">يمكنك التعديل على محتوى الجدول مباشرة قبل الطباعة بالنقر على الخانات.</p>
                </div>
                <style>
                    @media print {
                        .no-print { display: none !important; }
                    }
                </style>
                <script>
                    // No automatic print, wait for user to edit and click print.
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    printFullInspectionFile() {
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        const schoolName = this.database.metadata.schoolName || "";
        const teacherName = this.database.metadata.teacherName || "";
        const wilaya = this.database.metadata.wilaya || "مديرية التربية لولاية الجزائر غرب";
        const academicYear = this.database.metadata.academicYear || "";
        const logbook = this.database.dailyLogbook || [];

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="fr" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>الملف البيداغوجي التربوي المتكامل للأستاذ</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Cairo', sans-serif;
                        padding: 0;
                        margin: 0;
                        background: #fff;
                        color: #000;
                        direction: rtl;
                    }
                    .page {
                        padding: 40px;
                        box-sizing: border-box;
                        width: 210mm;
                        min-height: 297mm;
                        margin: 0 auto;
                        position: relative;
                        page-break-after: always;
                    }
                    .cover-page {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        text-align: center;
                        height: 270mm;
                        border: 3px double #000;
                        padding: 30px;
                    }
                    .cover-title {
                        font-size: 2.2rem;
                        font-weight: 800;
                        margin-top: 50px;
                    }
                    .cover-subtitle {
                        font-size: 1.5rem;
                        margin-top: 15px;
                        color: #4b5563;
                    }
                    .cover-meta {
                        border: 2px solid #000;
                        padding: 20px;
                        border-radius: 8px;
                        width: 80%;
                        font-size: 1.15rem;
                        line-height: 1.8;
                        text-align: right;
                        margin-bottom: 50px;
                    }
                    .section-title {
                        font-size: 1.4rem;
                        font-weight: 800;
                        border-bottom: 2.5px solid #000;
                        padding-bottom: 8px;
                        margin-bottom: 20px;
                        text-align: right;
                    }
                    .info-p {
                        font-size: 0.95rem;
                        line-height: 1.8;
                        margin-bottom: 15px;
                        text-align: justify;
                    }
                    .table-data {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 15px;
                        font-size: 0.85rem;
                    }
                    .table-data th, .table-data td {
                        border: 1.5px solid #000;
                        padding: 8px;
                        vertical-align: top;
                        line-height: 1.5;
                    }
                    .table-data th {
                        background: #f3f4f6;
                    }
                    .signatures {
                        display: flex;
                        justify-content: space-between;
                        margin-top: 40px;
                        padding-top: 15px;
                        border-top: 1.5px solid #000;
                        font-size: 0.95rem;
                    }
                </style>
            </head>
            <body lang="fr">
                <div class="page">
                    <div class="cover-page">
                        <div>
                            <div style="font-size: 1.15rem; font-weight: 700;">الجمهورية الجزائرية الديمقراطية الشعبية</div>
                            <div style="font-size: 1.05rem; font-weight: 700; margin-top: 5px;">وزارة التربية الوطنية</div>
                            <div style="font-size: 1rem; margin-top: 5px;">${wilaya}</div>
                        </div>
                        
                        <div>
                            <div class="cover-title">المحفظة التربوية والبيداغوجية المرقمنة</div>
                            <div class="cover-subtitle">أستاذ التربية البدنية والرياضية</div>
                        </div>

                        <div class="cover-meta">
                            <div><strong>أستاذ المادة:</strong> ${teacherName}</div>
                            <div><strong>المؤسسة التربوية:</strong> ${schoolName}</div>
                            <div><strong>الموسم الدراسي:</strong> ${academicYear}</div>
                            <div><strong>حالة المستند:</strong> جاهز للمصادقة والمراجعة التربوية</div>
                        </div>

                        <div style="font-size: 0.85rem; font-style: italic; color: #4b5563;">
                            تم التوليد رقمياً بواسطة منصة Smart Sport الذكية
                        </div>
                    </div>
                </div>

                <div class="page" style="border: 1px solid #ddd; padding: 30px;">
                    <div class="section-title">توجيهات بيداغوجية عامة للتعليم الثانوي</div>
                    <div class="info-p">
                        تعد مادة التربية البدنية والرياضية جزءاً أساسياً من المنظومة التعليمية بالطور الثانوي، وتهدف أساساً إلى ترشيد وتكيف الاستجابات الحركية للتلاميذ وتأهيلهم بدنياً واجتماعياً.
                    </div>
                    <div class="info-p">
                        <strong>التوجيهات الأساسية للتسيير البيداغوجي:</strong>
                        <ul>
                            <li><strong>التحضير المسبق:</strong> يجب على الأستاذ إعداد المذكرات البيداغوجية (بطاقة الحصة الفنية) لكل درس بدقة وتفصيل، مراعياً الفروق الفردية والحالات الطبية الاستثنائية.</li>
                            <li><strong>تسيير الميدان والأمان:</strong> تنظيم التلاميذ بشكل آمن واستخدام الشواخص والعتاد المناسب وتطبيق الإحماء الجيد لتفادي حدوث إصابات أثناء الأداء الحركي العالي.</li>
                            <li><strong>الدفتر اليومي:</strong> يعد الدفتر اليومي وثيقة إدارية بيداغوجية رسمية يسجل فيها الأستاذ تاريخ ونصوص الحصص، وأهدافها الإجرائية، وملخص الوضعيات المنجزة مع التقييم الذاتي المباشر بعد انتهاء كل حصة.</li>
                            <li><strong>التقييم المستمر والنتائج:</strong> الالتزام بالسلالم الرسمية المعتمدة في تقييم الألعاب الجماعية والنشاط الفردي المبرمج، وتدوين الحضور والغيابات بصفة دورية لضمان مصداقية النتائج الفردية.</li>
                        </ul>
                    </div>
                    <div class="info-p" style="margin-top: 30px;">
                        تخضع هذه المحفظة لرقابة ومصادقة السادة المفتشين التربويين ومديري المؤسسات لتقييم أداء الأستاذ والوقوف على مدى التزامه بالخطط الرسمية المعتمدة من وزارة التربية الوطنية.
                    </div>
                </div>

                <div class="page" style="border: 1px solid #ddd; padding: 30px;">
                    <div class="section-title">سجل دفتر النصوص اليومي للأستاذ (Daily Logbook)</div>
                    <div class="info-p">
                        يحتوي الجدول أدناه على قائمة الحصص والأنشطة المسجلة والموثقة من طرف الأستاذ في الدفتر اليومي الذكي للعام الحالي:
                    </div>
                    <table class="table-data">
                        <thead>
                            <tr>
                                <th style="width: 90px; text-align: center;">التاريخ</th>
                                <th style="width: 80px; text-align: center;">القسم</th>
                                <th style="width: 100px; text-align: center;">النشاط</th>
                                <th>الهدف الإجرائي والوضعيات التعلمية المنجزة</th>
                                <th style="width: 140px; text-align: center;">ملاحظات الأستاذ والتقييم</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${logbook.length === 0 ? `
                                <tr><td colspan="5" style="text-align: center; padding: 20px;">لا توجد حصص مسجلة بالدفتر اليومي حالياً.</td></tr>
                            ` : logbook.map(e => `
                                <tr>
                                    <td style="text-align: center; font-weight: 700;">${e.date}</td>
                                    <td style="text-align: center;">${e.className}</td>
                                    <td style="text-align: center; font-weight: 700; color: #10b981;">${e.sport}</td>
                                    <td>
                                        <strong>الهدف:</strong> ${e.objective}<br>
                                        <strong>الوضعيات:</strong> ${e.situations || "---"}
                                    </td>
                                    <td style="font-style: italic; color: #374151;">${e.evaluation || "---"}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>

                    <div class="signatures" style="margin-top: 50px;">
                        <div>
                            <strong>إمضاء أستاذ المادة:</strong>
                        </div>
                        <div>
                            <strong>إمضاء السيد ناظر المؤسسة:</strong>
                        </div>
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    toggleFieldTimer() {
        if (this.isTimerRunning) {
            clearInterval(this.timerInterval);
            this.isTimerRunning = false;
            document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "تشغيل المؤقت" : "Démarrer";
            document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
        } else {
            this.isTimerRunning = true;
            document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "إيقاف مؤقت" : "Pause";
            document.getElementById("timer-play-svg").innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
            
            this.timerInterval = setInterval(() => {
                if (this.timerCurrentSeconds > 0) {
                    this.timerCurrentSeconds--;
                    this.updateFieldTimerDisplay();
                } else {
                    clearInterval(this.timerInterval);
                    this.isTimerRunning = false;
                    document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "تشغيل المؤقت" : "Démarrer";
                    document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
                    this.playWhistleSound();
                    this.showToast(this.currentLang === "ar" ? "انتهى وقت المرحلة البيداغوجية!" : "Temps de phase écoulé !");
                }
            }, 1000);
        }
    }

    resetFieldTimer() {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        this.timerCurrentSeconds = this.timerTotalSeconds;
        document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "تشغيل المؤقت" : "Démarrer";
        document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
        this.updateFieldTimerDisplay();
    }

    setupFieldTimerMinutes(mins, label) {
        clearInterval(this.timerInterval);
        this.isTimerRunning = false;
        this.timerTotalSeconds = mins * 60;
        this.timerCurrentSeconds = this.timerTotalSeconds;
        this.timerLabel = label;
        
        document.getElementById("field-timer-label").textContent = label;
        document.getElementById("timer-toggle-text").textContent = this.currentLang === "ar" ? "تشغيل المؤقت" : "Démarrer";
        document.getElementById("timer-play-svg").innerHTML = `<path d="M8 5v14l11-7z"/>`;
        
        this.updateFieldTimerDisplay();
    }

    updateFieldTimerDisplay() {
        const mins = Math.floor(this.timerCurrentSeconds / 60);
        const secs = this.timerCurrentSeconds % 60;
        const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        document.getElementById("field-timer-time").textContent = formatted;

        const ring = document.getElementById("timer-progress-ring");
        if (ring) {
            const circumference = 640;
            const percent = this.timerCurrentSeconds / this.timerTotalSeconds;
            const offset = circumference * (1 - percent);
            ring.style.strokeDashoffset = offset;
        }
    }

    playWhistleSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            
            const soundTypeEl = document.getElementById("timer-sound-type");
            const soundType = soundTypeEl ? soundTypeEl.value : "whistle";
            
            const lengthEl = document.getElementById("timer-sound-length");
            const durationSecs = lengthEl ? parseInt(lengthEl.value) : 1;
            
            if (soundType === "whistle" || soundType === "double_whistle") {
                const playSingleWhistle = (startTime, dur) => {
                    const mainGain = ctx.createGain();
                    mainGain.gain.setValueAtTime(0, startTime);
                    mainGain.gain.linearRampToValueAtTime(0.6, startTime + 0.05);
                    mainGain.gain.linearRampToValueAtTime(0.6, startTime + dur - 0.15);
                    mainGain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);
                    
                    const osc1 = ctx.createOscillator();
                    osc1.type = "sine";
                    osc1.frequency.setValueAtTime(2000, startTime);
                    
                    const osc2 = ctx.createOscillator();
                    osc2.type = "sine";
                    osc2.frequency.setValueAtTime(2025, startTime);
                    
                    const mod = ctx.createOscillator();
                    mod.type = "sine";
                    mod.frequency.setValueAtTime(35, startTime);
                    
                    const modGain = ctx.createGain();
                    modGain.gain.setValueAtTime(15, startTime);
                    
                    const filter = ctx.createBiquadFilter();
                    filter.type = "bandpass";
                    filter.frequency.setValueAtTime(2000, startTime);
                    filter.Q.setValueAtTime(3, startTime);
                    
                    mod.connect(modGain);
                    modGain.connect(osc1.frequency);
                    modGain.connect(osc2.frequency);
                    
                    osc1.connect(filter);
                    osc2.connect(filter);
                    filter.connect(mainGain);
                    mainGain.connect(ctx.destination);
                    
                    osc1.start(startTime);
                    osc2.start(startTime);
                    mod.start(startTime);
                    
                    osc1.stop(startTime + dur);
                    osc2.stop(startTime + dur);
                    mod.stop(startTime + dur);
                };
                
                if (soundType === "double_whistle") {
                    playSingleWhistle(ctx.currentTime, 0.4);
                    playSingleWhistle(ctx.currentTime + 0.5, 0.6);
                } else {
                    playSingleWhistle(ctx.currentTime, durationSecs);
                }
            } else if (soundType === "buzzer") {
                const osc = ctx.createOscillator();
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.8, ctx.currentTime + 0.1);
                gain.gain.linearRampToValueAtTime(0.8, ctx.currentTime + durationSecs - 0.1);
                gain.gain.linearRampToValueAtTime(0, ctx.currentTime + durationSecs);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + durationSecs);
            } else if (soundType === "beep") {
                const osc = ctx.createOscillator();
                osc.type = "sine";
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.05);
                gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + durationSecs - 0.05);
                gain.gain.linearRampToValueAtTime(0, ctx.currentTime + durationSecs);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + durationSecs);
            }
        } catch (e) {
            console.error("Web Audio Sound Error", e);
        }
    }

    /**
     * Interactive toasts notification alerts
     * @param {*} message 
     */
    showToast(message) {
        const toast = document.getElementById("toast");
        const msgNode = document.getElementById("toast-message");
        
        msgNode.textContent = message;
        toast.classList.add("active");

        setTimeout(() => {
            toast.classList.remove("active");
        }, 3000);
    }

    /**
     * ==========================================
     * SPRINT STOPWATCH ENGINE METHODS
     * ==========================================
     */

    initStopwatchView() {
        // Populate Class selector
        const classSelect = document.getElementById("stopwatch-class-select");
        if (classSelect) {
            classSelect.innerHTML = "";
            this.database.classes.forEach(c => {
                const opt = document.createElement("option");
                opt.value = c.id;
                opt.textContent = c.name;
                classSelect.appendChild(opt);
            });

            // Set active grading class as default if set
            if (this.activeGradingClassId && this.database.classes.find(c => c.id === this.activeGradingClassId)) {
                classSelect.value = this.activeGradingClassId;
            } else if (this.database.classes.length > 0) {
                classSelect.value = this.database.classes[0].id;
            }
        }

        // Set default class active
        const selectedClassId = classSelect ? classSelect.value : "";
        if (selectedClassId) {
            this.activeGradingClassId = selectedClassId;
        }

        // Populate student lists in all lane dropdowns
        this.updateStopwatchStudents();

        // Listen for Class change
        if (classSelect) {
            classSelect.addEventListener("change", (e) => {
                this.activeGradingClassId = e.target.value;
                this.updateStopwatchStudents();
            });
        }

        const termSelect = document.getElementById("stopwatch-term-select");
        if (termSelect) {
            termSelect.addEventListener("change", () => {
                this.updateStopwatchStudents();
            });
        }
        const evalTypeSelect = document.getElementById("stopwatch-eval-type-select");
        if (evalTypeSelect) {
            evalTypeSelect.addEventListener("change", () => {
                this.updateStopwatchStudents();
            });
        }
        const attemptSelect = document.getElementById("stopwatch-attempt-select");
        if (attemptSelect) {
            attemptSelect.addEventListener("change", () => {
                this.updateStopwatchStudents();
            });
        }

        // Mode tabs binding
        const btnMulti = document.getElementById("btn-stopwatch-mode-multi");
        const btnSingle = document.getElementById("btn-stopwatch-mode-single");
        const multiContainer = document.getElementById("stopwatch-multi-container");
        const singleContainer = document.getElementById("stopwatch-single-container");

        if (btnMulti && btnSingle) {
            btnMulti.onclick = () => {
                btnMulti.classList.add("active");
                btnSingle.classList.remove("active");
                if (multiContainer) multiContainer.style.display = "grid";
                if (singleContainer) singleContainer.style.display = "none";
                this.stopwatch.mode = "multi";
                this.resetStopwatch();
            };

            btnSingle.onclick = () => {
                btnSingle.classList.add("active");
                btnMulti.classList.remove("active");
                if (multiContainer) multiContainer.style.display = "none";
                if (singleContainer) singleContainer.style.display = "block";
                this.stopwatch.mode = "single";
                this.resetStopwatch();
            };
        }

        // Start synchronous button binding
        const btnStartAll = document.getElementById("btn-stopwatch-start-all");
        if (btnStartAll) {
            btnStartAll.onclick = () => {
                this.startStopwatch();
            };
        }

        // Reset all button binding
        const btnResetAll = document.getElementById("btn-stopwatch-reset-all");
        if (btnResetAll) {
            btnResetAll.onclick = () => {
                this.resetStopwatch();
            };
        }

        // Save & Promote button binding
        const btnSave = document.getElementById("btn-stopwatch-save");
        if (btnSave) {
            btnSave.onclick = () => {
                this.saveStopwatchMarks();
            };
        }

        // Whistle detection toggle button binding
        const btnWhistle = document.getElementById("btn-stopwatch-whistle");
        if (btnWhistle) {
            btnWhistle.onclick = () => {
                this.toggleWhistleDetection();
            };
        }

        // Stop pad touch/click event bindings (direct touch stops any lane)
        const pads = document.querySelectorAll(".lane-touch-pad");
        pads.forEach(pad => {
            const laneIdx = parseInt(pad.getAttribute("data-lane"));
            
            // Prevent event propagation on click or touchstart
            pad.onclick = (e) => {
                e.stopPropagation();
                this.freezeLane(laneIdx);
            };
            pad.ontouchstart = (e) => {
                e.stopPropagation();
                this.freezeLane(laneIdx);
            };
        });

        // Prevent click/touch propagation inside card student selectors so clicking dropdown doesn't freeze the lane
        const selects = document.querySelectorAll(".lane-student-select");
        selects.forEach(select => {
            select.onclick = (e) => e.stopPropagation();
            select.ontouchstart = (e) => e.stopPropagation();
            select.onchange = (e) => e.stopPropagation();
        });

        // Initialize display and state rendering
        this.updateStopwatchDisplays();
        this.updateLaneVisualStates();

        // Sync keys hooks if not already bound
        if (!this.stopwatch.keysBound) {
            window.addEventListener("keydown", (e) => {
                const isStopwatchActive = this.activeTab === "pedagogical-tools" && document.getElementById("btn-tool-stopwatch") && document.getElementById("btn-tool-stopwatch").classList.contains("active");
                if (isStopwatchActive) {
                    const isVolumeKey = (e.key === "VolumeUp" || e.key === "VolumeDown" || e.keyCode === 175 || e.keyCode === 174 || e.keyCode === 24 || e.keyCode === 25);
                    if (isVolumeKey) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const isUp = (e.key === "VolumeUp" || e.keyCode === 175 || e.keyCode === 24);
                        if (this.stopwatch.mode === "multi") {
                            if (isUp) {
                                this.freezeLane(0); // VolumeUp freezes Lane 1
                            } else {
                                this.freezeLane(1); // VolumeDown freezes Lane 2
                            }
                        } else {
                            this.freezeLane(0); // Single mode: both keys freeze Lane 1 (index 0)
                        }
                    }
                }
            }, { capture: true });

            window.addEventListener("keyup", (e) => {
                const isStopwatchActive = this.activeTab === "pedagogical-tools" && document.getElementById("btn-tool-stopwatch") && document.getElementById("btn-tool-stopwatch").classList.contains("active");
                if (isStopwatchActive) {
                    const isVolumeKey = (e.key === "VolumeUp" || e.key === "VolumeDown" || e.keyCode === 175 || e.keyCode === 174 || e.keyCode === 24 || e.keyCode === 25);
                    if (isVolumeKey) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }, { capture: true });

            this.stopwatch.keysBound = true;
        }
    }

    updateLotteryPool() {
        if (!this.database.lotteryCalled) {
            this.database.lotteryCalled = {};
        }
        const classId = this.activeLotteryClassId;
        const termSelect = document.getElementById("lottery-term-select");
        const term = termSelect ? parseInt(termSelect.value) : 1;

        const counterSpan = document.getElementById("lottery-pool-counter");
        const drawBtn = document.getElementById("btn-lottery-draw");
        const winnerContainer = document.getElementById("lottery-winner-container");
        const emptyMsg = document.getElementById("lottery-empty-message");

        if (!classId) {
            if (counterSpan) counterSpan.textContent = this.currentLang === "ar" ? "\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: --/--" : "Restants : --/--";
            if (drawBtn) drawBtn.disabled = true;
            if (winnerContainer) winnerContainer.style.display = "none";
            if (emptyMsg) emptyMsg.style.display = "none";
            return;
        }

        const classStudents = this.database.students.filter(s => s.classId === classId);
        classStudents.sort((a, b) => a.order - b.order);

        const isExcluded = (studentId) => {
            const student = this.database.students.find(s => s.id === studentId);
            if (student && student.exemptions && student.exemptions[term - 1]) {
                return true;
            }
            const caKey = `${studentId}_${term}_continuous`;
            const caObj = this.database.grades[caKey];
            if (caObj) {
                const disc = String(caObj.discipline || "").toLowerCase();
                const part = String(caObj.participation || "").toLowerCase();
                const crea = String(caObj.creativity || "").toLowerCase();
                if (disc === "a" || part === "a" || crea === "a") return true;
                if (disc === "m" || part === "m" || crea === "m") return true;
            }
            return false;
        };

        if (!this.database.lotteryCalled[classId]) {
            this.database.lotteryCalled[classId] = [];
        }
        const alreadyCalled = this.database.lotteryCalled[classId];

        const presentStudents = classStudents.filter(s => !isExcluded(s.id));
        const eligibleStudents = presentStudents.filter(s => !alreadyCalled.includes(s.id));

        if (counterSpan) {
            counterSpan.textContent = this.currentLang === "ar" 
                ? `\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: ${eligibleStudents.length}/${presentStudents.length}`
                : `Restants : ${eligibleStudents.length}/${presentStudents.length}`;
        }

        if (eligibleStudents.length === 0) {
            if (drawBtn) drawBtn.disabled = true;
            if (winnerContainer) winnerContainer.style.display = "none";
            if (emptyMsg) {
                if (presentStudents.length > 0) {
                    emptyMsg.style.display = "block";
                } else {
                    emptyMsg.style.display = "none";
                }
            }
        } else {
            if (drawBtn) drawBtn.disabled = false;
            if (emptyMsg) emptyMsg.style.display = "none";
        }
    }

    drawLotteryStudent() {
        if (!this.database.lotteryCalled) {
            this.database.lotteryCalled = {};
        }
        const classId = this.activeLotteryClassId;
        const termSelect = document.getElementById("lottery-term-select");
        const term = termSelect ? parseInt(termSelect.value) : 1;

        if (!classId) return;

        const classStudents = this.database.students.filter(s => s.classId === classId);
        
        const isExcluded = (studentId) => {
            const student = this.database.students.find(s => s.id === studentId);
            if (student && student.exemptions && student.exemptions[term - 1]) return true;
            const caKey = `${studentId}_${term}_continuous`;
            const caObj = this.database.grades[caKey];
            if (caObj) {
                const disc = String(caObj.discipline || "").toLowerCase();
                const part = String(caObj.participation || "").toLowerCase();
                const crea = String(caObj.creativity || "").toLowerCase();
                if (disc === "a" || part === "a" || crea === "a") return true;
                if (disc === "m" || part === "m" || crea === "m") return true;
            }
            return false;
        };

        if (!this.database.lotteryCalled[classId]) {
            this.database.lotteryCalled[classId] = [];
        }
        const alreadyCalled = this.database.lotteryCalled[classId];

        const presentStudents = classStudents.filter(s => !isExcluded(s.id));
        const eligibleStudents = presentStudents.filter(s => !alreadyCalled.includes(s.id));

        if (eligibleStudents.length === 0) return;

        const drawBtn = document.getElementById("btn-lottery-draw");
        if (drawBtn) drawBtn.disabled = true;

        const winnerContainer = document.getElementById("lottery-winner-container");
        const winnerName = document.getElementById("lottery-winner-name");

        if (winnerContainer) {
            winnerContainer.style.display = "block";
            winnerContainer.classList.remove("winner-glow-box");
        }

        let duration = 1200;
        let interval = 60;
        let elapsed = 0;

        const timer = setInterval(() => {
            const randDummy = eligibleStudents[Math.floor(Math.random() * eligibleStudents.length)];
            if (winnerName) {
                winnerName.textContent = `${randDummy.lastname} ${randDummy.firstname}`;
            }
            elapsed += interval;
            if (elapsed >= duration) {
                clearInterval(timer);

                const finalIdx = Math.floor(Math.random() * eligibleStudents.length);
                const winner = eligibleStudents[finalIdx];

                this.database.lotteryCalled[classId].push(winner.id);
                this.saveDatabase();

                if (winnerName) {
                    winnerName.textContent = `${winner.lastname} ${winner.firstname}`;
                }
                if (winnerContainer) {
                    winnerContainer.classList.add("winner-glow-box");
                }

                this.playLotteryChime();
                this.updateLotteryPool();
            }
        }, interval);
    }

    resetLotteryPool() {
        if (!this.database.lotteryCalled) {
            this.database.lotteryCalled = {};
        }
        const classId = this.activeLotteryClassId;
        if (!classId) return;

        this.database.lotteryCalled[classId] = [];
        this.saveDatabase();

        const winnerContainer = document.getElementById("lottery-winner-container");
        if (winnerContainer) winnerContainer.style.display = "none";

        const winnerName = document.getElementById("lottery-winner-name");
        if (winnerName) winnerName.textContent = "--";

        this.updateLotteryPool();
    }

    getContinuousValue(studentId, field, term) {
        const isGradingActive = (this.activeTab === "grading");
        const gradingClassSelect = document.getElementById("class-select-grading");
        const gradingTermSelect = document.getElementById("term-select-grading");
        
        const matchesContext = isGradingActive && 
                               this.activeGradingType === "continuous" &&
                               gradingClassSelect && gradingClassSelect.value === this.activeGradingClassId &&
                               gradingTermSelect && parseInt(gradingTermSelect.value) === term;
                               
        if (matchesContext) {
            const inputId = field === "discipline" ? `discipline_${studentId}` :
                            field === "participation" ? `participation_${studentId}` :
                            `creativity_${studentId}`;
            const inputEl = document.getElementById(inputId);
            if (inputEl) {
                return inputEl.value.trim();
            }
        }
        
        const caKey = `${studentId}_${term}_continuous`;
        const caObj = this.database.grades[caKey];
        if (caObj && caObj[field] !== undefined) {
            return String(caObj[field]).trim();
        }
        return "";
    }

    getAttemptValue(studentId, term, evalType, attempt) {
        const attemptIdx = parseInt(attempt) - 1;
        const isGradingActive = (this.activeTab === "grading");
        const gradingClassSelect = document.getElementById("class-select-grading");
        const gradingTermSelect = document.getElementById("term-select-grading");
        
        const matchesContext = isGradingActive && 
                               this.activeGradingType === evalType &&
                               gradingClassSelect && gradingClassSelect.value === this.activeGradingClassId &&
                               gradingTermSelect && parseInt(gradingTermSelect.value) === term;
                               
        if (matchesContext) {
            const inputId = `m${attempt}_${studentId}`;
            const inputEl = document.getElementById(inputId);
            if (inputEl) {
                return inputEl.value.trim();
            }
        }
        
        const gradeKey = `${studentId}_${term}_${evalType}`;
        const gradeObj = this.database.grades[gradeKey];
        if (gradeObj && gradeObj.attempts && gradeObj.attempts[attemptIdx] !== undefined) {
            return String(gradeObj.attempts[attemptIdx]).trim();
        }
        return "";
    }

    shouldExcludeStudentFromStopwatch(studentId) {
        const termSelect = document.getElementById("stopwatch-term-select");
        const evalTypeSelect = document.getElementById("stopwatch-eval-type-select");
        const attemptSelect = document.getElementById("stopwatch-attempt-select");
        
        if (!termSelect || !evalTypeSelect || !attemptSelect) return false;
        
        const term = parseInt(termSelect.value) || 1;
        const evalType = evalTypeSelect.value || "assignment";
        const attempt = attemptSelect.value || "1";
        
        // 1. Check general exemptions in student profile
        const student = this.database.students.find(s => s.id === studentId);
        if (student && student.exemptions && student.exemptions[term - 1]) {
            return true;
        }
        
        // 2. Check continuous assessment for "a", "A", "m", "M"
        const discVal = this.getContinuousValue(studentId, "discipline", term).toLowerCase();
        const partVal = this.getContinuousValue(studentId, "participation", term).toLowerCase();
        const creaVal = this.getContinuousValue(studentId, "creativity", term).toLowerCase();
        
        if (discVal === "a" || partVal === "a" || creaVal === "a") {
            return true;
        }
        if (discVal === "m" || partVal === "m" || creaVal === "m") {
            return true;
        }
        
        // 3. Check evaluated state for the selected attempt
        const attVal = this.getAttemptValue(studentId, term, evalType, attempt);
        if (attVal !== "" && attVal !== undefined && attVal !== null) {
            return true;
        }
        
        return false;
    }

    updateStopwatchStudents() {
        const classId = this.activeGradingClassId;
        if (!classId) return;
 
        const students = this.database.students.filter(s => s.classId === classId);
        students.sort((a, b) => a.order - b.order);
 
        const dropdowns = document.querySelectorAll(".lane-student-select");
        dropdowns.forEach(select => {
            const selectedVal = select.value;
            select.innerHTML = `<option value="">-- اختر التلميذ --</option>`;
            students.forEach(student => {
                if (!this.shouldExcludeStudentFromStopwatch(student.id)) {
                    const genderText = student.gender === "M" ? "ذكر" : "أنثى";
                    select.innerHTML += `<option value="${student.id}">${student.lastname} ${student.firstname} (${genderText})</option>`;
                }
            });
            // Restore previous value if student is still in class and not excluded
            const stillAvailable = students.find(s => s.id === selectedVal) && !this.shouldExcludeStudentFromStopwatch(selectedVal);
            if (stillAvailable) {
                select.value = selectedVal;
            } else {
                select.value = "";
            }
        });
    }

    advanceToNextActiveStudent(currentStudentId) {
        if (this.stopwatch.mode !== "single" || !currentStudentId) return;

        const classId = this.activeGradingClassId;
        if (!classId) return;

        const students = this.database.students.filter(s => s.classId === classId);
        students.sort((a, b) => a.order - b.order);

        const curIdx = students.findIndex(s => s.id === currentStudentId);
        if (curIdx === -1) return;

        let nextStudentId = "";
        
        // 1. Scan forward to find the next eligible student
        for (let i = curIdx + 1; i < students.length; i++) {
            const s = students[i];
            if (!this.shouldExcludeStudentFromStopwatch(s.id)) {
                nextStudentId = s.id;
                break;
            }
        }

        // 2. Wrap around from the beginning if not found
        if (!nextStudentId) {
            for (let i = 0; i < curIdx; i++) {
                const s = students[i];
                if (!this.shouldExcludeStudentFromStopwatch(s.id)) {
                    nextStudentId = s.id;
                    break;
                }
            }
        }

        if (nextStudentId) {
            const select = document.getElementById("stopwatch-single-student");
            if (select) {
                select.value = nextStudentId;
                select.dispatchEvent(new Event("change"));
            }
        }
        
        // Reset single-lane stopwatch state to make it armed and ready for the next run
        this.stopwatch.running[0] = false;
        this.stopwatch.frozen[0] = false;
        this.stopwatch.elapsed[0] = 0;
        this.updateStopwatchDisplays();
        this.updateLaneVisualStates();
    }

    startStopwatch() {
        const now = performance.now();
        let alreadyFinished = true;
        
        // Reset timers if they were not frozen or not running
        for (let i = 0; i < 4; i++) {
            let shouldRun = true;
            if (this.stopwatch.mode === "multi") {
                const select = document.getElementById(`stopwatch-lane-${i + 1}-student`);
                if (!select || select.value === "") {
                    shouldRun = false;
                }
            } else {
                const select = document.getElementById("stopwatch-single-student");
                if (i > 0 || !select || select.value === "") {
                    shouldRun = false;
                }
            }

            if (shouldRun && !this.stopwatch.frozen[i]) {
                this.stopwatch.running[i] = true;
                this.stopwatch.startTimes[i] = now - this.stopwatch.elapsed[i];
                alreadyFinished = false;
            }
        }

        if (alreadyFinished) return;

        if (!this.stopwatch.animationFrameId) {
            const update = () => {
                const current = performance.now();
                let anyRunning = false;
                
                const limit = this.stopwatch.mode === "multi" ? 4 : 1;
                for (let i = 0; i < limit; i++) {
                    if (this.stopwatch.running[i] && !this.stopwatch.frozen[i]) {
                        this.stopwatch.elapsed[i] = current - this.stopwatch.startTimes[i];
                        anyRunning = true;
                    }
                }

                this.updateStopwatchDisplays();
                
                if (anyRunning) {
                     this.stopwatch.animationFrameId = requestAnimationFrame(update);
                } else {
                    this.stopwatch.animationFrameId = null;
                }
            };
            this.stopwatch.animationFrameId = requestAnimationFrame(update);
        }

        this.updateLaneVisualStates();
    }

    freezeLane(laneIdx) {
        if (this.stopwatch.running[laneIdx] && !this.stopwatch.frozen[laneIdx]) {
            this.stopwatch.running[laneIdx] = false;
            this.stopwatch.frozen[laneIdx] = true;
            
            const current = performance.now();
            this.stopwatch.elapsed[laneIdx] = current - this.stopwatch.startTimes[laneIdx];
            
            this.updateStopwatchDisplays();
            this.updateLaneVisualStates();
        }
    }

    resetStopwatch() {
        if (this.stopwatch.animationFrameId) {
            cancelAnimationFrame(this.stopwatch.animationFrameId);
            this.stopwatch.animationFrameId = null;
        }
        for (let i = 0; i < 4; i++) {
            this.stopwatch.running[i] = false;
            this.stopwatch.frozen[i] = false;
            this.stopwatch.elapsed[i] = 0;
            
            // Empty student dropdown in multi mode
            const select = document.getElementById(`stopwatch-lane-${i + 1}-student`);
            if (select) {
                select.value = "";
            }
        }
        // Empty student dropdown in single mode
        const singleSelect = document.getElementById("stopwatch-single-student");
        if (singleSelect) {
            singleSelect.value = "";
        }

        this.updateStopwatchDisplays();
        this.updateLaneVisualStates();
    }

    formatTime(ms) {
        if (ms < 0) ms = 0;
        const totalSeconds = ms / 1000;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const centiseconds = Math.floor((ms % 1000) / 10);

        const minStr = String(minutes).padStart(2, '0');
        const secStr = String(seconds).padStart(2, '0');
        const centiStr = String(centiseconds).padStart(2, '0');

        return `${minStr}:${secStr}.${centiStr}`;
    }

    updateStopwatchDisplays() {
        if (this.stopwatch.mode === "multi") {
            for (let i = 0; i < 4; i++) {
                const display = document.getElementById(`stopwatch-lane-${i + 1}-display`);
                if (display) {
                    display.textContent = this.formatTime(this.stopwatch.elapsed[i]);
                }
            }
        } else {
            const display = document.getElementById(`stopwatch-single-display`);
            if (display) {
                display.textContent = this.formatTime(this.stopwatch.elapsed[0]);
            }
        }
    }

    updateLaneVisualStates() {
        if (this.stopwatch.mode === "multi") {
            for (let i = 0; i < 4; i++) {
                const card = document.getElementById(`stopwatch-lane-${i + 1}-card`);
                if (card) {
                    card.classList.remove("state-running", "state-frozen");
                    if (this.stopwatch.frozen[i]) {
                        card.classList.add("state-frozen");
                    } else if (this.stopwatch.running[i]) {
                        card.classList.add("state-running");
                    }
                }
            }
        } else {
            const card = document.getElementById(`stopwatch-single-card`);
            if (card) {
                card.classList.remove("state-running", "state-frozen");
                if (this.stopwatch.frozen[0]) {
                    card.classList.add("state-frozen");
                } else if (this.stopwatch.running[0]) {
                    card.classList.add("state-running");
                }
            }
        }
    }

    toggleWhistleDetection(forceState) {
        const btn = document.getElementById("btn-stopwatch-whistle");
        if (!btn) return;

        const active = forceState !== undefined ? forceState : !this.stopwatch.whistleActive;
        this.stopwatch.whistleActive = active;

        if (active) {
            btn.classList.add("btn-warning-active");
            btn.querySelector("span").textContent = this.currentLang === "ar" ? "إلغاء كشف الصافرة (يستمع...)" : "Annuler détection (Écoute...)";

            if (!this.stopwatch.audioContext) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                this.stopwatch.audioContext = new AudioContextClass();
            }

            navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false } })
                .then(stream => {
                    this.stopwatch.audioStream = stream;
                    const source = this.stopwatch.audioContext.createMediaStreamSource(stream);

                    const filter = this.stopwatch.audioContext.createBiquadFilter();
                    filter.type = "bandpass";
                    filter.frequency.value = 3500; // Whistle center frequency around 3.5kHz
                    filter.Q.value = 8.0; // High selectivity

                    const analyser = this.stopwatch.audioContext.createAnalyser();
                    analyser.fftSize = 512;

                    source.connect(filter);
                    filter.connect(analyser);

                    const bufferLength = analyser.frequencyBinCount;
                    const dataArray = new Uint8Array(bufferLength);

                    let whistleDuration = 0;
                    let lastCheckTime = performance.now();

                    const checkWhistle = () => {
                        if (!this.stopwatch.whistleActive) return;

                        const now = performance.now();
                        const dt = now - lastCheckTime;
                        lastCheckTime = now;

                        analyser.getByteFrequencyData(dataArray);

                        let sum = 0;
                        for (let i = 0; i < bufferLength; i++) {
                            sum += dataArray[i];
                        }
                        const average = sum / bufferLength;

                        // Sound level threshold - 35 out of 255 after a narrow bandpass at 3.5kHz
                        if (average > 35) {
                            whistleDuration += dt;
                            if (whistleDuration >= 100) { // Consistently louder than threshold for 100ms
                                this.startStopwatch();
                                this.toggleWhistleDetection(false);
                                return;
                            }
                        } else {
                            whistleDuration = 0;
                        }

                        requestAnimationFrame(checkWhistle);
                    };

                    lastCheckTime = performance.now();
                    requestAnimationFrame(checkWhistle);
                })
                .catch(err => {
                    console.error("Microphone access error:", err);
                    alert(this.currentLang === "ar" ? "تعذر الوصول إلى الميكروفون لكشف الصافرة. يرجى تفعيل الصلاحية." : "Impossible d'accéder au micro. Veuillez activer la permission.");
                    this.toggleWhistleDetection(false);
                });
        } else {
            btn.classList.remove("btn-warning-active");
            btn.querySelector("span").textContent = this.currentLang === "ar" ? "تفعيل كشف الصافرة" : "Activer détection sifflet";
            this.releaseStopwatchAudio();
        }
    }

    releaseStopwatchAudio() {
        this.stopwatch.whistleActive = false;
        if (this.stopwatch.audioStream) {
            this.stopwatch.audioStream.getTracks().forEach(track => track.stop());
            this.stopwatch.audioStream = null;
        }
        if (this.stopwatch.audioContext) {
            if (this.stopwatch.audioContext.state !== "closed") {
                this.stopwatch.audioContext.close();
            }
            this.stopwatch.audioContext = null;
        }
    }

    saveStopwatchMarks() {
        const classId = this.activeGradingClassId;
        const term = parseInt(document.getElementById("stopwatch-term-select").value);
        const evalType = document.getElementById("stopwatch-eval-type-select").value; // "assignment" or "exam"
        const attempt = document.getElementById("stopwatch-attempt-select").value; // "1", "2", "3"
        const attemptIdx = parseInt(attempt) - 1; // 0, 1, 2

        if (!classId) {
            alert(this.currentLang === "ar" ? "يرجى اختيار القسم الدراسي أولاً." : "Veuillez choisir une classe.");
            return;
        }

        const activeClass = this.database.classes.find(c => c.id === classId);
        if (!activeClass) return;

        const sports = this.database.termActivities[`term_${term}`];
        const sportId = sports ? sports.individual : null;

        let promotedCount = 0;
        let singleLaneStudentId = "";

        if (this.stopwatch.mode === "multi") {
            for (let i = 0; i < 4; i++) {
                const select = document.getElementById(`stopwatch-lane-${i + 1}-student`);
                const studentId = select ? select.value : "";
                const elapsed = this.stopwatch.elapsed[i];

                if (studentId && (this.stopwatch.frozen[i] || elapsed > 0)) {
                    const finalSeconds = (elapsed / 1000).toFixed(2);
                    const gradeKey = `${studentId}_${term}_${evalType}`;

                    if (!this.database.grades[gradeKey]) {
                        this.database.grades[gradeKey] = { attempts: ["", "", ""], collective: "" };
                    }
                    this.database.grades[gradeKey].attempts[attemptIdx] = parseFloat(finalSeconds);

                    // Update DOM input directly if grading sheet table is currently open
                    const tr = document.querySelector(`#table-grading-sheet tbody tr input[data-student="${studentId}"]`)?.closest("tr");
                    if (tr) {
                        const attInput = tr.querySelector(`.att${attempt}`);
                        if (attInput) {
                            attInput.value = finalSeconds;
                            this.recalculateAttemptExamRow(studentId, tr, sportId);
                        }
                    }

                    promotedCount++;
                }
            }
        } else {
            const select = document.getElementById("stopwatch-single-student");
            const studentId = select ? select.value : "";
            const elapsed = this.stopwatch.elapsed[0];

            if (studentId && (this.stopwatch.frozen[0] || elapsed > 0)) {
                const finalSeconds = (elapsed / 1000).toFixed(2);
                const gradeKey = `${studentId}_${term}_${evalType}`;

                if (!this.database.grades[gradeKey]) {
                    this.database.grades[gradeKey] = { attempts: ["", "", ""], collective: "" };
                }
                this.database.grades[gradeKey].attempts[attemptIdx] = parseFloat(finalSeconds);

                // Update DOM input directly if grading sheet table is currently open
                const tr = document.querySelector(`#table-grading-sheet tbody tr input[data-student="${studentId}"]`)?.closest("tr");
                if (tr) {
                    const attInput = tr.querySelector(`.att${attempt}`);
                    if (attInput) {
                        attInput.value = finalSeconds;
                        this.recalculateAttemptExamRow(studentId, tr, sportId);
                    }
                }

                promotedCount++;
                singleLaneStudentId = studentId;
            }
        }

        if (promotedCount > 0) {
            this.saveDatabase();
            this.updateStopwatchStudents();
            
            // Auto-advance to the next active student if in single lane mode
            if (this.stopwatch.mode === "single" && singleLaneStudentId) {
                this.advanceToNextActiveStudent(singleLaneStudentId);
            }
            this.showToast(this.currentLang === "ar" ? `تم ترحيل وحفظ علامات ${promotedCount} تلاميذ بنجاح!` : `Notes de ${promotedCount} élèves sauvegardées !`);
        } else {
            alert(this.currentLang === "ar" ? "لم يتم العثور على أي قيم عداد مجمدة أو تلاميذ محددين لترحيلها." : "Aucune valeur ou élève sélectionné.");
        }
    }

    updateLotteryPool() {
        const classId = this.activeLotteryClassId;
        const termSelect = document.getElementById("lottery-term-select");
        const term = termSelect ? parseInt(termSelect.value) : 1;

        const counterSpan = document.getElementById("lottery-pool-counter");
        const drawBtn = document.getElementById("btn-lottery-draw");
        const winnerContainer = document.getElementById("lottery-winner-container");
        const emptyMsg = document.getElementById("lottery-empty-message");

        if (!classId) {
            if (counterSpan) counterSpan.textContent = this.currentLang === "ar" ? "\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: --/--" : "Restants : --/--";
            if (drawBtn) drawBtn.disabled = true;
            if (winnerContainer) winnerContainer.style.display = "none";
            if (emptyMsg) emptyMsg.style.display = "none";
            return;
        }

        const classStudents = this.database.students.filter(s => s.classId === classId);
        classStudents.sort((a, b) => a.order - b.order);

        const isExcluded = (studentId) => {
            const student = this.database.students.find(s => s.id === studentId);
            if (student && student.exemptions && student.exemptions[term - 1]) {
                return true;
            }
            const caKey = `${studentId}_${term}_continuous`;
            const caObj = this.database.grades[caKey];
            if (caObj) {
                const disc = String(caObj.discipline || "").toLowerCase();
                const part = String(caObj.participation || "").toLowerCase();
                const crea = String(caObj.creativity || "").toLowerCase();
                if (disc === "a" || part === "a" || crea === "a") return true;
                if (disc === "m" || part === "m" || crea === "m") return true;
            }
            return false;
        };

        if (!this.database.lotteryCalled[classId]) {
            this.database.lotteryCalled[classId] = [];
        }
        const alreadyCalled = this.database.lotteryCalled[classId];

        const presentStudents = classStudents.filter(s => !isExcluded(s.id));
        const eligibleStudents = presentStudents.filter(s => !alreadyCalled.includes(s.id));

        if (counterSpan) {
            counterSpan.textContent = this.currentLang === "ar" 
                ? `\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: ${eligibleStudents.length}/${presentStudents.length}`
                : `Restants : ${eligibleStudents.length}/${presentStudents.length}`;
        }

        if (eligibleStudents.length === 0) {
            if (drawBtn) drawBtn.disabled = true;
            if (winnerContainer) winnerContainer.style.display = "none";
            if (emptyMsg) {
                if (presentStudents.length > 0) {
                    emptyMsg.style.display = "block";
                } else {
                    emptyMsg.style.display = "none";
                }
            }
        } else {
            if (drawBtn) drawBtn.disabled = false;
            if (emptyMsg) emptyMsg.style.display = "none";
        }
    }

    drawLotteryStudent() {
        const classId = this.activeLotteryClassId;
        const termSelect = document.getElementById("lottery-term-select");
        const term = termSelect ? parseInt(termSelect.value) : 1;

        if (!classId) return;

        const classStudents = this.database.students.filter(s => s.classId === classId);
        
        const isExcluded = (studentId) => {
            const student = this.database.students.find(s => s.id === studentId);
            if (student && student.exemptions && student.exemptions[term - 1]) return true;
            const caKey = `${studentId}_${term}_continuous`;
            const caObj = this.database.grades[caKey];
            if (caObj) {
                const disc = String(caObj.discipline || "").toLowerCase();
                const part = String(caObj.participation || "").toLowerCase();
                const crea = String(caObj.creativity || "").toLowerCase();
                if (disc === "a" || part === "a" || crea === "a") return true;
                if (disc === "m" || part === "m" || crea === "m") return true;
            }
            return false;
        };

        if (!this.database.lotteryCalled[classId]) {
            this.database.lotteryCalled[classId] = [];
        }
        const alreadyCalled = this.database.lotteryCalled[classId];

        const presentStudents = classStudents.filter(s => !isExcluded(s.id));
        const eligibleStudents = presentStudents.filter(s => !alreadyCalled.includes(s.id));

        if (eligibleStudents.length === 0) return;

        const drawBtn = document.getElementById("btn-lottery-draw");
        if (drawBtn) drawBtn.disabled = true;

        const winnerContainer = document.getElementById("lottery-winner-container");
        const winnerName = document.getElementById("lottery-winner-name");

        if (winnerContainer) {
            winnerContainer.style.display = "block";
            winnerContainer.classList.remove("winner-glow-box");
        }

        let duration = 1200;
        let interval = 60;
        let elapsed = 0;

        const timer = setInterval(() => {
            const randDummy = eligibleStudents[Math.floor(Math.random() * eligibleStudents.length)];
            if (winnerName) {
                winnerName.textContent = `${randDummy.lastname} ${randDummy.firstname}`;
            }
            elapsed += interval;
            if (elapsed >= duration) {
                clearInterval(timer);

                const finalIdx = Math.floor(Math.random() * eligibleStudents.length);
                const winner = eligibleStudents[finalIdx];

                this.database.lotteryCalled[classId].push(winner.id);
                this.saveDatabase();

                if (winnerName) {
                    winnerName.textContent = `${winner.lastname} ${winner.firstname}`;
                }
                if (winnerContainer) {
                    winnerContainer.classList.add("winner-glow-box");
                }

                this.playLotteryChime();
                this.updateLotteryPool();
            }
        }, interval);
    }

    resetLotteryPool() {
        const classId = this.activeLotteryClassId;
        if (!classId) return;

        this.database.lotteryCalled[classId] = [];
        this.saveDatabase();

        const winnerContainer = document.getElementById("lottery-winner-container");
        if (winnerContainer) winnerContainer.style.display = "none";

        const winnerName = document.getElementById("lottery-winner-name");
        if (winnerName) winnerName.textContent = "--";

        this.updateLotteryPool();

        this.showToast(this.currentLang === "ar" 
            ? "\u062a\u0645 \u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0642\u0631\u0639\u0629 \u0644\u0644\u0641\u0648\u062c \u0628\u0646\u062c\u0627\u062d!" 
            : "Tirage au sort r\u00e9initialis\u00e9 pour la classe !");
    }

    playLotteryChime() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const now = ctx.currentTime;

            const playNote = (freq, start, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = "sine";
                osc.frequency.setValueAtTime(freq, start);
                
                gain.gain.setValueAtTime(0.15, start);
                gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(start);
                osc.stop(start + duration);
            };

            playNote(523.25, now, 0.2);
            playNote(659.25, now + 0.08, 0.2);
            playNote(783.99, now + 0.16, 0.2);
            playNote(1046.50, now + 0.24, 0.4);
        } catch (e) {
            console.warn("Web Audio API not supported or blocked:", e);
        }
    }

    updateQRCode() {
        const qrContainer = document.getElementById('portfolio-qrcode-container');
        if (qrContainer && typeof QRCode !== 'undefined') {
            qrContainer.innerHTML = '';
            
            const userName = (document.getElementById("meta-teacher-name") ? document.getElementById("meta-teacher-name").value : '') || (this.database.metadata ? this.database.metadata.teacherName : '') || '';
            const establish = (document.getElementById("meta-school-name") ? document.getElementById("meta-school-name").value : '') || (this.database.metadata ? this.database.metadata.schoolName : '') || '';
            const acad = (document.getElementById("meta-academic-year") ? document.getElementById("meta-academic-year").value : '') || (this.database.metadata ? this.database.metadata.academicYear : '') || '';
            const shareUrl = window.location.href;
            
            const qrData = `\u0627\u0644\u0623\u0633\u062a\u0627\u0630\u061a ${userName}\n\u0627\u0644\u0645\u0624\u0633\u0633\u0629\u061a ${establish}\n\u0627\u0644\u0633\u0646\u0629\u0020\u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629\u061a ${acad}\n\u0631\u0627\u0628\u0637\u0020\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u061a ${shareUrl}`;
            
                        try {
                new QRCode(qrContainer, {
                    text: qrData || "منصة الأستاذ الرقمية - التربية البدنية",
                    width: 120,
                    height: 120,
                    colorDark : "#2b3440",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            } catch (e) {
                try {
                    new QRCode(qrContainer, {
                        text: qrData || "منصة الأستاذ الرقمية - التربية البدنية",
                        width: 120,
                        height: 120,
                        colorDark : "#2b3440",
                        colorLight : "#ffffff",
                        correctLevel : QRCode.CorrectLevel.Q
                    });
                } catch (e2) {
                    try {
                        new QRCode(qrContainer, {
                            text: qrData || "منصة الأستاذ الرقمية - التربية البدنية",
                            width: 120,
                            height: 120,
                            colorDark : "#2b3440",
                            colorLight : "#ffffff",
                            correctLevel : QRCode.CorrectLevel.M
                        });
                    } catch (e3) {
                        try {
                            new QRCode(qrContainer, {
                                text: qrData || "منصة الأستاذ الرقمية - التربية البدنية",
                                width: 120,
                                height: 120,
                                colorDark : "#2b3440",
                                colorLight : "#ffffff",
                                correctLevel : QRCode.CorrectLevel.L
                            });
                        } catch (e4) {
                            console.warn("QR Code generation failed due to content length:", e4);
                        }
                    }
                }
            }
        }
    }
}

// Instantiate
const app = new SmartSport();
window.addEventListener("DOMContentLoaded", () => {
    app.init();
});

