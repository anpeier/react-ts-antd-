import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
      <Icon icon="arrow-down" theme="primary" size="10x"></Icon>
      <Menu
        mode="horizontal"
        defaultIndex="1"
        defaultOpenSubMenus={["3"]}
        onSelect={(index) => {
          alert(index);
        }}
      >
        <MenuItem className="lap">cool link1</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <MenuItem>cool link3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem disabled>dropdrwn1</MenuItem>
          <MenuItem>dropdrwn2</MenuItem>
        </SubMenu>
      </Menu>
      <Button>Hello</Button>
      <Button btnType="danger" size="lg">
        Hello
      </Button>
      <Button disabled btnType="primary" size="lg">
        large button
      </Button>
      <Button disabled btnType="primary" size="sm">
        small button
      </Button>
      <Button disabled btnType="link" href="http://www.baidu.com">
        baidu Link
      </Button>
      <Button btnType="link" href="http://www.baidu.com">
        baidu Link
      </Button>
    </div>
  );
}

export default App;
