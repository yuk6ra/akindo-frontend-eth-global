
import React from 'react'
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
import { useNavigate } from 'react-router-dom'


const ProductCard = ({
    productId,
}) => {
    const navigate = useNavigate()

    return (
        <>
            <Card
                my={2}
                bg={"gray.50"}
                boxShadow={"none"}
            >
                <CardBody
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >


                        <Heading
                            size={"md"}
                        >
                            Product {productId}
                        </Heading>
                        <Button>
                            View Details
                        </Button>
                    </Box>

                </CardBody>
            </Card>
        </>
    )
}

export default ProductCard