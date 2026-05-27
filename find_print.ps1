$lines = Get-Content -Path "C:\Users\Electronics_World\Documents\Downloads\eps\style.css" -Encoding UTF8
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -like '*@media print*') {
        Write-Output ("Found at line " + ($i + 1))
        # print 80 lines starting from here
        for ($j = $i; $j -lt [Math]::Min($i + 120, $lines.Length); $j++) {
            Write-Output (($j + 1).ToString() + ": " + $lines[$j])
        }
        break
    }
}
