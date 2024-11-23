export default async function getMenu(id: string) {
  const result = await fetch(
    `https://job-project-server-pink.vercel.app/menu/${id}`
  );
  return result.json();
}
