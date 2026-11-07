import math

svg = '''<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Core radial glow -->
    <radialGradient id="coreLight" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="25%" stop-color="#FFD166"/>
      <stop offset="50%" stop-color="#FF9D00"/>
      <stop offset="75%" stop-color="#F72585"/>
      <stop offset="100%" stop-color="#2B001F" stop-opacity="0.9"/>
    </radialGradient>

    <!-- Outer aura gradient -->
    <radialGradient id="outerAura" cx="50%" cy="50%" r="50%">
      <stop offset="70%" stop-color="#F72585" stop-opacity="0"/>
      <stop offset="90%" stop-color="#F72585" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#FF9D00" stop-opacity="0"/>
    </radialGradient>

    <!-- Petal gradients -->
    <linearGradient id="pinkPetalGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#B5179E"/>
      <stop offset="40%" stop-color="#F72585"/>
      <stop offset="85%" stop-color="#FF5DA2"/>
      <stop offset="100%" stop-color="#FFFFFF"/>
    </linearGradient>

    <linearGradient id="orangeRayGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#7209B7"/>
      <stop offset="30%" stop-color="#E85D04"/>
      <stop offset="75%" stop-color="#FF9D00"/>
      <stop offset="100%" stop-color="#FFE49E"/>
    </linearGradient>
  </defs>

  <!-- Ambient Outer Glow Circle -->
  <circle cx="200" cy="200" r="190" fill="url(#outerAura)"/>
  <circle cx="200" cy="200" r="172" stroke="#F72585" stroke-opacity="0.4" stroke-width="1.5"/>
  <circle cx="200" cy="200" r="160" stroke="#FF9D00" stroke-opacity="0.25" stroke-width="1" stroke-dasharray="3 5"/>

  <!-- Tier 1: Outer 32 Radiant Golden and Pink Beads -->
'''

for i in range(32):
    angle = i * (360 / 32) * math.pi / 180
    x = 200 + 168 * math.cos(angle)
    y = 200 + 168 * math.sin(angle)
    color = '#FFD166' if i % 2 == 0 else '#F72585'
    r = 3 if i % 2 == 0 else 2
    svg += f'  <circle cx="{x:.2f}" cy="{y:.2f}" r="{r}" fill="{color}"/>\n'

svg += '''
  <!-- Tier 2: 16 Radiating Amber Spear Rays -->
'''
for i in range(16):
    angle = (i * 22.5) + 11.25
    svg += f'  <path d="M 200 48 L 207 115 L 193 115 Z" fill="url(#orangeRayGrad)" transform="rotate({angle} 200 200)"/>\n'
    svg += f'  <circle cx="200" cy="42" r="2.5" fill="#FFD166" transform="rotate({angle} 200 200)"/>\n'

svg += '''
  <!-- Tier 3: 16 Brilliant Magenta Lotus Petals with Luminous Tips -->
'''
for i in range(16):
    angle = i * 22.5
    svg += f'  <path d="M 200 68 C 214 95 215 135 200 155 C 185 135 186 95 200 68 Z" fill="url(#pinkPetalGrad)" stroke="#FFE49E" stroke-width="0.8" transform="rotate({angle} 200 200)"/>\n'
    svg += f'  <circle cx="200" cy="74" r="2.5" fill="#FFFFFF" transform="rotate({angle} 200 200)"/>\n'

svg += '''
  <!-- Inner Ring and Glowing Sun Core -->
  <circle cx="200" cy="200" r="52" fill="#101010" stroke="#F72585" stroke-width="2.5"/>
  <circle cx="200" cy="200" r="42" fill="url(#coreLight)" stroke="#FFD166" stroke-width="1.5"/>
  <circle cx="200" cy="200" r="16" fill="#FFFFFF"/>
</svg>'''

with open('public/images/mandala_uploaded_vector.svg', 'w') as f:
    f.write(svg)

print('mandala_uploaded_vector.svg written successfully')
