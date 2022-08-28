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
  InputLeftElement,
  InputRightElement,
  FormHelperText,
  FormErrorMessage,
  Link,
  useBoolean,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
  FiMail, FiLock, FiEye, FiEyeOff,
} from 'react-icons/fi';
import { Layout } from '../components';
import { LoginPayload } from '../types';
import { useLogin } from '../hooks';

function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useBoolean(false);
  const [error] = useState<string>();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginPayload>();
  const { mutate: login } = useLogin();

  return (
    <Layout>
      <Heading size="md">Sign In</Heading>
      <form onSubmit={handleSubmit((formValues) => login(formValues))}>
        <VStack spacing="12px">
          <FormControl isInvalid={!!errors.username}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.400"
              >
                <FiMail />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Username/Email"
                {...register('username', {
                  required: 'This is required',
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.400"
              >
                <FiLock />
              </InputLeftElement>
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

          <FormControl>
            <FormHelperText textAlign="center">
              <Link to="/forgot-password" as={ReactRouterLink} color="orange.500">forgot password?</Link>
            </FormHelperText>
            <FormHelperText textAlign="center">
              Do you have account?
              <Link to="/auth/register" as={ReactRouterLink} color="orange.500" marginLeft="4px">
                Create Account
              </Link>
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
            Login
          </Button>
        </VStack>
      </form>
    </Layout>
  );
}

export { Login };
