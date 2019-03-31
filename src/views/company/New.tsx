import React from "react";
import SchemaForm from "react-jsonschema-form";
import { Form, PageHeader, Input, Layout } from "antd";
import PageLayout from "../../components/PageLayout";

const { Content, Header, Footer } = Layout;

export default function(props: any) {
  // const schema: any = {
  //   type: "object",
  //   required: ["title"],

  //   properties: {
  //     title: { type: "string", title: "Title", default: "A new task" },
  //     done: { type: "boolean", title: "Done?", default: false }
  //   }
  // };

  // const formData = {
  //   title: "First task",
  //   done: true
  // };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  return (
    <PageLayout
      title="新建外部单位"
      onBack={() => {
        props.history.push("/company/list");
      }}
    >
      <Form {...formItemLayout}>
        <Form.Item label="名称">
          <Input />
        </Form.Item>
      </Form>
    </PageLayout>
    // <Layout>
    //   <PageHeader
    //     onBack={() => {
    //       props.history.push("/company/list");
    //     }}
    //     title="新建外部单位"
    //   />
    //   <Content style={{ minHeight: 200, background: "#fff", margin: "24px 16px" }}>

    //   </Content>
    // </Layout>
  );
}
