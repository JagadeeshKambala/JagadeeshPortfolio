interface AboutNarrativeProps {
  paragraphs: string[];
}

export default function AboutNarrative({ paragraphs }: AboutNarrativeProps) {
  return (
    <div className="space-y-6">
      {paragraphs.map((text, index) => (
        <p key={index} className="text-muted text-lg leading-relaxed max-w-3xl">
          {text}
        </p>
      ))}
    </div>
  );
}
