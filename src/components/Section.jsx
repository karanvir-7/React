export default function Section({ title, children , ...props}) {
  return (
    // ...props will add all the rest props property for ex-> we can use for adding id, class on that
    <section {...props}> {}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
  