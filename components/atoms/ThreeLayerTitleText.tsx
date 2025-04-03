interface ThreeLayerTitleTextProps {
  topText: string;
  mainText: string;
  bottomText: string;
  ariaLabel?: string;
}

export default function ThreeLayerTitleText({
  topText,
  mainText,
  bottomText,
  ariaLabel,
}: ThreeLayerTitleTextProps) {
  return (
    <div
      className="section-spacing custom-text-align flex flex-col items-center xl:items-start justify-between text-center xl:text-left"
      role="group"
      aria-label={ariaLabel || `${topText} ${mainText} ${bottomText}`}
    >
      <h2 className="subtitle w-full gold-glow-text" aria-label={topText}>
        {topText}
      </h2>
      <h1
        className="title w-full xl:pl-3 white-glow-text"
        aria-label={mainText}
      >
        {mainText}
      </h1>
      <h2
        className="body-text w-full pb-5 pink-glow-text"
        aria-label={bottomText}
      >
        <i>{bottomText}</i>
      </h2>
    </div>
  );
}
