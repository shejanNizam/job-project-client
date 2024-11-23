export default async function getAllMenu() {
  const result = await fetch(
    `https://job-project-server-ruddy.vercel.app/menu`
  );
  return result.json();
}
