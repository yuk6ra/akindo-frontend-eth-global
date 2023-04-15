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
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Tag,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';

import ProductCard from "../components/ProductCard.jsx";

const HackathonDetail = () => {

    const location = useLocation();
    const pathname = location.pathname.split("/").pop();

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
                        Hackathon Detail
                    </Heading>
                    <Card>
                        <CardBody>
                            <Heading>
                                Hackathon Title {pathname}
                            </Heading>

                            <Tag
                                colorScheme='green'
                            >Wave 0</Tag>

                            <Tabs 
                                mt={5}
                            variant='soft-rounded' colorScheme='blue'>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Award History</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>

                                        <Heading
                                            as={"h1"}
                                            my={5}
                                            size={"md"}
                                        >
                                            Overview
                                        </Heading>

                                        <Text>
                                            The Phoenix Guild and Chingari are collaborating to organize a Aptos Hackathon in partnership with projects in the Aptos ecosystem to create awareness and teach the attendees about their technology. In addition to generic programmings like hackathon brainstorming and ideation workshops, the hack will also have some specific sponsor workshops and panels.
                                        </Text>


                                        <Heading
                                            as={"h1"}
                                            my={5}
                                            size={"md"}
                                        >
                                            Submit Product
                                        </Heading>

                                        <FormControl>
                                            <FormLabel>Submission</FormLabel>
                                            <Input />
                                        </FormControl>

                                        <Center>
                                            <Button
                                                mt={5}
                                            >
                                                Submit
                                            </Button>
                                        </Center>

                                        <Heading
                                            as={"h1"}
                                            my={5}
                                            size={"md"}
                                        >
                                            Submitted Products
                                        </Heading>

                                        {[1, 2, 3].map((product) => (
                                            <ProductCard
                                                key={product}
                                                productId={product}
                                            />
                                        ))}

                                        <Center>
                                            <Button
                                                colorScheme={"yellow"}
                                                mt={5}
                                                onClick={() => window.open('https://snapshot.org/')}
                                            >
                                                Judgement
                                            </Button>
                                        </Center>


                                    </TabPanel>
                                    <TabPanel>
                                        <Accordion defaultIndex={[0]} allowMultiple>
                                            {[1, 2, 3].map((pastWave) => (

                                                <AccordionItem
                                                    key={pastWave}
                                                >
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box as="span" flex='1' textAlign='left'>
                                                                Wave {pastWave}
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat.
                                                    </AccordionPanel>
                                                </AccordionItem>


                                            ))}
                                        </Accordion>

                                    </TabPanel>
                                </TabPanels>
                            </Tabs>


                        </CardBody>
                    </Card>
                </Box>
            </Center>
        </>
    )
}

export default HackathonDetail