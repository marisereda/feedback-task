import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import { Container } from "../Container";
import { StyledFooter, Box } from "./Footer.styled";
import { IconLink } from "../IconLink";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Box>
          <IconLink
            href="https://www.linkedin.com/"
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <IconLink
            href="https://twitter.com/"
            icon={FaTwitter}
            label="Twitter"
          />
          <IconLink
            href="https://www.facebook.com/"
            icon={FaFacebookF}
            label="Facebook"
          />
          <IconLink
            href="https://pinterest.com/"
            icon={FaPinterestP}
            label="Pinterest"
          />
        </Box>
      </Container>
    </StyledFooter>
  );
};
