import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { Login } from "./credential";
import { ILogin } from "@interface/auth.interface";

export const authOption: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, rep) {
                const { username, password } = credentials as ILogin
                const user = await Login({ username, password })

                if (user) {
                    return user
                }

                return null
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user, account, profile }) {
            console.log("jwt auth", { token, user, account, profile })
            return token
        },
        async session({ session, user, token }) {
            console.log("session auth", { session, user, token })

            return session
        },

    }
}