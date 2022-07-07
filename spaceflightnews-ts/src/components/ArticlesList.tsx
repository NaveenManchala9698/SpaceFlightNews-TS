import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FlightNews } from "../types/FlightNews"
import SingleArticle from "./SingleArticle"

const ArticlesList = () => {


    const [articles, setArticles] = useState<FlightNews[]>([])

    useEffect(() => {
        fetchArticles()
    }, [])


const fetchArticles = async () => {
    try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")

        if (response.ok) {
            const data = await response.json()
            setArticles(data)
        } else {
            console.log("Error Fetching data!!")
        }

    } catch (error) {
        console.log(error)
    }
}

return (
    <div>
        <h1 className="mt-4">SpaceFlight News</h1>
        <div>
            <Container>
                <Row>
                    {articles.map((article, i) => (
                        <Col md={3}>
                        <SingleArticle key={i} article={article}/>
                        </Col>
                     )) }
                </Row>
            </Container>
        </div>
    </div>

)
            }
export default ArticlesList