'use client'

import { useEffect, useState } from 'react'
import { categorie } from './dati'
import Sezione from './Sezione'

export default function Galleria () {
  const [primaCategoriaDisponibile, setPrimaCategoriaDisponibile] = useState({})
  const [nomeCategoriaSelezionata, setNomeCategoriaSelezionata] = useState('')
  const [categoriaSelezionata, setCategoriaSelezionata] = useState({})

  //montaggio della prima categoria come default
  useEffect(() => {
    setPrimaCategoriaDisponibile(Object.keys(categorie)[0])
    setNomeCategoriaSelezionata(primaCategoriaDisponibile)
    setCategoriaSelezionata(categorie[0])
  }, [categorie])

  return (
    <main className='w-full bg-[#F3F3F3] to-[#fff] p-[20px] lg:p-[50px]' style={{minHeight: "calc(100vh - 100px)" }}>
      <div className='mx-auto max-w-[1350px]' >
        <h2 className='lg:text-[42px] mb-6 text-center'> Gallery </h2>

        <div className='flex gap-16 flex justify-center flex-col lg:flex-row'>
          <div className='lg:w-fit max-w-[330px] bg-white p-4 lg:h-fit'>
            <ul>
              {Object.entries(categorie).map(([nomeCategoria, obj]) => (
                <li
                  className='flex justify-between'
                  onClick={() => {
                    setNomeCategoriaSelezionata(nomeCategoria),
                      setCategoriaSelezionata(categorie[nomeCategoria])
                  }}
                  key={nomeCategoria}
                >
                  <span className='mr-3 mb-2 mt-2'> {nomeCategoria}</span> <span>{obj.opere.length} </span>
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:w-4/5 bg-white max-w-[1350px]'>
            <Sezione
              sezione={
                categoriaSelezionata != null
                  ? categoriaSelezionata
                  : categorie[primaCategoriaDisponibile]
              }
            />
          </div>
        </div>
      </div>
    </main>
  )
}
