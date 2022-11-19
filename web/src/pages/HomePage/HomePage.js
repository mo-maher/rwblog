import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h2>Home Page</h2>
      <>test deploy</>
      <ArticlesCell />
    </>
  )
}

export default HomePage
