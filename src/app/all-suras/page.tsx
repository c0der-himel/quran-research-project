import { ListOfAllSurasResponse } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

async function getListOfAllSuras() {
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ListOfAllSuras() {
  const listOfAllSuras: ListOfAllSurasResponse = await getListOfAllSuras();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-600 sm:text-3xl title-font">
            List Of All Suras
          </h1>
          <div className="flex justify-center">
            <div className="inline-flex w-24 h-1 rounded-full bg-emerald-500" />
          </div>
        </div>
        <div className="flex flex-wrap -m-2">
          {listOfAllSuras?.chapters?.map((chapter, index) => (
            <Link
              href={`/single-sura/${chapter?.chapter}`}
              key={index}
              className="w-full p-3 xl:w-1/3 lg:w-1/2"
            >
              <div className="flex items-center h-full p-4 transition duration-500 border border-gray-300 rounded-xl hover:border-gray-600">
                <Image
                  alt="logo"
                  className="flex-shrink-0 object-cover object-center w-12 h-12 mr-4 bg-gray-100 rounded-full"
                  src={`${
                    chapter?.revelation === 'Mecca'
                      ? '/img/mecca.png'
                      : '/img/madina.png'
                  }`}
                  width={40}
                  height={40}
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold text-gray-800">
                      {chapter?.name}
                    </h2>
                    <p className="text-sm font-medium text-gray-600">
                      Chapter: {chapter?.chapter}, Ayahs:{' '}
                      {chapter?.verses?.length}
                    </p>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl text-right text-gray-900">
                      {chapter?.arabicname}
                    </h2>
                    <p className="text-base font-medium text-right text-gray-600">
                      {chapter?.englishname}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
