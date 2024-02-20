import { ILogin } from "@interface/auth.interface";
import { EHttpRequest } from "@interface/constraint.interface";
import { API_URL, MESSAGE_CODE } from "@util/util";


export async function Login({ username, password }: ILogin) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: EHttpRequest['POST'],
        body: JSON.stringify({ username, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error(MESSAGE_CODE.FAILED_TO_FETCH_DATA)
    }

    return response.json();
}

export async function Register() {

}