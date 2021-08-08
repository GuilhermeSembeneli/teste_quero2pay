import { IInputProps } from 'interfaces/Components/Input'
import React from 'react'
import { ContainerInput } from './style'

export default function Input({ id, type, label, placeholder }: IInputProps) {
    return (
        <ContainerInput>
            {label && (
                <label htmlFor={id}>{label}</label>
            )}
            <input type={type} id={id} placeholder={placeholder} />
        </ContainerInput>
    )
}
