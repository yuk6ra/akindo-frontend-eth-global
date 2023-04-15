
import React, {useEffect, useState} from 'react'
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
import HackathonContract from '../ABIs/WaveHackathon.json'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'

const CONTRACT_ADDRESS = "0x5e4d6E43896A215404E576bfBcF0EE3d3891A5ae" /// @dev: mumbai

const HackathonCard = ({
    hackathonId,
    waveCount,
}) => {
    const navigate = useNavigate() 


    return (
        <>
            <Card
                my={2}
                bg={"gray.50"}
                boxShadow={"none"}
                onClick={() => {
                    navigate(`/hackathons/${hackathonId}`)
                }}
                _hover={{
                    cursor: "pointer",
                }}
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
                                {hackathonId}
                            </Heading>
                            <Tag
                                colorScheme="green"
                            >
                                Wave {waveCount}
                            </Tag>
                        </HStack>

                        <Button
                            onClick={(event) => {
                                event.stopPropagation();
                                window.open(`https://snapshot.org/#/hackathon.eth/proposal/${hackathonId.replace(/ /g, '-')}`);
                            }}
                            isDisabled={"true"}
                        >
                            Vote Now
                        </Button>
                    </Box>

                </CardBody>
            </Card>
        </>
    )
}

export default HackathonCard