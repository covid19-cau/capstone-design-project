import React from "react";
import { Table, Tag, Space } from "antd";
import { ColumnsType } from "antd/lib/table";

interface IProps {
  columns: ColumnsType<any>;
  data: any;
  title: string;
}

const RecommendManageTable: React.FC<IProps> = ({ columns, data, title }) => {
  return (
    <div>
      <h1>{title} page</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecommendManageTable;
