import { Heading, Flex, Text } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

const SlugIndexPage: NextPage<{ title: string; text: string; }> = ({ title, text }) => {
  return (
    <Flex flexDirection="column" margin={4} alignItems="center">
      <Heading as="h1" size="2xl" margin="2rem">
        {title}
      </Heading>
      <Text>{text}</Text>
      <br />
    </Flex> 
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import('../../blogs.json')).default
  const slugs = blogs.map(blog => blog.slug)
  const paths = slugs.map(slug => ({ params: { slug }}))

  return {
    paths, 
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug }}) => {
  const blogs = (await import('../../blogs.json')).default
  const blog = blogs.find(item => item.slug === slug)

  return {
    props: {
      title: blog.title,
      text: blog.text
    }
  }
}

export default SlugIndexPage