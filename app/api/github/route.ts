import { NextRequest, NextResponse } from 'next/server';
import { getRepoStats } from '@/lib/github/helpers';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const repo = searchParams.get('repo');
    const stats = await getRepoStats({ repo: repo || undefined });
    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const stats = await getRepoStats(body);
    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
