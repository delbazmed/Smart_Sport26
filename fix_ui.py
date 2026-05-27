import re
import os

path = r"c:\Users\Electronics_World\Documents\Downloads\eps\index.html"
with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Remove export csv and export all classes roster
html = re.sub(r'<button id="btn-export-csv"[\s\S]*?</button>\s*', '', html)
html = re.sub(r'<button id="btn-export-all-classes"[\s\S]*?</button>\s*', '', html)

# Fix extra </button>
html = html.replace("</button>\n                        </button>", "</button>")

# 2. Remove collective rubric print button
html = re.sub(r'<button type="button" id="btn-print-collective-rubric"[\s\S]*?</button>\s*', '', html)

with open(path, "w", encoding="utf-8") as f:
    f.write(html)

print("Updated index.html")

path_js = r"c:\Users\Electronics_World\Documents\Downloads\eps\app.js"
with open(path_js, "r", encoding="utf-8-sig") as f:
    js = f.read()

# 3. Fix titles in print (exportAllGradesPDF)
# "جدول تنقيط المراقبة المستمرة" ... "كشف نقاط الفرض" ... "كشف نقاط الاختبار"
js = js.replace(">المراقبة المستمرة<", ">المراقبة المستمرة<") # Keep it as is?
# Actually the headers in PDF for term 1,2,3 are:
# ws_data.push(["الرقم", "اللقب", "الاسم", "الجنس", "المراقبة المستمرة", "الفرض", "الاختبار", `معدل الفصل ${term}`, "التقدير", "الإرشادات"]);
# And in HTML for PDF:
js = js.replace(">جدول تنقيط المراقبة المستمرة<", ">المراقبة المستمرة<")
js = js.replace(">جدول المراقبة المستمرة<", ">المراقبة المستمرة<")
js = js.replace(">الفرض<", ">كشف نقاط الفرض<")
js = js.replace(">الاختبار<", ">كشف نقاط الاختبار<")

# 4. Shrink Name and Surname columns width
# Instead of modifying every th, let's just add a style rule for table th:nth-child(2) and (3)
# In exportAllGradesPDF we have:
# <style>
# ...
# table th { padding: 4px; font-size: 0.75rem; }
# table td { padding: 4px; font-size: 0.75rem; }
# table td:nth-child(2), table td:nth-child(3), table th:nth-child(2), table th:nth-child(3) { width: 12%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80px; }
# </style>

replacement_css = """
                    @media print {
                        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; zoom: 90%; }
                        .no-print { display: none !important; }
                        table th, table td { padding: 3px !important; font-size: 0.75rem !important; }
                        /* Make Name and Surname columns narrower */
                        table th:nth-child(2), table th:nth-child(3),
                        table td:nth-child(2), table td:nth-child(3) {
                            width: 10% !important;
                            max-width: 70px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
"""

js = re.sub(r'@media print\s*\{[\s\S]*?\}', replacement_css, js, count=1)
# Apply to all print styles just in case
js = re.sub(r'@media print\s*\{[\s\S]*?\.no-print[\s\S]*?\}', replacement_css, js)

with open(path_js, "w", encoding="utf-8-sig") as f:
    f.write(js)

print("Updated app.js")
