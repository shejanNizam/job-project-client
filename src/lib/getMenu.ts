export default async function getMenu(id: any) {
  const result = await fetch(`http://localhost:7000/menu/${id}`);
  return result.json();
}
