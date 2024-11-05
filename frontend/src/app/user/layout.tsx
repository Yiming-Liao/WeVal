import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <div className="w-24 h-12 border-4 flex justify-center items-center font-bold">
        User
      </div>
      {children}
    </div>
  );
}
