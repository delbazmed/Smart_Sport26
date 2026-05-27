$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8
for ($i = 1740; $i -lt [Math]::Min(1830, $lines.Length); $i++) {
    Write-Output (($i + 1).ToString() + ": " + $lines[$i])
}
