import type { PropsWithChildren } from "react";

export default function Todos(props: PropsWithChildren) {
  return <div className="bg-gray-100 w-screen h-screen">{props.children}</div>;
}
