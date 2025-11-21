import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Success from './pages/Success'


export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<SignIn />} />
<Route path="/success" element={<Success />} />
</Routes>
</BrowserRouter>
)
}