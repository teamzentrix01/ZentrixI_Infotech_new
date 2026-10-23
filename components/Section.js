export default function Section({ title, intro, children }) {
  return (
    <section className="wrap mt-24">
      <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-mute">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
