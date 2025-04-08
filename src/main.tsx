import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import Register from './pages/Register';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
)
