import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/fonts/style.css";
import AppProvider from "./context/AppContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
	queries: {
		refetchOnWindowFocus: false,
		retry: 3,
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppProvider>
				<App />
				<ReactQueryDevtools />
			</AppProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
