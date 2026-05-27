$lines = Get-Content "c:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8

for ($i=0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'appreciation\s*=') {
        Write-Host "Line ${i} -> $($lines[$i])"
    }
    if ($lines[$i] -match 'termInput\s*=') {
        Write-Host "Line ${i} -> $($lines[$i])"
    }
    if ($lines[$i] -match 'const sports\s*=') {
        Write-Host "Line ${i} -> $($lines[$i])"
    }
    if ($lines[$i] -match 'const qrData\s*=') {
        Write-Host "Line ${i} -> $($lines[$i])"
    }
    if ($lines[$i] -match 'guideline\s*=') {
        Write-Host "Line ${i} -> $($lines[$i])"
    }
}
