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
import { useNavigate } from 'react-router-dom';
import HackathonContract from '../ABIs/WaveHackathon.json'
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = "0x5e4d6E43896A215404E576bfBcF0EE3d3891A5ae" /// @dev: mumbai

const ProductList = () => {

    const [hackathons, setHackathons] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {        
        getHackathons();
    }, [])

    const getHackathons = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, HackathonContract.abi, signer);
        const hakachons = await contract.getHackathons();
        setHackathons(hakachons)
    }

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
                        Hackathons
                    </Heading>
                    <Card
                        w={"500px"}
                    >
                        <CardBody>
                            {hackathons.map((hackathon) => (
                                <HackathonCard
                                    key={hackathon}
                                    hackathonId={hackathon}
                                />
                            ))
                            }
                            <Center
                                mt={5}
                            >

                                <Button
                                    onClick={() => navigate('/hackathons/create')}
                                >
                                    Create Hackathon
                                </Button>
                            </Center>
                        </CardBody>
                    </Card>
                </Box>
            </Center>

        </>

    )
}

export default ProductList