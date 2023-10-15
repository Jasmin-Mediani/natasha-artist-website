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

           <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12">
            {sezione.opere.map((opera, index) => {
                    
                    return <div className="mt-8 mx-auto" key={index}>
                       
                        <img src={opera.immagine} alt=""/>
                        <p className="my-[10px] whitespace-nowrap w-[300px] overflow-hidden text-ellipsis">{opera.titolo}</p>
                        <p>{opera.prezzo}</p>
                    </div>

                })}
           </div>
           
           </div> : <p className="text-center">{ciSonoOperePresenti}</p> }
        </div>
    )
}

export default Sezione;