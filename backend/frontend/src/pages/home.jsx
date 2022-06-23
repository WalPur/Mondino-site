import Components from '../components/index'
import {Helmet} from "react-helmet";

function Home() {
    return(
        <div className='wrapper'>
            <Helmet>
                <title>Mondino Tracker - Главная</title>
            </Helmet>
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