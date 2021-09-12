import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Redirect, useParams } from 'react-router-dom'

function CharacterProfile(props) {
    const { index } = useParams()
    const character = props.characters[index]
    if (!character) {
        return <Redirect to="/characters" />
    }
    return (
        <Container>
            <ListGroup>
            {character.name}<br />
            {character.height}<br />
            {character.mass}<br />
            {character.hair_color}<br />
            {character.skin_color}<br />
            {character.eye_color}<br />
            {character.birth_year}<br />
            {character.gender}<br />
            </ListGroup>
        </Container>
    )
}

export default CharacterProfile
