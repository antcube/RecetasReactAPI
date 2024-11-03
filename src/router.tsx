import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPage from "./views/FavoritesPage"
import Layout from "./layouts/Layout"
import ErrorPage from "./views/ErrorPage"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index/>
                    <Route path="/favoritos" element={<FavoritesPage />}/>
                    <Route path="*" element={<ErrorPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
