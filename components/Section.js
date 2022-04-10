const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="px-side py-20 w-full">
      <h1 className="font-title font-bold text-heading mb-10">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
