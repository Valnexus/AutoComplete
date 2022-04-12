import styles from "./auto-complete.module.css";

import { fetchApi } from "../../api";
import { useEffect, useState } from "react";

interface Item {
  _id: string;
  title: string;
};

const AutoComplete = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<[]>([]);
  const [result, setResult] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    fetchApi(
      `https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en`
    ).then((res) => {
      setLoading(false);
      setData(res.articles);
    });
  }, []);

  const searchHandler = (e: string) => {
    setSearch(e);
    const searchData = [...data];
    const resultData = searchData.filter((item: Item) =>
      item.title.toLowerCase().includes(e.toLowerCase())
    );
    setResult(resultData);
  };

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {" "}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { backgroundColor: "yellow" }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };

  return (
    <div className={styles["auto-complete"]}>
      <input
        value={search}
        type="text"
        placeholder={loading ? "Loading ..." : "Search ..."}
        className={styles["search"]}
        onChange={(e) => searchHandler(e.target.value)}
      />
      {search.length !== 0 && result ? (
        <div className={styles["search-results"]}>
          <ul>
            {result.map((item: Item) => (
              <li key={item._id}>
                {item.title}
                {getHighlightedText(item.title, search)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default AutoComplete;
