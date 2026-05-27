$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js" -Encoding UTF8
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -like '*exportAllGradesPDF()*' -or $lines[$i] -like '*exportAllGradesExcel()*') {
        Write-Output ("Line " + ($i + 1) + ": " + $lines[$i])
    }
}
