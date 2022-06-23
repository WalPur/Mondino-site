import Components from '../components/index'

function Home() {
    Components.Title("Главная");
    return(
        <div className='wrapper'>
            <Components.General/>
            <Components.Functional/>
            <Components.Economize/>
            <Components.Health/>
            <Components.Community/>
            <Components.Advantage/>
            <Components.Ease/>
        </div>
    )
}

export default Home;