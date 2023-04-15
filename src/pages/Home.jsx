import React from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Heading,
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate();

    return (
        <>

            <Box
                colorScheme={"white"}
                width={"500px"}
                height={"500px"}
            >

                <Heading
                    as="h2"
                    textColor={'white'}
                >
                    Hackathon
                </Heading>
                <Button
                    colorScheme="gray"
                    variant="solid"
                    onClick={() => navigate('/create')}
                >
                    Hackathon Create
                </Button>

                <Heading
                    as="h2"
                    textColor={'white'}
                >
                    for CoreTeam
                </Heading>
                <ButtonGroup>
                <Button
                    colorScheme="gray"
                    variant="solid"
                    onClick={() => navigate('/submit')}
                >
                    Submit Product
                </Button>

                <Button
                    colorScheme="gray"
                    variant="solid"
                    onClick={() => navigate('/productlist')}
                >
                    Product List
                </Button>


                </ButtonGroup>



                <Heading
                    as="h2"
                    textColor={'white'}
                >
                    for Judges
                </Heading>
                <Button
                    colorScheme="gray"
                    variant="solid"
                    onClick={() => navigate('/vote')}
                >
                    Voting now
                </Button>

            </Box>
        </>
    )
}

export default Home