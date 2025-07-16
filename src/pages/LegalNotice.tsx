import { legalNoticeContent } from '../data/legalNoticeContent';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-ingeris-orange mb-8 text-center uppercase">{legalNoticeContent.title}</h1>
        {legalNoticeContent.sections.map((section, idx) => (
          <section className="mb-8" key={idx}>
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            {section.content.map((line, i) => (
              <p key={i} className="mb-1 last:mb-0">
                {line.includes('contact@ingeris.com') ? (
                  <>
                    {line.replace('contact@ingeris.com', '')}
                    <a href="mailto:contact@ingeris.com" className="text-ingeris-orange underline">contact@ingeris.com</a>
                  </>
                ) : line}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default LegalNotice; 