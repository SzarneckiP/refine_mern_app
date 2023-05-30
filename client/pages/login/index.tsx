import { Box, Button, Container, Typography } from "@mui/material";
import { useLogin } from "@refinedev/core";
import { ThemedTitleV2 } from "@refinedev/mui";

import Yariga from '../../src/assets/Yariga'

import { Google } from '@mui/icons-material';

import { GetServerSideProps } from "next";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Login() {
  const { mutate: login } = useLogin();

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection="column"
      >

        <div style={{ textAlign: 'center' }}>
          <Yariga />
        </div>

        <Button
          style={{ width: "240px" }}
          variant="contained"
          size="large"
          onClick={() => login({})}
        >
          Sign in
        </Button>
        <Typography align="center" color={"text.secondary"} fontSize="12px">
          Powered by
          <Google
            style={{
              margin: '0 5px -5px 5px',
            }} />
          Google
        </Typography>
      </Box>
    </Container>
  );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session)
  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
