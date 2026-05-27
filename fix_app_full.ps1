$filePath = "c:\Users\Electronics_World\Documents\Downloads\eps\app.js"
$lines = Get-Content $filePath -Encoding UTF8

# 1. Replace the TRANSLATIONS block (lines 10 to 117)
# Note: PowerShell array is 0-indexed, so line 10 is index 9.
$translations = @"
    ar: {
        "app-subtitle": "التربية البدنية والرياضية - الطور الثانوي",
        "menu-dashboard": "لوحة القيادة",
        "menu-students": "الأقسام والتلاميذ",
        "menu-grading": "التقويم والنتائج",
        "menu-settings": "الإعدادات",
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
        "manual-title": "دليل استخدام تطبيق Smart EPS",
        "scale-manager-title": "تعديل سلم تنقيط الأنشطة الفردية",
        "modal-config-activities-title": "توزيع الأنشطة الرياضية للفصول",
        "menu-pedagogical": "الملف البيداغوجي",
        "title-pedagogical": "التحضير البيداغوجي والملف التربوي للأستاذ"
"@

$transLines = $translations -split "`r`n"
for ($i = 0; $i -lt $transLines.Length; $i++) {
    $lines[9 + $i] = $transLines[$i]
}

# Block 1
$lines[2179] = '                        appreciation = "دون المتوسط";'
$lines[2181] = '                        guideline = "عليك بمضاعفة الجهود";'
$lines[2183] = '                        appreciation = "عمل حسن";'
$lines[2185] = '                        guideline = student.gender === "F" ? "حاولي أكثر" : "حاول أكثر";'
$lines[2187] = '                        appreciation = "جيد";'
$lines[2189] = '                        guideline = "واصل";'
$lines[2191] = '                        appreciation = "جيد جدا";'
$lines[2193] = '                        guideline = "واصل";'
$lines[2195] = '                        appreciation = "ممتاز";'
$lines[2197] = '                        guideline = "مميز واصل";'

# Block 2
$lines[2282] = '                        appreciation = "دون المتوسط";'
$lines[2285] = '                        appreciation = "عمل حسن";'
$lines[2288] = '                        appreciation = "جيد";'
$lines[2291] = '                        appreciation = "جيد جدا";'
$lines[2294] = '                        appreciation = "ممتاز";'

# PDF and Excel
$lines[3494] = '        let termInput = window.prompt("أدخل رقم الفصل الذي تريد تصديره (1، 2، 3) أو اكتب ''annual'' للسنوي:", "1");'
$lines[3497] = '        if (term === "السنوي" || term === "سنوي") term = "annual";'
$lines[3528] = '            const title = term === "annual" ? `كشف الفصل السنوي - القسم: ${cls.name}` : `كشف نقاط الفصل ${term} - القسم: ${cls.name}`;'
$lines[3533] = '                        <div style="font-weight: bold; font-size: 0.9rem;">الجمهورية الجزائرية الديمقراطية الشعبية</div>'
$lines[3534] = '                        <div style="font-weight: bold; font-size: 0.9rem;">وزارة التربية الوطنية</div>'
$lines[3538] = '                                <div>المؤسسة: ${schoolName}</div>'
$lines[3541] = '                                <div>السنة الدراسية: ${academicYear}</div>'
$lines[3542] = '                                <div>الأستاذ: ${teacherName}</div>'
$lines[3553] = '                        <div>توقيع الأستاذ:</div>'
$lines[3554] = '                        <div>توقيع المدير (الختم):</div>'
$lines[3568] = '                <title>طباعة كشف نقاط الفصل</title>'

$lines[3600] = '        let termInput = window.prompt("أدخل رقم الفصل الذي تريد تصديره (1، 2، 3) أو اكتب ''annual'' للسنوي:", "1");'
$lines[3603] = '        if (term === "السنوي" || term === "سنوي") term = "annual";'

$lines[3620] = '                ws_data.push(["الرقم", "اللقب", "الاسم", "الجنس", "معدل الفصل الأول", "معدل الفصل الثاني", "معدل الفصل الثالث", "المعدل السنوي", "التقدير"]);'
$lines[3622] = '                    const gender = student.gender === "M" ? "ذكر" : "أنثى";'
$lines[3625] = '                        ws_data.push([index + 1, student.lastname, student.firstname, gender, "معفى", "معفى", "معفى", "إعفاء كلي", "--"]);'
$lines[3643] = '                            if (annualAvg < 10) appreciation = "دون المتوسط";'
$lines[3644] = '                            else if (annualAvg < 13) appreciation = "عمل حسن";'
$lines[3645] = '                            else if (annualAvg < 14.5) appreciation = "جيد";'
$lines[3646] = '                            else if (annualAvg < 17) appreciation = "جيد جدا";'
$lines[3647] = '                            else appreciation = "ممتاز";'

$lines[3661] = '                ws_data.push(["الرقم", "اللقب", "الاسم", "الجنس", "المراقبة المستمرة", "الفرض", "الاختبار", `معدل الفصل ${term}`, "التقدير", "الإرشادات"]);'
$lines[3663] = '                    const gender = student.gender === "M" ? "ذكر" : "أنثى";'
$lines[3667] = '                        ws_data.push([index + 1, student.lastname, student.firstname, gender, "معفى", "معفى", "معفى", "معفى", "--", "--"]);'

$lines[3673] = '                            if (results.termAverage < 10) { appreciation = "دون المتوسط"; guideline = "عليك بمضاعفة الجهود"; }'
$lines[3674] = '                            else if (results.termAverage < 13) { appreciation = "عمل حسن"; guideline = student.gender === "F" ? "حاولي أكثر" : "حاول أكثر"; }'
$lines[3675] = '                            else if (results.termAverage <= 14.5) { appreciation = "جيد"; guideline = "واصل"; }'
$lines[3676] = '                            else if (results.termAverage < 17) { appreciation = "جيد جدا"; guideline = "واصل"; }'
$lines[3677] = '                            else { appreciation = "ممتاز"; guideline = "مميز واصل"; }'

# QR Data
$lines[5722] = '            const qrData = `الأستاذ: ${userName}\nالمؤسسة: ${establish}\nالمديرية: ${acad}`;'

Set-Content -Path $filePath -Value $lines -Encoding UTF8
Write-Host "Replaced everything successfully."
