import React, { useEffect, useState } from "react";
import axios from "axios";
import MainAppBar from "./component/MainAppBar/MainAppBar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrentSearchInput } from "../../reduxStore/movieDataSlice";
import { CurrentMovieList } from "../../reduxStore/movieDataSlice";
import { changeMovieList } from "../../reduxStore/movieDataSlice";

function ListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchInput = useSelector(CurrentSearchInput);
  const movieList = useSelector(CurrentMovieList);

  // const [movieDataList, setMovieDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = "53c420d41ba82d2810f5cff158cbc501";
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

  const navigateToDetailsPage = (item) => {
    navigate("/DetailsPage", { state: { itemdetails: item } });
  };

  const getMovieData = (page = 1) => {
    axios
      .get(`${url}&page=${page}`)
      .then((response) => {
        dispatch(changeMovieList(response.data.results));
        // setMovieList(response.data.results);
        setCurrentPage(response.data.page);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {});
  };

  const getSearchResults = () => {
    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`;

    axios
      .get(searchUrl)
      .then((response) => {
        dispatch(changeMovieList(response.data.results));
        setCurrentPage(1);
        setTotalPages(1);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    if (searchInput === "") {
      getMovieData();
    } else {
      getSearchResults();
    }
  }, [searchInput]);

  return (
    <div style={{ backgroundColor: "#e3cde5", height: "100vh" }}>
      <div>
        <MainAppBar page={"ListPage"} />
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#e3cde5",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {movieList &&
          movieList.map((item, index) => (
            <Card
              onClick={() => navigateToDetailsPage(item)}
              key={index}
              style={{
                width: "230px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "100%",
                }}
              >
                <img
                  src={`${imageBaseUrl}${item.poster_path}`}
                  alt={item.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px 10px 0px 10px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{
                      fontWeight: "bold",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      flex: "1",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {item.vote_average} ⭐
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0px 10px 0px 10px",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      whiteSpace: "normal",
                      flex: "1",
                    }}
                  >
                    {item.overview}
                  </div>
                </div>
              </div>
            </Card>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#e3cde5",
        }}
      >
        <button
          onClick={() => {
            if (currentPage > 1) {
              getMovieData(currentPage - 1);
            }
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p style={{ margin: "0 20px" }}>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => {
            if (currentPage < totalPages) {
              getMovieData(currentPage + 1);
            }
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ListPage;
