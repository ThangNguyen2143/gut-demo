import type { ReactNode } from "react";
import HeaderDefault from "./Header";

function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={"flex flex-col items-center"}>
      <HeaderDefault />
      <div className="container min-h-10/12">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}

export default PublicLayout;
