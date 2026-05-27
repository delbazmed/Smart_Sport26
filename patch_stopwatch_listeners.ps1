$oldBlock = @"
        // Listen for Class change
        if (classSelect) {
            classSelect.onchange = (e) => {
                this.activeGradingClassId = e.target.value;
                this.updateStopwatchStudents();
            };
        }

        const termSelect = document.getElementById("stopwatch-term-select");
        if (termSelect) {
            termSelect.onchange = () => {
                this.updateStopwatchStudents();
            };
        }
        const evalTypeSelect = document.getElementById("stopwatch-eval-type-select");
        if (evalTypeSelect) {
            evalTypeSelect.onchange = () => {
                this.updateStopwatchStudents();
            };
        }
        const attemptSelect = document.getElementById("stopwatch-attempt-select");
        if (attemptSelect) {
            attemptSelect.onchange = () => {
                this.updateStopwatchStudents();
            };
        }
"@

$newBlock = @"
        // Listen for Class change
        if (classSelect) {
            classSelect.addEventListener("change", (e) => {
                this.activeGradingClassId = e.target.value;
                this.updateStopwatchStudents();
            });
        }

        const termSelect = document.getElementById("stopwatch-term-select");
        if (termSelect) {
            termSelect.addEventListener("change", () => {
                this.updateStopwatchStudents();
            });
        }
        const evalTypeSelect = document.getElementById("stopwatch-eval-type-select");
        if (evalTypeSelect) {
            evalTypeSelect.addEventListener("change", () => {
                this.updateStopwatchStudents();
            });
        }
        const attemptSelect = document.getElementById("stopwatch-attempt-select");
        if (attemptSelect) {
            attemptSelect.addEventListener("change", () => {
                this.updateStopwatchStudents();
            });
        }
"@

$files = @("app.js", "app_1252.js")

foreach ($file in $files) {
    $filePath = "c:\Users\Electronics_World\Documents\Downloads\eps\$file"
    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
        $contentNorm = $content -replace "`r`n", "`n"
        $oldBlockNorm = $oldBlock -replace "`r`n", "`n"
        $newBlockNorm = $newBlock -replace "`r`n", "`n"
        
        if ($contentNorm.Contains($oldBlockNorm)) {
            $contentNorm = $contentNorm.Replace($oldBlockNorm, $newBlockNorm)
            [System.IO.File]::WriteAllText($filePath, $contentNorm.Replace("`n", "`r`n"), [System.Text.Encoding]::UTF8)
            Write-Host "SUCCESS: Replaced stopwatch onchange listeners in $file"
        } else {
            # Let's search if the indentation is different
            # Try matching with trimmed lines
            Write-Host "ERROR: Could not find exact match for stopwatch onchange listeners in $file"
        }
    }
}
