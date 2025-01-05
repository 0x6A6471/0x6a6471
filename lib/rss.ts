import Parser from 'rss-parser';

import { Book } from '@/types/rss';

export const getOkuContent = async () => {
  const parser = new Parser();

  const { items: toRead } = (await parser.parseURL(
    process.env.OKU_TO_READ_URL as string
  )) as unknown as { items: Book[] };
  const { items: currentlyReading } = (await parser.parseURL(
    process.env.OKU_CURRENTLY_READING_URL as string
  )) as unknown as { items: Book[] };
  const { items: read } = (await parser.parseURL(
    process.env.OKU_READ_URL as string
  )) as unknown as { items: Book[] };

  return { toRead, currentlyReading, read };
};
