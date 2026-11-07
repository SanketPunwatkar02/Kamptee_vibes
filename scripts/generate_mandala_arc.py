import math

svg = '''<svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="footerMandalaGlow" cx="50%" cy="100%" r="90%">
      <stop offset="0%" stop-color="#FF9D00" stop-opacity="0.35"/>
      <stop offset="35%" stop-color="#F72585" stop-opacity="0.25"/>
      <stop offset="70%" stop-color="#7209B7" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#101010" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fmGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FF9D00"/>
      <stop offset="100%" stop-color="#F72585"/>
    </linearGradient>
    <linearGradient id="fmGrad2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFD166"/>
      <stop offset="100%" stop-color="#FF9D00"/>
    </linearGradient>
  </defs>

  <!-- Ambient Glow -->
  <rect x="0" y="0" width="600" height="300" fill="url(#footerMandalaGlow)"/>

  <!-- Concentric Arc Rings from bottom center (300, 300) -->
  <circle cx="300" cy="300" r="280" stroke="#FF9D00" stroke-opacity="0.15" stroke-width="1.5" stroke-dasharray="4 6"/>
  <circle cx="300" cy="300" r="250" stroke="#F72585" stroke-opacity="0.25" stroke-width="2"/>
  <circle cx="300" cy="300" r="220" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
  <circle cx="300" cy="300" r="180" stroke="#FF9D00" stroke-opacity="0.3" stroke-width="1.5"/>
  <circle cx="300" cy="300" r="140" stroke="#F72585" stroke-opacity="0.35" stroke-width="2"/>
  <circle cx="300" cy="300" r="90" stroke="#FFD166" stroke-opacity="0.4" stroke-width="2"/>
'''

# Radiating petals along upper half arc
for angle_deg in range(185, 355, 6):
    rad = math.radians(angle_deg)
    # Tier 1 petals
    x1 = 300 + 240 * math.cos(rad)
    y1 = 300 + 240 * math.sin(rad)
    svg += f'  <circle cx="{x1:.1f}" cy="{y1:.1f}" r="2" fill="#FF9D00" opacity="0.6"/>\n'

for angle_deg in range(188, 352, 9):
    rad = math.radians(angle_deg)
    # Tier 2 triangles
    x1 = 300 + 210 * math.cos(rad)
    y1 = 300 + 210 * math.sin(rad)
    x2 = 300 + 195 * math.cos(rad - 0.05)
    y2 = 300 + 195 * math.sin(rad - 0.05)
    x3 = 300 + 195 * math.cos(rad + 0.05)
    y3 = 300 + 195 * math.sin(rad + 0.05)
    svg += f'  <polygon points="{x1:.1f},{y1:.1f} {x2:.1f},{y2:.1f} {x3:.1f},{y3:.1f}" fill="url(#fmGrad1)" opacity="0.75"/>\n'

for angle_deg in range(188, 352, 12):
    rad = math.radians(angle_deg)
    # Tier 3 lotus petals
    x1 = 300 + 160 * math.cos(rad)
    y1 = 300 + 160 * math.sin(rad)
    svg += f'  <circle cx="{x1:.1f}" cy="{y1:.1f}" r="3.5" fill="#F72585" opacity="0.8"/>\n'
    svg += f'  <circle cx="{x1:.1f}" cy="{y1:.1f}" r="1.5" fill="#FFFFFF"/>\n'

svg += '''
  <!-- Core Arch -->
  <path d="M 230 300 A 70 70 0 0 1 370 300 Z" fill="#F72585" fill-opacity="0.3" stroke="#FF9D00" stroke-width="2"/>
  <path d="M 260 300 A 40 40 0 0 1 340 300 Z" fill="#FF9D00" fill-opacity="0.4" stroke="#FFD166" stroke-width="2"/>
</svg>'''

with open('public/images/mandala_arc.svg', 'w') as f:
    f.write(svg)

print('mandala_arc.svg written successfully')
