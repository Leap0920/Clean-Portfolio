import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const res = await fetch('https://ghchart.rshah.org/219138/Leap0920', {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return new NextResponse('Could not load contribution data', { status: 502 });
    }

    let svg = await res.text();

    // Recolor for green-on-black style
    svg = svg.replace(/#EEEEEE/gi, '#334155');   // empty → slate-700
    svg = svg.replace(/#6ede85/gi, '#0e4429');   // level 1 → dark green
    svg = svg.replace(/#40c463/gi, '#006d32');   // level 2 → medium green
    svg = svg.replace(/#30a14e/gi, '#26a641');   // level 3 → bright green
    svg = svg.replace(/#216e39/gi, '#39d353');   // level 4 → lime green

    // Remove fixed width for responsiveness
    svg = svg.replace(/width="[^"]*"/, 'width="100%"');

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return new NextResponse('Could not load contribution data', { status: 502 });
  }
}
