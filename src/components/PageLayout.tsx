import React from "react";
import { Layout, PageHeader, Col, Row, Button, Tag, Tabs } from "antd";

const { Content } = Layout;

export default function(props: any) {
  return (
    <Layout>
      <PageHeader
        onBack={props.onBack}
        title={props.title}
        subTitle={props.subTitle || <span>&nbsp;</span>}
        extra={props.header}
      />
      <Content style={{ minHeight: 200, background: "#fff", margin: "24px 16px", padding: 16 }}>
        {props.children}
      </Content>
    </Layout>
  );
}
