import { Tasks, Leaders, Showboat, Medicine } from '../components/index'
import {Helmet} from "react-helmet";

function Team() {
    return(
        <div>
            <Helmet>
                <title>Mondino Tracker - Команде</title>
            </Helmet>
            <Tasks/>
            <Leaders/>
            <Showboat/>
            <Medicine/>
        </div>
    )
}

export default Team;