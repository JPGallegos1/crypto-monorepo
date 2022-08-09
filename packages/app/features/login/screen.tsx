import React, { useEffect, useState } from 'react'
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

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../schemas/loginSchema'
import { isWeb } from 'app/constants'

import type { IAuth } from 'http/types/auth'
import authService from 'http/services/auth.service'
import { HttpResponse } from 'http/types/axios'

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })
  const { push } = useRouter()

  const onSubmit = async (data: IAuth) => {
    console.log('[DATA]', data)

    const payload = {
      email: data.email,
      password: data.password,
    }

    await authService
      .signIn(payload)
      .then((response: HttpResponse<IAuth>) => {
        if (response) {
          push('/')
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
            color="green.600"
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
                      console.log(val)
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

            <Button onPress={handleSubmit(onSubmit)} colorScheme="green">
              Submit
            </Button>
          </Box>
        </VStack>
      </Center>
    </VStack>
  )
}
