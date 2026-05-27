# Test regex patterns against app.js
$appPath = "C:\Users\Electronics_World\Documents\Downloads\eps\app.js"
$scratchDir = "C:\Users\Electronics_World\.gemini\antigravity\brain\5782af0d-c94c-4a3c-91fc-c6143e6aa492\scratch"
$jsonPath = Join-Path $scratchDir "replacements.json"

$jsonBytes = [System.IO.File]::ReadAllBytes($jsonPath)
$jsonText = [System.Text.Encoding]::UTF8.GetString($jsonBytes)
$replacements = ConvertFrom-Json $jsonText

$appBytes = [System.IO.File]::ReadAllBytes($appPath)
$js = [System.Text.Encoding]::UTF8.GetString($appBytes)

for ($i = 0; $i -lt $replacements.Count; $i++) {
    $r = $replacements[$i]
    $pattern = $r.pattern
    $regex = New-Object System.Text.RegularExpressions.Regex($pattern)
    $isMatch = $regex.IsMatch($js)
    Write-Output "Pattern $i : Match = $isMatch"
    if (-not $isMatch) {
        Write-Output "  Failed pattern: $pattern"
    }
}
