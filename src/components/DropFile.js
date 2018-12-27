import React from "react";
import ReactDOM from "react-dom";
import DropzoneComponent from "react-dropzone-component";
import ReactDOMServer from "react-dom/server";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

var myDropzone;

function initCallback(dropzone) {
  myDropzone = dropzone;
}

function removeFile() {
  if (myDropzone) {
    myDropzone.removeFile();
  }
}

class DropFile extends React.Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif",
      autoProcessQueue: false,
      previewTemplate: ReactDOMServer.renderToStaticMarkup(
        <div className="dz-preview dz-file-preview">
          <div className="dz-details">
            <div className="dz-filename">
              <span data-dz-name="true" />
            </div>
            <img data-dz-thumbnail="true" />
          </div>
          <div className="dz-progress">
            <span className="dz-upload" data-dz-uploadprogress="true" />
          </div>
          <div className="dz-error-message">
            <span data-dz-errormessage="true" />
          </div>
        </div>
      )
    };

    this.componentConfig = {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "no-url",
      maxFiles: 1
    };

    this.callbackArray = [
      event => {
        console.log(event);
        console.log(this.dropzone);

        this.dropzone.removeAllFiles();
      },
      event => {
        console.log(event);
        console.log(this.dropzone);
      }
    ];

    this.dropzone = null;
  }

  componentWillReceiveProps(nextState) {
    if (nextState.classifyRequestStatus) {
      this.setState({ classifyRequestStatus: nextState.classifyRequestStatus });
    } else {
      this.setState({ message: "classify fail" });
    }
  }
  handleFileAdded(file) {
    console.log("handleFileAdded");
    console.log(file);
  }

  handleThumnail(file, dataUri) {
    const { classifyAction } = this.props;
    console.log("handleThumnail");
    const base64data = dataUri;
    console.log(file);

    console.log(classifyAction);
    classifyAction("aaaa");
  }

  handleDelete(file) {
    console.log("delete " + file);
    this.dropzone.removeAllFiles();
  }
  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: dz => (this.dropzone = dz),
      drop: this.callbackArray,
      thumbnail: this.handleThumnail.bind(this),
      addedfile: this.handleFileAdded.bind(this),
      complete: this.handleDelete.bind(this)
    };

    const { classifyRequestStatus } = this.props;
    console.log("render() classifyRequestStatus");
    console.log(JSON.stringify(classifyRequestStatus.classificationResults));
    //const sts = classifyRequestStatus.loginStatus.status;

    return (
      <DropzoneComponent
        config={config}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    );
  }
}

export default withStyles(styles)(DropFile);
