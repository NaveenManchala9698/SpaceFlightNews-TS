/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import { FlightNews } from "../types/FlightNews";


interface SingleArticleProps {
    article: FlightNews
}

const SingleArticle = ({article}: SingleArticleProps) => {

    const navigate = useNavigate();

    const showDetails = () => {
        navigate("Details/" + article.id);
    };
  
    return(
        
  <div className="mb-4 mt-4">
      <img src={article.imageUrl} alt="flight pic"  style={{width: '250px', height: '300px', borderRadius: '10px'}} className="mb-3 article-img"
      onClick={showDetails}/>
      <h5 className="article-title">{article.title}</h5>
        
  </div>
    
    )
}

export default SingleArticle