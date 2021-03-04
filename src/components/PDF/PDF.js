import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import moment from 'moment';
import {Round1} from '../../Constants/HeaderConstant';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  movieContainer: {
    backgroundColor: '#f6f6f5',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  movieDetails: {
    display: 'flex',
    marginLeft: 5,
  },
  movieTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  movieOverview: {
    fontSize: 10,
  },
  image: {
    height: 200,
    width: 150,
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    marginBottom: 12,
  },
  vote: {
    display: 'flex',
    flexDirection: 'row',
  },
  rating: {
    height: 10,
    width: 10,
  },
  vote_text: {
    fontSize: 10,
  },
  vote_pop: {
    fontSize: 10,
    padding: 2,
    backgroundColor: '#61C74F',
    color: '#fff',
  },
  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4,
  },
  overviewContainer: {
    minHeight: 110,
  },
  detailsFooter: {
    display: 'flex',
    flexDirection: 'row',
  },
  lang: {
    fontSize: 8,
    fontWeight: 700,
  },
  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: 'bold',
  },
});

export function PdfDocument(props) {
  console.log('pdf props', props.data);
  let checkboxItem = [];
  let checboxSelectedObj = {};
  // const getCheckboxSelected = (arr) => {
  //   for (let i=0; i <arr.length; i++) {
  //     checboxSelectedObj[arr[i].index] = true;
  //   }
  //   return checboxSelectedObj;
  // }
  return (
    <Document>
      {/* {Object.keys(props.data).length && */}
      <Page style={styles.page}>
        {Round1.map((item, index) => {
          checkboxItem =
            props.data &&
            props.data.checkbox &&
            props.data.checkbox[item.value] &&
            props.data.checkbox[item.value].checkbox;
          for (let i = 0; i < checkboxItem.length; i++) {
            checboxSelectedObj[checkboxItem[i].index] = true;
          }
          return (
            <View key={index}>
              <View style={styles.vote}>
                <Text style={styles.vote_pop}>{item.value}</Text>
                <Text style={styles.movieTitle}>{item.label}</Text>
              </View>
              {/* <View>
                <Text style={styles.movieTitle}>{item.label}</Text>
              </View> */}
              <View style={styles.vote}>
                {item.subSkill.map((subskill, index) => {
                  return (
                    <View style={styles.vote}>
                      {checboxSelectedObj[index] ? (
                        <Image
                          source={require('../../images/checked-checkbox.png')}
                          style={styles.rating}
                        />
                      ) : (
                        <Image
                          source={require('../../images/unchecked-checkbox.png')}
                          style={styles.rating}
                        />
                      )}
                      {/* <Text style={styles.movieTitle}>{subskill.label}</Text> */}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
        {/* {props.data
                    ? props.data.map((a, index) => {
                            return (
                                <View key={index} style={styles.movieContainer}>
                                    <Image
                                        style={styles.image}
                                        source={
                                            a.poster_path !== null
                                                ? `${POSTER_PATH}${a.poster_path}`
                                                : "150.jpg"
                                        }
                                    />
                                    <View style={styles.movieDetails}>
                                    <Text style={styles.movieTitle}>{a.title}</Text>
                                        <View style={styles.subtitle}>
                                            <View style={styles.vote}>
                                                <Image source="star.png" style={styles.rating} />
                                                <Text style={styles.vote_text}>{a.vote_count}</Text>
                                            </View>
                                            <View style={styles.vote}>
                                                <Text style={styles.vote_pop}>{a.popularity}</Text>
                                                <Text style={styles.vote_pop_text}>Popularity</Text>
                                            </View>
                                        </View>
                                        <View style={styles.overviewContainer}>
                                            <Text style={styles.movieOverview}>{a.overview}</Text>
                                        </View>
                                        <View style={styles.detailsFooter}>
                                            <Text style={styles.lang}>
                                                Language: {a.original_language.toUpperCase()}
                                            </Text>
                                            <Text style={styles.vote_average}>
                                                Average Votes: {a.vote_average}
                                            </Text>
                                            <Text style={styles.vote_average}>
                                                Release Date:{" "}
                                                {moment(a.release_date, "YYYY-MM-DD").format(
                                                    " MMMM D Y"
                                                )}
                                            </Text>
                                            </View>
                    </View>
                    </View>
                );
                })
            : ""} */}
      </Page>
      {/* } */}
    </Document>
  );
}
