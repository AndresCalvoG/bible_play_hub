import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import Logo64 from "../../assets/logo64.png";
import { Button } from "../../components/Buttons/Button";
import GoogleIcon from "../../assets/google.png";

const SignUp = () => {
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
              required
            />
            <Input
              label="Apellidos"
              name="lastName"
              type="text"
              autoComplete="lastName"
              required
            />

            <Input
              name="email"
              label="Correo electronico"
              type="email"
              autoComplete="email"
              required
            />

            <Input
              name="password"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              required
            />

            <Button name="Registrarme" />
            <Button name="Iniciar con Google" icon={GoogleIcon} outlined />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
