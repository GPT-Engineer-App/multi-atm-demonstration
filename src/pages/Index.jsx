import React, { useState } from "react";
import { VStack, Button, Text, Input } from "@chakra-ui/react";

const ATM = () => {
  const [balance, setBalance] = useState(1000); // Starting balance

  const deposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const withdraw = (amount) => {
    setBalance((prevBalance) => (prevBalance >= amount ? prevBalance - amount : prevBalance));
  };

  // Simulate a user making a deposit
  const simulateUser1 = () => {
    setTimeout(() => deposit(500), 1000);
  };

  // Simulate a different user making a withdrawal
  const simulateUser2 = () => {
    setTimeout(() => withdraw(200), 1500);
  };

  return (
    <VStack spacing={4}>
      <Text>Balance: ${balance}</Text>
      <Button onClick={() => deposit(100)}>Deposit $100</Button>
      <Button onClick={() => withdraw(50)}>Withdraw $50</Button>
      <Text>Simulate Multithreading:</Text>
      <Button onClick={simulateUser1}>Simulate User 1 (Deposit $500 after 1s)</Button>
      <Button onClick={simulateUser2}>Simulate User 2 (Withdraw $200 after 1.5s)</Button>
    </VStack>
  );
};

export default ATM;
