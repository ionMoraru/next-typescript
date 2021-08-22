import { Heading, Link, Flex } from "@chakra-ui/react"
import { GetStaticProps, NextPage } from "next"
import NextLink  from "next/link"

interface Blog {
  title: string
  slug: string
  text: string 
}
const BlogIndexPage: NextPage<{ blogs: Blog[]}> = props => {
  return (
    <Flex flexDirection="column" margin={4} alignItems="center">
      <Heading as="h1" size="2xl" margin="2rem">
        Table of contents
      </Heading>
      <br />
      {props.blogs.map(blog => {
        return (
          <NextLink 
            as={`/blog/${blog.slug}`} 
            href={`/blog/[slug]`} 
            passHref 
            key={`/blog/${blog.slug}`}
          >
            <Link>
              {blog.title}
            </Link> 
          </NextLink>
        )
      })}
    </Flex> 
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = (await import('../../blogs.json')).default

  return {
    props: { blogs }
  }
}

export default BlogIndexPage