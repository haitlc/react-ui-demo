import React, { Component } from 'react';

import {
    Button, 
    Menu, 
    Dropdown, 
    Icon, 
    Form,
    Input, 
    InputNumber, 
    Tabs, 
    Modal,
    Slider, 
    DatePicker, 
    Select, 
    Steps, 
    Timeline, 
    Checkbox, 
    Radio, 
    Rate,
    Tree, 
    Table
} from 'antd';

const FormItem = Form.Item;

class AntDesign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDialog: null,
            currentKey: 'mail',
            rating: null,
            radio: null,
            checkbox: null
        }

        this.handleClick = this.handleClick.bind(this);
    }

    ratingChange = (v) => {
        this.setState({ rating: v })
    }

    handleOpenDialog = (e) => {
        e.preventDefault();
        this.setState({ openDialog: e.currentTarget.getAttribute('data-dialog') });
    };

    handleCloseDialog = () => {
        this.setState({ openDialog: null });
    };

    handleClick(e) {
        this.setState({ currentKey: e.key });
    }

    radioChange = (e) => {
        this.setState({ radio: e.target.value });
    }

    render() {
        const { TextArea } = Input;
        const { TabPane } = Tabs;
        const { SubMenu, ItemGroup } = Menu;
        const { Step } = Steps;
        const { TreeNode } = Tree;
        const menu = (
            <Menu>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        const plainOptions = ['1', '2', '3'];

        const formItemLayout = {
            labelCol: {
                xs: { span: 2 },
                sm: { span: 2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

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

        const columns = [{
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
        }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: text => <span style={"Employed" === text ? styles.employ : styles.unemploy}>{text}</span>
        }];

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
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Form" key="1">
                        <div style={styles.tab}>
                            <fieldset>
                                <legend>Text Input</legend>
                                <FormItem
                                    {...formItemLayout}
                                    label="Singleline"
                                >
                                    <Input placeholder="Single-line" />
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="Multiline"
                                >
                                <TextArea rows={4} placeholder="Multi-line" />
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="Number"
                                >
                                <InputNumber min={1} max={10} defaultValue={3} />
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="Date Field"
                                >
                                <DatePicker placeholder="yyyy-mm-dd" />
                                </FormItem>
                            </fieldset>
                            <fieldset>
                                <legend>Buttons</legend>
                                <Button type="primary">Primary</Button>
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                            </fieldset>
                            <fieldset>
                                <legend>Dropdown</legend>
                                <FormItem
                                    {...formItemLayout}
                                    label="Frequency"
                                >
                                <Select defaultValue="" placeholder="Frequency" style={{ width: 120 }}>
                                    <Select.Option value="1">Never</Select.Option>
                                    <Select.Option value="2">Every Night</Select.Option>
                                    <Select.Option value="3" disabled>Weeknights</Select.Option>
                                    <Select.Option value="4">Weekends</Select.Option>
                                    <Select.Option value="5">Weekly</Select.Option>
                                </Select>
                                </FormItem>
                            </fieldset>
                            <fieldset>
                                <legend>Radio, Checkbox</legend>
                                <Radio.Group onChange={this.radioChange} value={this.state.radio}>
                                    <Radio value={1}>1</Radio>
                                    <Radio value={2}>2</Radio>
                                    <Radio value={3}>3</Radio>
                                    <Radio value={4} disabled>4</Radio>
                                </Radio.Group>
                                <br />
                                <Checkbox.Group options={plainOptions}>
                                </Checkbox.Group>
                            </fieldset>
                        </div>
                    </TabPane>
                    <TabPane tab="Table" key="2">
                        <div style={styles.tab}>
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </TabPane>
                    <TabPane tab="Tree" key="3">
                        <div style={styles.tab}>
                        <Tree
                            checkable
                            defaultExpandedKeys={['0-0-0', '0-0-1']}
                            defaultSelectedKeys={['0-0-0', '0-0-1']}
                            defaultCheckedKeys={['0-0-0', '0-0-1']}
                        >
                            <TreeNode title="parent 1" key="0-0">
                            <TreeNode title="parent 1-0" key="0-0-0" disabled>
                                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                                <TreeNode title="leaf" key="0-0-0-1" />
                            </TreeNode>
                            <TreeNode title="parent 1-1" key="0-0-1">
                                <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                            </TreeNode>
                            </TreeNode>
                        </Tree>
                        </div>
                    </TabPane>
                    <TabPane tab="Other" key="4">
                        <div style={styles.tab}>
                            <Button type="primary" data-dialog="D1" onClick={this.handleOpenDialog}>Dialog</Button>
                            <Modal
                                title="Basic Modal"
                                visible={this.state.openDialog === "D1"}
                                onOk={this.handleCloseDialog}
                                onCancel={this.handleCloseDialog}
                                okText="Submit"
                                cancelText="Cancel"
                            >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                            <br /><br />
                            Slider
                        <br />
                            <Slider style={{ width: 400 }} />
                            <br /><br />
                            Stepper
                            <Steps size="small" style={{ width: 600 }}>
                                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                                <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                            </Steps>
                            <br /><br />
                            Timeline
                            <Timeline style={{ width: 300 }}>
                                <Timeline.Item color="green">Build Material UI 2018-01-29</Timeline.Item>
                                <Timeline.Item color="green">Build Ant Design 2018-01-31</Timeline.Item>
                                <Timeline.Item color="red">Build React Bootstrap 2018-02-01</Timeline.Item>
                                <Timeline.Item color="blue">Evaluate UI framework 2018-02-31</Timeline.Item>
                            </Timeline>
                            <br /><br />
                            Rating bar
                            <span>
                                <Rate onChange={this.ratingChange} value={this.state.rating} />
                                {this.state.rating && <span className="ant-rate-text">{this.state.rating} stars</span>}
                            </span>
                            <br /><br />
                            Menu
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.currentKey]}
                                mode="horizontal"
                            >
                                <Menu.Item key="mail">
                                    <Icon type="mail" />Menu One
                                </Menu.Item>
                                    <Menu.Item key="app" disabled>
                                        <Icon type="appstore" />Menu Two
                                </Menu.Item>
                                <SubMenu title={<span><Icon type="setting" />Menu Three - Submenu</span>}>
                                    <ItemGroup title="Item 1">
                                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    </ItemGroup>
                                    <ItemGroup title="Item 2">
                                        <SubMenu title={<span><Icon type="setting" />Submenu</span>}>
                                            <ItemGroup title="Subheader">
                                                <Menu.Item key="setting:s1">Sub 1</Menu.Item>
                                                <Menu.Item key="setting:s2">Sub 2</Menu.Item>
                                            </ItemGroup>
                                        </SubMenu>
                                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                                    </ItemGroup>
                                </SubMenu>
                            </Menu>
                        </div>
                    </TabPane>
                </Tabs>

            </div>
        )
    }
}

export default AntDesign;