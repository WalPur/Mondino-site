import Components from '../components/index'

function Home() {
    return(
        <div className='wrapper'>
            <Components.General/>
            <Components.Functional/>
            <Components.Economize/>
            <Components.Health/>
        </div>
    )
}

export default Home;