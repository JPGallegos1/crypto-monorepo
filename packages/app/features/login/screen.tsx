import { VStack, Input, Button, FormControl, Text, Box } from 'native-base'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../schemas/loginSchema'

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
    <VStack width="80%" space={4} justifyContent="center" margin="0 auto">
      <Box width="50%">
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
      </Box>
      <FormControl isRequired isInvalid={'password' in errors}>
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
    </VStack>
  )
}
