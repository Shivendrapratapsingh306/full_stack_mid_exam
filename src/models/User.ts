export interface IUser {
  _id?: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "ADMIN";
  createdAt: string;
}
