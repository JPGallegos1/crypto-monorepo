import { useLink, UseLinkProps } from 'solito/link'
import { Pressable } from 'native-base'
import { PropsWithChildren } from 'react'

export function CoinLink(props: PropsWithChildren<UseLinkProps>) {
  const linkProps = useLink(props)

  return (
    <Pressable _hover={{ bg: 'gray.200' }} {...props} {...linkProps}>
      {props.children}
    </Pressable>
  )
}
