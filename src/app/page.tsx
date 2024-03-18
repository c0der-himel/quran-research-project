import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            Quran Research Project
          </h1>
          <Link
            href="/all-suras"
            className="px-6 py-3 text-lg text-white rounded-full bg-emerald-500"
          >
            List Of All Suras
          </Link>
        </div>
      </div>
    </section>
  );
}
