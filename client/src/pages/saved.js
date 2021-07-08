import React, { Component } from "react";
import { Container } from "../components/grid/grid";
import Nav from "../components/nav/nav";
import Jumbotron from "../components/jumbotron/jumbotron";
import API from "../utils/api";
import SavedList from "../components/savedList/savedList";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount = () => {
    this.getBooks();
  };

  deleteGoogleBook = (currentBook) => {
    API.deleteBook(currentBook.id)
      .then((res) => {
        console.log("This book is deleted:", res);
        this.getBooks();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  getBooks = () => {
    API.getBooks()
      .then((res) => {
        this.setState({
          savedBooks: res.data,
        });
        console.log("getBooks res", res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Jumbotron />
          {this.state.savedBooks.length ? (
            <SavedList
              bookState={this.state.savedBooks}
              deleteGoogleBook={this.deleteGoogleBook}
            ></SavedList>
          ) : (
            <h5>No results</h5>
          )}
        </Container>
      </div>
    );
  }
}

export default Saved;