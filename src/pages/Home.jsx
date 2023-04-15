import React from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    Card,
    Center,
    CardBody,
    VStack
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate();

    return (
        <>

            <Center>
                <VStack>

                    <Heading
                        as={"h1"}
                    >
                        Description
                    </Heading>

                    <Card
                        mt={"10"}
                        w={"500px"}
                    >
                        <CardBody>

                            <Heading
                                as="h2"
                                size={"md"}
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
                                size={"md"}
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

                        </CardBody>

                    </Card>
                </VStack>

            </Center>


        </>
    )
}

export default Home