export default async function getAllMenu() {
  const result = await fetch(`http://localhost:7000/menu`);
  return result.json();
}
