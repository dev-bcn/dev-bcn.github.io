import { render, screen } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { data } from "./CfpData";
import { CfpTrackComponent } from "./CfpSection";

data.forEach((track, index) => {
  describe(`CfpTrackComponent with track ${index}`, () => {
    it("renders track name", () => {
      render(<CfpTrackComponent track={track} />);
      expect(screen.getByText(track.name)).toBeInTheDocument();
    });

    track.members.forEach((member) => {
      if (member.photo) {
        it(`renders member ${member.name} with photo and social icons`, () => {
          render(<CfpTrackComponent track={track} />);
          expect(screen.getByAltText(member.name)).toHaveAttribute(
            "src",
            member.photo,
          );
          expect(screen.getByText(member.name)).toBeInTheDocument();

          const section = screen.getByTestId(member.name);
          if (member.twitter) {
            expect(
              section.querySelector("[data-icon='twitter-icon']"),
            ).toBeInTheDocument();
          }
          if (member.linkedIn) {
            expect(
              section.querySelector("[data-icon='linkedin-icon']"),
            ).toBeInTheDocument();
          }
        });
      }
    });
  });
});
