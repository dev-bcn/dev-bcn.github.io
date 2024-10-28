import {FC} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ROUTE_HOME} from "src/constants/routes";

const StyledSection = styled.section`
  text-align: left;
  max-width: 900px;
  margin: 100px auto 150px;

  & ul {
    margin-left: 40px;
  }
`;

const Cookies: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <StyledSection>
      <h1>Cookies policy</h1>
      <p>
        In accordance with the provisions of Article 22.2 of Law 34/2002, of
        July 11, 2002, on Information Society Services and Electronic Commerce
        (LSSI-CE) in force, Conferencia DevBcn S.L. must comply with the
        obligation to inform about the cookies it uses and their purposes.
      </p>
      <p>
        This website uses cookies and/or similar technologies that store and
        retrieve information when you browse. Cookies allow a website, among
        other things, to store and retrieve information about the browsing
        habits of a User or their equipment and, depending on the information it
        contains and the way they use their equipment, can be used to recognize
        the User.
      </p>
      <p>
        Cookies are essential for the operation of the Internet, providing
        countless advantages in the provision of interactive services,
        facilitating the user navigation and usability of our website.
      </p>
      <p>
        The information provided below will help you understand the different
        types of cookies:
      </p>
      <br />
      <table style={{ border: "1px solid gray" }}>
        <thead>
          <tr>
            <th colSpan={3} align={"center"}>
              Types of cookies
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>DEPENDING ON THE ENTITY THAT MANAGES THEM</td>
            <td>OWN COOKIES</td>
            <td>
              These are sent to the user's terminal equipment from a computer or
              domain managed by the publisher itself and from which the service
              requested by the user is provided.
            </td>
          </tr>
          <tr>
            <td>THIRD PARTY COOKIES</td>
            <td>
              Cookies are those that are sent to the user's terminal equipment
              from a computer or domain that is not managed by the editor, but
              by another entity that processes the data obtained through the
              cookies.
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              DEPENDING ON THE LENGTH OF TIME THEY REMAIN ACTIVE
            </td>
            <td>SESSION COOKIES</td>
            <td>
              They are those designed to collect and store data while the user
              accesses a web page. They are usually used to store information
              that is only of interest to keep for the provision of the service
              requested by the user on a single occasion (for example, a list of
              products purchased) and disappear at the end of the session.
            </td>
          </tr>
          <tr>
            <td>PERSISTENT COOKIES</td>
            <td>
              They are those in which the data remain stored in the terminal and
              can be accessed and processed for a period defined by the cookie
              manager, which can range from a few minutes to several years.
            </td>
          </tr>
          <tr>
            <td rowSpan={3}>BY PURPOSE</td>
            <td>TECHNICAL COOKIES</td>
            <td>
              Are those that allow the user to navigate through a web page,
              platform or application and the use of the different options or
              services that exist in it.
            </td>
          </tr>
          <tr>
            <td>CUSTOMIZATION COOKIES</td>
            <td>
              They allow the application of specific characteristics for the
              user's navigation through the website (e.g. language).
            </td>
          </tr>
          <tr>
            <td>ANALYTICS COOKIES</td>
            <td>
              They are those that allow the person responsible for them to
              monitor and analyze the behavior of the users of the websites to
              which they are linked,including the
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        Additionally, Conferencia DevBcn S.L. provides more detailed information
        on the cookies used by their owners, their use or specific purpose, the
        retention periods as well as the International Data Transfers of each of
        them used on our website:
      </p>
      <p>
        Please note that if you accept third-party cookies, you must delete them
        from your browser options or from the system offered by the third party
        itself.
      </p>
      <p>
        Below we provide links to various browsers, through which you can modify
        the settings of your browser on the use of cookies:
      </p>
      <ul>
        <li>
          <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">
            Firefox from here
          </a>
        </li>
        <li>
          <a href="https://support.google.com/chrome/bin/answer.py?hl=es&answer=95647">
            Chrome from here
          </a>
        </li>
        <li>
          <a href="https://windows.microsoft.com/es-es/internet-explorer/delete-managecookies#ie=ie-10">
            Explorer from here
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/kb/ph17191?locale=es_ES">
            Safari from here
          </a>
        </li>
        <li>
          <a href="https://help.opera.com/en/latest/web-preferences/#cookies">
            Opera from here
          </a>
        </li>
      </ul>
      <p>
        For more information about the processing of personal data, we recommend
        you to visit our Privacy Policy" section.
      </p>
      <p>
        <strong>LAST UPDATE: December 29, 2022</strong>
      </p>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        <Link to={ROUTE_HOME}>Go home</Link>
      </p>
    </StyledSection>
  );
};

export default Cookies;
