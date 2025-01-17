import "../styles/components/connect.scss";

interface Props {
  image: string;
  url_link: string;
  anchorText: string;
}

function ConnectCard({image, url_link, anchorText}: Props){
    return (
        <>
            <div className="connect-card">
                <a href={url_link} target="_blank">
                    <img src={image}/>
                    <h3> {anchorText} </h3>
                </a>
            </div>
        </>
    );
}

export default ConnectCard;