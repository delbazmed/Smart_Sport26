import re

file_path = r"c:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We look for the end of the new renderContinuousAssessmentSheet which has the card-board-container
# and then the duplicate loop.
# Let's locate the duplicate code starting with:
# "            const isExempted = student.exemptions && student.exemptions[term - 1];"
# that appears right after the closing brace of the first function.

duplicate_pattern = r"""\s*const isExempted = student\.exemptions && student\.exemptions\[term - 1\];.*?tableNode\.querySelectorAll\("\.ca-input"\)\.forEach\(input => \{.*?\}\);\s*\}\s*\}\s*\}"""

# Let's look for a simpler match or substring.
# Let's find:
target_duplicate = """            const isExempted = student.exemptions && student.exemptions[term - 1];
            const genderText = student.gender === "M" ? this.getTranslation("gender-m") : this.getTranslation("gender-f");
            const genderClass = student.gender === "M" ? "badge-blue" : "badge-pink";

            // Load saved continuous scores
            const gradeKey = `${student.id}_${term}_continuous`;
            const scoreObj = this.database.grades[gradeKey] || { sessions: ["P","P","P","P","P","P","P"], discipline: 2, participation: 2, creativity: 2 };

            if (isExempted) {
                // Disabled row for exempted students
                headers += `
                    <tr class="exempted-row">
                        <td>${index + 1}</td>
                        <td class="text-muted col-lastname">${student.lastname}</td>
                        <td class="text-muted col-firstname">${student.firstname}</td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td colspan="4" class="text-center"><span class="badge badge-danger">${this.getTranslation("exempted-abrv")}</span></td>
                        <td><strong class="highlight-text">${this.getTranslation("exempted-abrv")}</strong></td>
                    </tr>
                `;
            } else {
                // Interactive sessions grid
                let sessionsHtml = `<div class="session-cell-group">`;
                for (let sIdx = 0; sIdx < 7; sIdx++) {
                    const status = scoreObj.sessions[sIdx] || "P";
                    let labelText = "✓";
                    let labelClass = "session-lbl-present";
                    if (status === "M") {
                        labelText = "M";
                        labelClass = "session-lbl-sick active";
                    } else if (status === "A") {
                        labelText = "A";
                        labelClass = "session-lbl-absent active";
                    }

                    sessionsHtml += `
                        <span class="session-lbl ${labelClass}" 
                               id="lbl_${student.id}_${sIdx}" 
                               onclick="app.cycleSessionStatus('${student.id}', ${sIdx})">${labelText}</span>
                    `;
                }
                sessionsHtml += `</div>`;

                // Calculate current sum
                const caSumObj = this.calculateStudentContinuousSum(scoreObj);

                headers += `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="col-lastname"><strong>${student.lastname}</strong></td>
                        <td class="col-firstname"><strong>${student.firstname}</strong></td>
                        <td><span class="badge ${genderClass}">${genderText}</span></td>
                        <td>${sessionsHtml}</td>
                        <td>
                            <input type="number" min="0" max="2" step="0.5" class="grading-input ca-input disc-input"
                                   value="${scoreObj.discipline}" data-student="${student.id}" data-field="discipline" style="width: 70px;">
                        </td>
                        <td>
                            <input type="number" min="0" max="2" step="0.5" class="grading-input ca-input part-input"
                                   value="${scoreObj.participation}" data-student="${student.id}" data-field="participation" style="width: 70px;">
                        </td>
                        <td>
                            <input type="number" min="0" max="2" step="0.5" class="grading-input ca-input crea-input"
                                   value="${scoreObj.creativity}" data-student="${student.id}" data-field="creativity" style="width: 70px;">
                        </td>
                        <td class="final-grade-cell" id="ca_total_${student.id}"><strong>${caSumObj.total}</strong></td>
                    </tr>
                `;
            }
        });

        headers += `</tbody>`;
        tableNode.innerHTML = headers;

        // Register dynamic event listeners for inputs
        tableNode.querySelectorAll(".ca-input").forEach(input => {
            input.addEventListener("input", (e) => {
                const tr = e.target.closest("tr");
                const stdId = e.target.getAttribute("data-student");
                this.recalculateContinuousSumRow(stdId, tr);
            });
        });
    }"""

# Normalize line endings to find match
content_norm = content.replace("\r\n", "\n")
target_norm = target_duplicate.replace("\r\n", "\n")

if target_norm in content_norm:
    new_content = content_norm.replace(target_norm, "")
    # Restore original line endings (CRLF on Windows)
    new_content = new_content.replace("\n", "\r\n")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("SUCCESS: Cleaned up duplicate code.")
else:
    print("ERROR: Target duplicate not found.")
