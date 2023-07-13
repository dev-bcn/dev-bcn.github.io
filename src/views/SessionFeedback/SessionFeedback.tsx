import { sessionData, sessionRating } from "./sessionData";

import React, { FC } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "../../styles/theme.css";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

const SessionFeedback: FC = () => {
  const overallRatingBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Overall} readOnly cancel={false} />;
  };

  const originalityBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Originality} readOnly cancel={false} />;
  };
  const communicationBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Communication} readOnly cancel={false} />;
  };
  const funBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Fun} readOnly cancel={false} />;
  };
  const insightBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Insight} readOnly cancel={false} />;
  };
  const recommendBodyTemplate = (session: sessionRating) => {
    return (
      <Rating value={session.Recommend_to_others} readOnly cancel={false} />
    );
  };
  const creativityBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Creativity} readOnly cancel={false} />;
  };
  const knowledgeBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Speaker_knowledge} readOnly cancel={false} />;
  };
  const timingBodyTemplate = (session: sessionRating) => {
    return <Rating value={session.Speaker_knowledge} readOnly cancel={false} />;
  };

  const [globalFilterValue, setGlobalFilterValue] = React.useState("");
  const [filters, setFilters] = React.useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const onGlobalFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
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
  };

  React.useEffect(() => {
    document.title = "DevBcn 2023 - Session Feedback";
  });

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
      <h1>Session Feedback</h1>

      <DataTable
        dataKey="id"
        filterDisplay="row"
        size={"small"}
        header={header}
        value={sessionData}
        tableStyle={{ minWidth: "50vw" }}
        emptyMessage="No sessions found."
        filters={filters}
        globalFilterFields={["Title"]}
      >
        <Column sortable field="Title" header="Title"></Column>
        <Column
          sortable
          field="Overall"
          header="Overall"
          body={overallRatingBodyTemplate}
        />
        <Column
          sortable
          field="Originality"
          header="Originality"
          body={originalityBodyTemplate}
        />
        <Column
          sortable
          field="Communication"
          header="Communication"
          body={communicationBodyTemplate}
        />
        <Column
          sortable
          field="Creativity"
          header="Creativity"
          body={creativityBodyTemplate}
        />
        <Column sortable field="Fun" header="Fun" body={funBodyTemplate} />
        <Column
          sortable
          field="Insight"
          header="Insight"
          body={insightBodyTemplate}
        />
        <Column
          sortable
          field="Pace_and_timing"
          header="Pace and timing"
          body={timingBodyTemplate}
        />
        <Column
          sortable
          field="Speaker_knowledge"
          header="Speaker knowledge"
          body={knowledgeBodyTemplate}
        />
        <Column
          sortable
          field="Recommend_to_others"
          header="Recommend to others"
          body={recommendBodyTemplate}
        />
      </DataTable>
    </section>
  );
};
export default SessionFeedback;
