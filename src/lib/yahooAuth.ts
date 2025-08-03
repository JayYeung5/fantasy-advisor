export async function refreshYahooAccessToken() {
  const clientId = process.env.YAHOO_CLIENT_ID!;
  const clientSecret = process.env.YAHOO_CLIENT_SECRET!;
  const refreshToken = process.env.YAHOO_REFRESH_TOKEN!;
  const redirectUri = process.env.YAHOO_REDIRECT_URI!;

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const res = await fetch('https://api.login.yahoo.com/oauth2/get_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      redirect_uri: redirectUri,
      refresh_token: refreshToken
    })
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to refresh token:', data);
    throw new Error('Failed to refresh Yahoo access token');
  }

  console.log('🔁 Refreshed Yahoo token:', data);

  console.log('New access token:', data.access_token);
  return data.access_token;
}