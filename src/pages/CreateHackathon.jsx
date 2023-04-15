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
} from '@chakra-ui/react'

import SliderInput from '../components/SliderInput.jsx'

const CreateHackathon = () => {

    const [waveCount, setWaveCount] = useState(5)
    const [prizePerWave, setPrizePerWave ] = useState(100);
    const [depositAmount, setDepositAmount] = useState(0);

    const hackathonId = 1;

    useEffect(()=>{
        setDepositAmount(waveCount*prizePerWave);
    }, [waveCount, prizePerWave])

    const usdcContractAddress = "0x0000000000"

    console.log(depositAmount)

    return (
        <>
            <Box
                my="20px"
            >

            <Center>
                <Card>
                    <CardBody>
                        <FormControl>
                            <FormLabel>Prize</FormLabel>
                            <Select placeholder='Select ERC20'>
                                <option>USDC</option>
                                <option>USDT</option>
                                <option>ETH</option>
                            </Select>

                            <FormLabel>Wave Count</FormLabel>
                            <SliderInput 
                                setValue={setWaveCount}
                                value={waveCount}
                            />

                            <FormLabel>Prize/wave</FormLabel>
                            <NumberInput
                                defaultValue={100}
                                // max={500} 
                                min={100}
                             onChange={(value)=>setPrizePerWave(value)}                             
                             >
                                <NumberInputField />
                            </NumberInput>

                            <Text>
                                {depositAmount} 
                            </Text>

                            <FormLabel>
                                Safe Address
                            </FormLabel>
                            <Input placeholder='10000'
                                defaultValue="0x0000"
                            />

                        </FormControl>

                    </CardBody>

                </Card>
            </Center>
            </Box>

        </>
    )
}

export default CreateHackathon