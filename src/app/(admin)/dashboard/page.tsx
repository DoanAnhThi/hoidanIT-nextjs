'use client'
import React from 'react';
import { Layout, theme } from 'antd';
import AdminFooter from '@/components/layout/admin.footer';
import AdminHeader from '@/components/layout/admin.header';
import AdminSideBar from '@/components/layout/admin.sidebar';

const DashboardPage = () => {
    const { Content } = Layout;
 
    return (
        <Layout>
          <AdminSideBar/>

          <Layout>
            <AdminHeader/>
            <Content style={{ margin: '24px 16px 0' }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: "#ccc",
                  borderRadius: "#ccc",
                }}
              >
                Content
              </div>
            </Content>
            <AdminFooter/>

          </Layout>
      </Layout>
    )
}

export default DashboardPage;