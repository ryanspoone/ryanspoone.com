import { NextResponse } from 'next/server';
import { getFeatured } from '@/lib/github/helpers';

export async function GET() {
  try {
    const featured = await getFeatured();
    return NextResponse.json(featured, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST() {
  try {
    const featured = await getFeatured();
    return NextResponse.json(featured, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
