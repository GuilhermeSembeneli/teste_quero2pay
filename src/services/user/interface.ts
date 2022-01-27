export type LoginRequest = {
  email: string;
  password: string;
};

export type UserLogged = {
    username: string;
    token: string;
}