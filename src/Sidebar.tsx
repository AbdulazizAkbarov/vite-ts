import { Menu } from "antd";

import {
  AppstoreOutlined,
  ReconciliationOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <Menu
      defaultOpenKeys={["sub1"]}
      inlineCollapsed={collapsed}
      mode="inline"
      theme="dark"
      style={{
        maxWidth: "200px",
      }}
      items={[
        {
          icon: <AppstoreOutlined />,
          key: 1,
          label: <Link href={"/"}>Home Page</Link>,
        },
        {
          icon: <ReconciliationOutlined />,
          key: 2,
          label: <Link href={"student"}>Students</Link>,
        },
        {
          icon: <UserAddOutlined />,
          key: 3,
          label: <Link href={"groups"}>Groups</Link>,
        },
      ]}
    />
  );
}

export default Sidebar;
