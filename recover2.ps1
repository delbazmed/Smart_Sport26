$bytes = [System.IO.File]::ReadAllBytes('c:\Users\Electronics_World\Documents\Downloads\eps\app.js')
$str = [System.Text.Encoding]::UTF8.GetString($bytes)
$recovered_bytes = [System.Text.Encoding]::GetEncoding('iso-8859-1').GetBytes($str)
$final_str = [System.Text.Encoding]::UTF8.GetString($recovered_bytes)

# Test if it succeeded
Write-Host $final_str.Substring(0, 1000)

[System.IO.File]::WriteAllText('c:\Users\Electronics_World\Documents\Downloads\eps\app.js', $final_str, [System.Text.Encoding]::UTF8)
