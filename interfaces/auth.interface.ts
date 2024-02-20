export interface ILogin {
    username: string | undefined,
    password: string | undefined,
    redirect?: () => void
}