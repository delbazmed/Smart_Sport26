function Check-Braces($filePath) {
    if (Test-Path $filePath) {
        $content = Get-Content -Path $filePath -Raw
        $braces = 0
        for ($i = 0; $i -lt $content.Length; $i++) {
            $c = $content[$i]
            if ($c -eq '{') { $braces++ }
            elseif ($c -eq '}') { $braces-- }
        }
        Write-Host "$filePath braces balance: $braces"
    } else {
        Write-Host "$filePath not found"
    }
}

Check-Braces "c:\Users\Electronics_World\Documents\Downloads\eps\app.js"
Check-Braces "c:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js"
Check-Braces "c:\Users\Electronics_World\Documents\Downloads\eps\app_1256.js"
