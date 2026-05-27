$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$logFile = "c:\Users\Electronics_World\Documents\Downloads\eps\chrome_debug_raw.log"
$profileDir = "c:\Users\Electronics_World\Documents\Downloads\eps\edge-profile"

if (Test-Path $logFile) { Remove-Item $logFile -Force }

Write-Host "Running Edge to capture all logs..."
$proc = Start-Process -FilePath $edgePath -ArgumentList "--headless", "--disable-gpu", "--enable-logging", "--log-file=$logFile", "--user-data-dir=$profileDir", "file:///c:/Users/Electronics_World/Documents/Downloads/eps/index.html" -NoNewWindow -PassThru

Start-Sleep -Seconds 8

Stop-Process -Id $proc.Id -Force
Write-Host "Edge stopped."

if (Test-Path $logFile) {
    $logContent = Get-Content $logFile
    Write-Host "--- RAW CHROME DEBUG LOG ---"
    $logContent
    Remove-Item $logFile -Force -ErrorAction SilentlyContinue
} else {
    Write-Host "No log file generated."
}
