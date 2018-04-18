import React, { Component } from 'react';

import { 
    Button, 
    ControlLabel, 
    FormControl, 
    FormGroup, 
    Glyphicon, 
    Modal, 
    Panel, 
    Radio, 
    Checkbox, 
    DropdownButton, 
    MenuItem, 
    Tab, 
    Tabs,  
    Table 
} from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import 'font-awesome/css/font-awesome.min.css';

class Bootstrap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDialog: null
        }
    }

    handleOpenDialog = (e) => {
        e.preventDefault();
        this.setState({ openDialog: e.currentTarget.getAttribute('data-dialog') });
    };

    handleCloseDialog = () => {
        this.setState({ openDialog: null });
    };

    render() {
        const styles = {
            tab: {
                padding: 15
            },
            employ: {
                color: "green"
            },
            unemploy: {
                color: "red"
            }
        };

        const data = [{
            key: '1',
            name: 'John Brown',
            status: "Employed"
        }, {
            key: '2',
            name: 'Jim Green',
            status: "Unemployed"
        }, {
            key: '3',
            name: 'Joe Black',
            status: "Employed"
        }, {
            key: '4',
            name: 'Steve Brown',
            status: "Employed"
        }, {
            key: '5',
            name: 'Christopher Nolan',
            status: "Unemployed"
        }];

        return (
            <div style={{ textAlign: "left", padding: "15px" }}>
                <Tabs defaultActiveKey={1} animation={false} id="tab-example">
                    <Tab eventKey={1} title="Form">
                        <div>
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Text Input</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <FormGroup>
                                        <ControlLabel>Singleline</ControlLabel>
                                        <FormControl type="text" placeholder="Single-line" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Multiline</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="Multi-line" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Number</ControlLabel>
                                        <div className="form-control">Not Available</div>
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Date Field</ControlLabel>
                                        <div className="form-control">Not Available</div>
                                    </FormGroup>
                                </Panel.Body>
                            </Panel>
                            <Panel bsStyle="success">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Buttons</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <Button bsStyle="primary">Primary</Button>
                                    <Button>
                                        <Glyphicon glyph="search" />
                                    </Button>
                                    <Button>
                                        <Glyphicon glyph="search" />
                                        Search
                                    </Button>
                                </Panel.Body>
                            </Panel>
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Dropdown</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                <DropdownButton title="Frequency" id="dropdown-example">
                                    <MenuItem eventKey="1">Never</MenuItem>
                                    <MenuItem eventKey="2">Every Night</MenuItem>
                                    <MenuItem eventKey="3">Weeknights</MenuItem>
                                    <MenuItem eventKey="4">Weekends</MenuItem>
                                    <MenuItem eventKey="4">Weekly</MenuItem>
                                </DropdownButton>
                            </Panel.Body>
                            </Panel>
                            <Panel bsStyle="warning">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Radio, Checkbox</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    <FormGroup>
                                        <Radio name="radioGroup" inline>1</Radio>{' '}
                                        <Radio name="radioGroup" inline>2</Radio>{' '}
                                        <Radio name="radioGroup" inline>3</Radio>
                                        <Radio name="radioGroup" inline disabled>4</Radio>
                                    </FormGroup>
                                    <FormGroup>
                                        <Checkbox inline>1</Checkbox>
                                        <Checkbox inline>2</Checkbox>
                                        <Checkbox inline>3</Checkbox>
                                        <Checkbox inline disabled>4</Checkbox>
                                    </FormGroup>
                                </Panel.Body>
                            </Panel>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Table">
                        <Table striped bordered condensed hover responsive style={styles.tab}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(item => (
                                        <tr key={item.key}>
                                            <td>{item.key}</td>
                                            <td>{item.name}</td>
                                            <td style={"Employed" === item.status ? styles.employ : styles.unemploy}>{item.status}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>;
                    </Tab>
                    <Tab eventKey={3} title="Tree">
                        <h3>Not Available</h3>
                    </Tab>
                    <Tab eventKey={4} title="Other">
                        <Button bsStyle="primary" data-dialog="D1" onClick={this.handleOpenDialog}>
                            Modal Alert Box
                        </Button>
                        { this.state.openDialog === "D1" && 
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Some Content</p>
                                    <p>Some Content</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.handleCloseDialog}>Close</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        }
                        <h3>Breadcrumbs</h3>
                        <ol class="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Library</a></li>
                            <li class="active">Data</li>
                        </ol>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Bootstrap;