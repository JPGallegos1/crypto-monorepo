import { HomeScreen as NativeHomeScreen } from 'app/features/home/screen'

type Props = {
  posts: { id: number }[]
}

export default function HomeScreen({ posts }: Props) {
  return <NativeHomeScreen route={{ params: { posts } }} />
}

export async function getStaticProps() {
  const posts = [{ id: 1 }, { id: 2 }]
  return {
    props: {
      posts,
    },
  }
}
