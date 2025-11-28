import Sidebar from '@/components/sidebar/sidebar';
import './globals.css';

export const metadata = {
  title: 'GMC - Glorious Mandarin Company',
  description: "God's Agenda. Global Impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Inter, sans-serif' }}>
        <Sidebar />
        <main style={{ minHeight: '100vh', width: '100%' }}>
          {children}
        </main>
      </body>
    </html>
  );
}