interface ThreeLayerTitleTextProps {
  topText: string;
  mainText: string;
  bottomText: string;
}

export default function ThreeLayerTitleText({
  topText,
  mainText,
  bottomText,
}: ThreeLayerTitleTextProps) {
  return (
    <div className="section-spacing custom-text-align flex flex-col items-center xl:items-start justify-between text-center xl:text-left">
      <h2 className="subtitle w-full">{topText}</h2>
      <h1 className="title w-full xl:pl-3">{mainText}</h1>
      <h3 className="body-text w-full pb-5">
        <i>{bottomText}</i>
      </h3>
    </div>
  );
}
