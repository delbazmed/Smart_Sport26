$logPath = "C:\Users\Electronics_World\.gemini\antigravity\brain\5782af0d-c94c-4a3c-91fc-c6143e6aa492\.system_generated\logs\transcript.jsonl"
Get-Content -Path $logPath | Select-String -Pattern "app.js" | Select-Object -First 20
