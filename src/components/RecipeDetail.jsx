import React from "react";
import { useParams } from "react-router-dom";
import { useDetailFoodQuery } from "../services/foodApi";
import Footer from "./Footer";
import Header from "./Header";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Youtube from "./Youtube";

const RecipeDetail = (props) => {
  const { id } = useParams();
  const { data } = useDetailFoodQuery(id);
  const loadData = data === undefined ? "" : data?.meals[0];

  let ingredients = [];
  const renderIngredients = (data) => {
    while (ingredients.length > 0) {
      ingredients.pop();
    }
    for (let i = 1; i <= 20; i++) {
      if (data[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {data[`strIngredient${i}`]} {(" ", data[`strMeasure${i}`])}
          </li>
        );
      }
    }
    return ingredients;
  };

  const youtube = loadData?.strYoutube?.split("v=")[1];

  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="body">
          <div className="head-body" sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ color: "#8f99a2", textAlign: "center" }}
            >
              {loadData?.strMeal}
            </Typography>
            <List
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                color: "#8f99a2",
              }}
            >
              <ListItemText>Country : {loadData?.strArea}</ListItemText>
              <ListItemText sx={{ paddingLeft: "20px" }}>
                Category : {loadData?.strCategory}
              </ListItemText>
            </List>
          </div>
          <div className="body-container" style={{ textAlign: "center" }}>
            <div className="imgDetail">
              <Box
                component="img"
                src={loadData?.strMealThumb}
                sx={{
                  maxWidth: "55%",
                  maxHeight: "25%",
                  textAlign: "center",
                  width: "100%",
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
            <div
              className="detail-body"
              style={{
                color: "#6f767c",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginTop: "2em",
              }}
            >
              <div className="how-to" style={{ maxWidth: "50%" }}>
                <Typography>
                  <b>HOW TO COOK</b>
                </Typography>
                <Typography sx={{ textAlign: "justify", marginTop: "1em" }}>
                  {loadData.strInstructions}
                </Typography>
              </div>
              <div className="Ingredient" style={{ textAlign: "left" }}>
                <Typography>
                  <b> INGREDIENTS</b>
                </Typography>
                <ul style={{ paddingLeft: 0 }}>
                  {renderIngredients(loadData)}
                </ul>
              </div>
            </div>
            <div className="youtube">
              <Youtube embedId={youtube} />
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
