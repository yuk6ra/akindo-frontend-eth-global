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
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Heading,
    VStack,
} from '@chakra-ui/react'

const SubmitProduct = () => {
    return (
        <>
            <Center>
                <VStack>
                    <Heading as={"h1"}>for CoreTeam</Heading>
                    <Card>
                        <CardBody>
                            <FormControl
                                my={5}
                            >
                                <FormLabel>提出物</FormLabel>
                                <Input />
                            </FormControl>

                            <Center>
                                <Button>
                                    Submit
                                </Button>
                            </Center>
                        </CardBody>

                    </Card>
                </VStack>

            </Center>

        </>

    )
}

export default SubmitProduct