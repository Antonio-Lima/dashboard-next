import { Box } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Box bgcolor="#000" width={"100%"}>
      <Image
        src="/assets/images/logo.svg"
        alt="On The Go"
        width={36}
        height={36}
      />
    </Box>
  );
}
