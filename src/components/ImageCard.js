import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight)
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load",  this.setSpans);
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
