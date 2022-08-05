import { VStack, Input, Button, FormControl } from 'native-base'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log('submiting with ', data)
  }
  return (
    <VStack width="80%" space={4} justifyContent="center">
      <FormControl isRequired isInvalid={'firstName' in errors}>
        <FormControl.Label>First Name</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="John"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="firstName"
          rules={{ required: 'Field is required', minLength: 3 }}
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          {errors.firstName?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={'lastName' in errors}>
        <FormControl.Label>Last Name</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="Doe"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="lastName"
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          {errors.lastName?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={'age' in errors}>
        <FormControl.Label>Age</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="24"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="age"
          rules={{ min: 18, required: 'Age is required' }}
          defaultValue=""
        />
      </FormControl>
      <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
        Submit
      </Button>
    </VStack>
  )
}
