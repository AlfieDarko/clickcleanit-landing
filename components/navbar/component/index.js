import React, { Component } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

class NavBarMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Dropdown item text="Services">
          <Dropdown.Menu>
            <Dropdown.Item>End Of Tenancy</Dropdown.Item>
            <Dropdown.Item>One-Off Cleaning</Dropdown.Item>
            <Dropdown.Item>Domestic Cleaning(Per Hour)</Dropdown.Item>
            <Dropdown.Item>Deep Cleaning(Per Hour)</Dropdown.Item>
            <Dropdown.Item>Commercial Cleaning</Dropdown.Item>
            <Dropdown.Item>Carpet Cleaning</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name="help"
          active={activeItem === "help"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="contact us"
          active={activeItem === "contact us"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Button basic color="blue" secondary>
              Call Us
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Book Now!</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBarMenu;
