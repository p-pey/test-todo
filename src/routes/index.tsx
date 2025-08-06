import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateTodo from "../features/Todos/components/CreateTodo/CreateTodo.tsx";
import TodosList from "../features/Todos/components/List/TodosList.tsx";
import AuthService from "../services/Auth.service.ts";
import LoginRoute from "./Login.route.tsx";
import TodosRoute from "./Todos.route.tsx";
export default function AppRoutes() {
  const isAuthenticated = useMemo(() => {
    const Auth = new AuthService();
    return Auth.isAuthenticated();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/todos" /> : <LoginRoute />}
        />
        <Route
          path="/todos"
          element={isAuthenticated ? <TodosRoute /> : <Navigate to="/login" />}
        >
          <Route index path="" element={<TodosList />} />
          <Route path=":id" element={<CreateTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
