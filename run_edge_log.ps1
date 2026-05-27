$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$logFile = "c:\Users\Electronics_World\Documents\Downloads\eps\chrome_debug.log"
$profileDir = "c:\Users\Electronics_World\Documents\Downloads\eps\edge-profile"

# Clean up old log file
if (Test-Path $logFile) { Remove-Item $logFile -Force }

Write-Host "Running Edge to capture console logs..."
# Enable logging and set log file
$proc = Start-Process -FilePath $edgePath -ArgumentList "--headless", "--disable-gpu", "--enable-logging", "--log-file=$logFile", "--user-data-dir=$profileDir", "file:///c:/Users/Electronics_World/Documents/Downloads/eps/index.html" -NoNewWindow -PassThru

# Wait 6 seconds for JavaScript compilation and execution
Start-Sleep -Seconds 6

# Stop Edge
Stop-Process -Id $proc.Id -Force
Write-Host "Edge stopped."

# Read log file
if (Test-Path $logFile) {
    $logContent = Get-Content $logFile
    Write-Host "--- CHROME DEBUG LOG CONTENT ---"
    
    # Filter for lines containing "ERROR", "exception", "SyntaxError", or "app.js"
    $filteredLines = $logContent | Select-String "ERROR|exception|SyntaxError|app.js|CONSOLE|Failed to load"
    if ($filteredLines) {
        foreach ($line in $filteredLines) {
            Write-Host $line
        }
    } else {
        Write-Host "No filtered errors found. Showing first 30 lines of raw log:"
        $logContent | Select-Object -First 30
    }
    
    Remove-Item $logFile -Force -ErrorAction SilentlyContinue
} else {
    Write-Host "No chrome_debug.log file was generated."
}
