import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type childrens = {
  children: ReactNode;
};

const auth: boolean = false;
export default function PrivateRoute({ children }: childrens) {
  return <div>{auth ? <Navigate to="/" /> : children}</div>;
}
