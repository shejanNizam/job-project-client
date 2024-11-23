export default async function getAllMenu() {
  const result = await fetch(`https://job-project-server-pink.vercel.app/menu`);
  return result.json();
}
