$destPath = "c:\Users\Electronics_World\Documents\Downloads\eps\app.js"

if (-not (Test-Path $destPath)) {
    Write-Error "Destination file not found: $destPath"
    exit 1
}

# Read current content with UTF-8
Write-Host "Reading app.js..."
$utf8 = [System.Text.Encoding]::UTF8
$content = [System.IO.File]::ReadAllText($destPath, $utf8)

# Helper function to replace text safely supporting CRLF & LF
function Safe-Replace($target, $replace) {
    $t_crlf = $target -replace "`r`n", "`n" -replace "`n", "`r`n"
    $t_lf = $target -replace "`r`n", "`n"
    $r_crlf = $replace -replace "`r`n", "`n" -replace "`n", "`r`n"
    
    if ($global:content.Contains($t_crlf)) {
        $global:content = $global:content.Replace($t_crlf, $r_crlf)
        return $true
    } elseif ($global:content.Contains($t_lf)) {
        $global:content = $global:content.Replace($t_lf, $r_crlf)
        return $true
    }
    return $false
}

# --- Replacement 1a: Arabic Translations ---
$target1a = @'
        "menu-settings": "الإعدادات",
        "title-dashboard": "لوحة القيادة العامة",
'@

$replace1a = @'
        "menu-settings": "الإعدادات",
        "menu-lottery": "\u0627\u0644\u0642\u0631\u0639\u0629 \u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629",
        "title-lottery": "\u0627\u0644\u0642\u0631\u0639\u0629 \u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629 \u0627\u0644\u0645\u0636\u0627\u062f\u0629 \u0644\u0644\u062a\u062d\u064a\u0632",
        "lottery-remaining-badge": "\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: ",
        "lottery-completed": "[ \ud83c\udfc1 \u0627\u0643\u062a\u0645\u0644\u062a \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0627\u062a \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0627\u0636\u0631\u064a\u0646 ]",
        "btn-lottery-draw": "\ud83c\udfb2 \u0625\u062c\u0631\u0627\u0621 \u0627\u0644\u0642\u0631\u0639\u0629 \u0627\u0644\u0628\u064a\u062f\u0627\u063a\u0648\u062c\u064a\u0629",
        "btn-lottery-reset": "\ud83d\udd04 \u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0642\u0631\u0639\u0629 \u0644\u0644\u062c\u0645\u064a\u0639",
        "lottery-winner-header": "\ud83c\udfaf \u0627\u0644\u062a\u0644\u0645\u064a\u0630 \u0627\u0644\u0642\u0627\u062f\u0645:",
        "title-dashboard": "لوحة القيادة العامة",
'@

if (Safe-Replace $target1a $replace1a) { Write-Host "Applied Replacement 1a" } else { Write-Warning "Replacement 1a failed" }

# --- Replacement 1b: French Translations ---
$target1b = @'
        "menu-settings": "Paramètres",
        "title-dashboard": "Tableau de Bord Général",
'@

$replace1b = @'
        "menu-settings": "Paramètres",
        "menu-lottery": "Tirage au Sort",
        "title-lottery": "Tirage au Sort Anti-Biais",
        "lottery-remaining-badge": "Restants : ",
        "lottery-completed": "[ \ud83c\udfc1 Tous les \u00e9l\u00e8ves pr\u00e9sents ont \u00e9t\u00e9 tir\u00e9s ]",
        "btn-lottery-draw": "\ud83c\udfb2 Effectuer le tirage",
        "btn-lottery-reset": "\ud83d\udd04 R\u00e9initialiser le tirage",
        "lottery-winner-header": "\ud83c\udfaf Prochain \u00e9l\u00e8ve :",
        "title-dashboard": "Tableau de Bord Général",
'@

if (Safe-Replace $target1b $replace1b) { Write-Host "Applied Replacement 1b" } else { Write-Warning "Replacement 1b failed" }

# --- Replacement 2: Database lotteryCalled initialization ---
$target2 = @'
        // Initialize header text fields
        document.getElementById("meta-school-name").value = this.database.metadata.schoolName || "";
'@

$replace2 = @'
        if (!this.database.lotteryCalled) {
            this.database.lotteryCalled = {};
        }

        // Initialize header text fields
        document.getElementById("meta-school-name").value = this.database.metadata.schoolName || "";
'@

if (Safe-Replace $target2 $replace2) { Write-Host "Applied Replacement 2" } else { Write-Warning "Replacement 2 failed" }

# --- Replacement 3a: Selectors in populateClassDropdowns ---
$target3a = @'
    populateClassDropdowns() {
        const rosterSelect = document.getElementById("class-select-roster");
        const gradingSelect = document.getElementById("class-select-grading");
        
        const selectors = [rosterSelect, gradingSelect];
'@

$replace3a = @'
    populateClassDropdowns() {
        const rosterSelect = document.getElementById("class-select-roster");
        const gradingSelect = document.getElementById("class-select-grading");
        const lotterySelect = document.getElementById("lottery-class-select");
        
        const selectors = [rosterSelect, gradingSelect, lotterySelect];
'@

if (Safe-Replace $target3a $replace3a) { Write-Host "Applied Replacement 3a" } else { Write-Warning "Replacement 3a failed" }

# --- Replacement 3b: activeLotteryClassId in checkActive ---
$target3b = @'
        const checkActive = (id) => this.database.classes.some(c => c.id === id) ? id : this.database.classes[0].id;
        this.activeRosterClassId = checkActive(this.activeRosterClassId);
        this.activeGradingClassId = checkActive(this.activeGradingClassId);
'@

$replace3b = @'
        const checkActive = (id) => this.database.classes.some(c => c.id === id) ? id : this.database.classes[0].id;
        this.activeRosterClassId = checkActive(this.activeRosterClassId);
        this.activeGradingClassId = checkActive(this.activeGradingClassId);
        this.activeLotteryClassId = checkActive(this.activeLotteryClassId);
'@

if (Safe-Replace $target3b $replace3b) { Write-Host "Applied Replacement 3b" } else { Write-Warning "Replacement 3b failed" }

# --- Replacement 3c: Assign select values at the end of populateClassDropdowns ---
$target3c = @'
        rosterSelect.value = this.activeRosterClassId;
        gradingSelect.value = this.activeGradingClassId;
    }
'@

$replace3c = @'
        if (rosterSelect) rosterSelect.value = this.activeRosterClassId;
        if (gradingSelect) gradingSelect.value = this.activeGradingClassId;
        if (lotterySelect) lotterySelect.value = this.activeLotteryClassId;
    }
'@

if (Safe-Replace $target3c $replace3c) { Write-Host "Applied Replacement 3c" } else { Write-Warning "Replacement 3c failed" }

# --- Replacement 4: tab switcher in renderActiveViewContent ---
$target4 = @'
            case "stopwatch":
                this.initStopwatchView();
                break;
        }
    }
'@

$replace4 = @'
            case "stopwatch":
                this.initStopwatchView();
                break;
            case "lottery":
                this.updateLotteryPool();
                break;
        }
    }
'@

if (Safe-Replace $target4 $replace4) { Write-Host "Applied Replacement 4" } else { Write-Warning "Replacement 4 failed" }

# --- Replacement 5: bindGlobalEvents listeners ---
$target5 = @'
        // Header controls (Manual, backup, restore, scales, undo)
        document.getElementById("theme-toggle-btn").addEventListener("click", () => this.toggleTheme());
'@

$replace5 = @'
        // Header controls (Manual, backup, restore, scales, undo)
        document.getElementById("theme-toggle-btn").addEventListener("click", () => this.toggleTheme());
        
        // Lottery Event Listeners
        const lotterySelect = document.getElementById("lottery-class-select");
        if (lotterySelect) {
            lotterySelect.addEventListener("change", (e) => {
                this.activeLotteryClassId = e.target.value;
                const winnerContainer = document.getElementById("lottery-winner-container");
                if (winnerContainer) winnerContainer.style.display = "none";
                this.updateLotteryPool();
            });
        }
        const lotteryTermSelect = document.getElementById("lottery-term-select");
        if (lotteryTermSelect) {
            lotteryTermSelect.addEventListener("change", () => {
                const winnerContainer = document.getElementById("lottery-winner-container");
                if (winnerContainer) winnerContainer.style.display = "none";
                this.updateLotteryPool();
            });
        }
        const btnDraw = document.getElementById("btn-lottery-draw");
        if (btnDraw) {
            btnDraw.addEventListener("click", () => {
                this.drawLotteryStudent();
            });
        }
        const btnReset = document.getElementById("btn-lottery-reset");
        if (btnReset) {
            btnReset.addEventListener("click", () => {
                this.resetLotteryPool();
            });
        }
'@

if (Safe-Replace $target5 $replace5) { Write-Host "Applied Replacement 5" } else { Write-Warning "Replacement 5 failed" }

# --- Replacement 6: Inject lottery methods before updateQRCode ---
$target6 = @'
    updateQRCode() {
'@

$replace6 = @'
    updateLotteryPool() {
        const classId = this.activeLotteryClassId;
        const termSelect = document.getElementById("lottery-term-select");
        const term = termSelect ? parseInt(termSelect.value) : 1;

        const counterSpan = document.getElementById("lottery-pool-counter");
        const drawBtn = document.getElementById("btn-lottery-draw");
        const winnerContainer = document.getElementById("lottery-winner-container");
        const emptyMsg = document.getElementById("lottery-empty-message");

        if (!classId) {
            if (counterSpan) counterSpan.textContent = this.currentLang === "ar" ? "\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: --/--" : "Restants : --/--";
            if (drawBtn) drawBtn.disabled = true;
            if (winnerContainer) winnerContainer.style.display = "none";
            if (emptyMsg) emptyMsg.style.display = "none";
            return;
        }

        const classStudents = this.database.students.filter(s => s.classId === classId);
        classStudents.sort((a, b) => a.order - b.order);

        const isExcluded = (studentId) => {
            const student = this.database.students.find(s => s.id === studentId);
            if (student && student.exemptions && student.exemptions[term - 1]) {
                return true;
            }
            const caKey = `${studentId}_${term}_continuous`;
            const caObj = this.database.grades[caKey];
            if (caObj) {
                const disc = String(caObj.discipline || "").toLowerCase();
                const part = String(caObj.participation || "").toLowerCase();
                const crea = String(caObj.creativity || "").toLowerCase();
                if (disc === "a" || part === "a" || crea === "a") return true;
                if (disc === "m" || part === "m" || crea === "m") return true;
            }
            return false;
        };

        if (!this.database.lotteryCalled[classId]) {
            this.database.lotteryCalled[classId] = [];
        }
        const alreadyCalled = this.database.lotteryCalled[classId];

        const presentStudents = classStudents.filter(s => !isExcluded(s.id));
        const eligibleStudents = presentStudents.filter(s => !alreadyCalled.includes(s.id));

        if (counterSpan) {
            counterSpan.textContent = this.currentLang === "ar" 
                ? `\u0627\u0644\u0645\u062a\u0628\u0642\u0648\u0646 \u0641\u064a \u0627\u0644\u0642\u0631\u0639\u0629: ${eligibleStudents.length}/${presentStudents.length}`
                : `Restants : ${eligibleStudents.length}/${presentStudents.length}`;
        }

        if (eligibleStudents.length === 0) {
            if (drawBtn) drawBtn.disabled = true;
            if (winnerContainer) winnerContainer.style.display = "none";
            if (emptyMsg) {
                if (presentStudents.length > 0) {
                    emptyMsg.style.display = "block";
                } else {
                    emptyMsg.style.display = "none";
                }
            }
        } else {
            if (drawBtn) drawBtn.disabled = false;
            if (emptyMsg) emptyMsg.style.display = "none";
        }
    }

    drawLotteryStudent() {
        const classId = this.activeLotteryClassId;
        const termSelect = document.getElementById("lottery-term-select");
        const term = termSelect ? parseInt(termSelect.value) : 1;

        if (!classId) return;

        const classStudents = this.database.students.filter(s => s.classId === classId);
        
        const isExcluded = (studentId) => {
            const student = this.database.students.find(s => s.id === studentId);
            if (student && student.exemptions && student.exemptions[term - 1]) return true;
            const caKey = `${studentId}_${term}_continuous`;
            const caObj = this.database.grades[caKey];
            if (caObj) {
                const disc = String(caObj.discipline || "").toLowerCase();
                const part = String(caObj.participation || "").toLowerCase();
                const crea = String(caObj.creativity || "").toLowerCase();
                if (disc === "a" || part === "a" || crea === "a") return true;
                if (disc === "m" || part === "m" || crea === "m") return true;
            }
            return false;
        };

        if (!this.database.lotteryCalled[classId]) {
            this.database.lotteryCalled[classId] = [];
        }
        const alreadyCalled = this.database.lotteryCalled[classId];

        const presentStudents = classStudents.filter(s => !isExcluded(s.id));
        const eligibleStudents = presentStudents.filter(s => !alreadyCalled.includes(s.id));

        if (eligibleStudents.length === 0) return;

        const drawBtn = document.getElementById("btn-lottery-draw");
        if (drawBtn) drawBtn.disabled = true;

        const winnerContainer = document.getElementById("lottery-winner-container");
        const winnerName = document.getElementById("lottery-winner-name");

        if (winnerContainer) {
            winnerContainer.style.display = "block";
            winnerContainer.classList.remove("winner-glow-box");
        }

        let duration = 1200;
        let interval = 60;
        let elapsed = 0;

        const timer = setInterval(() => {
            const randDummy = eligibleStudents[Math.floor(Math.random() * eligibleStudents.length)];
            if (winnerName) {
                winnerName.textContent = `${randDummy.lastname} ${randDummy.firstname}`;
            }
            elapsed += interval;
            if (elapsed >= duration) {
                clearInterval(timer);

                const finalIdx = Math.floor(Math.random() * eligibleStudents.length);
                const winner = eligibleStudents[finalIdx];

                this.database.lotteryCalled[classId].push(winner.id);
                this.saveDatabase();

                if (winnerName) {
                    winnerName.textContent = `${winner.lastname} ${winner.firstname}`;
                }
                if (winnerContainer) {
                    winnerContainer.classList.add("winner-glow-box");
                }

                this.playLotteryChime();
                this.updateLotteryPool();
            }
        }, interval);
    }

    resetLotteryPool() {
        const classId = this.activeLotteryClassId;
        if (!classId) return;

        this.database.lotteryCalled[classId] = [];
        this.saveDatabase();

        const winnerContainer = document.getElementById("lottery-winner-container");
        if (winnerContainer) winnerContainer.style.display = "none";

        const winnerName = document.getElementById("lottery-winner-name");
        if (winnerName) winnerName.textContent = "--";

        this.updateLotteryPool();

        this.showToast(this.currentLang === "ar" 
            ? "\u062a\u0645 \u0625\u0639\u0627\u062f\u0629 \u0636\u0628\u0637 \u0627\u0644\u0642\u0631\u0639\u0629 \u0644\u0644\u0641\u0648\u062c \u0628\u0646\u062c\u0627\u062d!" 
            : "Tirage au sort r\u00e9initialis\u00e9 pour la classe !");
    }

    playLotteryChime() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const now = ctx.currentTime;

            const playNote = (freq, start, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = "sine";
                osc.frequency.setValueAtTime(freq, start);
                
                gain.gain.setValueAtTime(0.15, start);
                gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(start);
                osc.stop(start + duration);
            };

            playNote(523.25, now, 0.2);
            playNote(659.25, now + 0.08, 0.2);
            playNote(783.99, now + 0.16, 0.2);
            playNote(1046.50, now + 0.24, 0.4);
        } catch (e) {
            console.warn("Web Audio API not supported or blocked:", e);
        }
    }

    updateQRCode() {
'@

if (Safe-Replace $target6 $replace6) { Write-Host "Applied Replacement 6" } else { Write-Warning "Replacement 6 failed" }

# --- Write back UTF-8 file without BOM ---
Write-Host "Saving app.js as UTF-8..."
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($destPath, $content, $utf8NoBOM)
Write-Host "Done!"
