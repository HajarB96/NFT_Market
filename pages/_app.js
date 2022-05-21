/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT Market</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Explore
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              Stats
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              Resources
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Create
            </a>
          </Link>
          <Link href="/Account">
            <a className="mr-6 text-pink-500"></a>
          <ul>
             <li><a href="#">Cours HTML et CSS</a></li>
             <li><a href="#">Cours JavaScript</a></i>
             <li><a href="#">Cours PHP et MYSQL</a></li>
        </ul>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp