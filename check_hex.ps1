# Check hex values of A2 line in app_1252.js
$file = "C:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js"
$lines = Get-Content $file
foreach ($line in $lines) {
    if ($line -like '*code: "A2"*') {
        Write-Output "Line found: $line"
        $bytes = [System.IO.File]::ReadAllBytes($file)
        # find the line in the bytes
        # Let's just print the bytes of the file around this text
        $utf8Bytes = [System.Text.Encoding]::UTF8.GetBytes($line)
        $hex = foreach ($b in $utf8Bytes) { "{0:X2}" -f $b }
        Write-Output "UTF8 Hex: $($hex -join ' ')"
    }
}
