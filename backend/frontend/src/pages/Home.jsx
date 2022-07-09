import React from "react";
import { General, Functional, Economize, Health, Community, Advantage, Ease } from '../components/index'
import {Helmet} from "react-helmet";

function Home() {
    return(
        <div className="wrapper">
            <Helmet>
                <title>Mondino Tracker - Главная</title>
            </Helmet>
            <General/>
            <Functional/>
            <Economize/>
            <Health/>
            <Community/>
            <Advantage/>
            <Ease/>
        </div>
    )
}

export default Home;