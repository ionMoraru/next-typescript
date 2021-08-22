import { Heading, Link, Flex } from "@chakra-ui/react"
import { NextPage } from "next"
import NextLink  from "next/link"

const AboutPage: NextPage = () => {
  return (
    <Flex flexDirection="column" margin={4} alignItems="center">
      <Heading as="h1" size="2xl" margin="2rem">
        About page
      </Heading>
      <br />
      <NextLink href="/" passHref>
        <Link>
          Go to home page
        </Link> 
      </NextLink>
    </Flex> 
  )
}

export default AboutPage