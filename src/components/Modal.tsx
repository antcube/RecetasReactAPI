import { Dialog, DialogBackdrop, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

export default function Modal() {
    const selectedRecipe = useAppStore(state => state.selectedRecipe);
    const modal = useAppStore(state => state.modal);
    const closeModal = useAppStore(state => state.closeModal);

    const renderIngredients = () => {
        const ingredients: JSX.Element[] = [];

        for(let i = 1; i <= 10; i++) {
            const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
            const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];
            
            if(ingredient && measure) {
                ingredients.push(
                    <li key={i} className="text-lg font-normal">{ingredient} - {measure}</li>
                )
            } else if(ingredient) {
                ingredients.push(
                    <li key={i} className="text-lg font-normal">{ingredient}</li>
                )
            }
        }
        return ingredients
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => {}}>
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-70" />
                        </TransitionChild>

                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-11/12 sm:w-4/5 md:w-[500px] max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                                <div className="modal-header flex justify-between items-center border-b p-4">
                                    <DialogTitle as="h3" className="text-3xl font-extrabold text-center leading-6 text-gray-900">
                                        {selectedRecipe.strDrink}
                                    </DialogTitle>
                                    <button
                                        type="button"
                                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={closeModal}
                                    >
                                        <span className="sr-only">Close</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="modal-body p-4 overflow-y-auto max-h-96 md:max-h-[500px]">
                                    <img 
                                        src={`${selectedRecipe.strDrinkThumb}`} 
                                        alt={`Imagen de ${selectedRecipe.strDrink}`}
                                        className="h-auto sm:h-96 mx-auto object-cover rounded-lg"
                                    />
                                    <h3 className="text-gray-900 text-2xl font-extrabold my-5">Ingredientes y Cantidades</h3>
                                    <ul>
                                        {renderIngredients()}
                                    </ul>
                                    <h3 className="text-gray-900 text-2xl font-extrabold my-5">Instrucciones</h3>
                                    <p className="text-lg">{selectedRecipe.strInstructions}</p>
                                </div>
                                <div className="modal-footer flex flex-col md:flex-row justify-between gap-4 border-t p-4 mt-1">
                                    <button className="w-full bg-gray-600 hover:bg-gray-500 transition-all duration-300 rounded-lg p-3 text-white uppercase font-bold shadow-lg" onClick={closeModal}>
                                        Cerrar
                                    </button>
                                    <button className="w-full bg-orange-600 hover:bg-orange-500 transition-all duration-300 rounded-lg p-3 text-white uppercase font-bold shadow-lg">
                                        Agregar a Favoritos
                                    </button>
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
