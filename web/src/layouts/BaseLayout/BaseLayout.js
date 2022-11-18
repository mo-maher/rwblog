import { Link, routes } from '@redwoodjs/router'
const BaseLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Blog title</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>HomePage</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>CopyRights reserved to &copy; 2022</p>
      </footer>
    </>
  )
}

export default BaseLayout
