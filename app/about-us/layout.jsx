import Header from "@/components/Header";

export default function AboutUsLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <h1 className="text-black">About</h1>
        {children}
      </body>
    </html>
  );
}
