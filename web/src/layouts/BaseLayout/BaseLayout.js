import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
const BaseLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>Blog title</h1>
          <span>
            {isAuthenticated ? (
              <div>
                <span>Logged in as {currentUser.email}</span>{' '}
                <button type="button" onClick={logOut}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
          </span>
        </div>
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
