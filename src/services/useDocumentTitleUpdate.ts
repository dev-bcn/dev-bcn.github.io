import React from "react";

export const useDocumentTitleUpdater = (title: string, year: string) => {
  React.useEffect(() => {
    document.title = `${title} — DevBcn - Barcelona Developers Conference — ${year}`;
  }, [title, year]);
};
