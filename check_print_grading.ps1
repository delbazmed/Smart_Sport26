$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8
for ($i = 1620; $i -lt [Math]::Min(1750, $lines.Length); $i++) {
    Write-Output (($i + 1).ToString() + ": " + $lines[$i])
}
