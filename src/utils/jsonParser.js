export async function getJsonData(link) {
  const result = await fetch(
    // TODO: chnage the link
    `http://localhost:5173/${link}`
  );
  const json = await result.json();
  return json;
}
