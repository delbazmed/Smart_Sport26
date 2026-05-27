$filePath = "c:\Users\Electronics_World\Documents\Downloads\eps\app_1252.js"
$lines = Get-Content -Path $filePath

# Lines are 1-indexed.
# Line 1795 is index 1794. Line 1877 is index 1876.
# We keep indices 0..1793 (lines 1..1794) and indices 1877..end (lines 1878..end)
$newLines = $lines[0..1793] + $lines[1877..($lines.Count-1)]

[System.IO.File]::WriteAllLines($filePath, $newLines, [System.Text.Encoding]::UTF8)
Write-Output "SUCCESS: Removed lines 1795-1877."
