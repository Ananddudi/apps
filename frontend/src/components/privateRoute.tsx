import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type types = {
  children: ReactNode;
  auth: Boolean;
};

export default function PrivateRoute({ children, auth }: types) {
  return <div>{auth ? <Navigate to="/" /> : children}</div>;
}
