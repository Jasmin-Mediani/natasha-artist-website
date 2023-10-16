import { useState } from "react"

const Sezione = ({sezione}) => {

    const [ciSonoOperePresenti, setCiSonoOperePresenti] = useState("caricamento...")

    setTimeout(()=> {
        
        if (sezione.opere){
            if (sezione.opere.length == 0) {
                setCiSonoOperePresenti("Sezione in costruzione")
            }
        } 
    }, 2000);

    return (

        <div className="lg:py-[80px] lg:px-[100px]">

           { sezione.opere?.length ?  <div>
           
            <p>{sezione.descrizione}</p>

            <div className="flex justify-between flex-col md:flex-row flex-wrap wrap gap-12 pt-12">
            {sezione.opere.map((opera, index) => {  
                    return <div key={index}>
                        <img src={opera.immagine} alt="" className="h-[300px] w-[300px]"/>
                        <p className="my-[10px] overflow-hidden text-ellipsis max-w-[300px]">{opera.titolo}</p>
                        <p>{opera.prezzo}</p>
                    </div>
                })}
           </div>
           
           </div> : <p className="text-center">{ciSonoOperePresenti}</p> }
        </div>
    )
}

export default Sezione;