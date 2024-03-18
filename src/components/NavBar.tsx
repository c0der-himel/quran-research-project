'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function NavBar() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Suras', link: '/all-suras' },
  ];
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 w-full bg-white border border-gray-200 rounded-xl bg-opacity-95">
      <div className="items-center justify-between py-4 md:flex md:px-10 px-7">
        <div className="flex items-center text-2xl font-bold text-gray-600 cursor-pointer">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white bg-opacity-95 rounded-b-xl md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ${
            open ? 'top-16' : 'top-[-500px]'
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="text-xl md:ml-8 md:my-0 my-7"
            >
              <Link
                onClick={() => setOpen(false)}
                href={link.link}
                className={`${
                  pathname === link.link
                    ? 'text-emerald-500 font-bold'
                    : 'text-gray-600'
                } text-xl duration-500 hover:text-emerald-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
