import React, { useState } from "react";
import { PageLayout, HeaderForm, Button } from "../../components";
import Form from "antd/lib/form";
import Search from "antd/lib/input/Search";
import { Table, Divider, Icon, Popconfirm, Drawer, Input, Row, Col } from "antd";
import { ColumnProps } from "antd/lib/table";
import StrategyForm from "./StrategyForm";

export default function() {
  const [formVisible, setFormVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const columns: ColumnProps<any>[] = [
    { title: "设备分类", key: 1 },
    { title: "巡检内容", key: 2 },
    { title: "巡检要求", key: 3 },
    { title: "巡检方法", key: 4 },
    { title: "巡检周期", key: 5 },
    {
      title: "操作",
      width: 150,
      key: 6,
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
      title="巡检配置"
      header={
        <HeaderForm>
          <Form.Item>
            <Search placeholder="输入关键字" />
          </Form.Item>
          <Form.Item>
            <Button onClick={() => setVisible(true)}>
              <Icon type="bars" />
              详细查找
            </Button>
            <Drawer
              title="详细查找"
              placement="right"
              closable={true}
              maskClosable={true}
              onClose={() => setVisible(false)}
              visible={visible}
            >
              <Form>
                <Form.Item label="设备分类">
                  <Input />
                </Form.Item>
                <Form.Item label="巡检内容">
                  <Input />
                </Form.Item>
                <Form.Item label="巡检要求">
                  <Input />
                </Form.Item>
                <Form.Item label="巡检方法">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Button buttontype="primary" onClick={() => setVisible(false)}>
                        <Icon type="search" />
                        查找
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button>
                        <Icon type="reload" />
                        重置
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
            </Drawer>
          </Form.Item>
          <Form.Item>
            <Divider type="vertical" />
            <Button buttontype="primary" icon="plus" onClick={() => setFormVisible(true)}>
              新建
            </Button>
          </Form.Item>
          <Form.Item>
            <Popconfirm
              placement="bottom"
              title="即将生成巡检计划及明细，原内容将覆盖！请确认"
              okText="确定"
              cancelText="取消"
            >
              <Button onClick={() => {}}>
                <Icon type="schedule" />
                生成计划
              </Button>
            </Popconfirm>
          </Form.Item>
          <Form.Item>
            <Divider type="vertical" />
            <Button icon="bars" onClick={() => {}}>
              批量操作
            </Button>
          </Form.Item>
        </HeaderForm>
      }
    >
      <Table columns={columns} bordered={true} />
      <StrategyForm visible={formVisible} close={() => setFormVisible(false)} />
    </PageLayout>
  );
}
