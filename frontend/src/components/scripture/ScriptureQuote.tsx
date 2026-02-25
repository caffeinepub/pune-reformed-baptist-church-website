interface ScriptureQuoteProps {
  text: string;
  reference: string;
  translation: 'ESV' | 'NKJV';
}

export default function ScriptureQuote({ text, reference, translation }: ScriptureQuoteProps) {
  return (
    <blockquote className="scripture-quote">
      <p className="text-lg md:text-xl">{text}</p>
      <cite className="scripture-reference">
        {reference} ({translation})
      </cite>
    </blockquote>
  );
}
