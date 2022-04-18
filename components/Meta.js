import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      ></link>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Kelly Hum",
  description:
    "A student and developer. Curious about cybersecurity, accessible tech, and writing.",
};

export default Meta;
