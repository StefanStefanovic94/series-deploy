import React from "react"
import { FetchShows } from "../services/Fetch"
import Seasons from "./seasons/Seasons";
import style from "./InfoShow.module.scss"
import Cast from "../allShows/cast/Cast"
import { Col, Row, Container } from "react-bootstrap"

class InfoHero extends React.Component {
    constructor() {
        super()
        this.state = {
            show: null,
            sesone: []
        }
    }
    componentDidMount() {
        FetchShows(`${`https://api.tvmaze.com/shows/`}${this.props.match.params.id}`)
            .then((response) => this.setState({ show: response }));

    }

    renderShow = () => {
        return (
            <div>
                <div>
                    <img src={this.state.show.image ? this.state.show.image.medium : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"} key={this.state.show.id} />
                    <h2 className={style.name}>{this.state.show.name}</h2>
                </div>
            </div>
        )
    }


    render() {
        return (
            <Container>
                <div className={style.wrap}>

                    <Row>
                        <Col sm="12" md="7" lg="4">

                            <div>
                                {this.state.show ? this.renderShow() : null}
                            </div>
                        </Col>
                        <Col sm="12" md="7" lg="4">
                            <div className={style.seasons}>
                                {this.state.show ? <Seasons id={this.state.show.id} /> : null}
                            </div>
                        </Col>
                        <Col sm="12" md="7" lg="4">
                            <div className={style.cast}>
                                {this.state.show ? <Cast id={this.state.show.id} /> : null}
                            </div>
                        </Col>

                        {console.log(this.state.show)}

                    </Row>

                </div >
            </Container>
        )
    }
}
export default InfoHero