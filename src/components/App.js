import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal/Modal';
import Spinner from './Spinner';

import imageApi from '../services/imageApi';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    totalPage: 0,
    isLoading: false,
    error: null,
    largeImage: ''
  };

  componentDidMount() { }

  componentDidUpdate(prevProp, prevState) {
    // Sending query
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    // Scroll to bottom page
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPage !== nextPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true })
    imageApi.getImages(searchQuery, page)
      .then(data => {
        const images = data.hits;

        return this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          totalPage: data.totalHits - 12 * this.state.page
        }))
      },
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleSearchQuery = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      totalPage: 0
    })
  }

  handleLoadMore = () => {
    this.fetchImages();
  }

  toggleModal = img => {
    this.setState({
      largeImage: img || ''
    })
  }

  render() {
    const { images, isLoading, error, totalPage, showModal, largeImage } = this.state;

    return (
      <Layout>
        {/* Search image */}
        <Searchbar onSearch={this.handleSearchQuery} disabled={showModal} />

        {/* Show error */}
        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {/* Show image gallery */}
        {images.length > 0 && <ImageGallery images={images} onClickImg={this.toggleModal} />}

        {/* Show loader when downloading data */}
        {isLoading && <Spinner />}

        {/* Show button-more after request */}
        {totalPage > 0 && <Button onLoadMore={this.handleLoadMore} />}

        {/* Show a large image in the modal */}
        {largeImage && <Modal img={largeImage} onClose={this.toggleModal} />}
      </Layout>
    )
  }
}
