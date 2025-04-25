import Header from '@/app/components/header/Header';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header bg={''} textColor={''} />
      {children}
    </div>
  );
}
