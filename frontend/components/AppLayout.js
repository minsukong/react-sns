import React from "react";
import { Menu, Input, Button } from "antd";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Link href="/signup">
          <Button>
            <a>회원가입</a>
          </Button>
        </Link>
      </Menu>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
