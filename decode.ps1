# Read the bytes of app_1256.js
$bytes = [System.IO.File]::ReadAllBytes("C:\Users\Electronics_World\Documents\Downloads\eps\app_1256.js")

# Convert bytes from CP1256 (Windows-1256) to string
$enc = [System.Text.Encoding]::GetEncoding(1256)
$str = $enc.GetString($bytes)

# Write to decoded_app.js as UTF-8
[System.IO.File]::WriteAllText("C:\Users\Electronics_World\Documents\Downloads\eps\decoded_app.js", $str, [System.Text.Encoding]::UTF8)

# Check the first few lines of appreciation to verify
$lines = $str -split "\r?\n" | Select-String "appreciation" | Select-Object -First 5
foreach ($line in $lines) {
    Write-Output $line
}
