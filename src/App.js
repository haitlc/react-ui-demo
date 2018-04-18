import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Material from './Material'
import AntDesign from './Antd'
import Bootstrap from './Bootstrap'
import ExtReact from './ExtReact'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };

    // This binding is necessary to make `this` work in the callback
    this.onChange = this.onChange.bind(this);
    this.buildHTML = this.buildHTML.bind(this);
    this.buildBT = this.buildBT.bind(this);
    this.buildMat = this.buildMat.bind(this);
    this.buildAnt = this.buildAnt.bind(this);
    this.buildExt = this.buildExt.bind(this);
  }

  onChange() {
    const value = document.getElementById("framework").value;
    this.setState({
      selected: value
    });
  }

  buildHTML() {
    return (
      <div>
        <h3>UI Candidate Details</h3>
        <table border="1">
        <thead>
          <tr>
            <td>Framework</td>
            <td>Latest version (Date)</td>
            <td>Product</td>
            <td>Resources</td>
          </tr>
        </thead>
        <tbody>
          <tr> 
            <td><a href="http://material-ui-next.com">Material UI</a></td>
            <td>1.0.0-beta32 (2018-02-04)</td>
            <td><a href="http://flyweekend.co/">Flyweekend</a><br />
                <a href="http://www.casalova.com/">Casalova</a></td>
            <td><a href="https://github.com/mui-org/material-ui">http://github.com/mui-org/material-ui</a>
            <br /><pre>npm install --save material-ui@next material-ui-icons</pre></td>
            </tr>
            <tr> 
            <td><a href="http://ant.design/">ANT Design</a></td>
            <td>3.1.6 (2018-01-28)</td>
            <td><a href="http://www.alibaba.com/">Alibaba</a><br />
                <a href="http://www.baidu.com/">Baidu</a><br />
                <a href="https://www.tencent.com">Tencent</a></td>
            <td><a href="https://github.com/mui-org/material-ui">http://github.com/mui-org/material-ui</a>
            <br /><pre>npm install antd --save</pre></td>
            </tr>
            <tr> 
            <td><a href="https://react-bootstrap.github.io/">React Bootstrap</a></td>
            <td>0.32.1 (2018-01-25)</td>
            <td>N/A</td>
            <td><a href="https://github.com/react-bootstrap/react-bootstrap/">https://github.com/react-bootstrap/react-bootstrap/</a>
            <br /><pre>npm install --save react react-dom<br/>
              npm install --save react-bootstrap</pre></td>
            </tr>
            <tr> 
            <td><a href="https://www.sencha.com/products/extreact/">ExtReact</a></td>
            <td>6.5.2</td>
            <td>N/A</td>
            <td><a href="https://www.sencha.com/products/extreact/evaluate">Signup</a>
            <br /><pre>npm login --registry=http://npm.sencha.com --scope=@extjs<br />
            npm install --save @extjs/reactor @extjs/ext-react<br />
            npm install --save-dev @extjs/reactor-webpack-plugin @extjs/reactor-babel-plugin
            </pre>
            <a href="https://github.com/sencha/ext-react-cra-eject">Sample Project</a></td>
            </tr>
        </tbody>
        </table>
      </div>
    )
  }

  buildBT() {
    return (
      <Bootstrap />
    )
  }

  buildMat() {
    return (
      <Material />
    )
  }

  buildAnt() {
    return (
      <AntDesign />
    )
  }

  buildExt() {
    return (
      <ExtReact />
    )
  }

  render() {
    const { selected } = this.state;
    var form, stylePath;
    switch (selected) {
      case "html":
        form = this.buildHTML();
        break;
      case "bootstrap":
        // stylePath = "//maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css";
        form = this.buildBT();
        break;
      case "material":
        form = this.buildMat();
        break;
      case "ant":
        stylePath = "//cdnjs.cloudflare.com/ajax/libs/antd/3.1.6/antd.css";
        form = this.buildAnt();
        break;
      case "ext":
        form = this.buildExt();
        break;
      default:
        form = this.buildHTML();
        break;
    }
    return (
      <div className="App">
        <link rel="stylesheet" type="text/css" href={stylePath} />
        {selected === "bootstrap"? (
          <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        ) : null}
        {selected === "bootstrap"? (
          <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
        ) : null}
        {<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">UI Framework Sample</h1>
        </header>}
        <div className="App-selector">
          Please choose UI: <select id="framework" onChange={this.onChange}>
            <option value="">None</option>
            {/*<option value="html">Plain HTML</option>*/}
            <option value="bootstrap">React-Bootstrap</option>
            <option value="material">Material-UI</option>
            <option value="ant">ANT Design</option>
            <option value="ext">ExtReact</option>
          </select>
        </div>
        {form}
      </div>
    );
  }
}

export default App;
