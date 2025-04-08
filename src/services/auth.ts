import { UserRequest, UserResponse } from "../types/auth";
import { url } from "../utils/consts";


class Auth {
    public static async login(user: UserRequest): Promise<UserResponse> {
        const response = await fetch(
            url + "/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(user)
            }
        );
        const body: UserResponse = await response.json();

        console.log(response)

        console.log(body)

        return body;
    }
}

export default Auth;