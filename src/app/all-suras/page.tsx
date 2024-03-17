import { ListOfAllSurasResponse } from '@/types';
import { Card } from '@nextui-org/react';
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
              className="w-full p-2 lg:w-1/3 md:w-1/2"
            >
              <Card
                isPressable
                shadow="sm"
                className="w-full h-full p-5"
              >
                <div className="flex">
                  <Image
                    alt="logo"
                    className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full"
                    src={`${
                      chapter?.revelation === 'Mecca'
                        ? '/img/mecca.png'
                        : '/img/madina.png'
                    }`}
                    width={64}
                    height={64}
                  />
                  <div className="flex-grow">
                    <h2 className="text-3xl text-gray-600">
                      {chapter?.arabicname}
                    </h2>
                    <p className="text-lg font-medium text-gray-600">
                      {chapter?.englishname}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
