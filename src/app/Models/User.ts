interface User {
  username: string;
  password: string;
}

interface UserApiResponse {
  status: string;
  data: string[];
  message: string;
}

export { User, UserApiResponse };
