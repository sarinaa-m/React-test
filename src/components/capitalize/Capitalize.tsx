import React, { useState } from 'react'

const Capitalize = () => {
    const [word, setWord] = useState<string>("")
    const [capitalized, setCapitalized] = useState<string>("")

    const handleCapitalize = () => {
        const capitalized = word.toUpperCase()
        setCapitalized(capitalized)
    }

    return (
        <>
            <input aria-label='text-input' type='text' onChange={(e) => { setWord(e.target.value) }}></input>
            <button onClick={handleCapitalize}>Capitalize</button>
            {capitalized && <div>{capitalized}</div>}
        </>
    )
}

export default Capitalize