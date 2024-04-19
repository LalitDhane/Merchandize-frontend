interface User {
  username: string;
  password: string;
}

interface UserApiResponse {
  status: string;
  data: string[];
  message: string;
}

interface UserDetails {
  username: string;
  isLoggedIn: boolean;
}

export { User, UserApiResponse, UserDetails };
