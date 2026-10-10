import { mkdir, writeFile } from 'node:fs/promises';
const photos = {
  studio: '1600607687920-4e2a09cf159d',
  dettaglio: '1600566753086-00f18fb6b3ea',
  individuale: '1600210492486-724fe5c67fb0',
  coppia: '1600607687939-ce8a6c25118c',
  famiglia: '1616486338812-3dadae4b4ace',
};
await mkdir('public/images', { recursive: true });
await Promise.all(Object.entries(photos).map(async ([name, id]) => {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${name === 'studio' ? 1600 : 1100}&q=82`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  await writeFile(`public/images/${name}.jpg`, Buffer.from(await response.arrayBuffer()));
  console.log(`Saved ${name}.jpg`);
}));
