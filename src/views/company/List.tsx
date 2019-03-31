import React from "react";
import { Form, Table, Divider } from "antd";
import Search from "antd/lib/input/Search";
import { ColumnProps } from "antd/lib/table";
import { PageLayout, HeaderForm, Button } from "../../components";

export default function(props: any) {
  const columns: ColumnProps<any>[] = [
    { title: "名称", key: 1 },
    { title: "所在地址", key: 2 },
    { title: "公司性质", key: 3 },
    {
      title: "操作",
      width: 150,
      key: 4,
      render: (text, record) => (
        <span>
          <a href="javascript:;">编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }
  ];

  return (
    <PageLayout
      title="外部单位管理"
      header={
        <HeaderForm>
          <Form.Item>
            <Search placeholder="输入关键字" />
          </Form.Item>
          <Form.Item>
            <Button
              buttontype="primary"
              icon="plus"
              onClick={() => {
                props.history.push("/company/new");
              }}
            >
              新建
            </Button>
          </Form.Item>
        </HeaderForm>
      }
    >
      <Table columns={columns} bordered={true} />
    </PageLayout>
  );
}
