import React from 'react';
import { connect } from 'react-redux';

import { getResourcesImageById } from '../../../config/styles/images-styles';
import { CustomLinkIconCard } from '../../commons/custom-icon-card/custom-icon-card.component';

import {
  SlideShowContainer,
  SlideItemContainer,
  Prev,
  Next
} from './resources-slide-viewer.styles';
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

class ResourcesSlideViewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {actualSlide: 0, imgNumber: 3};
    }

    displayImage = (imageIndex, width) =>{
      let { actualSlide, imgNumber} = this.state;
      let min = actualSlide
      let max = actualSlide + imgNumber
      return imageIndex >= min && imageIndex < max;
    }

    nextImage = (num, totalImages, width) => {
      let {actualSlide, imgNumber} = this.state
      let nextSlide = actualSlide + num;

      if(totalImages > imgNumber && nextSlide >= 0 && nextSlide <= totalImages-imgNumber)
        this.setState({ actualSlide: nextSlide});
    }
  
    render() {
      let { resources, data } = this.props;
      let totalImages = resources.length;
      return (
        <AutoSizer disableHeight>
          {({ width }) => {
            this.state.imgNumber = width < 690 ? 1 : 3
            return (
              <SlideShowContainer width={width}>
                <Prev onClick={() => this.nextImage(-1, totalImages, width)} disabled={this.state.actualSlide===0}>&#10094;</Prev>
                {resources.map((resource, index) => {
                    return (
                        <SlideItemContainer 
                          key={`slide-item-container-${resource}`} 
                          className={'slide-image'}
                          display={this.displayImage(index, width).toString()}>
                            <CustomLinkIconCard
                              key={`resource-preview-card-${resource}`}
                              id={`resource-preview-card-${resource}`}
                              className={'resource-preview-card'}
                              title={data[resource].title}
                              description={data[resource].subtitle}
                              href={`/events/${resource}`}
                              >
                                {getResourcesImageById(data[resource].image)}
                            </CustomLinkIconCard>
                        </SlideItemContainer>
                )})}
                <Next onClick={() => this.nextImage(1, totalImages, width)} disabled={this.state.actualSlide===(totalImages-this.state.imgNumber)}>&#10095;</Next>
              </SlideShowContainer>
            );
          }}
        </AutoSizer>
      );
    }
  }

const mapStateToProps = state => ({
  resourcesData: state.resources.data
});

export default connect(mapStateToProps)(ResourcesSlideViewer);
