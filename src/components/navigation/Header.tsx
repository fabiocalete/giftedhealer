"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { siteConfig } from "@/site.config";

const { navigation } = siteConfig;

const CLOSE_DELAY = 150;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lenis = useLenis();

  const [showServices, setShowServices] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (subCloseTimerRef.current) clearTimeout(subCloseTimerRef.current);
    };
  }, []);

  // Body scroll-lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setShowServices(true);
  };

  const closeDropdown = () => {
    closeTimerRef.current = setTimeout(() => {
      setShowServices(false);
      setOpenSubmenu(null);
    }, CLOSE_DELAY);
  };

  const openSubMenu = (label: string) => {
    if (subCloseTimerRef.current) clearTimeout(subCloseTimerRef.current);
    setOpenSubmenu(label);
  };

  const closeSubMenu = () => {
    subCloseTimerRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, CLOSE_DELAY);
  };

  const scrollTo = useCallback(
    (sectionId: string) => {
      const el = document.getElementById(sectionId);
      if (el) lenis?.scrollTo(el, { offset: -92 });
    },
    [lenis],
  );

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setOpenMobileSubmenu(null);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-40 w-full">
      <div className="mx-auto flex h-[92px] items-center px-[6%]">
        {/* Logo */}
        {isHome ? (
          <button
            onClick={() => scrollTo("hero")}
            className="font-headline cursor-pointer text-[19px] font-medium tracking-[-0.03em] whitespace-nowrap text-white"
          >
            {navigation.brandName}
          </button>
        ) : (
          <Link
            href="/"
            className="font-headline text-[19px] font-medium tracking-[-0.03em] whitespace-nowrap text-white"
          >
            {navigation.brandName}
          </Link>
        )}

        {/* Nav links — desktop only */}
        <nav className="hidden flex-1 items-center justify-center gap-[18px] md:flex">
          {/* ABOUT */}
          <Link
            href="/about"
            className="text-[19px] font-normal text-white/80 uppercase transition-colors duration-200 hover:text-white"
          >
            ABOUT
          </Link>

          {/* SERVICES with dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            {isHome ? (
              <button
                onClick={() => scrollTo("services")}
                aria-haspopup="true"
                aria-expanded={showServices}
                className="flex cursor-pointer items-center gap-1 text-[19px] font-normal text-white/80 uppercase transition-colors duration-200 hover:text-white"
              >
                SERVICES
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${showServices ? "rotate-180" : ""}`}
                />
              </button>
            ) : (
              <Link
                href="/#services"
                aria-haspopup="true"
                aria-expanded={showServices}
                className="flex items-center gap-1 text-[19px] font-normal text-white/80 uppercase transition-colors duration-200 hover:text-white"
              >
                SERVICES
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${showServices ? "rotate-180" : ""}`}
                />
              </Link>
            )}

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                showServices
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div
                className="glass-panel min-w-[220px] rounded-xl py-2"
                role="menu"
              >
                {navigation.serviceMenu.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={
                      item.children ? () => openSubMenu(item.label) : undefined
                    }
                    onMouseLeave={item.children ? closeSubMenu : undefined}
                  >
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="flex items-center justify-between px-5 py-2.5 text-[15px] font-medium text-[var(--forest)]/80 transition-colors duration-150 hover:bg-white/40 hover:text-[var(--forest)]"
                    >
                      {item.label}
                      {item.children && (
                        <ChevronRightIcon className="h-4 w-4 opacity-50" />
                      )}
                    </Link>

                    {/* Submenu flyout */}
                    {item.children && (
                      <div
                        className={`absolute top-0 left-full pl-2 transition-all duration-200 ${
                          openSubmenu === item.label
                            ? "pointer-events-auto translate-x-0 opacity-100"
                            : "pointer-events-none -translate-x-1 opacity-0"
                        }`}
                      >
                        <div
                          className="glass-panel min-w-[240px] rounded-xl py-2"
                          role="menu"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              role="menuitem"
                              className="block px-5 py-2.5 text-[15px] font-medium text-[var(--forest)]/80 transition-colors duration-150 hover:bg-white/40 hover:text-[var(--forest)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT */}
          {isHome ? (
            <button
              onClick={() => scrollTo("contact")}
              className="cursor-pointer text-[19px] font-normal text-white/80 uppercase transition-colors duration-200 hover:text-white"
            >
              CONTACT
            </button>
          ) : (
            <Link
              href="/#contact"
              className="text-[19px] font-normal text-white/80 uppercase transition-colors duration-200 hover:text-white"
            >
              CONTACT
            </Link>
          )}
        </nav>

        {/* CTA — desktop only */}
        <div className="ml-auto hidden md:block">
          <Link
            href={navigation.headerCta.href}
            className="btn-ortiz btn-ortiz-light px-5 py-2.5 text-[15px]"
          >
            <span>{navigation.headerCta.text}</span>
          </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(true)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Tap-outside backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={closeMobileMenu}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute inset-y-0 right-0 flex w-[85%] flex-col bg-[var(--forest)]/95 transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex h-[92px] items-center justify-between px-6">
            {isHome ? (
              <button
                onClick={closeMobileMenu}
                className="font-headline text-[19px] font-medium tracking-[-0.03em] whitespace-nowrap text-white"
              >
                {navigation.brandName}
              </button>
            ) : (
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="font-headline text-[19px] font-medium tracking-[-0.03em] whitespace-nowrap text-white"
              >
                {navigation.brandName}
              </Link>
            )}
            <button
              onClick={closeMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <hr className="border-white/10" />

          {/* Mobile nav */}
          <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
            {/* ABOUT */}
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block border-b border-white/10 py-4 text-left text-[18px] font-normal text-white/80 uppercase hover:text-white"
            >
              ABOUT
            </Link>

            {/* SERVICES accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="flex w-full items-center justify-between py-4 text-[18px] font-normal text-white/80 uppercase hover:text-white"
              >
                SERVICES
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="pb-2 pl-4">
                  {navigation.serviceMenu.map((item, idx) =>
                    item.children ? (
                      <div
                        key={item.label}
                        className="border-b border-white/10"
                      >
                        <button
                          onClick={() =>
                            setOpenMobileSubmenu((o) =>
                              o === item.label ? null : item.label,
                            )
                          }
                          className="flex w-full items-center justify-between py-3 text-[16px] font-normal text-white/70 uppercase hover:text-white"
                        >
                          {item.label}
                          <ChevronDownIcon
                            className={`h-4 w-4 transition-transform duration-300 ${openMobileSubmenu === item.label ? "rotate-180" : ""}`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openMobileSubmenu === item.label
                              ? "max-h-[500px]"
                              : "max-h-0"
                          }`}
                        >
                          <div className="pb-2 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block py-2.5 text-[15px] text-white/60 hover:text-white"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block py-3 text-[16px] font-normal text-white/70 uppercase hover:text-white ${
                          idx < navigation.serviceMenu.length - 1
                            ? "border-b border-white/10"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* CONTACT */}
            {isHome ? (
              <button
                onClick={() => {
                  scrollTo("contact");
                  closeMobileMenu();
                }}
                className="border-b border-white/10 py-4 text-left text-[18px] font-normal text-white/80 uppercase hover:text-white"
              >
                CONTACT
              </button>
            ) : (
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-4 text-left text-[18px] font-normal text-white/80 uppercase hover:text-white"
              >
                CONTACT
              </Link>
            )}
          </nav>

          {/* Book A Reading CTA pinned to bottom */}
          <div className="p-6">
            <Link
              href={navigation.headerCta.href}
              onClick={closeMobileMenu}
              className="btn-ortiz btn-ortiz-light block w-full px-5 py-3 text-center text-[16px]"
            >
              <span>{navigation.headerCta.text}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
