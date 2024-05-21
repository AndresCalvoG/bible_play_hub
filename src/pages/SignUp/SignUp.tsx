import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import Logo64 from "../../assets/logo64.png";
import { Button } from "../../components/Buttons/Button";
import GoogleIcon from "../../assets/google.png";
import { useAppContext } from "../../context";
import { useForm } from "react-hook-form";
import {
  createNewUserAuthentication,
  loginUserAuthentication,
  logoutUserAuthentication,
} from "../../adapters/user.adapter";

type signUpForm = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const adminEmail = process.env.REACT_APP_FIREBASE_ADMIN_EMAIL;
  const adminPassword = process.env.REACT_APP_FIREBASE_ADMIN_PASSWORD;
  const navigate = useNavigate();
  const { setLoading } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signUpUser = handleSubmit(async (data) => {
    setLoading(true);
    // admin auth
    let authCredential: any = await loginUserAuthentication(
      adminEmail ? adminEmail : "",
      adminPassword ? adminPassword : ""
    );
    if (authCredential.code) {
      setLoading(false);
      console.log(authCredential);
      //showError(authCredential.code, setAlertObject);
      await logoutUserAuthentication();
      return;
    }
    //Create new user Auth
    const userCredential: any = await createNewUserAuthentication(
      data.email,
      data.password,
      data.name,
      data.lastName
    );
    if (userCredential.code) {
      setLoading(false);
      //showError(userCredential.code, setAlertObject);
      return;
    }
    await logoutUserAuthentication();
    setLoading(false);
    navigate("/login");
  });

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className=" flex flex-1 justify-start">
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <span aria-hidden="true">&larr;</span> Regresar a iniciar sesión
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo64}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registrate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <Input
              label="Nombres"
              name="name"
              type="text"
              autoComplete="name"
              register={register}
              required
            />
            <Input
              label="Apellidos"
              name="lastName"
              type="text"
              autoComplete="lastName"
              register={register}
              required
            />

            <Input
              name="email"
              label="Correo electronico"
              type="email"
              autoComplete="email"
              register={register}
              required
            />

            <Input
              name="password"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              register={register}
              required
            />

            <Button name="Registrarme" onClick={signUpUser} />
            <Button name="Iniciar con Google" icon={GoogleIcon} outlined />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
