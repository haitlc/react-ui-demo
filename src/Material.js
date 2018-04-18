import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Delete';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Checkbox from 'material-ui/Checkbox';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Tooltip from 'material-ui/Tooltip';
import Table, {
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from 'material-ui/Table';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog,
} from 'material-ui/Dialog';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

class Material extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDialog: null,
            activeStep: 1,
            value: 0,
            tab: 0,
            radio: "",
            listopen : true,
            order: "asc",
            orderBy: "key",
            data : [
                {
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
                }]
        };

        // This binding is necessary to make `this` work in the callback
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleRequestSort = this.handleRequestSort.bind(this);
        this.getForm = this.getForm.bind(this);
        this.getGrid = this.getGrid.bind(this);
        this.getOther = this.getOther.bind(this);
    }

    handleOpenDialog = (e) => {
        e.preventDefault();
        this.setState({ openDialog: e.currentTarget.getAttribute('data-dialog'), anchorEl: e.currentTarget });
    };

    handleCloseDialog = () => {
        this.setState({ openDialog: null });
    };

    handleChange = (event, index, value) => this.setState({ value });

    handleRadioChange = (event, value) => this.setState({ radio:value });

    handleTabChange = (event, value) => {
        this.setState({ tab: value });
    };

    handleListChange = () => {
        this.setState({ listopen: !this.state.listopen });
    };

    handleRequestSort = (event) => {
        const property = event.currentTarget.getAttribute("data-column");

        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
        order = 'asc';
        }

        const data =
        order === 'desc'
            ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
            : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        this.setState({ data, order, orderBy });
    };

    getForm() {
        const dropdownitems = [];
        for (let i = 0; i < 100; i++) {
            dropdownitems.push(<option value={i} key={i}>Item {i}</option>);
        }

        return (
            <div style={{ textAlign: "left", padding: 15 }}>
                <fieldset>
                    <legend>Text Input</legend>
                    <TextField label="Singleline"  /><br />
                    <TextField rows={4} multiline={true} label="Multiline" /><br />
                    <TextField label="Number" type="number" inputProps={{step: 1}} /><br />
                    <TextField label="Date Field" type="date" InputLabelProps={{ shrink: true, }}/>
                </fieldset>
                <fieldset>
                    <legend>Buttons</legend>
                    <Button variant="raised" color="primary">Primary</Button>
                    <IconButton aria-label="Delete">
                        <Delete />
                    </IconButton>
                    <Button variant="raised">
                        <Delete/>
                        Delete
                    </Button>
                </fieldset>
                <fieldset>
                    <legend>Dropdown</legend>
                    <FormControl>
                        <InputLabel>Frequency</InputLabel>
                        <Select
                            native
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <option value={1}>Never</option>
                            <option value={2}>Every Night</option>
                            <option value={3}>Weeknights</option>
                            <option value={4}>Weekends</option>
                            <option value={5}>Weekly</option>
                        </Select>
                    </FormControl>
                </fieldset>
                <fieldset>
                    <legend>Radio, Checkbox</legend>
                    <RadioGroup name="gender" value={this.state.radio} onChange={this.handleRadioChange} row>
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" disabled control={<Radio />} label="4" />
                    </RadioGroup>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox value="1" />}
                            label="1"
                        />
                        <FormControlLabel
                            control={<Checkbox value="2" />}
                            label="2"
                        />
                        <FormControlLabel
                            control={<Checkbox value="3" />}
                            label="3"
                        />
                        <FormControlLabel
                            control={<Checkbox value="3" />}
                            disabled
                            label="4"
                        />
                    </FormGroup>
                </fieldset>
                
            </div>
        )
    }

    getGrid() {
        const { data, order, orderBy} = this.state;

        const columnData = [
            { id: 'key', numeric: false, disablePadding: true, label: 'ID' },
            { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
            { id: 'status', numeric: false, disablePadding: false, label: 'Status' }
        ];
        return (
            <div style={{ textAlign: "left", padding: 15 }}>
                <Table>
                    <TableHead>
                    <TableRow>
                        {columnData.map(column => {
                            return (
                            <TableCell
                                key={column.id}
                                numeric={column.numeric}
                                padding={column.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === column.id ? order : false}
                            >
                                <Tooltip
                                title="Sort"
                                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                enterDelay={300}
                                >
                                <TableSortLabel
                                    active={orderBy === column.id}
                                    direction={order}
                                    data-column={column.id}
                                    onClick={this.handleRequestSort}
                                >
                                    {column.label}
                                </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            );
                        }, this)}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((n,index) => {
                        return (
                        <TableRow key={index}>
                            <TableCell>{n.key}</TableCell>
                            <TableCell>{n.name}</TableCell>
                            <TableCell><span style={"Employed" === n.status ? {color: "green"} : {color: "red"}}>{n.status}</span></TableCell>
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </div>
        );
    }

    getList() {
        const styles = {
            root: {
                width: '100%',
                maxWidth: 360,
                textAlign: "left", 
                padding: 15
            },
            nested: {
                paddingLeft: 10 * 4,
            }
        };
        return (
            <div style={styles.root}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
                >
                <ListItem button>
                    <ListItemIcon>
                    <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Sent mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Drafts" />
                </ListItem>
                <ListItem button onClick={this.handleListChange}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Inbox" />
                    {this.state.listopen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.listopen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button style={styles.nested}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="Starred" />
                    </ListItem>
                    <ListItem button style={styles.nested}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary="Starred 2" />
                    </ListItem>
                    </List>
                </Collapse>
                </List>
            </div>
        )
    }

    getOther() {
        const steps = ['Login', 'Verificaion', 'Pay', 'Done'];
        const { activeStep } = this.state;
        return (
            <div style={{ textAlign: "left", padding: 15 }}>
                <Button variant="raised" color="primary" data-dialog="D1" onClick={this.handleOpenDialog}>Open Modal</Button>
                <Dialog
                    aria-labelledby="responsive-dialog-title"
                    aria-describedby="responsive-dialog-description"
                    open={this.state.openDialog === "D1"}
                    onClose={this.handleCloseDialog}
                >
                    <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="primary">
                            Disagree
                    </Button>
                        <Button onClick={this.handleCloseDialog} color="primary" autoFocus>
                            Agree
                    </Button>
                    </DialogActions>
                </Dialog>
                <br /><br />
                Stepper
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        if (index === 2) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (index > 1) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
        )
    }

    render() {
        const { tab } = this.state;

        const styles = {
            block: {
                maxWidth: 250,
            },
            radioButton: {
                marginBottom: 16,
            },
            checkbox: {
                marginBottom: 16,
            },
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
            <div style={{ textAlign: "left" }}>
                <Tabs value={tab} onChange={this.handleTabChange}>
                    <Tab label="Form" />
                    <Tab label="Table" />
                    <Tab label="Tree" />
                    <Tab label="Other" />
                </Tabs>
                {tab === 0 && this.getForm()}
                {tab === 1 && this.getGrid()}
                {tab === 2 && this.getList()}
                {tab === 3 && this.getOther()}
            </div>

        );
    }
}

export default Material;
