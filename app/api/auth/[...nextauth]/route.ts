import { authOption } from "@libs/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOption)

export { handler as POST, handler as GET }