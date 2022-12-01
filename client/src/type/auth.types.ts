export type loginInputType = {
  email: string;
  password: string;
};

export type signupInputType = loginInputType & {
  passwordConfirm: string;
};

export type signupReponseType = {
  message: string;
  token: string;
};
