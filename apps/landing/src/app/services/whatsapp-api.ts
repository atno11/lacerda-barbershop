export const send = (
  searchParams: string | string[][] | Record<string, string> | URLSearchParams,
) => {
  const params = new URLSearchParams(searchParams);
  return `https://api.whatsapp.com/send?${params}`;
};
