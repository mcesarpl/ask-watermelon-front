import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import ChatPage from "./pages/chat-page";
import LoginPage from "./pages/login-page";
import DocumentsPage from "./pages/documents-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />}/>
        <Route index path="/login" element={<LoginPage />}/>
        <Route path="/chat" element={<ChatPage />}/>
        <Route path="/components" element={<PageComponents />}/>
        <Route path="/documents" element={<DocumentsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
