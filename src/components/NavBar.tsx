import Image from 'next/image';
import Link from 'next/link';

export function NavBar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          href="/"
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
        >
          <Image
            src="/img/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link
            href="/"
            className="mr-5 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/all-suras"
            className="mr-5 hover:text-gray-900"
          >
            All Suras
          </Link>
        </nav>
        <Link
          href="/all-suras"
          className="px-6 py-2 text-lg text-white rounded-full bg-emerald-500"
        >
          Suras
        </Link>
      </div>
    </header>
  );
}
