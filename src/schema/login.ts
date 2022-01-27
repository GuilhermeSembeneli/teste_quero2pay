import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().email("Email invalido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});
