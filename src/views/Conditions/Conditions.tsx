import React, { FC } from "react";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import data from "../../data/2025.json";

const StyledDiv = styled.div`
   {
    width: 70%;
    margin: 90px auto;
  }

  p {
    text-align: justify;
    margin: 5px;
  }

  h1,
  h2,
  h3,
  h4 {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  li {
    margin-left: 30px;
    text-align: left;
  }

  hr {
    color: ${Color.DARK_BLUE};
    margin: 20px;
  }
`;

const Conditions: FC<React.PropsWithChildren<unknown>> = () => {
  React.useEffect(() => {
    document.title = `Communities — ${data.title} — ${data.edition}`;
  });
  return (
    <StyledDiv>
      <h1>TERMS AND CONDITIONS</h1>
      <hr />
      <ul>
        <li>
          Once the ticket/sponsorship has been bought, it will neither be
          changed nor the amount refunded, except for causes stipulated in the
          legislation in force.
          <li>
            Impossibility to assist to the event or an error during the buying
            process will not be valid causes to refund.
          </li>
          <li>
            Cancellation and refund will only be possible whenever Conferencia
            DevBcn, from now on The Organization notifies it, and it normally
            happens in event cancellation cases.
          </li>
          <li>
            Tickets are not allowed to be used for marketing, promotions,
            competitions unless The Organization concedes an express formal
            written authorization.
          </li>
          Use of commercial brands o any other intellectual property of The
          Organization will be also subject to express written consent of The
          Organization.
        </li>
        <li>
          Use of non authorized photographic or recording devices is forbidden.
        </li>
        <li>
          The venue and The Organization are not responsible of any personal
          belonging.
        </li>
        <li>
          Ticket/Sponsorship buyers give their consent to video and sound
          recording as part of the general public.
        </li>
        <li>
          An infringement of any of the terms, or any other unacceptable act
          that can cause damage will give rights to The Organization to expel
          the user from the place.
        </li>
        <li>
          The Organization does not accept responsibility for the loss or theft
          of tickets.
        </li>
        <li>
          Attendees agree that they personal info will be sent to the person
          that scans their badge with our mobile app.
        </li>
      </ul>
      <hr />
      <h1>PRIVACY POLICY</h1>
      <p>
        This is the privacy declaration of DevBcn, an event organized by
        Conferencia DevBcn SL (“The Organization” hereinafter). The Organization
        is an organization with the aim of promoting knowledge and good
        practices about software development, and more specifically around
        frontend, backend, cloud, devops, machine learning, and other
        technologies. The Organization cares deeply about your privacy. We
        strive to protect the privacy and the confidentiality of personal data
        we process. Hence, we do everything in our power to comply with the
        Regulation (EU) 2016/679 of the European Parliament and of the Council
        of 27 April 2016 on the protection of natural persons with regard to the
        processing of personal data and on the free movement of such data
        (hereafter the ‘Regulation’) or any applicable data protection
        legislation (hereinafter collectively with the Regulation referred to as
        the ‘Data Protection Law’). The words ‘personal data’, ‘controller’,
        ‘processor’, ‘process’, ‘processing’, ‘profiling’, ‘data subject’ and
        all its derivatives used in this Privacy Declaration shall have the
        meaning set out in the Regulation.
      </p>
      <h3>1. Identity of the controller and contact details</h3>
      <p>
        Conferencia DevBcn SL as organizer of the DevBcn is the controller of
        the personal data that is used to organize the conference and related
        activities.
      </p>
      <h3>2. The personal data we collect and process</h3>
      <p>Personal data collected falls under the following main categories:</p>
      <ul>
        <li>Identification data (e.g. name, surname, id card…)</li>
        <li>Contact data (e.g. email address…)</li>
        <li>Financial data (e.g. bank account number, VAT number…)</li>
      </ul>
      <p>
        These personal data may relate to you in your capacity as a customer or
        supplier of The Organization and DevBcn, but also to you as a business
        relationship of one of our clients, and/or as one of the attendees of
        our conferences. We collect and process personal data that you provide
        to us directly (e.g. by sending a proposal or buying a ticket).
        Occasionally we may as well collect contact data through another route,
        for example via a public source or provided by one of our clients,
        sponsors or attendees. We do not use automated data processing (e.g.
        activity analysis) or so-called
        <em>“profiling” that may involve the generation of derivative data.</em>
      </p>
      <h3>3. Purposes of and legal basis for the processing personal data</h3>
      <h4>3.1. In General</h4>
      <p>
        We process your personal data for various purposes, including conducting
        our general and financial administration, the organization of our
        (future) conferences, to keep you updated about our (future)
        conferences, managing our customer and supplier base, providing a
        correct service and the proper execution of our agreements and direct
        marketing activities (e.g. sending newsletters). Article 6.1 of the
        Regulation indicates the legal grounds on the basis of which personal
        data may be processed. Below we give you a brief overview of the legal
        grounds we rely on for the processing of personal data. Your personal
        data may be processed: Based upon your consent: we process personal data
        based upon your explicit and specific consent. Your consent is freely
        given and can be withdrawn at any moment. For compliance with a legal
        obligation to which we are subject to: we have to comply with various
        legal obligations, under which we are obliged to maintain specific
        (personal) data. For the performance of a contract to which you are a
        party or in order to take steps at your request prior to entering into a
        contract: to execute our agreements, it’s necessary to process personal
        data. We hereby always limit ourselves to processing the data that are
        strictly necessary.
      </p>
      <h4>3.2. Attending our conferences</h4>
      <p>
        Organization of the DevBcn requires a lot of administration.
        Nevertheless we try to keep it very simple for our attendees.
      </p>
      <ul>
        <li>
          Buying an entrance ticket for one of our conferences Registering for
          one of our conferences takes only a few steps. First of all we ask you
          to fill in an online form. In this form we ask you for several types
          of personal data, like identification data (name, surname, company
          you’re connected to) and contact details (address, email address) of
          the attendee(s). For the avoidance of the doubt, if a third party buys
          a ticket for someone else (e.g. an employer for its employees) we will
          ask and process data from the attendees for whom a ticket will be
          bought. After you’ve been registered, we will ask you to pay for your
          entrance ticket(s). Therefore, we may ask you for your bank account
          number, card number, name of the card holder, the due date of the
          card, VAT number… The processing of these data is a necessary step
          prior to entering into a contract with us. Without the processing of
          these data you will be unable to attend (one of) our conferences.
        </li>

        <li>
          Sharing your personal data with the exhibitors DevBcn (through its
          mobile app) facilitates attendees to freely share their identification
          and contact information with sponsors. This does not include any
          financial information or additional data than the one provided during
          ticket acquisition. Attendees choose the sponsors we share their
          personal data with. At the entrance of DevBcn conference attendees
          receive a QR-Code. The sponsors are able to scan this QR-code which
          contains the information. Attendees are responsible for requiring each
          one of the sponsors they interact with the respective data policies.
        </li>
      </ul>
      <h4>3.3. Direct marketing activities</h4>
      <p>
        We also process personal data for reasons of direct marketing. We deem
        it to be one of our legitimate interests to communicate with our
        customers (e.g. attendees, speakers, sponsors, providers…). Therefore,
        we may send you information about our products, services and future
        conferences if we consider you as a part of our customer base. This will
        be the case if you visited one of our previous conferences, or if you
        contacted us by mail or subscribed to our newsletter, or if you’re a
        customer of one of our business relationships. If you no longer want to
        receive our communications, you can unsubscribe by clicking the
        unsubscribe link contained at the bottom of any marketing email we send
        to you and following the instructions which appear in your browser
        following your clicking on that link.
      </p>
      <h3>4. Who has access to your personal data?</h3>
      <p>
        Only a limited number of the conference staff have direct access to the
        personal data we’ve collected and processed, and are bound to
        confidentiality.
      </p>
      <p>
        The Organization does not share your personal data with third parties
        for any other purpose than mentioned in this Privacy Declaration, unless
        when we are required to do so by law or for the purposes of prevention
        of fraud or other crime.
      </p>
      <p>
        We do however pass your information to our third party service
        providers, agents, subcontractors and other associated organizations for
        the purposes of completing tasks and providing services to you on our
        behalf (e.g. email communication, payment processing, back-up storage…).
        We only discloses the essential personal data to its sub-processors that
        are necessary for the execution of their services.
      </p>
      <p>
        If we transfer personal data to countries outside the EEA, we will, in
        all circumstances, take appropriate safeguards and establish legal
        grounds justifying such transfer.
      </p>
      <h3>5. How long do we keep your personal data?</h3>
      <p>
        We keep your personal data as long as required to comply with our legal
        obligations and to provide our services in a correct manner or because
        we have a legitimate interest to keep your personal data. At any moment
        you have the possibility to object against further processing of your
        personal data.
      </p>
      <h3>6. How do we protect your personal data?</h3>
      <p>
        The Organization takes appropriate measures to prevent misuse, loss,
        unauthorized access, unwanted disclosure and unauthorized modification.
        If you have the impression that your data is not properly secured or
        there are indications of abuse, please contact our customer service or
        via{" "}
        <a href="mailto:customers@devbcn.com" target="_blank" rel="noreferrer">
          customers@devbcn.com.
        </a>
      </p>
      <h3>
        7. What rights do you have regarding the processing of your personal
        data?
      </h3>
      <p>
        The Regulation provides you with various rights regarding the processing
        of your personal data. If you wish to invoke your privacy rights, please
        contact{" "}
        <a href="mailto:customers@devbcn.com" target="_blank" rel="noreferrer">
          customers@devbcn.com
        </a>
        . We will normally respond to your request within 30 days. This period
        can be extended by a further two months if the request is complex or if
        you send us several requests. We will notify you of this extension
        within 30 days after we’ve received your request.
      </p>
      <li>
        Right of access: you have the right to know which of your personal data
        we’ve collected and processed.
      </li>
      <li>
        Right to rectification: it can happen that certain information held on
        you is not (or has ceased to be) correct. You can ask for the data to be
        corrected or completed at any time.
      </li>
      <li>
        Right to erasure: you can ask to erase the personal data that we’ve
        collected and process about you (‘right to be forgotten’). We may deny
        this request if further processing of this personal data is needed to
        comply with a legal obligation, for the executing of a contract or to
        protect our legitimate interests or the legitimate interests of our
        clients, suppliers or those of a third party.
      </li>
      <li>
        Right to data portability: you are entitled to ask for personal data
        that you have provided The Organization (in relation to DevBcn) to be
        transferred back to you or to a third party. The data protection laws do
        lay down a number of restrictions on exercise of this right, so that it
        is not applicable to all data.
      </li>
      <p>
        Under the circumstances and conditions set by the Regulation, you also
        have the following rights regarding the processing of your personal
        data.
      </p>
      <ul>
        <li>
          Right to restriction of processing: the right to restrict the
          processing of your personal data.
        </li>

        <li>
          Right to object: if you disagree with how we invokes its legitimate
          interests to process certain data, you can object. We shall heed
          objections unless there are overriding grounds not to do so, such as
          when we process data with a view to combating fraud.
        </li>
      </ul>
      <p>
        If processing of your personal data is based upon your explicit and
        prior consent, you can revoke your consent at any time.
      </p>
      <p>
        In principle you can exercise these privacy rights free of charge. We
        ask to be as specific as possible when directing your request. In
        addition, we may ask personal data as proof of identity during the
        process.
      </p>
      <p>
        If we are unable to resolve an inquiry or request, you have the right to
        lodge a complaint with a supervisory authority.
      </p>
      <h3>8. Update Privacy Declaration</h3>
      <p>
        The Organization is entitled to update this Privacy Declaration by
        posting a new version on the website. As such, it is strongly
        recommended to regularly consult the website and the page explaining the
        Privacy Declaration, to make sure that you are aware of any changes.
      </p>
      <h3>9. Questions, requests or complaints</h3>
      <p>
        If you have any questions regarding this Privacy Declaration, or if you
        want to submit a request you can contact us using the following contact
        details:
      </p>
      <p>
        <strong>Conferencia DevBcn SL</strong>
      </p>
      <p>
        <strong>NIF : B72617129</strong>
      </p>
      <p>
        <a href="mailto:customers@devbcn.com" target="_blank" rel="noreferrer">
          customers@devbcn.com.
        </a>
      </p>
    </StyledDiv>
  );
};

export default Conditions;
