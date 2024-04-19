import React from 'react'
import Hero from '../components/Hero'
import Movierow from '../components/Movierow'
import endPoints from '../services/movieService'

function Home() {
    return (
        <div>
            <Hero></Hero>
            <Movierow rowid={1} title={'upcoming'} url={endPoints.upcoming} />
            <Movierow rowid={2} title={'trending'} url={endPoints.trending} />
            <Movierow rowid={3} title={'top rated'} url={endPoints.topRated} />
        </div>
    )
}

export default Home
