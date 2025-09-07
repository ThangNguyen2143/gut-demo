import type { ReactNode } from "react";
import HeaderPublicLayout from "./Header";
import SlideBarPublic from "./SildeBar";
import FooterPublic from "./Footer";

function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={"flex flex-col items-center"}>
      <HeaderPublicLayout />
      <div className="container min-h-10/12">
        <div className="grid grid-cols-6">
          <SlideBarPublic />
          <div className="col-span-5 p-2">{children}</div>
        </div>
        <FooterPublic />
      </div>
    </div>
  );
}

export default PrivateLayout;
