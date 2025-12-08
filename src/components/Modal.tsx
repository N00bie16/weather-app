import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
    onSearch: (value: string) => void,
    onClose: () => void,
}

const Modal: React.FC<ModalProps> = ({
    onSearch, onClose
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = (e: any) => {
        e.preventDefault()
        onSearch(inputValue);
    }


    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex justify-center items-center">
            <div className="flex justify-center items-center w-[90%] md:w-[30%] h-100 bg-zinc-800 fixed rounded-2xl inset-shadow-2xl/50">
                <input className="absolute top-20 bg-zinc-500 rounded-md w-[70%] h-10 hover:bg-zinc-600 text-white focus:outline-2 outline-blue-600 transition" placeholder="Type a city or country here..." type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        handleSearch(e)
                }}}/>
                <button className="w-[70%] bg-blue-600 text-white rounded-2xl h-10 absolute bottom-10 cursor-pointer hover:bg-blue-800 transition" onClick={handleSearch}>Search</button>
                <IoCloseOutline className="text-white bg-zinc-700 absolute top-4 right-4 cursor-pointer rounded-full" onClick={onClose} size={30}/>
            </div>
        </div>
    );
};

export default Modal;