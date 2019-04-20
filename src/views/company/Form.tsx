import React from "react";
import SchemaForm from "react-jsonschema-form";
import { JSONSchema6 } from "json-schema";
import FormItem from "antd/lib/form/FormItem";
import { Input, Form } from "antd";
import { FormComponentProps } from "antd/lib/form";

interface TestFormProps extends FormComponentProps {}

export default Form.create<TestFormProps>({})((props: TestFormProps) => {
  var { getFieldDecorator } = props.form;
  return (
    <Form>
      <FormItem label="test1">
        {getFieldDecorator("test1", {
          rules: [{ required: true, message: "必填" }]
        })(<Input placeholder="输入内容"/>)}
      </FormItem>
    </Form>
  );
});
