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
} from '@chakra-ui/react'

const SubmitProduct = () => {
    return (
        <>
            <Center>
                <Box
                    colorScheme={"white"}
                    width={"500px"}
                    height={"500px"}
                >
                    <FormControl>
                        <FormLabel>提出物</FormLabel>
                        <Input />
                    </FormControl>
                    <Button>
                        Submit
                    </Button>

                </Box>
            </Center>

        </>

    )
}

export default SubmitProduct