import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-white p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LexisIntel. All rights reserved.
      </footer>
    </div>
  );
}