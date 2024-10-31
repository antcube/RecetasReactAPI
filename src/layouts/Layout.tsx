import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";
import Notification from "../components/Notification";

export default function Layout() {
    const loadFromStorage = useAppStore(state => state.loadFromStorage);

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (
        <>
            <Header />

            <main className="w-[90%] max-w-7xl mx-auto py-16 p-5">
                <Outlet />
            </main>

            <Modal />
            <Notification />
        </>
    );
}
