import { useState } from "react"

export function TwitterFollowCard({ name, userName, initialisFollowing}) { 
    const imageSrc = `https://unavatar.io/${userName}`

    const [isFollowing, setisFollowing] = useState(initialisFollowing)

    const text = isFollowing ? 'Siguendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => { 
        setisFollowing(!isFollowing)
    }


    return (
        
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src = {imageSrc}
                    alt="El avatar de Midudev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
            </article>
    )
}
