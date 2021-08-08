import React from 'react'
import Input from 'components/Input'
import { ContainerHeader, QueroTwo } from './style'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <ContainerHeader>
            <section>
                <QueroTwo>
                    <h5>Quero</h5>
                    <span>2</span>
                    <strong>Ingressos</strong>
                </QueroTwo>
            </section>
        </ContainerHeader>
    )
}
