$htmlPath = "c:\Users\Electronics_World\Documents\Downloads\eps\index.html"
$html = Get-Content $htmlPath -Raw -Encoding UTF8

# Remove btn-export-csv
$html = $html -replace '(?s)<button id="btn-export-csv".*?</button>\s*', ''
# Remove btn-export-all-classes
$html = $html -replace '(?s)<button id="btn-export-all-classes".*?</button>\s*', ''

# Remove collective rubric print
$html = $html -replace '(?s)<button type="button" id="btn-print-collective-rubric".*?</button>\s*', ''

# Fix duplicate </button>
$html = $html.Replace("</button>`r`n                        </button>", "</button>")
$html = $html.Replace("</button>`n                        </button>", "</button>")

Set-Content -Path $htmlPath -Value $html -Encoding UTF8

$jsPath = "c:\Users\Electronics_World\Documents\Downloads\eps\app.js"
$js = Get-Content $jsPath -Raw -Encoding UTF8

# Fix PDF column headers
$js = $js.Replace("الفرض", "كشف نقاط الفرض")
$js = $js.Replace("الاختبار", "كشف نقاط الاختبار")
# Revert "المراقبة المستمرة" if they were wrongly targeted, but the user actually just said:
# "في خانة الفرض ... العنوان الى كشف نقاط الفرض الاول ونفس الشيء بالنسبة للاختبار ... كشف نقاط الاختبار"

# Fix Name and Surname width in print styles
$replacementCss = @"
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
"@

$js = $js -replace '(?s)@media print\s*\{[^}]*?\.no-print[^}]*?\}', $replacementCss

Set-Content -Path $jsPath -Value $js -Encoding UTF8

Write-Host "Done!"
