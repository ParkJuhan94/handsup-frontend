import { setCookie } from "@/utils/function/cookie";
import { LoginRequest } from "@/utils/types/authorization/login";

export const signIn = async (authData: LoginRequest): Promise<boolean> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      credentials: "include", // refresh 쿠키(Set-Cookie)를 받으려면 cross-origin에서도 필요하다
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(authData)
    }
  );
  const result = await response.json();
  if (response.ok) {
    setCookie({ name: "AccessToken", value: result.accessToken });
    return true;
  }
  throw new Error(response.status.toString());
};
