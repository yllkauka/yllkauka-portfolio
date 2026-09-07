function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">{label}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function DesignSystemPreview() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 border border-line p-6 sm:grid-cols-4 sm:p-10">
      <Group label="Typography">
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-4xl leading-none text-ink">Aa</span>
          <span className="font-sans text-base leading-none text-ink">Aa</span>
          <span className="font-sans text-xs leading-none text-ink-soft">Aa</span>
        </div>
      </Group>

      <Group label="Color">
        <div className="flex gap-2">
          <span className="h-9 w-9 rounded-sm border border-line bg-ink" title="Ink" />
          <span className="h-9 w-9 rounded-sm border border-line bg-paper" title="Paper" />
          <span className="h-9 w-9 rounded-sm border border-line bg-accent" title="Accent" />
          <span className="h-9 w-9 rounded-sm border border-line bg-accent2" title="Accent 2" />
        </div>
      </Group>

      <Group label="Spacing">
        <div className="flex flex-col gap-2">
          <span className="h-1.5 w-4 bg-ink/70" />
          <span className="h-1.5 w-8 bg-ink/70" />
          <span className="h-1.5 w-16 bg-ink/70" />
          <span className="h-1.5 w-24 bg-ink/70" />
        </div>
      </Group>

      <Group label="States">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-sm bg-ink px-3 py-1.5 text-xs text-paper">Default</span>
          <span className="rounded-sm bg-accent-ink px-3 py-1.5 text-xs text-paper">Hover</span>
          <span className="rounded-sm border border-line px-3 py-1.5 text-xs text-ink-soft opacity-60">
            Disabled
          </span>
        </div>
      </Group>
    </div>
  );
}
