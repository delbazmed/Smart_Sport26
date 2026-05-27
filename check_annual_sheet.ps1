$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -like '*renderAnnualTermSheet(*' -and $lines[$i] -like '*{*') {
        Write-Output ("Found renderAnnualTermSheet definition at line " + ($i + 1))
        for ($j = $i; $j -lt [Math]::Min($i + 95, $lines.Length); $j++) {
            Write-Output (($j + 1).ToString() + ": " + $lines[$j])
        }
        break
    }
}
