import Image from 'next/image';

export function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </a>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            ©2024 Quran Research Project —
            <a
              href=""
              className="ml-1 text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              @QRP
            </a>
          </p>
        </span>
      </div>
    </footer>
  );
}
