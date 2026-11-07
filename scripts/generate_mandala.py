import math

svg = '''<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF9D00"/>
      <stop offset="40%" stop-color="#F72585"/>
      <stop offset="70%" stop-color="#7209B7" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#101010" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="petalGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FF9D00"/>
      <stop offset="100%" stop-color="#F72585"/>
    </linearGradient>
    <linearGradient id="petalGrad2" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F72585"/>
      <stop offset="100%" stop-color="#FFD166"/>
    </linearGradient>
  </defs>
  
  <!-- Outer subtle aura ring -->
  <circle cx="100" cy="100" r="96" stroke="#FF9D00" stroke-opacity="0.2" stroke-width="1" stroke-dasharray="2 4"/>
  <circle cx="100" cy="100" r="90" stroke="#F72585" stroke-opacity="0.4" stroke-width="1.5"/>
  
  <!-- Outer Radiating Beaded Ring (36 dots) -->
'''

for i in range(36):
    angle = i * (360 / 36) * math.pi / 180
    x = 100 + 85 * math.cos(angle)
    y = 100 + 85 * math.sin(angle)
    color = "#F72585" if i % 2 == 0 else "#FF9D00"
    r = 1.8 if i % 2 == 0 else 1.2
    svg += f'  <circle cx="{x:.2f}" cy="{y:.2f}" r="{r}" fill="{color}" />\n'

svg += '''
  <!-- Middle Tier: 18 Geometric Arrow Petals -->
'''
for i in range(18):
    angle = i * (360 / 18)
    svg += f'  <path d="M 100 28 L 105 45 L 95 45 Z" fill="url(#petalGrad1)" opacity="0.9" transform="rotate({angle} 100 100)" />\n'
    svg += f'  <circle cx="100" cy="24" r="1.5" fill="#FFD166" transform="rotate({angle} 100 100)" />\n'

svg += '''
  <!-- Middle Ring 2: 18 Inverted Petals -->
'''
for i in range(18):
    angle = (i * (360 / 18)) + 10
    svg += f'  <path d="M 100 38 Q 107 50 100 62 Q 93 50 100 38 Z" fill="url(#petalGrad2)" opacity="0.85" transform="rotate({angle} 100 100)" />\n'

svg += '''
  <!-- Inner Ring: 12 Lotus Petals with Delicate Veins -->
'''
for i in range(12):
    angle = i * (360 / 12)
    svg += f'  <path d="M 100 52 C 109 64 109 76 100 84 C 91 76 91 64 100 52 Z" fill="#F72585" stroke="#FFD166" stroke-width="0.8" transform="rotate({angle} 100 100)" />\n'
    svg += f'  <circle cx="100" cy="56" r="1.2" fill="#FFFFFF" transform="rotate({angle} 100 100)" />\n'

svg += '''
  <!-- Core Rings & Glowing Center -->
  <circle cx="100" cy="100" r="26" fill="url(#coreGlow)"/>
  <circle cx="100" cy="100" r="22" fill="#101010" stroke="#F72585" stroke-width="1.5"/>
  <circle cx="100" cy="100" r="17" fill="none" stroke="#FF9D00" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="100" cy="100" r="13" fill="#F72585"/>
  <circle cx="100" cy="100" r="9" fill="#FF9D00"/>
  <circle cx="100" cy="100" r="5" fill="#FFFFFF"/>
</svg>'''

with open('public/images/logo_mandala.svg', 'w') as f:
    f.write(svg)

print('logo_mandala.svg written successfully')
