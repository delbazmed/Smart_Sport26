$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -like '*roster-students-tbody*') {
        Write-Output ("Found roster-students-tbody at line " + ($i + 1))
        for ($j = $i + 15; $j -lt [Math]::Min($i + 95, $lines.Length); $j++) {
            Write-Output (($j + 1).ToString() + ": " + $lines[$j])
        }
        break
    }
}
