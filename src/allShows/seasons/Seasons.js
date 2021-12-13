import React from "react"
import { Link } from "react-router-dom"
import { FetchShows } from "../../services/Fetch"
import style from "./Seasons.module.scss"

class Seasons extends React.Component {
    constructor() {
        super()
        this.state = {
            seasons: []
        }
    }

    componentDidMount() {
        FetchShows(`${`https://api.tvmaze.com/shows/`}${this.props.id}/seasons`)
            .then((response) => this.setState({ seasons: response }))

    }


    render() {

        return (

            <div className={style.seasons}>
                <div>
                    <h2>Seasons ({this.state.seasons.length})</h2>
                </div>
                <div>
                    {this.state.seasons.map(season => (

                        <ul>
                            {console.log(this.state.seasons)}
                            <li>Premiere for season {season.number}:  {season.premiereDate}</li>
                            <li>Number of episodes: {season.episodeOrder}</li>
                        </ul>

                    ))}
                </div>
                <Link to={`${/info-show/}${this.props.id}/seasons`}>
                    <h6>...more details about season</h6>
                </Link>
                {console.log(this.state.seasons)}
            </div>
        )
    }
}

export default Seasons