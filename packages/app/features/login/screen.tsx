import React from 'react'
import {
  VStack,
  Input,
  Button,
  FormControl,
  Center,
  Box,
  Heading,
} from 'native-base'
import { useRouter } from 'solito/router'
import { Link } from 'solito/link'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type { IAuth } from 'http/types/auth'
import authService from 'http/services/auth.service'
import { HttpResponse } from 'http/types/axios'

import { loginSchema } from '../../schemas/loginSchema'
import { isWeb } from 'app/constants'
import { useSession } from 'app/store/user'

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })
  const { push } = useRouter()
  const session = useSession((state) => state.setSession)

  const onSubmit = async (data: IAuth) => {
    const payload = {
      email: data.email,
      password: data.password,
    }

    await authService
      .signIn(payload)
      .then((response: HttpResponse<IAuth>) => {
        if (response) {
          push('/')
          session(data.email)
        }
      })
      .catch((error) => console.log('[ERROR]', error))
  }

  return (
    <VStack width="100%" space={4} justifyContent="center" height="100%">
      <Center>
        <VStack justifyContent="space-around">
          <Heading
            size="lg"
            textAlign="center"
            color="#FFAB39"
            marginBottom={8}
          >
            Hello! Welcome again
          </Heading>
          <Box width={isWeb ? '96' : '72'}>
            <FormControl isRequired isInvalid={'email' in errors}>
              <FormControl.Label>Email</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="mail@mail.com"
                    onChangeText={(val) => {
                      onChange(val)
                    }}
                    value={value}
                  />
                )}
                name="email"
                defaultValue=""
              />
              <FormControl.ErrorMessage>
                {errors.email?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={'password' in errors}
              marginBottom="4"
            >
              <FormControl.Label>Password</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="*****"
                    onChangeText={(val) => onChange(val)}
                    value={value}
                    type="password"
                  />
                )}
                name="password"
                defaultValue=""
              />
              <FormControl.ErrorMessage>
                {errors.password?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <VStack space={4}>
              <Box>
                <Button
                  onPress={handleSubmit(onSubmit)}
                  colorScheme="blueGray"
                  padding={3}
                >
                  Submit
                </Button>
              </Box>

              <Box borderWidth={1} borderColor="black" borderRadius={4}>
                <Button
                  variant="unstyled"
                  colorScheme="default"
                  padding={3}
                  onPress={() => push('/signup')}
                >
                  Create an account
                </Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </VStack>
  )
}
