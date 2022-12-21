// import { Form, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function LoginForm() {
  return (
    <Form>
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input type="text" id="username" placeholder="Enter your username" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </FormControl>
      <Button mt={4} type="submit" variantColor="teal" size="md">
        Login
      </Button>
    </Form>
  );
}

// import { Form, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

// function LoginForm() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: Kirim permintaan login ke server
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormControl>
//         <FormLabel htmlFor="username">Username</FormLabel>
//         <Input type="text" id="username" placeholder="Enter your username" />
//       </FormControl>
//       <FormControl mt={4}>
//         <FormLabel htmlFor="password">Password</FormLabel>
