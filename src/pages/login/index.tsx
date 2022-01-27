import { Button } from "components/Button";
import { Field, Form, Formik } from "formik";
import Head from "next/head";
import {
  ContainerLogin,
  ContainerPage,
  ArticleLogin,
  TitleLogin,
  DescriptionLogin,
  ContainerFormLogin,
} from "styles/pages/Login";
import LoginInitialValues from "data/LoginInitialValues.json";
import { Input } from "components/Input";
import { schemaLogin } from "schema/login";
import { useAuth } from "hooks/useAuth";
import { LoginRequest } from "services/user/interface";
import { toast } from "react-toastify";
import { UserWrapper } from "layouts/UserWrapper";

const Login = () => {
  const { loginUser } = useAuth();

  const handleSubmit = async ({ email, password }: LoginRequest) => {
    try {
      await loginUser({ email, password });
      toast.success("Login realizado com sucesso!");
    } catch (error: any) {
      toast.error(error?.data?.message || "Erro ao realizar login");
    }
  };
  return (
    <>
      <Head>
        <title>
          {" "}
          Quero 2 Aluga | Acesse nossa plataforma através do login{" "}
        </title>
      </Head>{" "}
      <ContainerPage>
        <ContainerLogin>
          <ArticleLogin>
            <TitleLogin>Acesse sua conta:</TitleLogin>
            <DescriptionLogin>
              Desfrute do melhor benefício de streamer <br /> que nossa
              plataforma pode oferecer.
            </DescriptionLogin>
          </ArticleLogin>

          <Formik
            initialValues={LoginInitialValues}
            validateOnMount={false}
            validationSchema={schemaLogin}
            onSubmit={(values, { validateForm }) => {
              validateForm(values).then(() => {
                handleSubmit(values);
              });
            }}
          >
            <Form>
              <ContainerFormLogin>
                <Field
                  label="Email"
                  name="email"
                  placeholder="Digite seu email"
                  component={Input}
                />
                <Field
                  label="Senha"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  component={Input}
                />
                <Button type="submit" top={15} bottom={15}>
                  Confirmar
                </Button>
              </ContainerFormLogin>
            </Form>
          </Formik>
        </ContainerLogin>
      </ContainerPage>
    </>
  );
};

export default Login;
