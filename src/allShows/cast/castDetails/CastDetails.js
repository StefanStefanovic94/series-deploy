import React from "react"
import { FetchShows } from "../../../services/Fetch"
import style from "./CastDetails.module.scss"

class CastDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            casts: [],
            char: false
        }
    }

    changeView = () => {
        this.setState({
            char: !this.state.char
        })
    }

    componentDidMount() {
        FetchShows(`${`https://api.tvmaze.com/shows/`}${this.props.match.params.id}/cast`)
            .then((response) => this.setState({ casts: response }))
    }

    render() {
        return (
            this.state.char
                ?
                <div>
                    <div>

                    </div>
                    <div className={style.wrap}>
                        {this.state.casts.map((cast, i) => (
                            <div onClick={this.changeView} className={style.card}>
                                <img src={cast.person.image ? cast.person.image.medium:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}/>
                                <h3>{cast.person.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div>
                    <div>

                    </div>
                    <div className={style.wrap}>
                        {this.state.casts.map((cast, i) => (
                            <div onClick={this.changeView} className={style.card}>
                            <img src={cast.character.image ? cast.character.image.medium:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}/> 

                                <h3>{cast.character.name}</h3>
                                <h5>({cast.person.name})</h5>
                            </div>
                        ))}
                    </div>
                </div>
        )
    }

}

export default CastDetails