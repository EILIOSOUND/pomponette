interface TipBlockProps {
  children: React.ReactNode;
  title?: string;
}

export default function TipBlock({ children, title = 'Astuce Pomponette' }: TipBlockProps) {
  return (
    <aside className="my-8 rounded-2xl border border-gold/25 bg-gold/5 px-7 py-6">
      <div className="mb-3 flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15">
          <i className="ri-lightbulb-line text-[13px] text-gold" />
        </span>
        <span className="font-inter text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
          {title}
        </span>
      </div>
      <div className="font-inter text-[13px] leading-relaxed text-black/65">
        {children}
      </div>
    </aside>
  );
}
