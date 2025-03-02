import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";

interface User {
  name?: string;
  email?: string;
  user?: {
    fullName?: string;
  };
  profileImage?: string;
}

const fetchCurrentUser = async (user: User): Promise<User | null> => {
  if (user) {
    return user;
  }
  return null;
};

export const useCurrentUser = () => {
  const { user } = useAuth();
  return useQuery<User | null>({
    queryKey: ["user"],
    queryFn: () => fetchCurrentUser(user!),
    enabled: !!user,
  });
};
