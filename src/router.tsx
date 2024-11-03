import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

// Lazy load views
const IndexPage = lazy(() => import("./views/IndexPage"))
const FavoritesPage = lazy(() => import("./views/FavoritesPage"))
const ErrorPage = lazy(() => import("./views/ErrorPage"))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={
                        <Suspense fallback={<div>Cargando...</div>}>
                            <IndexPage />
                        </Suspense>
                    } index/>
                    <Route path="/favoritos" element={
                        <Suspense fallback={<div>Cargando...</div>}>
                            <FavoritesPage />
                        </Suspense>
                    }/>
                    <Route path="*" element={
                        <Suspense fallback={<div>Cargando...</div>}>
                            <ErrorPage />
                        </Suspense>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
