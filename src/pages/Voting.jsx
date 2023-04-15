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
} from '@chakra-ui/react'
const Voting = () => {

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
                            <Heading as={"h2"}>Product Name: Hackathon 1</Heading>
                        </CardHeader>
                        <CardFooter>
                            <ButtonGroup>

                                <Button
                                    onClick={() => window.open(snapshotUrl + 1)}
                                >SnapShot Space</Button>
                                <Button>
                                    Wave 1
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>

                    <Card
                        w="700px"
                    >
                        <CardHeader>
                            <Heading as={"h2"}>Product Name: Hackathon 2</Heading>
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