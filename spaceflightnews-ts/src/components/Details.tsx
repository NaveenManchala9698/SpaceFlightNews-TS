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
                <Container>
                    <h1 style={{color: '#FCA311'}}>{selectedArticle.title}</h1>
                    <img src={selectedArticle.imageUrl} alt="flight img" style={{width: '500px'}}></img>
                   <Row className="details">
                        <Col md={12}><ListGroupItem className="text-dark"><h4>Published at:</h4>{selectedArticle.publishedAt}</ListGroupItem></Col>
                        <Col md={12}><ListGroupItem className="text-dark"><h4>News Site:</h4>{selectedArticle.newsSite}</ListGroupItem></Col>
                        <Col md={12}><ListGroupItem className="text-dark"><h4>Article ID:</h4>{selectedArticle.id}</ListGroupItem></Col>
                       <Col md={12}> <ListGroupItem className="text-dark"><h4>Summary:</h4>{selectedArticle.summary}</ListGroupItem></Col>
                   </Row>
                </Container>
            )}
        </div>
    );
};

export default Details;
