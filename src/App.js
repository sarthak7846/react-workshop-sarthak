import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showVideo: false
    }
  }

  handleVideo = () => {
    this.setState({
      showVideo: !this.state.showVideo
    });
  }

  render(){
    return(
      <div>
      <h2>Sarthak's video playlist</h2>
      {this.state.showVideo === false && (<div onClick={this.handleVideo} style={{
          backgroundColor: "gray",
          display:"inline-block",
          color: "white", padding: 20, 
          margin: 40,
          borderRadius: 10}}>
          Hollow Coves - The Open Road
        </div>)}            

        {this.state.showVideo === true && (
        <span><iframe 
          //width="560" 
          //height="315" 
          style={{
            width: "100%",
            height: "100vh"
          }}
          src="https://www.youtube.com/embed/ePuotpIjNdQ?autoplay=true" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <button style={{
          position: "absolute",
          left:10,
          top: 100
        }} onClick={this.handleVideo}>back</button>
        </span>
        )}

      </div>
    );
  }
}

export default App;
