'use client';

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'All Suras', link: '/all-suras' },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/img/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={pathname === item.link ? true : false}
          >
            <Link
              href={item.link}
              aria-current="page"
              className={
                pathname === item.link ? 'text-emerald-500' : 'text-gray-600'
              }
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/all-suras"
            className="rounded-full bg-emerald-500"
          >
            Suras
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={
                pathname === item.link
                  ? 'text-emerald-500 font-bold'
                  : 'text-gray-600'
              }
              href={item.link}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
