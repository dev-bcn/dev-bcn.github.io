import React, { FC } from "react";
import styled from "styled-components";
import TwitterIcon from "../../components/Icons/Twitter";
import { Color } from "../../styles/colors";

const Heading = styled.h1`
   {
    padding-top: 10rem;
    font-size: 2rem;
  }
`;
const Paragraph = styled.p`
  padding-bottom: 10rem;
`;
const FoSS = styled.div`
  .entries {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  #companies {
    position: sticky;
    top: 100px;
    background: white;
    text-align: center;
  }

  #companies a {
    margin: 0 1px;
    text-transform: capitalize;
  }

  #companies a:not(:last-child):after {
    content: " |";
  }

  .entry {
    display: flex;
    border-radius: 10px;
    flex: 1 0 33%;
    box-shadow: 0 0 5px 0 lightgray;
    margin-bottom: 20px;
  }

  .company-info {
    flex: 1 0 auto;
    width: 20%;
    padding: 10px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #f5f5f5 100%);
  }

  .company-info img {
    min-width: 100px;
    max-width: 20vw;
    vertical-align: middle;
  }

  .vacancies {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-evenly;
    align-content: stretch;
    border-left: 1px dotted darkgrey;
    padding-left: 5px;
    background: linear-gradient(to top, white 50%, #f5f5f5 80%);
  }

  .vacancy {
    flex-grow: 1;
    margin: 0 10px;
  }

  .vacancy p {
    margin-bottom: 5px;
  }

  .social-media {
    text-align: center;
    padding-bottom: 20px;
  }
`;

const Communities: FC = () => {
  React.useEffect(() => {
    document.title = "Communities";
  });
  return (
    <>
      <Heading>FOSS & Diversity Communities</Heading>
      <p>
        This edition, the JBCNConf team will sponsor a free stand for a few
        communities representing Free and OpenSource Software projects and also
        Diversity communities.
      </p>

      <p>
        You can ask them about their projects and how to be involved in their
        initiatives, as a way to contribute back to the communities and make
        this a better world sharing, learning, helping. These communities will
        offer information and support for those that want to know more or want
        to contribute.
      </p>

      <FoSS>
        <div className="entries">
          <div className="entry col-md-6">
            <div className="company-info">
              <div style={{ textAlign: "center" }}>
                <img
                  id="Eclipse Foundation"
                  src="/images/sponsors/eclipse-foundation.png"
                  className="attachment-eventstation-related-post-image size-eventstation-related-post-image wp-post-image jello-vertical"
                  alt="Eclipse Foundation"
                />
              </div>
              <div>
                <h3 className="company-name" style={{ textAlign: "center" }}>
                  Eclipse Foundation
                </h3>
                <div className="social-media">
                  <a
                    target="_blank"
                    href=" https://www.eclipse.org/"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-globe"></i>
                  </a>
                  <TwitterIcon
                    color={Color.DARK_BLUE}
                    twitterUrl=" https://www.eclipse.org/"
                  />
                </div>
                <div>
                  The Eclipse Foundation provides individuals and organizations
                  with a business-friendly environment for open source software
                  collaboration and innovation. The Foundation is home to the
                  Eclipse IDE, Jakarta EE, and over 415 projects, including
                  runtimes, tools, specifications, and frameworks for cloud and
                  edge applications, IoT, AI, automotive, and more. We are a
                  not-for-profit organization supported by over 320 members.
                  Learn more at eclipse.org.
                </div>
              </div>
            </div>
          </div>
          <div className="entry col-md-6">
            <div className="company-info">
              <div style={{ textAlign: "center" }}>
                <img
                  id="Apache Software Foundation"
                  src="/images/sponsors/apache-foundation.jpeg"
                  className="attachment-eventstation-related-post-image size-eventstation-related-post-image wp-post-image jello-vertical"
                  alt="Apache Software Foundation"
                />
              </div>
              <div>
                <h3 className="company-name" style={{ textAlign: "center" }}>
                  Apache Software Foundation
                </h3>
                <div className="social-media">
                  <a
                    target="_blank"
                    href="https://www.apache.com/"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-globe"></i>
                  </a>

                  <TwitterIcon
                    color={Color.DARK_BLUE}
                    twitterUrl="https://twitter.com/apache"
                  />
                </div>
                <div>
                  Established in 1999, the ASF is a US 501(c)(3) charitable
                  organization, funded by individual donations and corporate
                  sponsors. Our all-volunteer board oversees more than 350
                  leading Open Source projects, including Apache HTTP Server --
                  the world's most popular Web server software. The ASF provides
                  an established framework for intellectual property and
                  financial contributions that limits potential legal exposure
                  for our project committers. Through the ASF's meritocratic
                  process known as `The Apache Way,`` more than 850 individual
                  Members and 8,200 Committers successfully collaborate to
                  develop freely available enterprise-grade software that
                  benefits millions of users worldwide: projects distribute
                  thousands of software solutions under the Apache License; and
                  the community actively participates in ASF mailing lists,
                  mentoring initiatives, and ApacheCon (the Foundation's
                  official user conference), trainings, and other events.
                </div>
              </div>
            </div>
          </div>
          <div className="entry col-md-6">
            <div className="company-info">
              <div style={{ textAlign: "center" }}>
                <img
                  id="Agile Spain"
                  src="/images/sponsors/agile.png"
                  className="attachment-eventstation-related-post-image size-eventstation-related-post-image wp-post-image jello-vertical"
                  alt="Agile Spain"
                />
              </div>
              <div>
                <h3 className="company-name" style={{ textAlign: "center" }}>
                  Agile Spain
                </h3>
                <div className="social-media">
                  <a
                    target="_blank"
                    href="https://agile-spain.org/"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-globe"></i>
                  </a>

                  <a
                    target="_blank"
                    href="https://twitter.com/agilespain"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <div>Agile Spain - description TBC</div>
              </div>
            </div>
          </div>
          <div className="entry col-md-6">
            <div className="company-info">
              <div style={{ textAlign: "center" }}>
                <img
                  id="Step4ward"
                  src="/images/sponsors/step4ward.png"
                  className="attachment-eventstation-related-post-image size-eventstation-related-post-image wp-post-image jello-vertical"
                  alt="Step4ward"
                />
              </div>
              <div>
                <h3 className="company-name" style={{ textAlign: "center" }}>
                  Step4ward
                </h3>
                <div className="social-media">
                  <a
                    target="_blank"
                    href="https://bit.ly/step4wardhome"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-globe"></i>
                  </a>
                  <TwitterIcon
                    color={Color.DARK_BLUE}
                    twitterUrl="https://twitter.com/@Step4ward_ES"
                  />
                </div>
                <div>
                  Step4ward is a group of volunteer women mentors that helps
                  women that are either starting in the tech industry in Spain
                  or want to continue their evolution within their tech career
                  path. As mentors, we believe in the given value through the
                  feeling of belonging to a community. We encourage our mentees
                  to build their career path, by guiding them and teaching all
                  the available tools. The most important part for us is letting
                  them know that they are not alone, there are more women like
                  them, and us in the same situation during their career
                  evolution. As a community, we also want to create alliances
                  and partnerships with other groups and communities with
                  similar initiatives and spirits in the tech world.
                </div>
              </div>
            </div>
          </div>
        </div>
      </FoSS>
      <Paragraph>Don't forget to visit them !!!!</Paragraph>
    </>
  );
};
export default Communities;
