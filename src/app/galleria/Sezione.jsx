const Sezione = ({opere}) => {

    console.log(opere)

    return (
        <div>
            {opere.map((opera, index) => {
                
                return <div className="p-6 m-12 bg-pink-300" key={index}>
                    <p>{opera.titolo}</p>
                    <img src={opera.immagine} alt="" />
                    <p>{opera.prezzo}</p>
                </div>

            })}
        </div>
    )
}

export default Sezione;