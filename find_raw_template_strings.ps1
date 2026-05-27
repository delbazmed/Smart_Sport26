$files = @("app.js", "app_1252.js")
foreach ($file in $files) {
    $filePath = "c:\Users\Electronics_World\Documents\Downloads\eps\$file"
    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
        $lines = $content -split "`n"
        Write-Host "Checking $file for raw template string markers..."
        for ($i = 0; $i -lt $lines.Length; $i++) {
            $line = $lines[$i]
            if ($line -like "*`${*") {
                # Print the line and line number
                Write-Host "  Line $($i + 1): $($line.Trim())"
            }
        }
    }
}
