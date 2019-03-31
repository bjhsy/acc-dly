import React from "react";
import { Form } from "antd";

export default function(props: any) {
  return (
    <Form layout="inline" style={{ marginTop: -8 }}>
      {props.children}
    </Form>
  );
}
