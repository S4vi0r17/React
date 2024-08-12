const PokemonCard = ({ id, name, sprites = {} }) => {
    const {
        front_default,
        front_shiny,
        back_default,
        back_shiny
    } = sprites

    return (
        <section className="card p-3 shadow-sm mb-4 d-flex justify-content-around" style={{ minHeight: '250px', minWidth: '300px' }}>
            <h2 className="card-title">
                {id}. {name}
            </h2>

            <div className="d-flex justify-content-around">
                <img src={front_default} alt={name} className="img-fluid rounded" />
                <img src={front_shiny} alt={name} className="img-fluid rounded" />
                <img src={back_default} alt={name} className="img-fluid rounded" />
                <img src={back_shiny} alt={name} className="img-fluid rounded" />
            </div>
        </section>
    )
}

export default PokemonCard
