import React, { useEffect, useState } from 'react'
import {
    Box,
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
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    HStack,
    VStack,
    Heading,
    Button,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';

const HackathonDetail = () => {

    const location = useLocation();
    const pathname = location.pathname.split("/").pop();

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
                        Hackathon {pathname}
                    </Heading>
                    <Card>
                        <CardBody>

                                <Heading
                                    as={"h1"}
                                    my={5}
                                    size={"md"}
                                >
                                    Submit Product
                                </Heading>
                                
                                <FormControl>
                                    <FormLabel>Submission</FormLabel>
                                    <Input />
                                </FormControl>

                                <Center>
                                    <Button
                                        mt={5}
                                    >
                                        Submit
                                    </Button>
                                </Center>

                                <Heading
                                    as={"h1"}
                                    my={5}
                                    size={"md"}
                                >
                                    Submitted Products
                                </Heading>


                        </CardBody>
                    </Card>
                </Box>
            </Center>
        </>
    )
}

export default HackathonDetail