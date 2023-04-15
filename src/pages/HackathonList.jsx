import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    VStack,
    HStack,
    Tag,
} from '@chakra-ui/react'
import HackathonCard from '../components/HackathonCard.jsx'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {

    const navigate = useNavigate();    

    return (
        <>
            <Center>
                <Box
                    w={"600px"}

                >
                    <Heading
                        as={"h1"}
                        my={5}
                        color={"white"}
                    >
                        Hackathons
                    </Heading>
                    <Card
                        w={"500px"}
                    >
                        <CardBody>
                            {[1, 2, 3].map((hackathon) => (
                                <HackathonCard
                                    key={hackathon}
                                    hackathonId={hackathon}
                                />
                            ))
                            }
                            <Center
                                mt={5}
                            >

                                <Button
                                    onClick={() => navigate('/hackathons/create')}
                                >
                                    Create Hackathon
                                </Button>
                            </Center>
                        </CardBody>
                    </Card>
                </Box>
            </Center>

        </>

    )
}

export default ProductList