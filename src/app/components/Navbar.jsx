import Link from "next/link";
import "../globals.css";

const Navbar = () => {
  return (
    <>
      <nav className="grid pl-5 pr-5 text-center content-center gap-10 text-2xl">
        <div className="grid gap-4">
          <h2>Username</h2>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/favorite">Favorite</Link>
          <Link href="/manual">Manual</Link>
        </div>

        <div className="grid gap-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
