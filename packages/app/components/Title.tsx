import { Heading } from 'native-base'

export function Title({ title }: { title: string }) {
  return (
    <Heading
      size="xl"
      textAlign="center"
      color="green.600"
      marginBottom={8}
      textTransform="uppercase"
    >
      {title}
    </Heading>
  )
}
