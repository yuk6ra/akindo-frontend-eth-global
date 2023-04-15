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
    VStack,
    Heading,
    Button,
    Link
} from '@chakra-ui/react'

import SliderInput from '../components/SliderInput.jsx'

const CreateHackathon = () => {

    const [walletAddress, setWalletAddress] = useState(null);

    const [ERC20unit, setERC20Unit] = useState("USDC");
    const [waveCount, setWaveCount] = useState(5)
    const [prizePerWave, setPrizePerWave] = useState(100);
    const [depositAmount, setDepositAmount] = useState(0);
    const [waveSubmitTime, setWaveSubmitTime] = useState(3);
    const [waveVoteTime, setWaveVoteTime] = useState(1); // 1 day constant

    const hackathonId = 1;

    console.log(walletAddress)


    useEffect(() => {
        setDepositAmount(waveCount * prizePerWave);
    }, [waveCount, prizePerWave])

    useEffect(() => {
        checkWalletIsConnected();
    }, [walletAddress])

    const usdcContractAddress = "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4"

    console.log(depositAmount)

    const boxMy = 6

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const network = await ethereum.request({ method: 'eth_chainId' });

        if (accounts.length !== 0) {
            const account = accounts[0];
            setWalletAddress(account);
        }
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
                        Create Hackathon
                    </Heading>

                    <Center>
                        <VStack
                            spacing={5}
                        >
                            <Card
                                w={"600px"}

                            >
                                <CardHeader>
                                    {/* <Heading size={"md"}>
                                        2. Create Hackathon
                                    </Heading> */}
                                </CardHeader>
                                <CardBody
                                    pt={0}
                                >

                                    <FormControl>

                                        <Box
                                            mb={boxMy}
                                        >
                                            <FormLabel>ERC20</FormLabel>
                                            <Select
                                                placeholder='Select ERC20'
                                                onChange={(e) => setERC20Unit(e.target.value)}
                                            >
                                                <option value='USDC'>USDC</option>
                                                <option value='USDT'>USDT</option>
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
                                            <FormLabel>SubmitTime</FormLabel>
                                            <Select
                                                placeholder='_waveSubmitTime'
                                                onChange={(e) => setWaveSubmitTime(e.target.value)}
                                            >
                                                <option value='3'>3 days</option>
                                                <option value='7'>7 days</option>
                                                <option value='14'>14 days</option>
                                                <option value='30'>30 days</option>
                                            </Select>
                                        </Box>

                                        <Box
                                            my={boxMy}
                                        >
                                            <FormLabel>
                                                Safe Address
                                            </FormLabel>
                                            <Input placeholder='10000'
                                                defaultValue={usdcContractAddress}
                                            />
                                            <FormHelperText>
                                                If you do not have a Safe Address, you can refer to
                                                {" "}<Link href="https://docs.safe.global/" color="blue.500">
                                                    this document
                                                </Link>{" "}
                                                to create one.
                                            </FormHelperText>

                                        </Box>

                                    </FormControl>

                                    {/* Submitする */}
                                    <Center>
                                        <Button>Submit</Button>
                                    </Center>

                                </CardBody>

                            </Card>
                        </VStack>

                    </Center>
                </Box>
            </Center>


        </>
    )
}

export default CreateHackathon