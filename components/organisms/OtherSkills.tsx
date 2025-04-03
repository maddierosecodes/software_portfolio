import TwoColumnLayout from '../layouts/TwoColumnLayout';
import FreelanceCard from '../molecules/FreelanceCard';
import maddieRoseCreates from '@/public/resources/images/maddierosecreates.png';
import maddieRoseWrites from '@/public/resources/images/maddierosewrites.png';

export default function OtherSkills() {
  const freelanceOptions = [
    {
      title: 'Maddie Rose Creates',
      description: (
        <>
          Over at <span className="pink-glow-text">MaddieRoseCreates</span>,
          I&apos;m busy crafting beautiful digital designs! I can help you to
          find your <span className="pink-glow-text">brand identity</span>,
          create <span className="pink-glow-text">logos</span>, and design{' '}
          <span className="pink-glow-text">beautiful websites</span>. I also
          have a store where I sell digital templates and custom personal
          digital designs such as wedding invitations and baby reveals!
        </>
      ),
      image: maddieRoseCreates,
      imageAlt: 'Maddie Rose Creates',
      link: 'https://maddierosecreates.com',
    },
    {
      title: 'Maddie Rose Writes',
      description: (
        <>
          Over at <span className="pink-glow-text">MaddieRoseWrites</span>, I
          put pen to paper to share my thoughts with the world. Whether
          that&apos;s via my <span className="pink-glow-text">blog</span> or{' '}
          <span className="pink-glow-text">social media</span>, you&apos;re sure
          to find something that speaks to you! I also provide{' '}
          <span className="pink-glow-text">copywriting</span> and{' '}
          <span className="pink-glow-text">editing services</span>, boosting
          SEO, adding some tonal flair or even just a good old fashioned read!
        </>
      ),
      image: maddieRoseWrites,
      imageAlt: 'Maddie Rose Writes',
      link: 'https://maddierosewrites.com',
    },
  ];

  return (
    <section
      className="section-container sm:w-2/3"
      role="region"
      aria-label="Freelancing Options"
    >
      <div className="text-center mb-8">
        <h2 className="subtitle">More Freelancing Options</h2>
        <p className="body-text">You can also find me at...</p>
      </div>
      <TwoColumnLayout equalHeight>
        {freelanceOptions.map((option) => (
          <FreelanceCard key={option.title} {...option} />
        ))}
      </TwoColumnLayout>
    </section>
  );
}
