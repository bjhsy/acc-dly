import React, { useState } from 'react';
import { Form, Input, Row, Col, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import CheckboxGroup from 'antd/lib/checkbox/Group';
import { layout } from '@fyl080801/navijs';

const { Button, HeaderForm, PageLayout } = layout;

export default function(props: any) {
  const plainOptions = [
    {
      label: '日巡检',
      value: 'day'
    },
    {
      label: '周巡检',
      value: 'week'
    },
    {
      label: '月巡检',
      value: 'month'
    },
    {
      label: '季巡检',
      value: 'season'
    },
    {
      label: '半年巡检',
      value: 'halfyear'
    },
    {
      label: '年巡检',
      value: 'year'
    }
  ];

  const cancel = () => {
    props.close();
  };

  const ok = () => {
    props.close();
  };

  return (
    <Modal title="巡检策略" visible={props.visible} width={900} onCancel={cancel} onOk={ok}>
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="设备分类">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="巡检内容">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="巡检要求">
          <Input />
        </Form.Item>
        <Form.Item label="巡检方法">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="备注">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="巡检周期">
          <CheckboxGroup options={plainOptions} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
