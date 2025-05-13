import { useEffect } from "react";
import { useParams } from "react-router";
import { Edition } from "../../types/types";

export function useEventEdition(setEdition: (data: Edition) => void) {
  const { year } = useParams();

  useEffect(() => {
    // Fallback to the current year if no year is provided in the URL
    const editionYear = year ?? "2025";

    import(`../../data/${editionYear}.json`)
      .then((data) => {
        setEdition(data); // Set the state of conferenceEdition
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error("Error loading conference edition data:", e);
        // Handle the error case, maybe setEdition to a default state
      });
  }, [year, setEdition]); // Dependencies: year and setEdition
}
