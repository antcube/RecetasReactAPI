import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000); // Redirigir a la página de inicio después de 5 segundos

        return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-fit">
            <h1 className="text-4xl font-bold text-orange-600">404 - Página No Encontrada</h1>
            <p className="mt-4 text-lg text-gray-700">La página que estás buscando no existe.</p>
            <p className="mt-2 text-lg text-gray-700">Serás redirigido a la página de inicio en 5 segundos.</p>
        </div>
    );
}
