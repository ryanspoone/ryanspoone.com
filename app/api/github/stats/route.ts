import { NextResponse } from 'next/server';
import { getUserStats } from '@/lib/github/helpers';

export async function GET() {
  try {
    const stats = await getUserStats();
    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST() {
  try {
    const stats = await getUserStats();
    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
