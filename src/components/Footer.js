import { pageLinks, pageIcons } from "../data"
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <PageLink href={link.href} id={link.id} text={link.text} class="footer-link" />
          );
        })}
      </ul>
      <ul className="footer-icons">
        {pageIcons.map((icon) => {
          return (
            <SocialLink id={icon.id} href={icon.href} class='footer-icon' iconClassname={icon.iconClassname} />

          );
        })}


      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"> {new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer