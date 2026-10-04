export default function PipelinePage() {
  const stages = ["To Contact", "Contacted", "Replied", "Call Scheduled", "Opportunity"];
  return <main className="max-w-6xl mx-auto px-4 py-10"><h1 className="text-3xl font-semibold">Pipeline</h1><p className="mt-2 text-stone-500">Relationship progress and next actions.</p><div className="mt-8 grid gap-3 md:grid-cols-5">{stages.map(stage => <div key={stage} className="rounded-xl border border-stone-200 dark:border-stone-800 p-4"><p className="font-medium">{stage}</p><p className="mt-2 text-sm text-stone-500">0 people</p></div>)}</div></main>;
}
