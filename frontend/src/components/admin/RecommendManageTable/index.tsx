import React, { useState } from "react";
import { Table, Button, Input, Select } from "antd";
import { ColumnsType } from "antd/lib/table";

import { recommendTags } from "__MOCK__/mock";

import ContentsModal from "../ContentsModal";

import styles from "./style.module.scss";

const { Option } = Select;

interface IProps {
  columns: ColumnsType<any>;
  data: any;
  title: string;
}

const RecommendManageTable: React.FC<IProps> = ({ columns, data, title }) => {
  const [visible, setVisible] = useState(false);
  const onChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        추가하기
      </Button>
      <ContentsModal
        visible={visible}
        setVisible={setVisible}
        title="Recommend Contents"
      >
        <div className={styles.wrapper}>
          <h5>Title</h5>
          <Input placeholder="title" />
        </div>
        <div className={styles.wrapper}>
          <h5>Content</h5>
          <Input placeholder="content" />
        </div>
        <div className={styles.wrapper}>
          <h5>Tags</h5>
          <Select
            style={{ width: 200 }}
            placeholder="Select a tag"
            onChange={onChange}
          >
            {recommendTags.map((tag) => {
              return <Option value={tag}>{tag}</Option>;
            })}
          </Select>
        </div>
      </ContentsModal>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecommendManageTable;
