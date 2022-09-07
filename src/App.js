import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// styles
import "./App.css";

// pages and components
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={user ? <Dashboard /> : <Login />} />

              <Route path="/create" element={user ? <Create /> : <Login />} />

              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Login />}
              />

              <Route
                path="/login"
                element={!user ? <Login /> : <Dashboard />}
              />

              <Route
                path="/signup"
                element={!user ? <Signup /> : <Dashboard />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
