import chardet
import codecs

with open(r'c:\Users\Electronics_World\Documents\Downloads\eps\app.js', 'rb') as f:
    raw_data = f.read(500)

print("Raw bytes:", raw_data[:100])
# Let's try to reverse the PowerShell double encoding.
# PowerShell probably read the UTF-8 file using cp1252 or cp1256.
with open(r'c:\Users\Electronics_World\Documents\Downloads\eps\app.js', 'r', encoding='utf-8') as f:
    text = f.read()

print("Original text preview:", repr(text[:100]))

try:
    # If it was read as cp1256 and saved as utf-8:
    recovered = text.encode('cp1256').decode('utf-8')
    print("Recovered with cp1256:", repr(recovered[:100]))
except Exception as e:
    print("cp1256 failed:", e)

try:
    # If it was read as cp1252 and saved as utf-8:
    recovered2 = text.encode('cp1252').decode('utf-8')
    print("Recovered with cp1252:", repr(recovered2[:100]))
except Exception as e:
    print("cp1252 failed:", e)

try:
    recovered3 = text.encode('latin1').decode('utf-8')
    print("Recovered with latin1:", repr(recovered3[:100]))
except Exception as e:
    print("latin1 failed:", e)
