import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {}
