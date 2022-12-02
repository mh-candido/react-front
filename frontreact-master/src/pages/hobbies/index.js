import { useContext, useState } from "react"
import { Container } from "react-bootstrap"
import { ContextApi } from "../../context/contextApi"
import { myHobbies } from "../../utils/listprops"

const Hobbies = () => {
    const [sujestaoHobbie, setSujestaoHobbie] = useState('')

    const {sujestao} = useContext(ContextApi);

    const handleContexteApi = ()=>{
        sujestao.push([sujestaoHobbie])
        setSujestaoHobbie('')
    }

    return (
        <Container className="mt-5">
            <ol className="list-group list-group-numbered">
                {
                    myHobbies.map((item) => {
                        return (
                            <li className="list-group-item mb-2">{item.hobbie}</li>
                        )
                    })
                }
            </ol>
            <div className="row gy-2 gx-3 align-items-center mt-5">
                <div className="col-sm-7">
                    <label for="formGroupExampleInput" className="form-label">Sugestão de hobbies, deixe aqui:</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Sujestões" value={sujestaoHobbie} onChange={(e) => { setSujestaoHobbie(e.target.value) }} />
                </div>
                <div>
                    <button onClick={handleContexteApi} type="submit" className="btn btn-primary">Entrar</button>
                </div>
            </div>
        </Container>

    )
}

export default Hobbies