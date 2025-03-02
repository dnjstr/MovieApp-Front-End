export interface LoginFormData {
    identifier: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    role: "admin" | "user";
}

export const loginUser = async (formData: LoginFormData): Promise<AuthResponse> => {
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Invalid credentials");
    }

    return response.json();
};
