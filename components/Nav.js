import Link from "next/link";

const Nav = () => (
  <nav className="bg-blue-900 text-white px-4 py-3">
    <div className="flex justify-between items-center max-w-6xl mx-auto">
      <Link href="/" className="text-lg font-bold">LexisIntel</Link>
      <div className="space-x-4 text-sm">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/alerts" className="hover:underline">Alerts</Link>
        <Link href="/exposure" className="hover:underline">Exposure</Link>
        <Link href="/competitors" className="hover:underline">Competitors</Link>
        <Link href="/pricing" className="hover:underline">Pricing</Link>
        <Link href="/team" className="hover:underline">Team</Link>
        <Link href="/billing" className="hover:underline">Billing</Link>
        <Link href="/settings" className="hover:underline">Settings</Link>
        <Link href="/login" className="hover:underline">Login</Link>
      </div>
    </div>
  </nav>
);
export default Nav;