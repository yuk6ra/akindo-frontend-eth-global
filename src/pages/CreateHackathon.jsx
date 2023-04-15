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
} from '@chakra-ui/react'

import SliderInput from '../components/SliderInput.jsx'

const CreateHackathon = () => {

    const [ERC20unit, setERC20Unit] = useState("USDC");
    const [waveCount, setWaveCount] = useState(5)
    const [prizePerWave, setPrizePerWave] = useState(100);
    const [depositAmount, setDepositAmount] = useState(0);

    const hackathonId = 1;

    useEffect(() => {
        setDepositAmount(waveCount * prizePerWave);
    }, [waveCount, prizePerWave])
    
    const usdcContractAddress = "0x0000000000"

    console.log(depositAmount)

    const boxMy = 6

    return (
        <>
            <Box
                my="20px"
            >

                <Center>
                    <Card>
                        <CardBody>
                            <FormControl>

                                <Box
                                    my={boxMy}
                                >
                                    <FormLabel>Prize</FormLabel>
                                    <Select
                                        placeholder='Select ERC20'
                                        onChange={(e) => setERC20Unit(e.target.value)}
                                    >
                                        <option>USDC</option>
                                        <option>USDT</option>
                                        <option>ETH</option>
                                    </Select>
                                </Box>

                                <Box
                                    my={boxMy}
                                >
                                    <FormLabel>Wave Count</FormLabel>
                                    <SliderInput
                                        setValue={setWaveCount}
                                        value={waveCount}
                                    />
                                </Box>

                                <Box
                                    my={boxMy}
                                >

                                    <FormLabel>Prize/wave</FormLabel>
                                    <NumberInput
                                        defaultValue={100}
                                        // max={500} 
                                        min={100}
                                        onChange={(value) => setPrizePerWave(value)}
                                    >
                                        <NumberInputField />
                                    </NumberInput>
                                </Box>

                                <Box
                                    my={boxMy}
                                >
                                    <FormLabel>Deposit Amount</FormLabel>
                                    <HStack>

                                        <Text
                                            ml={4}
                                            my={2}
                                        >
                                            {depositAmount}
                                        </Text>
                                        <Text>
                                            {ERC20unit}
                                        </Text>

                                    </HStack>

                                </Box>

                                <Box
                                    my={boxMy}
                                >

                                    <FormLabel>
                                        Safe Address
                                    </FormLabel>
                                    <Input placeholder='10000'
                                        defaultValue="0x0000"
                                    />

                                </Box>

                            </FormControl>

                        </CardBody>

                    </Card>
                </Center>
            </Box>

        </>
    )
}

export default CreateHackathon