import { NextPage } from "next"
import Link from "next/link"

const IndexPage: NextPage = () => {
  return (
    <div>
      Hello World
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <Link href="/user/153?e=2">Go to user page</Link>
    </div> 
  )
}

export default IndexPage