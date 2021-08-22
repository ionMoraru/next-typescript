import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import { Alert, SimpleGrid, Text } from "@chakra-ui/react"
import useSWR from "swr"
import fetch from 'node-fetch'
import ErrorPage from "next/error"

interface User {
  name: string
  email: string
  id: string
}
// const fetcher = async (url: string) => {
//   const res = await fetch(url)

//   if (!res.ok) {
//     throw Error("Booom");
//   }

//   const data: { user: User } = await res.json()
//   return user

// }
const IndexPage: NextPage<{ data: User }> = ({ data }) => {
  
  // const router = useRouter()
  // const { id } = router.query
  // const { data, error } = useSWR(`/api/user/${id}`, fetcher)

  // if (error) {
  //   return <Alert status="error">{error.message}</Alert>
  // }

  if (!data) {
    return <ErrorPage statusCode={404} />
  }
  
  return (
    <SimpleGrid columns={2} width="2xs" spacingY="4" >
      <Text fontWeight="bold" marginRight={5}>
        User ID
      </Text>
      <Text>
        {data.id}
      </Text>
      
      <Text fontWeight="bold" marginRight={5}>
        User name
      </Text>
      <Text>
        {data.name}
      </Text>
      
      <Text fontWeight="bold" marginRight={5}>
        User email
      </Text>
      <Text>
        {data.email}
      </Text>
      
      <br />
      <Link href="/">Go to home page</Link>
    </SimpleGrid> 
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  try {
    const { id } = params
    const result = await fetch(`http://localhost:3000/api/user/${id}`)
    const data: User = await result.json()
  
    return {
      props: {
        data
      }
    }
  } catch (error) {
    res.statusCode = 404
    
    return {
      props: {}
    }
  }
}

export default IndexPage