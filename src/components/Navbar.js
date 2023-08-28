import logo from '../images/logo.svg';
import { pageLinks, pageIcons } from '../data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((ele) => {
            return (
              <PageLink href={ele.href} id={ele.id} text={ele.text} class="nav-link" />
            );
          })}
        </ul>

        <ul className="nav-icons">
          {pageIcons.map((ele) => {
            return (
              <SocialLink id={ele.id} href={ele.href} class='nav-icon' iconClassname={ele.iconClassname} />
            );
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar