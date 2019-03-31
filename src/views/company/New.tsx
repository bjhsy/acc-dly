import React from "react";
import SchemaForm from "react-jsonschema-form";
import { Form, Input, Layout, Radio, Row, Col } from "antd";
import RadioGroup from "antd/lib/radio/group";
import { HeaderForm, PageLayout, Button } from "../../components";

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

  const fix: any = {
    type: "primary"
  };

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
      header={
        <HeaderForm>
          <Form.Item>
            <Button buttontype="primary" icon="save">
              保存
            </Button>
          </Form.Item>
        </HeaderForm>
      }
    >
      <Layout.Content style={{ background: "#fff", padding: 16 }}>
        <Form {...formItemLayout}>
          <Row gutter={16}>
            <Col span={10}>
              <Form.Item label="名称">
                <Input />
              </Form.Item>
              <Form.Item label="地址">
                <Input />
              </Form.Item>
              <Form.Item label="公司电话">
                <Input />
              </Form.Item>
              <Form.Item label="公司性质">
                <RadioGroup>
                  <Radio>管线</Radio>
                  <Radio>监理</Radio>
                  <Radio>设计</Radio>
                  <Radio>其他</Radio>
                </RadioGroup>
              </Form.Item>
              <Form.Item label="备注">
                <Input />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="联系人">
                <Input />
              </Form.Item>
              <Form.Item label="联系人电话">
                <Input />
              </Form.Item>
              <Form.Item label="联系人邮箱">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Layout.Content>
    </PageLayout>
  );
}
