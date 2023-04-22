export async function getJsonData(link) {
  const result = await fetch(
    // TODO: chnage the link
    `https://adtimokhin.github.io/family_photos_json_server/${link}`
  );
  const json = await result.json();
  return json;
}
