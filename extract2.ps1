$lines = Get-Content "c:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8

for ($i=3620; $i -lt 3630; $i++) {
    Write-Host "Line ${i} -> $($lines[$i])"
}
for ($i=3660; $i -lt 3670; $i++) {
    Write-Host "Line ${i} -> $($lines[$i])"
}
