import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Edition} from "../views/Home/HomeWrapper";

/* eslint-disable no-console */
export function useEventEdition(): { edition: Edition | null } {
  let { year } = useParams<{ year: string }>();
  const [edition, setEdition] = useState<Edition | null>(null);
  console.clear();
  console.log("## YEAR ##", year);
  if (year === undefined) {
    const error = new Error();
    console.error(error.stack);
  }

  useEffect(() => {
    const editionYear = year ?? "2025";
    import(`src/data/${editionYear}`)
      .then((data) => {
        setEdition(data.edition);
        console.dir(data.edition);
        localStorage.setItem("edition", data.edition.edition);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error("Error loading conference edition data:", e);
      });
  }, [year]);

  return { edition };
}
