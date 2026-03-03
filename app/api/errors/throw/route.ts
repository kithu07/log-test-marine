import { NextResponse } from 'next/server';
import { logError } from '@/lib/logger';

/** Trigger a simulated runtime error (for testing). Logs as error and returns 500. */
export async function GET() {
  logError('Intentional runtime error triggered', { endpoint: '/api/errors/throw' });
  return NextResponse.json(
    { error: 'Runtime Error', message: 'Intentional runtime error for testing' },
    { status: 500 }
  );
}
