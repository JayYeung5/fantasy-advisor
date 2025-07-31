import NextAuth from "next-auth";

const YahooProvider = {
  id: "yahoo",
  name: "Yahoo",
  type: "oauth",
  version: "2.0",
  authorization: {
    url: "https://api.login.yahoo.com/oauth2/request_auth",
    params: { scope: "openid email profile" },
  },
  token: "https://api.login.yahoo.com/oauth2/get_token",
  userinfo: "https://api.login.yahoo.com/openid/v1/userinfo",
  clientId: process.env.YAHOO_CLIENT_ID!,
  clientSecret: process.env.YAHOO_CLIENT_SECRET!,
  profile(profile: any) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    };
  },
};

const handler = NextAuth({
  providers: [YahooProvider as any],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };