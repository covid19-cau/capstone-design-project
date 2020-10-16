import React, { useState } from "react";
import { Table, Button, Input, Select, Form } from "antd";
import { ColumnsType } from "antd/lib/table";

import { dataColumn, recommendTags } from "data";

import ContentsModal from "../ContentsModal";

import styles from "./style.module.scss";

const { Option } = Select;

interface IProps {
  columns: ColumnsType<any>;
  data: any;
  selectedKey: dataColumn;
  registerContents: (params: object) => void;
  updateContents: (params: object) => void;
  deleteContents: (params: object) => void;
}

const recommendKeys = {
  [dataColumn.meal]: [
    "id",
    "name",
    "serving_size",
    "calory",
    "carbohydrate",
    "fat",
    "protein",
  ],
  [dataColumn.video]: ["id", "name", "title", "uploader", "url"],
  [dataColumn.equipment]: [
    "id",
    "name",
    "price",
    "shipping_charge",
    "seller",
    "url",
  ],
  [dataColumn.user]: [
    "id",
    "name",
    "serving_size",
    "calory",
    "carbohydrate",
    "fat",
  ],
};

const RecommendManageTable: React.FC<IProps> = ({
  columns,
  data,
  selectedKey,
  registerContents,
  updateContents,
  deleteContents,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const onChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const onFinish = (values: any) => {
    if (isUpdate) {
      setIsUpdate(false);
      updateContents(values);
    } else {
      registerContents(values);
    }

    setVisible(false);
  };

  const onUpdate = () => {
    const selected = data.find((d: any) => d.key === selectedRowKeys[0]);
    form.setFieldsValue(selected);
    setIsUpdate(true);
    setVisible(true);
  };

  const [form] = Form.useForm();

  const rowSelection = {
    selectedRowKeys,
    onChange,
  };
  console.log(data.find((d: any) => d.key === selectedRowKeys[0]));
  return (
    <div>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Add
      </Button>
      <Button
        onClick={onUpdate}
        type="ghost"
        style={{ marginBottom: 16, marginLeft: 10 }}
      >
        Update
      </Button>
      <Button
        onClick={() =>
          deleteContents(data.find((d: any) => d.key === selectedRowKeys[0]))
        }
        danger
        style={{ marginBottom: 16, marginLeft: 10 }}
      >
        Delete
      </Button>
      <ContentsModal
        visible={visible}
        setVisible={setVisible}
        title="Recommend Contents"
      >
        <Form name="basic" form={form} onFinish={onFinish} initialValues={{}}>
          {recommendKeys[selectedKey].map((key: string) => {
            return (
              <div className={styles.wrapper} key={key}>
                <Form.Item
                  id={key}
                  key={key}
                  label={key}
                  name={key}
                  rules={[
                    { required: key !== "id", message: `Please input ${key}!` },
                  ]}
                >
                  <Input placeholder={key} disabled={key === "id"} />
                </Form.Item>
              </div>
            );
          })}

          <div className={styles.wrapper}>
            <h5>Tags</h5>
            <Form.Item label="Training purpose" name="training_purpose">
              <Select style={{ width: 200 }} placeholder="Training purpose">
                {recommendTags.map((tag) => {
                  return <Option value={tag}>{tag}</Option>;
                })}
              </Select>
            </Form.Item>
          </div>
          <Button type={isUpdate ? "primary" : "ghost"} htmlType="submit">
            {isUpdate ? "Update" : "Submit"}
          </Button>
        </Form>
      </ContentsModal>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default RecommendManageTable;
