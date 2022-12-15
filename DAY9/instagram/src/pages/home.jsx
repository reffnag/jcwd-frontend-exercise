import { Center, Flex, Box } from "@chakra-ui/react";
import axiosConfig from "./axiosConfig";
import ContentCard from "../components/contentCard";
import Navbar from "../components/navbar";
axiosConfig
  .get("api/db.json")
  .then((response) => {
    // Manipulasi data yang didapatkan dari response di sini
  })
  .catch((error) => {
    // Handle error di sini
  });

export default function Home() {
  return (
    <>
      <Box bgColor={"#FAFAFA"} minW={821}>
        <Navbar />
        <Center paddingY={"20"}>
          <Flex display="inline-flex" flexDir={"column"}>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </Flex>
        </Center>
      </Box>
    </>
  );
}
