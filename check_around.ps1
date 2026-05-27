$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js" -Encoding UTF8
for ($i = 3480; $i -le 3660; $i++) {
    Write-Output (($i + 1).ToString() + ": " + $lines[$i])
}
