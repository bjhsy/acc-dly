import React, { useState } from 'react';
import Form from 'antd/lib/form';
import Search from 'antd/lib/input/Search';
import { Table, Divider, Icon, Tabs, Drawer, Input, DatePicker, Row, Col } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { layout } from '@fyl080801/navijs';

const { Button, HeaderForm, PageLayout } = layout;

export default function() {
  const [visible, setVisible] = useState(false);

  const columns: ColumnProps<any>[] = [
    { title: '计划', key: 1 },
    { title: '巡检类型', key: 2 },
    { title: '时间段', key: 3 },
    { title: '执行状态', key: 4 }
  ];

  const search = () => {};

  return (
    <PageLayout
      title="巡检计划"
      headerFooter={
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="日巡检" key="1" />
          <Tabs.TabPane tab="周巡检" key="2" />
          <Tabs.TabPane tab="月巡检" key="3" />
          <Tabs.TabPane tab="季巡检" key="4" />
          <Tabs.TabPane tab="半年巡检" key="5" />
          <Tabs.TabPane tab="年巡检" key="6" />
        </Tabs>
      }
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
                <Form.Item label="计划名称">
                  <Input required />
                </Form.Item>
                <Form.Item label="开始时间">
                  <DatePicker placeholder="输入开始时间" />
                </Form.Item>
                <Form.Item label="结束时间">
                  <DatePicker placeholder="输入结束时间" />
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
        </HeaderForm>
      }
    >
      <Table columns={columns} bordered={true} />
    </PageLayout>
  );
}
