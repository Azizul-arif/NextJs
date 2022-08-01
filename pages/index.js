import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('Placing your order')
    router.replace('/product')
  }
  return (
    <div>
      <div>
        <h1>Next Js Dynamic Nested Routing</h1>
        <Link href="/blog">
          <a>
            <h1>Blog</h1>
          </a>
        </Link>
        <Link href="/product">
          <a>
            <h1>Products</h1>
          </a>
        </Link>
        <button onClick={handleClick}> PlaceOrder</button>
      </div>
    </div>
  )
}
