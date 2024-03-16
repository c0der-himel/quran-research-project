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
                className="flex flex-wrap py-8 text-right md:flex-nowrap"
              >
                <div className="md:flex-grow">
                  <h2 className="mb-2 text-3xl font-medium text-gray-600 title-font">
                    {ayah?.arabic_text}
                  </h2>
                  <p className="text-lg">{ayah?.translation}</p>
                  <a className="inline-flex items-center mt-4 text-emerald-500">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
