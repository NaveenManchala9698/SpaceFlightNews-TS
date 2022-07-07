import { useEffect, useState } from "react";
import { Col, Container, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FlightDetails } from "../types/FlightDetails";

/* interface DetailsProps {
    details: FlightDetails;
} */

const Details = () => {
    const [selectedArticle, setSelectedArticle] = useState<FlightDetails|null>(null);

    const params = useParams();
    console.log("PARAMS", params);
    const articleID = params.articleID;

    useEffect(() => {
        fetchArticleDetails();
    }, []);


    const fetchArticleDetails = async () => {
        try {
            const response = await fetch(
                "https://api.spaceflightnewsapi.net/v3/articles/" + articleID
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setSelectedArticle(data);
            } else {
                console.log("Error fetching deatils!!");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="text-center">
            
            {selectedArticle && (
                <Container className="detailsContainer">

                    <Row>
                        <h1 style={{color: '#FCA311'}}>{selectedArticle.title}</h1>
                        <Col md={6}><img src={selectedArticle.imageUrl} alt="flight img" style={{width: '500px'}} className="mb-2"></img></Col>
                       <Col md={6}className="details">
                            <ListGroupItem className="text-dark details-list"><h4 className="mx-3">Published on:</h4>{selectedArticle.publishedAt.slice(0,10)}</ListGroupItem>
                            <ListGroupItem className="text-dark details-list"><h4 className="mx-3">News Site:</h4>{selectedArticle.newsSite}</ListGroupItem>
                            <ListGroupItem className="text-dark details-list"><h4 className="mx-3">Article ID:</h4>{selectedArticle.id}</ListGroupItem>
                            <ListGroupItem className="text-dark details-list"><h4 className="mx-3">Summary:</h4>{selectedArticle.summary}</ListGroupItem>
                       </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default Details;
