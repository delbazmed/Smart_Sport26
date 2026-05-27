$lines = Get-Content "c:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8

Write-Host "--- Appreciation Block 1 ---"
for ($i=2173; $i -le 2198; $i++) { Write-Host $lines[$i] }

Write-Host "--- Appreciation Block 2 ---"
for ($i=2277; $i -le 2296; $i++) { Write-Host $lines[$i] }

Write-Host "--- PDF arrays ---"
for ($i=3492; $i -le 3550; $i++) { 
    if ($lines[$i] -match "window.prompt" -or $lines[$i] -match "term ===" -or $lines[$i] -match "title =" -or $lines[$i] -match "font-weight: bold") {
        Write-Host $lines[$i] 
    }
}

Write-Host "--- Excel arrays ---"
for ($i=3620; $i -le 3680; $i++) { 
    if ($lines[$i] -match "ws_data.push") {
        Write-Host $lines[$i] 
    }
    if ($lines[$i] -match "appreciation =") {
        Write-Host $lines[$i] 
    }
    if ($lines[$i] -match "gender =") {
        Write-Host $lines[$i] 
    }
}

Write-Host "--- QR ---"
for ($i=5718; $i -le 5724; $i++) { Write-Host $lines[$i] }

