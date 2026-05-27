$filePath = "c:\Users\Electronics_World\Documents\Downloads\eps\app.js"
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# 1. Continuous score loading safety
$target1 = '            const scoreObj = this.database.grades[gradeKey] || { sessions: ["P","P","P","P","P","P","P"], discipline: 2, participation: "", creativity: "" };'
$replace1 = @'
            const rawScoreObj = this.database.grades[gradeKey] || {};
            const scoreObj = {
                sessions: (rawScoreObj.sessions && Array.isArray(rawScoreObj.sessions)) ? rawScoreObj.sessions : ["P","P","P","P","P","P","P"],
                discipline: rawScoreObj.discipline !== undefined ? rawScoreObj.discipline : 2,
                participation: rawScoreObj.participation !== undefined ? rawScoreObj.participation : "",
                creativity: rawScoreObj.creativity !== undefined ? rawScoreObj.creativity : "",
                role: rawScoreObj.role || "none",
                greenCards: rawScoreObj.greenCards || 0,
                yellowCards: rawScoreObj.yellowCards || 0,
                redCards: rawScoreObj.redCards || 0,
                redCardPenalty: rawScoreObj.redCardPenalty || 0
            };
'@

# 2. calculateStudentContinuousSum attendance calculation safety
$target2 = @'
    calculateStudentContinuousSum(scoreObj) {
        let attScore = 0;
        if (scoreObj.sessions && Array.isArray(scoreObj.sessions)) {
            scoreObj.sessions.forEach(status => {
                if (status === "P" || status === "?") attScore += 2;
                else if (status === "M") attScore += 1;
            });
        }
'@
$replace2 = @'
    calculateStudentContinuousSum(scoreObj) {
        const sessions = (scoreObj && scoreObj.sessions && Array.isArray(scoreObj.sessions)) ? scoreObj.sessions : ["P","P","P","P","P","P","P"];
        let attScore = 0;
        sessions.forEach(status => {
            if (status === "P" || status === "?" || status === "✓") attScore += 2;
            else if (status === "M") attScore += 1;
        });
'@

# 3. saveActiveGradingSheetData sessions retain safety
$target3 = @'
                // Retain current session values from memory
                const currentObj = this.database.grades[gradeKey] || { sessions: ["P","P","P","P","P","P","P"] };
                const role = currentObj.role || "none";
'@
$replace3 = @'
                // Retain current session values from memory
                const currentObj = this.database.grades[gradeKey] || {};
                const currentSessions = (currentObj.sessions && Array.isArray(currentObj.sessions)) ? currentObj.sessions : ["P","P","P","P","P","P","P"];
                const role = currentObj.role || "none";
'@

$target4 = @'
                this.database.grades[gradeKey] = {
                    sessions: currentObj.sessions,
'@
$replace4 = @'
                this.database.grades[gradeKey] = {
                    sessions: currentSessions,
'@

# Helper to normalize CRLF
function Normalize-NL($text) {
    return $text -replace "`r`n", "`n" -replace "`n", "`r`n"
}

$target1_norm = Normalize-NL $target1
$replace1_norm = Normalize-NL $replace1
$target2_norm = Normalize-NL $target2
$replace2_norm = Normalize-NL $replace2
$target3_norm = Normalize-NL $target3
$replace3_norm = Normalize-NL $replace3
$target4_norm = Normalize-NL $target4
$replace4_norm = Normalize-NL $replace4

# Do replacements
$patched = $false

if ($content.Contains($target1_norm)) {
    $content = $content.Replace($target1_norm, $replace1_norm)
    Write-Host "Success: Applied patch 1"
    $patched = $true
} else {
    $target1_lf = $target1 -replace "`r`n", "`n"
    if ($content.Contains($target1_lf)) {
        $content = $content.Replace($target1_lf, $replace1_norm)
        Write-Host "Success: Applied patch 1 (LF)"
        $patched = $true
    } else {
        Write-Warning "Failed patch 1"
    }
}

if ($content.Contains($target2_norm)) {
    $content = $content.Replace($target2_norm, $replace2_norm)
    Write-Host "Success: Applied patch 2"
    $patched = $true
} else {
    $target2_lf = $target2 -replace "`r`n", "`n"
    if ($content.Contains($target2_lf)) {
        $content = $content.Replace($target2_lf, $replace2_norm)
        Write-Host "Success: Applied patch 2 (LF)"
        $patched = $true
    } else {
        Write-Warning "Failed patch 2"
    }
}

if ($content.Contains($target3_norm)) {
    $content = $content.Replace($target3_norm, $replace3_norm)
    Write-Host "Success: Applied patch 3"
    $patched = $true
} else {
    $target3_lf = $target3 -replace "`r`n", "`n"
    if ($content.Contains($target3_lf)) {
        $content = $content.Replace($target3_lf, $replace3_norm)
        Write-Host "Success: Applied patch 3 (LF)"
        $patched = $true
    } else {
        Write-Warning "Failed patch 3"
    }
}

if ($content.Contains($target4_norm)) {
    $content = $content.Replace($target4_norm, $replace4_norm)
    Write-Host "Success: Applied patch 4"
    $patched = $true
} else {
    $target4_lf = $target4 -replace "`r`n", "`n"
    if ($content.Contains($target4_lf)) {
        $content = $content.Replace($target4_lf, $replace4_norm)
        Write-Host "Success: Applied patch 4 (LF)"
        $patched = $true
    } else {
        Write-Warning "Failed patch 4"
    }
}

if ($patched) {
    # Save file
    $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($filePath, $content, $utf8NoBOM)
    Write-Host "Patched app.js successfully!"
} else {
    Write-Error "No patches were applied!"
    exit 1
}
