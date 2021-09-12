import React from 'react'
import { Badge, Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CharacterList(props) {
    const { characters } = props
    // const characters = props.characters - do the same thing as line 4
    return (
        <Container className="my-3">
            <ListGroup>
                {/* line 5 characters should match line 10 map characters */}
                {characters.map((character, index) => {
                    return <ListGroup.Item key={character.url} className="d-flex align-items-center justify-content-between" 
                    action 
                    as={Link} 
                    to={`/characters/${index}`}
                    >
                        {character.name} <Badge bg="info" pill>{ character.birth_year}</Badge>
                    </ListGroup.Item>
                })}
            </ListGroup>
        </Container>
    )
}

export default CharacterList
