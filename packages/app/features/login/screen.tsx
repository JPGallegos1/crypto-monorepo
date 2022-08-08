import {
  VStack,
  Input,
  Button,
  FormControl,
  Center,
  Box,
  Heading,
} from 'native-base'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../schemas/loginSchema'
import { isWeb } from 'app/constants'

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = (data) => {
    console.log('error', errors)
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
                    onChangeText={(val) => onChange(val)}
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
