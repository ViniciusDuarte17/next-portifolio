
interface Props {
    text: string,
    onClick: () => void
}

function CustomButton ({text, onClick}: Props) {

    return(
        <div>
            <button onClick={ onClick }>
                {text}
            </button>
        </div>
    )
}

export default CustomButton