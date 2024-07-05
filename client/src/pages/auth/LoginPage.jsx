import { useForm } from "react-hook-form";
import logo from "../../assets/IconoMRDC.png";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-lg"
      >
        <div className="flex justify-center mb-1">
          <img src={logo} alt="Logo de la iglesia" className="h-16" />
        </div>
        <h1 className="text-3xl font-semibold text-center">Inicio de sesión</h1>
        <p className="text-gray-600 text-center mt-2">
          ¡Bienvenido! Por favor ingrese sus datos.
        </p>
        <div className="mt-4">
          <div className="mb-4">
            {signinErrors && signinErrors.length > 0 && (
              <div className="mb-4">
                {signinErrors.map((error, index) => (
                  <p key={index} className="text-red-500 text-sm mt-1 text-center">
                    {error}
                  </p>
                ))}
              </div>
            )}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese su correo electrónico"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                El correo electrónico es obligatorio
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-700"
              placeholder="Ingrese su contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                La contraseña es obligatoria
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div></div> {/* Espacio en blanco para separar los elementos */}
            <button className="text-sm text-blue-700 hover:underline">
              ¿Has olvidado tu contraseña?
            </button>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:outline-none"
            >
              Iniciar sesión
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?,{" "}
              <Link to="/register" className="text-blue-700 hover:underline">
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
