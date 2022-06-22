import Components from '../components/index'

function Home() {
    return(
        <div className='wrapper'>
            <Components.General/>
            <div className="container">
                <Components.Functional/>
            </div>
        </div>
    )
}

export default Home;