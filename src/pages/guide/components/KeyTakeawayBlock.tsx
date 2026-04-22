interface KeyTakeawayBlockProps {
  items: string[];
  title?: string;
}

export default function KeyTakeawayBlock({ items, title = 'À retenir' }: KeyTakeawayBlockProps) {
  return (
    <aside className="my-8 rounded-2xl border border-black/8 bg-black/3 px-7 py-6">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/8">
          <i className="ri-bookmark-line text-[13px] text-black/60" />
        </span>
        <span className="font-inter text-[11px] font-semibold tracking-[0.18em] text-black/60 uppercase">
          {title}
        </span>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 font-inter text-[13px] leading-relaxed text-black/65">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
