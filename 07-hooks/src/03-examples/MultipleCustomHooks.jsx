import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import LoadingMessage from "./LoadingMessage"
import PokemonCard from "./PokemonCard"

const MultipleCustomHooks = () => {
    const { counter, increase, decrease } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">
                Información del Pokémon
            </h1>

            <hr className="mb-4" />

            {isLoading ? <LoadingMessage /> : <PokemonCard {...data} />}

            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-outline-primary me-3"
                    onClick={counter > 1 ? decrease : () => { }}
                    disabled={counter <= 1}
                >
                    Anterior Pokémon
                </button>
                <button
                    className="btn btn-outline-primary"
                    onClick={increase}
                >
                    Siguiente Pokémon
                </button>
            </div>
        </div>
    )
}

export default MultipleCustomHooks
