import Head from "next/head";
import { useState } from "react";
import links from "../lib/links.json";

export default function Home() {
  const [query, setQuery] = useState("");
  const list = Object.keys(links.by_id).filter((key) => key.match(query));

  return (
    <div className="container">
      <Head>
        <title>BulmaSearch</title>
      </Head>

      <div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <ul>
          {list.map((key) => {
            const item = links.by_id[key];

            return (
              <li key={key}>
                <a href={`https:/bulma.io/${item.path}`} target="_blank">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
