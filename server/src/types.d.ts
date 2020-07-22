import { GraphQLResolveInfo } from "graphql";

interface User {
  id: string;
  username: string;
  password?: string;
  email: string;
  last_ip: string;
  last_attempt_ip: string;
  mutetime: number;
  mutereason: string;
  muteby: string;
}

interface Context {
  auth?: {
    id: number;
    last_ip: string;
    iat: Date;
    exp: Date;
  };
  isAuthenticated: boolean;
}

type gqlDefaultInput<Args = {}, Parent = {}> = [
  Parent,
  Args,
  Context,
  GraphQLResolveInfo
];
