import HomePage from '@/src/home/HomePage';

async function fetchGuild() {
  try {
    const response = await fetch('https://w3idn.xyz/api/cron', { 
      cache: 'no-store',
      next: { revalidate: 60 }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return await response.json();
  } catch (error) {
    return { guildCount: 0, serverMembers: 0 };
  }
}

export default async function Page() {
  const { guildCount, serverMembers } = await fetchGuild();

  return <HomePage guildCount={guildCount} serverMembers={serverMembers} />;
}
