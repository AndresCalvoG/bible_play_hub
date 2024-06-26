import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo32 from "../../../assets/logo32.png";
import AvatarIcon from "../../../assets/user.png";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context";
import { logoutUserAuthentication } from "../../../adapters/user.adapter";

const navigation = [
  { name: "Juegos", href: "#" },
  { name: "Caracteristicas", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contacto", href: "#" },
];

const Header = () => {
  const { user } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logout = async () => {
    await logoutUserAuthentication();
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Bible Play</span>
            <img className="h-8 w-auto" src={Logo32} alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user.id && (
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white mr-2"
              src={user.photoUrl || AvatarIcon}
              alt=""
            />
          )}
          <Link
            to={user.id ? "/" : "/login"}
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => user.id && logout()}
          >
            {user.id ? (
              <>
                <span aria-hidden="true">&larr;</span> Cerrar Sesión
              </>
            ) : (
              <>
                Iniciar Sesión <span aria-hidden="true">&rarr;</span>
              </>
            )}
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Bible Play</span>
              {user.id ? (
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white mr-2"
                  src={user.photoUrl || AvatarIcon}
                  alt=""
                />
              ) : (
                <img className="h-8 w-auto" src={Logo32} alt="logo" />
              )}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to={user.id ? "/" : "/login"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => user.id && logout()}
                >
                  {user.id ? "Cerrar Sesión" : "Iniciar Sesión"}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export { Header };
