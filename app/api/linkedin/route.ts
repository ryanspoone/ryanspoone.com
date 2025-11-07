import { NextResponse } from 'next/server';
import getPositions from '@/lib/linkedin/getPositions';

export async function GET() {
  try {
    const positions = getPositions();
    return NextResponse.json(positions, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST() {
  try {
    const positions = getPositions();
    return NextResponse.json(positions, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
