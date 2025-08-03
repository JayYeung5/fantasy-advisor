import { NextResponse } from 'next/server';

export async function GET() {

  try {
    const res = await fetch('https://fantasysports.yahooapis.com/fantasy/v2/game/nba?format=json', {
      headers: {
        Authorization: `Bearer ${process.env.YAHOO_ACCESS_TOKEN}`,
      },
    });

    const text = await res.text();

    if (!res.ok) {
      throw new Error(`Yahoo API error: ${res.status} - ${text}`);
    }

    const data = JSON.parse(text);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Yahoo API fetch error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}