import fetchAccessToken from "./fetchAccessToken";

export default async function fetchData(url) { 
  const clientId = process.env.REACT_APP_CLIENT_ID_PRE;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET_PRE;
  const accessToken = await fetchAccessToken(clientId, clientSecret);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.json();
}
