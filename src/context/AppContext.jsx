import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, setToStorage } from "../constants";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [user, setUser] = useState(getFromStorage("user"));
	const [isLoggedIn, setIsLoggedIn] = useState(getFromStorage("token"));

	useEffect(() => {
		setToStorage("user", user);
	}, [user]);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
