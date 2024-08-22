import React from "react";

type ButtonTypes = {
    children?: React.ReactNode;
    text: string;
    className?: string;
}

const SideButton = ({ children, text }: ButtonTypes) => {
    return (
        <button className={"flex items-center gap-4 w-56 p-4 text-dark-8 focus:text-blue-primary rounded-3xl hover:bg-dark-6 hover:bg-opacity-10"}>
            {children}
            {text}
        </button>
    )
}

const PrimaryButton = ({ text, className }: ButtonTypes) => {
    return (
        <button className={`text-center w-64 p-4 text-dark-8 bg-blue-primary rounded-3xl hover:saturate-50 ${className}`}>
            {text}
        </button>
    )
}

const SecondaryButton = () => {
    return (
        <>
        </>
    )
}

export { PrimaryButton, SecondaryButton, SideButton }
