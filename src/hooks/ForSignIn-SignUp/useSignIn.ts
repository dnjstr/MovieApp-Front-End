import axiosInstance from "../../api/axiosInstance";

export interface LoginFormData {
    identifier: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    role: "admin" | "user";
}

export const loginUser = async (formData: LoginFormData): Promise<AuthResponse> => {
    try {
        const response = await axiosInstance.post<AuthResponse>("/login/", formData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Invalid credentials");
    }
};
