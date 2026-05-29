import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import ChatPage from "./pages/chat-page";
import LoginPage from "./pages/login-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route index element={<ChatPage />}/>
        <Route path="/components" element={<PageComponents />}/>
      </Routes>
    </BrowserRouter>
  )
}
