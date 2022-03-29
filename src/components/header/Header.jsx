import {Navbar, Container} from "react-bootstrap";
const Header = ()=>{
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Išlaidų lentelė
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        BIT React training
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header