import React, { useState, useEffect } from "react";
import Axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
// import { API_KEY } from "./constants";
import {PdfDocument} from "./PDF";
import { connect } from 'react-redux';


const years = [
  { value: "2010", text: "2010" },
  { value: "2011", text: "2011" },
  { value: "2012", text: "2012" },
  { value: "2013", text: "2013" },
  { value: "2014", text: "2014" },
  { value: "2015", text: "2015" },
  { value: "2016", text: "2016" },
  { value: "2017", text: "2017" },
  { value: "2018", text: "2018" },
  { value: "2019", text: "2019" }
];

const PDFLink = (props) => {
    const [year, setYear] = useState("2014");
    const [movieDetails, setDetails] = useState([]);
    const [show, setHide] = useState(false)
  
    // useEffect(() => {
        const fetchMovie = async e => {
            // setYear(e.target.value);
            const API_KEY = "c0ae854ba8255b07b83c94d52ed26ea4";
            try {
              let res = await Axios(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=vote_average.desc`
              );
              setDetails(res.data.results);
              setHide(true)
            } catch (error) {
              console.log(error);
            }
          };
    // },[])
    

    return (
        <div className="container">
          {/* <h2>Best movies of the year</h2>
          <label htmlFor="movies">Select Year</label>
          <select id="movies" className="select" onChange={fetchMovie}>
            <option defaultValue="" disabled>
              Select your option
            </option>
            {years.map((year, index) => {
              return (
                <option key={index} value={year.value}>
                  {year.text}
                </option>
              );
            })}
          </select> */}
          <PDFDownloadLink
            document={<PdfDocument data={props.overAllFeedbackSkills} />}
            fileName="movielist.pdf"
            style={{
              textDecoration: "none",
              padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
        "Download Pdf"
        //   loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        overAllFeedbackSkills: state.skillReducer.overAllFeedbackSkills
    }
}
export default connect(mapStateToProps, null)(PDFLink);