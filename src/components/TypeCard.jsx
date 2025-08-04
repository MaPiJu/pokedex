import { pokemonTypeColors } from "../utils"

// Fonction pour exporter le type de du pokemon càd eau/feu...
export default function TypeCard(props){
    const { type } = props
    return(
        <div className="type-tile" style={{color: pokemonTypeColors?.[type]?.color, 
        background: pokemonTypeColors?.[type]?.background}}>
            <p>{type}</p>
        </div>
    )
}