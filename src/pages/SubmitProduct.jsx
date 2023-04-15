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
                <Box
                    w={"500px"}

                >
                        <Heading
                            as={"h1"}
                            my={5}
                            color={"white"}
                        >
                            Submit Product
                        </Heading>
                        <Card
                            w={"500px"}
                        >
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
                </Box>

            </Center>

        </>

    )
}

export default SubmitProduct