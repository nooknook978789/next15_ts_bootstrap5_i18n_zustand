type FetcherParams = {
  url: string;
  method: string;
  signal?: AbortSignal;
  body?: unknown;
  headers?: Record<string, string>; // ✅ เพิ่มตรงนี้
};

export const memberFetcher = async <T = unknown>({
  url,
  method,
  signal,
  body,
  headers,
}: FetcherParams): Promise<T> => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers ?? {}), // รวม custom headers
    },
    signal,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
};
