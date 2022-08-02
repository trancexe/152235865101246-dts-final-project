import React, { useEffect, useState } from "react";
import { useSearchFoodQuery } from "../services/foodApi";
import { useSelector } from "react-redux";
import { searchValueData } from "../features/InputSearchSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const CardFood = () => {
  const key = useSelector(searchValueData);
  const { data, isLoading } = useSearchFoodQuery(key);
  const [foodData, setFoodData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading) {
      setFoodData(data.meals);
    }
  }, [data, isLoading]);

  const onClickHandler = (e) => {
    navigate(`/recipe/${e}`);
  };

  const loadData = foodData?.map((food) => {
    return (
      <Card
        sx={{
          maxWidth: 200,
          overflow: "hidden",
          m: 1,
          textAlign: "center",
          backgroundColor: "#1e1e1e",
        }}
        key={food.idMeal}
        onClick={() => onClickHandler(food.idMeal)}
      >
        <CardMedia
          component="img"
          src={food.strMealThumb}
          sx={{ width: "100%", objectFit: "contain" }}
          alt={food.strMeal}
        />
        <CardContent sx={{ color: "#ababab" }}>
          <Typography>{food.strMeal}</Typography>
          <Typography>Category : {food.strCategory}</Typography>
          <Typography>From: {food.strArea}</Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {foodData ? (
        loadData
      ) : (
        <div>
          <Typography sx={{ color: "#7f7f7f" }}>NO DATA</Typography>
        </div>
      )}
    </div>
  );
};

export default CardFood;
