$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\app.js" -Encoding UTF8
for ($i = 1830; $i -lt [Math]::Min(1950, $lines.Length); $i++) {
    if ($lines[$i] -like '*renderAssignmentExamSheet*') {
        Write-Output ("Found renderAssignmentExamSheet at line " + ($i + 1))
        for ($j = $i; $j -lt [Math]::Min($i + 90, $lines.Length); $j++) {
            Write-Output (($j + 1).ToString() + ": " + $lines[$j])
        }
        break
    }
}
