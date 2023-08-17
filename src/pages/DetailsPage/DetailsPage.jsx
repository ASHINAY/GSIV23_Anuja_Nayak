import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import MainAppBar from "../ListPage/component/MainAppBar/MainAppBar";
import "./DetailsPage.css";

function DetailsPage() {
   const location = useLocation();
   const { state: { itemdetails } = {} } = location;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

  const getYear = (release_date) => {
    console.log(release_date);
    let split = release_date.split("-");
    let result = split[0];
    return result;
  };
  return (
    <div>
      <MainAppBar page={"DetailsPage"} />
      {itemdetails && (
        <div style={{ display: "flex", padding: "10px", gap: "10px" }}>
          <img
            src={`${imageBaseUrl}${itemdetails.poster_path}`}
            alt={itemdetails.title}
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Typography variant="h6">{itemdetails.title}</Typography>
              <Typography style={{ color: "grey" }}>
                ({itemdetails.vote_average})
              </Typography>
            </div>
            <div>
              <div>{getYear(itemdetails.release_date)}</div>
            </div>
            <div>{itemdetails.overview}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
