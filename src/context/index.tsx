import { ReactNode, useState, createContext, useContext } from "react";
import { userMD } from "../models/user.model";

interface props {
  children: ReactNode;
}
type contextType = {
  loading: boolean;
  setLoading: (state: boolean) => void;
  user: userMD;
  setUser: (user: userMD) => void;
};

const AppContext = createContext<contextType | null>(null);

const AppProvider = ({ children }: props) => {
  //ESTADOS
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<userMD>({} as userMD);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext) as contextType;
};

export { useAppContext, AppProvider };
