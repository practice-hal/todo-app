import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "orenge.50",
                color: "gray.800",
            },
            p: {
                fontSize: { base: "md", md: "la" },
                lineHeight: "tall"
            }
        }
    }
});

export default theme;