"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { autocompleteClasses } from "@mui/material";
import { Firestore, getDocs, query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { firestore } from "@/firebase";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// List of items
const item = [
  "tomato",
  "potato",
  "carrot",
  "garlic",
  "ginger",
  "onion",
  "cucumber",
  "bell pepper",
  "spinach",
  "broccoli",
  "lettuce",
];

export default function Home() {
  useEffect(() => {
    const updatePantry = async () => {
      const snapshot = query(collection(firestore, "pantry"));
      const docs = await getDocs(snapshot);
      docs.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    };
    updatePantry();
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        width="800px"
        height="100px"
        bgcolor={"#ADD8E6"}
        border={"1px solid"}
        borderColor={"#333"}
      >
        <Typography variant="h2" color={"#333"} textAlign={"center"}>
          Pantry Items
        </Typography>
      </Box>
      <Stack
        width="800px"
        height="200px"
        spacing={2}
        overflow={"auto"}
        border={"2 px solid"}
        borderColor={"#ADD8E6"}
      >
        {item.map((item, index) => (
          <Item key={index}>
            <Typography variant="h2" color={"#333"} textAlign={"center"}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Typography>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
