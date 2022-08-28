import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  Heading,
  VStack,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  FormHelperText,
  FormErrorMessage,
  Link,
  useBoolean,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Layout } from '../components';
import { RegisterPayload } from '../types';
import { useRegister } from '../hooks';

type RegisterForm = RegisterPayload & { passwordConfirmation: string; };

function Register(): JSX.Element {
  const [showPassword, setShowPassword] = useBoolean(false);
  const [error] = useState<string>();
  const { mutate: registerUser } = useRegister();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<RegisterForm >();

  return (
    <Layout>
      <Heading size="md">Sign Up</Heading>
      <form onSubmit={handleSubmit((formValues) => registerUser(formValues))}>
        <VStack spacing="16px" width="100%">
          <FormControl isInvalid={!!errors.email}>
            <Input
              type="email"
              placeholder="Email address"
              {...register('email', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.firstName}>
            <Input
              type="text"
              placeholder="First Name"
              {...register('firstName', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName}>
            <Input
              type="text"
              placeholder="Last Name"
              {...register('lastName', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: 'This is required',
                })}
              />
              <InputRightElement color="gray.400">
                {showPassword
                  ? <FiEyeOff onClick={setShowPassword.toggle} cursor="pointer" />
                  : <FiEye onClick={setShowPassword.toggle} cursor="pointer" />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.passwordConfirmation}>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password Confirmation"
                {...register('passwordConfirmation', {
                  required: 'This is required',
                  validate: (value) => value === getValues('password') || 'The passwords do not match',
                })}
              />
              <InputRightElement color="gray.400">
                {showPassword
                  ? <FiEyeOff onClick={setShowPassword.toggle} cursor="pointer" />
                  : <FiEye onClick={setShowPassword.toggle} cursor="pointer" />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.passwordConfirmation && errors.passwordConfirmation.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormHelperText textAlign="center">
              <Link to="/auth/login" as={ReactRouterLink} color="orange.500">Back to login</Link>
            </FormHelperText>
          </FormControl>

          {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          )}

          <Button
            variant="solid"
            width="full"
            mt={4}
            type="submit"
          >
            Register
          </Button>
        </VStack>
      </form>
    </Layout>
  );
}

export { Register };
