
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


const HackathonCard = ({
    hackathonId,
    waveStatus = 0,
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
                        <HStack>

                            <Heading
                                size={"md"}
                            >
                                Hackathon {hackathonId}
                            </Heading>
                            <Tag
                                colorScheme="green"
                            >
                                Wave {waveStatus}
                            </Tag>
                        </HStack>

                        <Button                            
                            onClick={() => {
                                navigate(`/hackathons/${hackathonId}`)
                            }}                       
                        >
                            View Details
                        </Button>
                    </Box>

                </CardBody>
            </Card>
        </>
    )
}

export default HackathonCard