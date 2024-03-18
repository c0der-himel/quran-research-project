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
}: {
  params: { slug: string };
}) {
  const singleSura: SingleSuraResponse = await getSingleSura(params?.slug);

  return (
    <section className="overflow-hidden text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div>
            {singleSura?.result?.map((ayah, index) => (
              <div
                key={index}
                className="mb-10"
              >
                <h2 className="mb-2 text-3xl font-medium text-right text-gray-800 title-font">
                  {ayah?.arabic_text}
                </h2>
                <p className="text-base text-right">{ayah?.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
