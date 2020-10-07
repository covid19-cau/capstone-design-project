import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";

import expandedRowRender from "../UserExpandRender";

interface IProps {
  data: any;
  columns: ColumnsType<any>;
}

const UserManageTable: React.FC<IProps> = ({ data, columns }) => {
  return (
    <Table
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
  );
};

export default UserManageTable;
