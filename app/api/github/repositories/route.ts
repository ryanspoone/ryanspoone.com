import { NextResponse } from 'next/server';
import { getRepositories } from '@/lib/github/helpers';

export async function GET() {
  try {
    const repositories = await getRepositories();
    return NextResponse.json(repositories, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST() {
  try {
    const repositories = await getRepositories();
    return NextResponse.json(repositories, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
