'use client'

import { useEffect, useState } from "react"
import {categorie} from "./dati"
import Sezione from "./Sezione"



export default function Galleria() {

	const [primaCategoriaDisponibile, setPrimaCategoriaDisponibile] = useState({});

	//montaggio della prima categoria come default
	useEffect(() => {

		setPrimaCategoriaDisponibile(Object.keys(categorie)[0])
		setNomeCategoriaSelezionata(primaCategoriaDisponibile);
		setCategoriaSelezionata(categorie[0])
	}, [categorie])

	const [nomeCategoriaSelezionata, setNomeCategoriaSelezionata] = useState("");
	const [categoriaSelezionata, setCategoriaSelezionata] = useState({});
	

	console.log('nomeCategoriaSelezionata: ', nomeCategoriaSelezionata)

	return (
		<main className='w-full h-[calc(100vh - 100px)] bg-gradient-to-b from-[#F3F3F3] to-[#fff] p-[20px] lg:p-[50px]'>
			<h2 className='lg:text-[42px] mb-6 text-center'> Galleria </h2>

			<div className='flex gap-16'>
				<div className='w-1/5 bg-gray-300 p-4 h-fit'>
					<ul>
						{Object.keys(categorie).map(categoria => 
						
							<li onClick={() => {setNomeCategoriaSelezionata(categoria), setCategoriaSelezionata(categorie[categoria])}} key={categoria}>{categoria}</li>)
						
						}
					</ul>
				</div>

				<div className='w-4/5 bg-gray-300'>
					<Sezione sezione={categoriaSelezionata != null ? categoriaSelezionata : categorie[primaCategoriaDisponibile]} />
				</div>
			</div>
		</main>
	)
}
