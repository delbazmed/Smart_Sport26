$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8
$count = $lines.Length
Write-Output "Total lines: $count"
for ($i = $count - 30; $i -lt $count; $i++) {
    Write-Output (($i + 1).ToString() + ": " + $lines[$i])
}
