import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Context Api's
import FormContextProvider from "./components/context/FormContext";

// Screen or Page Layout
import HomeLayout from "./Layouts/HomeLayout";

// Screen or Pages
import Homepage from "./pages/HomePage";

// Custom 404 Error Page
import Setting from "./pages/profile/Setting";
import TreadPage from "./pages/DiscussPage";
import ProfilePage from "./pages/profile/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Inbox from "./pages/Inbox";
import AuthContextProvider from "./components/context/AuthContext";
import CreateDiscussion from "./pages/CreateDiscussion";

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<FormContextProvider>
					<Routes>
						<Route element={<HomeLayout />}>
							<Route path="/" element={<Homepage />} />
							<Route path="/treads/:id" element={<TreadPage />} />
							<Route path="/createTread" element={<CreateDiscussion />} />
							<Route path="/dashboard" element={<DashboardPage />} />
							<Route path="/profile" element={<ProfilePage />} />
							<Route path="/setting" element={<Setting />} />
							<Route path="/inbox" element={<Inbox />} />
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</FormContextProvider>
			</AuthContextProvider>
		</Router>
	);
};

export default App;