import GlyphText from "../Hero/GlyphText";
import ScrambleText from "../Hero/ScrambleText";
interface Props {
  text: string;
  className?: string;
}

export default function GlyphScrambleText({ text, className = "" }: Props) {
  return (
    <ScrambleText text={text} variant="inline" className={className}>
      <GlyphText text={text} />
    </ScrambleText>
  );
}
