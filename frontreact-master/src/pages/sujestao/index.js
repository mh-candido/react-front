import { useContext } from "react"
import { Container } from "react-bootstrap"
import { ContextApi } from "../../context/contextApi";

const Sujestao = () => {
    const {sujestao} = useContext(ContextApi);

    return (
        <Container className="mt-5">
            <ol className="list-group list-group-numbered">
                {
                    sujestao.map((item) => {
                        return (
                            <li className="list-group-item mb-2">{item}</li>
                        )
                    })
                }
            </ol>
        </Container>

    )
}

export default Sujestao