$srcPath = "c:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js"
$destPath = "c:\Users\Electronics_World\Documents\Downloads\eps\app.js"

if (-not (Test-Path $srcPath)) {
    Write-Error "Source file not found: $srcPath"
    exit 1
}

# 1. Restore clean backup
Copy-Item $srcPath $destPath -Force
Write-Host "Restored app.js from app_1252.js."

# 2. Read with UTF-8 encoding
Write-Host "Reading app.js with UTF-8 encoding..."
$utf8 = [System.Text.Encoding]::UTF8
$content = [System.IO.File]::ReadAllText($destPath, $utf8)

# --- Replacement 1: Add advanceToNextActiveStudent ---
$target1 = @'
            // Restore previous value if student is still in class and not excluded
            const stillAvailable = students.find(s => s.id === selectedVal) && !this.shouldExcludeStudentFromStopwatch(selectedVal);
            if (stillAvailable) {
                select.value = selectedVal;
            } else {
                select.value = "";
            }
        });
    }
'@

$replace1 = @'
            // Restore previous value if student is still in class and not excluded
            const stillAvailable = students.find(s => s.id === selectedVal) && !this.shouldExcludeStudentFromStopwatch(selectedVal);
            if (stillAvailable) {
                select.value = selectedVal;
            } else {
                select.value = "";
            }
        });
    }

    advanceToNextActiveStudent(currentStudentId) {
        if (this.stopwatch.mode !== "single" || !currentStudentId) return;

        const classId = this.activeGradingClassId;
        if (!classId) return;

        const students = this.database.students.filter(s => s.classId === classId);
        students.sort((a, b) => a.order - b.order);

        const curIdx = students.findIndex(s => s.id === currentStudentId);
        if (curIdx === -1) return;

        let nextStudentId = "";
        
        // 1. Scan forward to find the next eligible student
        for (let i = curIdx + 1; i < students.length; i++) {
            const s = students[i];
            if (!this.shouldExcludeStudentFromStopwatch(s.id)) {
                nextStudentId = s.id;
                break;
            }
        }

        // 2. Wrap around from the beginning if not found
        if (!nextStudentId) {
            for (let i = 0; i < curIdx; i++) {
                const s = students[i];
                if (!this.shouldExcludeStudentFromStopwatch(s.id)) {
                    nextStudentId = s.id;
                    break;
                }
            }
        }

        if (nextStudentId) {
            const select = document.getElementById("stopwatch-single-student");
            if (select) {
                select.value = nextStudentId;
                select.dispatchEvent(new Event("change"));
            }
        }
        
        // Reset single-lane stopwatch state to make it armed and ready for the next run
        this.stopwatch.running[0] = false;
        this.stopwatch.frozen[0] = false;
        this.stopwatch.elapsed[0] = 0;
        this.updateStopwatchDisplays();
        this.updateLaneVisualStates();
    }
'@

$target1_crlf = $target1 -replace "`r`n", "`n" -replace "`n", "`r`n"
$target1_lf = $target1 -replace "`r`n", "`n"
$replace1_crlf = $replace1 -replace "`r`n", "`n" -replace "`n", "`r`n"

if ($content.Contains($target1_crlf)) {
    $content = $content.Replace($target1_crlf, $replace1_crlf)
    Write-Host "Success: Applied Replacement 1 (CRLF mode)"
} elseif ($content.Contains($target1_lf)) {
    $content = $content.Replace($target1_lf, $replace1_crlf)
    Write-Host "Success: Applied Replacement 1 (LF mode)"
} else {
    Write-Warning "Failed: Target 1 not found in app.js"
}

# --- Replacement 2: Declare singleLaneStudentId ---
$target2 = @'
        const sports = this.database.termActivities[`term_${term}`];
        const sportId = sports ? sports.individual : null;

        let promotedCount = 0;
'@

$replace2 = @'
        const sports = this.database.termActivities[`term_${term}`];
        const sportId = sports ? sports.individual : null;

        let promotedCount = 0;
        let singleLaneStudentId = "";
'@

$target2_crlf = $target2 -replace "`r`n", "`n" -replace "`n", "`r`n"
$target2_lf = $target2 -replace "`r`n", "`n"
$replace2_crlf = $replace2 -replace "`r`n", "`n" -replace "`n", "`r`n"

if ($content.Contains($target2_crlf)) {
    $content = $content.Replace($target2_crlf, $replace2_crlf)
    Write-Host "Success: Applied Replacement 2 (CRLF mode)"
} elseif ($content.Contains($target2_lf)) {
    $content = $content.Replace($target2_lf, $replace2_crlf)
    Write-Host "Success: Applied Replacement 2 (LF mode)"
} else {
    Write-Warning "Failed: Target 2 not found in app.js"
}

# --- Replacement 3a: Assign singleLaneStudentId ---
$target3a = @'
                // Update DOM input directly if grading sheet table is currently open
                const tr = document.querySelector(`#table-grading-sheet tbody tr input[data-student="${studentId}"]`)?.closest("tr");
                if (tr) {
                    const attInput = tr.querySelector(`.att${attempt}`);
                    if (attInput) {
                        attInput.value = finalSeconds;
                        this.recalculateAttemptExamRow(studentId, tr, sportId);
                    }
                }

                promotedCount++;
            }
        }
'@

$replace3a = @'
                // Update DOM input directly if grading sheet table is currently open
                const tr = document.querySelector(`#table-grading-sheet tbody tr input[data-student="${studentId}"]`)?.closest("tr");
                if (tr) {
                    const attInput = tr.querySelector(`.att${attempt}`);
                    if (attInput) {
                        attInput.value = finalSeconds;
                        this.recalculateAttemptExamRow(studentId, tr, sportId);
                    }
                }

                promotedCount++;
                singleLaneStudentId = studentId;
            }
        }
'@

$target3a_crlf = $target3a -replace "`r`n", "`n" -replace "`n", "`r`n"
$target3a_lf = $target3a -replace "`r`n", "`n"
$replace3a_crlf = $replace3a -replace "`r`n", "`n" -replace "`n", "`r`n"

if ($content.Contains($target3a_crlf)) {
    $content = $content.Replace($target3a_crlf, $replace3a_crlf)
    Write-Host "Success: Applied Replacement 3a (CRLF mode)"
} elseif ($content.Contains($target3a_lf)) {
    $content = $content.Replace($target3a_lf, $replace3a_crlf)
    Write-Host "Success: Applied Replacement 3a (LF mode)"
} else {
    Write-Warning "Failed: Target 3a not found in app.js"
}

# --- Replacement 3b: Trigger advanceToNextActiveStudent ---
$target3b = @'
        if (promotedCount > 0) {
            this.saveDatabase();
            this.updateStopwatchStudents();
'@

$replace3b = @'
        if (promotedCount > 0) {
            this.saveDatabase();
            this.updateStopwatchStudents();
            
            // Auto-advance to the next active student if in single lane mode
            if (this.stopwatch.mode === "single" && singleLaneStudentId) {
                this.advanceToNextActiveStudent(singleLaneStudentId);
            }
'@

$target3b_crlf = $target3b -replace "`r`n", "`n" -replace "`n", "`r`n"
$target3b_lf = $target3b -replace "`r`n", "`n"
$replace3b_crlf = $replace3b -replace "`r`n", "`n" -replace "`n", "`r`n"

if ($content.Contains($target3b_crlf)) {
    $content = $content.Replace($target3b_crlf, $replace3b_crlf)
    Write-Host "Success: Applied Replacement 3b (CRLF mode)"
} elseif ($content.Contains($target3b_lf)) {
    $content = $content.Replace($target3b_lf, $replace3b_crlf)
    Write-Host "Success: Applied Replacement 3b (LF mode)"
} else {
    Write-Warning "Failed: Target 3b not found in app.js"
}

# --- Replacement 4: QR Code Try-Catch using ASCII-only regex ---
# Regex captures the text string (containing the Arabic text) and injects it back.
$regex4 = '(?s)new QRCode\(qrContainer, \{\s+text: (qrData \|\| "[^"]+"),\s+width: 120,\s+height: 120,\s+colorDark : "#2b3440",\s+colorLight : "#ffffff",\s+correctLevel : QRCode\.CorrectLevel\.H\s+\}\);'

$replace4 = @'
            try {
                new QRCode(qrContainer, {
                    text: $1,
                    width: 120,
                    height: 120,
                    colorDark : "#2b3440",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            } catch (e) {
                try {
                    new QRCode(qrContainer, {
                        text: $1,
                        width: 120,
                        height: 120,
                        colorDark : "#2b3440",
                        colorLight : "#ffffff",
                        correctLevel : QRCode.CorrectLevel.Q
                    });
                } catch (e2) {
                    try {
                        new QRCode(qrContainer, {
                            text: $1,
                            width: 120,
                            height: 120,
                            colorDark : "#2b3440",
                            colorLight : "#ffffff",
                            correctLevel : QRCode.CorrectLevel.M
                        });
                    } catch (e3) {
                        try {
                            new QRCode(qrContainer, {
                                text: $1,
                                width: 120,
                                height: 120,
                                colorDark : "#2b3440",
                                colorLight : "#ffffff",
                                correctLevel : QRCode.CorrectLevel.L
                            });
                        } catch (e4) {
                            console.warn("QR Code generation failed due to content length:", e4);
                        }
                    }
                }
            }
'@

# Normalize line endings for comparison and regex match
$regex4_crlf = $regex4 -replace "`r`n", "`n" -replace "`n", "`r`n"
$regex4_lf = $regex4 -replace "`r`n", "`n"
$replace4_crlf = $replace4 -replace "`r`n", "`n" -replace "`n", "`r`n"

if ($content -match $regex4_crlf) {
    $content = $content -replace $regex4_crlf, $replace4_crlf
    Write-Host "Success: Applied Replacement 4 (CRLF mode)"
} elseif ($content -match $regex4_lf) {
    $content = $content -replace $regex4_lf, $replace4_crlf
    Write-Host "Success: Applied Replacement 4 (LF mode)"
} else {
    Write-Warning "Failed: Target 4 regex not found in app.js"
}

# --- Write back UTF-8 file without BOM ---
Write-Host "Saving app.js as UTF-8..."
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($destPath, $content, $utf8NoBOM)
Write-Host "Done!"
