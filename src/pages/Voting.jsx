import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    ButtonGroup,
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
    Heading,
    VStack,
    MenuGroup,
    Tag,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const Voting = () => {

    const navigate = useNavigate()

    const snapshotUrl = "https://snapshot.org/#/"

    return (
        <>
            <Heading as={"h1"}>Voting Now</Heading>
            <Center>
                <VStack>
                    <Card
                        w="700px"
                    >
                        <CardHeader>
                            <Heading as={"h2"}>Hackathon 1</Heading>
                        </CardHeader>
                        {/* <CardBody>
                            <Tag colorScheme='teal'>Wave 1</Tag>
                        </CardBody> */}
                        <CardFooter>
                            <ButtonGroup>
                            
                                <Button
                                    onClick={() => window.open(snapshotUrl + 1)}
                                >SnapShot Space</Button>
                                <Button
                                    onClick={()=> navigate('/productlist')}
                                >
                                    View Products
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>

                    <Card
                        w="700px"
                    >
                        <CardHeader>
                            <Heading as={"h2"}>Hackathon 2</Heading>
                        </CardHeader>
                        <CardBody>
                            <Button
                                onClick={() => window.open(snapshotUrl + 1)}
                            >SnapShot Space</Button>
                        </CardBody>
                    </Card>
                </VStack>

            </Center>

        </>
    )
}

export default Voting