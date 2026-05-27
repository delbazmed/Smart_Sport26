$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -like '*exportRosterToExcel()*') {
        Write-Output ("Found exportRosterToExcel at line " + ($i + 1))
        for ($j = $i; $j -lt [Math]::Min($i + 90, $lines.Length); $j++) {
            Write-Output (($j + 1).ToString() + ": " + $lines[$j])
        }
        break
    }
}
