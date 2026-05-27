# Script to check all app*.js files and try decoding with Windows-1256
$enc = [System.Text.Encoding]::GetEncoding(1256)
$files = Get-ChildItem "C:\Users\Electronics_World\Documents\Downloads\eps\app*.js"

foreach ($file in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    $decoded = $enc.GetString($bytes)
    
    # Check if decoded string contains Arabic characters (e.g. 0x0600 - 0x06FF)
    $hasArabic = $false
    for ($i = 0; $i -lt $decoded.Length; $i++) {
        $c = [int]$decoded[$i]
        if ($c -ge 0x0600 -and $c -le 0x06FF) {
            $hasArabic = $true
            break
        }
    }
    
    Write-Output "File: $($file.Name) - Has Arabic: $hasArabic - Length: $($decoded.Length)"
    if ($hasArabic) {
        # Print first few lines containing code:
        $lines = $decoded -split "\r?\n" | Select-String "code:" | Select-Object -First 3
        foreach ($l in $lines) { Write-Output "  $l" }
    }
}
