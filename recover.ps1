$bytes = [System.IO.File]::ReadAllBytes('c:\Users\Electronics_World\Documents\Downloads\eps\app.js')
$str = [System.Text.Encoding]::UTF8.GetString($bytes)
$recovered_bytes = [System.Text.Encoding]::GetEncoding('windows-1252').GetBytes($str)
$final_str = [System.Text.Encoding]::UTF8.GetString($recovered_bytes)
[System.IO.File]::WriteAllText('c:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js', $final_str, [System.Text.Encoding]::UTF8)

$recovered_bytes_1256 = [System.Text.Encoding]::GetEncoding('windows-1256').GetBytes($str)
$final_str_1256 = [System.Text.Encoding]::UTF8.GetString($recovered_bytes_1256)
[System.IO.File]::WriteAllText('c:\Users\Electronics_World\Documents\Downloads\eps\app_1256.js', $final_str_1256, [System.Text.Encoding]::UTF8)
