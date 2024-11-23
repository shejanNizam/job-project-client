export default async function getMenu(id: string) {
  const result = await fetch(
    `https://job-project-server-ruddy.vercel.app/menu/${id}`
  );
  return result.json();
}
