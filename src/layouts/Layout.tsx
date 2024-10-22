import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <>
            <Header />

            <main className="w-[90%] max-w-7xl mx-auto py-16 p-5">
                <Outlet />
            </main>

        </>
    );
}
