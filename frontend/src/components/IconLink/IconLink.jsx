import { Link } from "./IconLink.styled";

export const IconLink = ({ icon: Icon, href, label }) => {
  return (
    <Link href={href} target="_blank" aria-label={label}>
      <Icon />
    </Link>
  );
};
