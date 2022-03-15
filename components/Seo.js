import Head from "next/head";

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

Seo.defaultProps = {
  title: "Gaming - Tus juegos favoritos",
  description:
    "Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio.",
};
