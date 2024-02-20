import { authOption } from "@libs/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import { NextRequest } from "next/server";

type NextApiRequestCustom = NextApiRequest & NextRequest
const handle = async (req: NextApiRequestCustom, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOption);

    if (!session) {
        throw new Error("UnAuthenticated")
    }

    res.status(200).json({ session })
}
export { handle as GET, handle as POST }