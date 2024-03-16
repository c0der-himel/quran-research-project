import Image from 'next/image';
import Link from 'next/link';

export function NavBar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </a>
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
            List Of All Suras
          </Link>
        </nav>
        <Link
          href="/all-suras"
          className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-emerald-500 focus:outline-none hover:bg-emerald-600"
        >
          Suras
        </Link>
      </div>
    </header>
  );
}
