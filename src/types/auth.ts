
interface UserRequest {
    name: string,
    email: string,
    password: string
}

interface UserResponse {
    id: number,
    name: string,
    email: string

}

export type { UserRequest, UserResponse }