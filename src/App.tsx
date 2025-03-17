import { Button } from "antd";
import Students from "./Main/Students";
import Sidebar from "./Sidebar";
import {MenuUnfoldOutlined,MenuFoldOutlined} from "@ant-design/icons";
import {useState} from 'react'
import MainPage from "./Main/MainPage";


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
 return <>
 <nav className="bg-slate-900 w-full h-full p-4 flex justify-between px-6">
<div className="flex gap-2">
  <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        <p className="text-white text-2xl">Logo</p>
</div>
  <div className="flex items-center gap-4">
   
    <img className="rounded-full w-[40px]" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeatcmYRYsMNho5mAp9qySUzghxQYU_TPGw&s"} alt="" />
    <div className="text-white">
      <p>Abdulaziz</p>
      <p>Akbarov</p>
    </div>
  </div>
 </nav>
<div className="flex" style={{height: "100vh"}}>
  <Sidebar collapsed={collapsed}/>
 <MainPage/>
</div>
 </>
}

export default App;
