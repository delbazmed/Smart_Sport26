$logPath = "C:\Users\Electronics_World\.gemini\antigravity\brain\5782af0d-c94c-4a3c-91fc-c6143e6aa492\.system_generated\logs\transcript.jsonl"
$outPath = "c:\Users\Electronics_World\Documents\Downloads\eps\original_code.html"

# We read the file line by line
$reader = [System.IO.File]::OpenText($logPath)
while ($null -ne ($line = $reader.ReadLine())) {
    if ($line.Contains('"type":"USER_INPUT"') -and $line.Contains("<!DOCTYPE html>")) {
        $start = $line.IndexOf("<!DOCTYPE html>")
        $end = $line.LastIndexOf("</html>")
        if ($start -gt 0 -and $end -gt $start) {
            $html = $line.Substring($start, $end - $start + 7)
            
            # The JSON string escapes newlines as \n, quotes as \", etc.
            # But since we just took a substring of the raw JSON line, we need to unescape it.
            # Actually, it's safer to parse the JSON.
            $json = $line | ConvertFrom-Json
            $content = $json.content
            
            $startHtml = $content.IndexOf("<!DOCTYPE html>")
            if ($startHtml -ge 0) {
                $htmlContent = $content.Substring($startHtml)
                [System.IO.File]::WriteAllText($outPath, $htmlContent, [System.Text.Encoding]::UTF8)
                Write-Host "Extracted! Size: $($htmlContent.Length)"
                break
            }
        }
    }
}
$reader.Close()
