import React from "react";
import Note from "./components/Note";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      volume: 7,
      duration: 8,
      octave: 2
    };

    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleOctaveChange = this.handleOctaveChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
  }

  handleVolumeChange(e) {
    this.setState({ volume: e.target.value });
  }

  handleOctaveChange(e) {
    this.setState({ octave: e.target.value });
  }

  handleDurationChange(e) {
    this.setState({ duration: e.target.value });
  }

  render() {
    return (
      <>
        <div className="controls">
          <div className="volume sld-container">
            <h1>Volume</h1>
            <input
              type="range"
              id="volume-sld"
              className="sld"
              name="volume"
              min="0"
              max="10"
              defaultValue="7"
              step="1"
              onChange={this.handleVolumeChange}
            />
            <h3>{this.state.volume}</h3>
          </div>

          <div className="duration sld-container">
            <h1>Duration</h1>
            <input
              type="range"
              id="duration-sld"
              className="sld"
              name="duration"
              min="1"
              max="16"
              defaultValue="8"
              step="1"
              onChange={this.handleDurationChange}
            />
            <h3>{this.state.duration}</h3>
          </div>

          <div className="octave sld-container">
            <h1>Octave</h1>
            <input
              type="range"
              id="octave-sld"
              className="sld"
              name="octave"
              min="0"
              max="7"
              defaultValue="2"
              step="1"
              onChange={this.handleOctaveChange}
            />
            <h3>{this.state.octave}</h3>
          </div>
        </div>

        <div className="piano-container">
          <Note
            color="white"
            note={`C${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="black"
            note={`C#${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="white"
            note={`D${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="black"
            note={`D#${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="white"
            note={`E${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="white"
            note={`F${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="black"
            note={`F#${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="white"
            note={`G${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="black"
            note={`G#${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="white"
            note={`A${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="black"
            note={`A#${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
          <Note
            color="white"
            note={`B${this.state.octave}`}
            duration={this.state.duration}
            volume={this.state.volume}
          />
        </div>
      </>
    );
  }
}

export default App;
