import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Context Api's
import FormContextProvider from "./components/context/FormContext";
import AuthContextProvider from "./components/context/AuthContext";
import ThemeContextProvider from "./components/context/ThemeContext";

// Screen or Page Layout
import HomeLayout from "./Layouts/HomeLayout";

// Screen or Pages
import Homepage from "./pages/HomePage";

// Custom 404 Error Page
import Inbox from "./pages/profile/Inbox";
import TreadPage from "./pages/DiscussPage";
import Setting from "./pages/profile/Setting";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/profile/ProfilePage";
import CreateDiscussion from "./pages/CreateDiscussion";

// Required
import RequiredAuth from "./auth/RequiredAuth";
import MemberPage from "./pages/MemberPage";
import FilterDiscussion from "./pages/FilterDiscussion";
import SearchFilterPage from "./pages/SearchFilterPage";

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<FormContextProvider>
					<ThemeContextProvider>
						<Routes>
							<Route element={<HomeLayout />}>
								<Route path="/" element={<Homepage />} />

								<Route path="/treads/:id" element={<TreadPage />} />
								<Route
									path="/treads/sort/:sort"
									element={<FilterDiscussion />}
								/>
								<Route
									path="/treads/search/:sort/:name"
									element={<SearchFilterPage />}
								/>

								<Route element={<RequiredAuth />}>
									<Route path="/createTread" element={<CreateDiscussion />} />
									<Route path="/dashboard" element={<DashboardPage />} />
									<Route path="/profile" element={<ProfilePage />} />
									<Route path="/setting" element={<Setting />} />
									<Route path="/inbox" element={<Inbox />} />
								</Route>
								<Route path="/members" element={<MemberPage />} />
							</Route>
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</ThemeContextProvider>
				</FormContextProvider>
			</AuthContextProvider>
		</Router>
	);
};

export default App;
