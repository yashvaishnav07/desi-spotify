import fetchAccessToken from "./fetchAccessToken";

export default async function fetchData(url) { 
  const clientId = 'f568c23d98424cb58c341c2660524dc7';
  const clientSecret = '3782ec241b3641248ffca3e202687bb8';
  const accessToken = await fetchAccessToken(clientId, clientSecret);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.json();
}
