import NextAuth, { NextAuthOptions } from "next-auth";
import type { OAuthConfig } from "next-auth/providers/oauth";

type YahooProfile = {
  sub: string;
  name: string;
  email: string;
  picture: string;
};

const YahooProvider: OAuthConfig<YahooProfile> = {
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
  profile(profile) {
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    };
  },
};

const authOptions: NextAuthOptions = {
  providers: [YahooProvider],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };