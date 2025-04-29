import Header from '@/app/components/header/Header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'julius | %s',
    default: 'Login',
  },
};

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
