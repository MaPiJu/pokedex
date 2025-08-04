import ReactDom from 'react-dom'

// Les Modal sont des pop-ups en jsx
export default function Modal(props){
    const { children, handleCloseModal } = props
    // reactDom sert à créer un affiche par dessus la page, c'est la technique que l'on untilise en React pour ce
    // genre d'affichage en overlay. Contient deux arguments: 1) la partie html/front 2) La cible de notre DOM, ici il 
    // n'est pas dans root mais dans 'portal' qui correspond à l'emplacement du pop-up

    return ReactDom.createPortal(
        // 1) Définition du  JSX -> rendu sur le front
        <div className='modal-container'>
            {/* ici le boutton sert à quitter lorsque l'on clique sur l'arrière plan */}
            <button onClick={handleCloseModal} className='modal-underlay'/>
            <div className='modal-content'>
                {children}
            </div>
        </div>,
        // 2) Cible du Dom, pas dans 'root' mais dans 'portal'
        document.getElementById('portal')
    )
}