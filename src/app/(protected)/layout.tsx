import { ProtectedLayout } from "@/components/layouts/ProtectedLayout";


export default function ProtectedRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <ProtectedLayout>
      {children}
    </ProtectedLayout>
  );

}