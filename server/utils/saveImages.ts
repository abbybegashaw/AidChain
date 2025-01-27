import { put } from '@vercel/blob';

export default async function saveImages(base64s: string[]) {
  const promises = base64s.map((base64, i) => {
    const base64Image = base64.split(';base64,').pop() as string;
    const binaryData = Buffer.from(base64Image as string, 'base64');
    const contentType = 'image/jpeg';
    const blob: unknown = new Blob([binaryData], { type: contentType });
    return put(`inputs/i-${Date.now()}-${i}.jpg`, blob as File, {
      access: 'public',
    });
  });
  const responses = await Promise.all(promises);
  return responses.map((r) => r.url);
}

export async function saveFile(base64: string, format: string) {
  const base64Image = base64.split(';base64,').pop() as string;
  const binaryData = Buffer.from(base64Image as string, 'base64');
  const blob: unknown = new Blob([binaryData], { type: `image/${format}` });
  const response = await put(`inputs/i-${Date.now()}.${format}`, blob as File, {
    access: 'public',
  });
  return response.url;
}

