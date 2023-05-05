import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { users } from './userData'

export function App() {
    return (
        <>  
            <section className='App'>
            <span className='tw-titleSuggest'>A quién seguir</span>
            {
                users.map(user => { 
                    const {  userName, name, isFollowing } = user 
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialisFollowing={isFollowing}
                        name={name}
                    />
                )
                })}
                <a href='twitter.com/home' target='_blank' className='tw-titleShowmore'>Mostar más</a>
        </section>
        </>
    )
}