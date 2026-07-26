$file = "c:\Users\Rama Roshinee S V\Desktop\project\src\app\App.tsx"
$lines = [System.IO.File]::ReadAllLines($file, [System.Text.Encoding]::UTF8)

# Find start and end lines of WhenEngage function
$startLine = -1
$endLine = -1
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '^function WhenEngage\(\)') {
        $startLine = $i
    }
}

# Find the closing } of WhenEngage by counting braces from startLine
if ($startLine -ge 0) {
    $depth = 0
    $started = $false
    for ($i = $startLine; $i -lt $lines.Length; $i++) {
        foreach ($ch in $lines[$i].ToCharArray()) {
            if ($ch -eq '{') { $depth++; $started = $true }
            elseif ($ch -eq '}') { $depth-- }
        }
        if ($started -and $depth -eq 0) {
            $endLine = $i
            break
        }
    }
}

Write-Host "Start: $startLine, End: $endLine"

$newCode = @"
function WhenEngage() {
  return (
    <section className="border-y" style={{ backgroundColor: NAVY, borderColor: "rgba(255,255,255,0.08)" }}>
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 pt-10 pb-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <GoldRule className="mb-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold block mb-3" style={{ color: GOLD }}>
              Recognise Your Scenario
            </span>
            <h2
              className="text-3xl font-bold leading-tight text-white"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
            >
              When do businesses engage Neutral Advisory?
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8 flex flex-col gap-3">
            <p
              className="text-base leading-relaxed text-white/70"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
            >
              Organizations typically seek our support when commercial issues require strategic negotiation beyond routine business discussions.
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}
            >
              &ldquo;Here are the types of situations where that support becomes relevant.&rdquo;
            </p>
          </div>
        </div>
      </div>
      {/* 6-item static grid - 2 cols, 3 rows, no scroll */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {engagementScenarios.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col px-8 lg:px-16 py-14 lg:py-20"
            style={{
              borderBottom: idx < engagementScenarios.length - 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
              borderRight: idx % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
            }}
          >
            <span
              className="text-4xl font-mono font-bold block mb-8"
              style={{ color: GOLD }}
            >
              {String(idx + 1).padStart(2, "0")}.
            </span>
            <p
              className="text-lg text-white/90 font-semibold"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: "2" }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
"@

$before = $lines[0..($startLine - 1)]
$after  = $lines[($endLine + 1)..($lines.Length - 1)]
$combined = $before + ($newCode -split "`r?`n") + $after
[System.IO.File]::WriteAllLines($file, $combined, [System.Text.Encoding]::UTF8)
Write-Host "Replacement complete."
