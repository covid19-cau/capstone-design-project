import React, { useState } from "react";
import { Table, Button, Input, Select, Form } from "antd";
import { ColumnsType } from "antd/lib/table";

import { dataColumn, recommendTags } from "__MOCK__/mock";

import ContentsModal from "../ContentsModal";

import styles from "./style.module.scss";

const { Option } = Select;

interface IProps {
  columns: ColumnsType<any>;
  data: any;
  selectedKey: dataColumn;
  registerContents: (params: object) => void;
}

const recommendKeys = {
  [dataColumn.meal]: [
    "name",
    "serving_size",
    "calory",
    "carbohydrate",
    "fat",
    "protein",
  ],
  [dataColumn.video]: ["name", "title", "uploader", "URL"],
  [dataColumn.equipment]: ["name", "price", "shipping_charge", "seller", "URL"],
  [dataColumn.user]: ["name", "serving_size", "calory", "carbohydrate", "fat"],
};

const RecommendManageTable: React.FC<IProps> = ({
  columns,
  data,
  selectedKey,
  registerContents,
}) => {
  const [visible, setVisible] = useState(false);
  const onChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  const onFinish = (values: any) => {
    registerContents(values);
    setVisible(false);
  };
  const [form] = Form.useForm();

  return (
    <div>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Add
      </Button>
      <ContentsModal
        visible={visible}
        setVisible={setVisible}
        title="Recommend Contents"
      >
        <Form name="basic" form={form} onFinish={onFinish}>
          {recommendKeys[selectedKey].map((key: any) => {
            return (
              <div className={styles.wrapper}>
                <Form.Item
                  label={key}
                  name={key}
                  rules={[{ required: true, message: `Please input ${key}!` }]}
                >
                  <Input placeholder={key} />
                </Form.Item>
              </div>
            );
          })}

          <div className={styles.wrapper}>
            <h5>Tags</h5>
            <Form.Item label="Training purpose" name="training_purpose">
              <Select
                style={{ width: 200 }}
                placeholder="Training purpose"
                onChange={onChange}
              >
                {recommendTags.map((tag) => {
                  return <Option value={tag}>{tag}</Option>;
                })}
              </Select>
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </ContentsModal>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecommendManageTable;
