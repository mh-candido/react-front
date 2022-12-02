import React from "react";
import { Container } from "react-bootstrap";
import Card from "../../component/card";
import { myPortifolios } from "../../utils/listprops";

const Portifolios = ()=>{
    return(
        <Container className="d-flex p-2 justify-content-center">
            {myPortifolios.map((item)=>{
                return(
                    <Card />
                )
            })}
        </Container>
    )
}

export default Portifolios;