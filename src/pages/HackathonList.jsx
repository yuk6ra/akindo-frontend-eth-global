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

const ProductList = () => {
    return (
        <>
            <Center>
                <Box
                    w={"500px"}

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
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hackathon) => (
                                <HackathonCard
                                    key={hackathon}
                                    hackathonId={hackathon}
                                />
                            ))
                            }
                        </CardBody>
                    </Card>
                </Box>

            </Center>

        </>

    )
}

export default ProductList