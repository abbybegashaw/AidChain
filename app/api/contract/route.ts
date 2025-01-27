import { sendRequestToGPT } from '@/server/ai/openai';
import { saveFile } from '@/server/utils/saveImages';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  // Step 1: Verify the user
  const headers = request.headers;
  const token = headers.get('authorization')?.split(' ')[1] || '';
  // Step 2: Stream
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  await writer.ready;

  // Step 3: save file
  const { base64 } = await request.json();
  const url = await saveFile(base64, 'pdf');
  console.log("URL", url)
  console.log(`${process.env.APP_URL}/api/edge-helpers/get-text?url=${url}`);

  // Step 4: get text content
  const textContentResponse = await fetch(
    `${process.env.APP_URL}/api/edge-helpers/get-text?url=${url}`
  );
  const response = await textContentResponse.json();
  const summary = await sendRequestToGPT(`Get brief description of this: ${response.fullText}`);

  // Step 5: Use AI to get experiences
  

  return NextResponse.json({ url, summary });
}
