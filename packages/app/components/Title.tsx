import { Heading } from 'native-base'

export function Title({ title }: { title: string }) {
  return (
    <Heading
      size="xl"
      textAlign="center"
      color="#FFA51E"
      marginBottom={8}
      textTransform="uppercase"
    >
      {title}
    </Heading>
  )
}
