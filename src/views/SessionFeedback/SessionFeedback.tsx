import type { MeasurableSessionRating, SessionRating } from "./sessionData";

import { sessionData } from "./sessionData";

import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router";

import { ROUTE_TALK_DETAIL } from "@constants/routes";
import data from "@data/2024.json";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";
import { Color } from "@styles/colors";

import type { FC } from "react";

const SessionFeedback: FC<React.PropsWithChildren<unknown>> = () => {
  const bodyTemplate = React.useCallback(
    // eslint-disable-next-line react/display-name
    (field: keyof MeasurableSessionRating) => (session: SessionRating) => (
      <Rating value={session[field]} readOnly cancel={false} />
    ),
    [],
  );

  const TitleTemplate = (session: SessionRating) =>
    session.talk_id ? (
      <Link
        style={{ textDecoration: "none", color: Color.DARK_BLUE }}
        to={`${ROUTE_TALK_DETAIL}/${session.talk_id}`}
      >
        {session.Title}
      </Link>
    ) : (
      <span>{session.Title}</span>
    );

  const [globalFilterValue, setGlobalFilterValue] = React.useState("");
  const [filters, setFilters] = React.useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const onGlobalFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    const _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => (
    <div className="flex justify-content-end">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          className="p-inputtext-sm"
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Session Search"
        />
      </span>
    </div>
  );

  useDocumentTitleUpdater("Session Feedback", data.edition);

  const header = renderHeader();

  return (
    <section
      style={{
        marginTop: "200px",
        paddingBottom: "200px",
        maxWidth: "95vw",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <h1
        style={{
          color: Color.DARK_BLUE,
          fontFamily: "DejaVu Sans Condensed Bold",
          paddingBottom: "1rem",
        }}
      >
        Session Feedback
      </h1>

      <DataTable
        dataKey="id"
        filterDisplay="row"
        size="small"
        header={header}
        stripedRows
        value={sessionData}
        tableStyle={{ minWidth: "50vw" }}
        emptyMessage="No sessions found."
        filters={filters}
        sortField="votes"
        sortOrder={-1}
        globalFilterFields={["Title"]}
      >
        <Column
          sortable
          field="Title"
          header="Title"
          body={TitleTemplate}
        ></Column>
        <Column sortable field="votes" header="Votes" />
        <Column
          sortable
          field="Overall"
          header="Overall"
          body={bodyTemplate("Overall")}
        />
        <Column
          sortable
          field="Originality"
          header="Originality"
          body={bodyTemplate("Originality")}
        />
        <Column
          sortable
          field="Communication"
          header="Communication"
          body={bodyTemplate("Communication")}
        />
        <Column sortable field="Fun" header="Fun" body={bodyTemplate("Fun")} />
        <Column
          sortable
          field="Pace_and_timing"
          header="Pace and timing"
          body={bodyTemplate("Pace_and_timing")}
        />
        <Column
          sortable
          field="Speaker_knowledge"
          header="Speaker knowledge"
          body={bodyTemplate("Speaker_knowledge")}
        />
        <Column
          sortable
          field="Recommend_to_others"
          header="Recommend to others"
          body={bodyTemplate("Recommend_to_others")}
        />
      </DataTable>
    </section>
  );
};
export default SessionFeedback;
