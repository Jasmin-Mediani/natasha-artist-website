const Sezione = ({sezione}) => {

    console.log(sezione)

    return (
        <div className="lg:py-[80px] lg:px-[100px]">

           { sezione.opere.length > 0 ?  <div>
           
            <p>{sezione.descrizione}</p>

            {sezione.opere.map((opera, index) => {
                
                return <div className="mt-8 bg-pink-300" key={index}>
                    <p>{opera.titolo}</p>
                    <img src={opera.immagine} alt="" />
                    <p>{opera.prezzo}</p>
                </div>

            })}
           
           </div> : "Sezione in costruzione" }
        </div>
    )
}

export default Sezione;