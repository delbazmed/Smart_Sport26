# Try decoding app_1252.js with different encodings
$file = "C:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js"
$bytes = [System.IO.File]::ReadAllBytes($file)

$encodings = @(
    "utf-8",
    "windows-1256",
    "windows-1252",
    "iso-8859-6",
    "iso-8859-1",
    "us-ascii",
    "utf-16"
)

foreach ($encName in $encodings) {
    try {
        $enc = [System.Text.Encoding]::GetEncoding($encName)
        $str = $enc.GetString($bytes)
        
        # Search for the lines around appreciation
        $lines = $str -split "`r?`n" | Select-String "code: `"A" | Select-Object -First 3
        Write-Output "=== Encoding: $encName ==="
        foreach ($l in $lines) {
            Write-Output "  $l"
        }
    } catch {
        Write-Output ("Error with " + $encName + " : " + $_.Exception.Message)
    }
}
