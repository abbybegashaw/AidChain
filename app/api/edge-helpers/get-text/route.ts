import ContractParser from '@/server/ai/contract-parser';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const maxDuration = 59;

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }
  let fullText;
  try {
    const contractParser = new ContractParser();
    fullText = await contractParser.getFullText(url);
    return NextResponse.json({ fullText });
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return NextResponse.json(
      { error: 'Error extracting text from PDF' },
      { status: 500 }
    );
  }
}
