import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from "react";
import { fireSwalError, getFromStorage, setToStorage } from "../constants";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [user, setUser] = useState(getFromStorage("user"));
	const [isLoggedIn, setIsLoggedIn] = useState(getFromStorage("token"));

	const initialState = getFromStorage("state") || {
		store: null,
		cart: [],
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "ADD":
				//? if is not null and the store of the new item isnt the store in state return state
				if (
					state.store &&
					action.payload.product.store._id !== state?.store?._id
				) {
					fireSwalError(
						"You cant have products from different stores in the cart"
					);
					return state;
				}

				//? if item is in cart return state
				if (
					state.cart.some(
						(item) => item.product._id === action.payload.product._id
					)
				)
					return state;

				var stateCopy = { ...state };

				stateCopy = { ...stateCopy, cart: [...stateCopy.cart, action.payload] };

				//? if there is nothing in the cart set the store to the store of the item
				if (!state.cart.length) {
					stateCopy = { ...stateCopy, store: action.payload.product.store };
				}

				return stateCopy;

			case "REMOVE":
				const newCart = state.cart.filter(
					(item) => item.product._id !== action.payload
				);

				if (!!newCart.length) {
					return {
						store: state.store,
						cart: newCart,
					};
				} else {
					return {
						store: null,
						cart: [],
					};
				}

			case "CHANGE-QUANTITY":
				// if quantity is zero remove item form cart
				if (action.payload.quantity === 0) {
					// if cart is empty clear store
					const newCart = state.cart.filter(
						(item) => item.product._id !== action.payload.id
					);

					if (!!newCart.length) {
						return {
							store: state.store,
							cart: newCart,
						};
					} else {
						return {
							store: null,
							cart: [],
						};
					}
				} else {
					const indexOfObjectToUpdate = state.cart.findIndex(
						({ product }) => product._id === action.payload.id
					);

					state.cart[indexOfObjectToUpdate].quantity = action.payload.quantity;

					return {
						...state,
						cart: state.cart,
					};
				}

			case "CLEAR":
				return {
					store: null,
					cart: [],
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const price = useMemo(
		() =>
			state.cart.reduce((accumulator, { product, quantity }) => {
				return accumulator + product.price * quantity;
			}, 0),
		[state]
	);

	useEffect(() => {
		setToStorage("user", user);
	}, [user]);

	useEffect(() => {
		setToStorage("state", state);
	}, [state]);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				state,
				dispatch,
				price,
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
