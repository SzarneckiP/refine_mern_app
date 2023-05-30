import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId: `599831188301-7fdce6ra19lm9iue00delg0dioqiai3o.apps.googleusercontent.com`,
      clientSecret: `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`,
    }),
  ],
  secret: `O0o/xyOM+Q8lPugMC7NgzhdaZfHOW3SNXcnN2IRfRiQ=`,
};
export default NextAuth(authOptions);
