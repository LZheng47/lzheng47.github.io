import ConnectCard from "./ConnectCard";

type platform = {
  header: string;
  image: string;
  link: {
    href: string;
    anchorText: string;
  };
};

interface Props {
  platforms: platform[];
}

function Connect({ platforms }: Props) {
  return (
    <>
      {platforms.map((platform, index) => (
        <ConnectCard
          key={index}
          image={"/images/connect/" + platform.image}
          url_link={platform.link.href}
          anchorText={platform.header}
        />
      ))}
    </>
  );
}

export default Connect;
