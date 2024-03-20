import { SingleSuraResponse } from '@/types';

async function getSingleSura(chapterNo: string) {
  const res = await fetch(
    `https://quranenc.com/api/v1/translation/sura/english_saheeh/${chapterNo}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function SingleSura({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { name: string; revelation: string; verses: number };
}) {
  const singleSura: SingleSuraResponse = await getSingleSura(params?.slug);

  return (
    <section className="overflow-hidden text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
          <h1 className="mb-5 text-4xl font-bold text-gray-800 title-font">
            {searchParams?.name}
          </h1>
          {(params?.slug === '1' || params?.slug === '9') && (
            <div className="flex justify-center">
              <div className="inline-flex h-0.5 rounded-full w-24 bg-emerald-500" />
            </div>
          )}
          {params?.slug === '1' || params?.slug === '9' ? (
            ''
          ) : (
            <div>
              <h1 className="mb-2 text-5xl font-medium text-gray-800 title-font">
                بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
              </h1>
              <div className="flex justify-center mt-5">
                <div className="inline-flex h-1 rounded-full w-36 bg-emerald-500" />
              </div>
            </div>
          )}
        </div>

        {singleSura?.result?.map((ayah, index) => (
          <div
            key={index}
            className="mb-16"
          >
            <h2 className="mb-2 text-4xl font-medium text-right text-gray-800 title-font">
              {ayah?.arabic_text}
            </h2>
            <p className="text-lg text-left">{ayah?.translation}</p>
            <div className="mt-3 w-full h-0.5 bg-gray-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
