import Head from "next/head";
import { GetStaticProps } from "next";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home(props) {
  const { data, error } = useSwr(`/api/matches`, fetcher);
  console.log({ error });
  if (error) return <div>Failed</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{JSON.stringify({ data })}</div>;
}
