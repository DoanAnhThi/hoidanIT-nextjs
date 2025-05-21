'use client'
import { Layout } from "antd";

const AdminFooter = () => {
    const { Footer,  } = Layout;

    return (
        <>
        <Footer style={{ textAlign: 'center' }}>
            Anh Thi coder ©{new Date().getFullYear()} Created by Anh Thi coder
          </Footer>
        </>

    )
}

export default AdminFooter;