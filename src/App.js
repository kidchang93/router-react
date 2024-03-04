import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";

const App = () => {
	return (
    <Routes>
      <Route element={<Layout/>}>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
      <Route path="/profiles/:id" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
		</Routes>
	);
};

export default App;
