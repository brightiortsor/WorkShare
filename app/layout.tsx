export const metadata = {
  title: "WorkShare",
  description: "Showcase your work to the world and get hired",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
