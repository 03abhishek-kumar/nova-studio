import Providers from './providers';

export const metadata = {
  title: 'Nova Studio',
  description: 'Digital Agency - Web Design, Development & Branding',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}