import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";

import { userExpandColumns, userExpandData } from "data";

interface IProps {
  data: any;
  columns: ColumnsType<any>;
}

const UserExpandedRowRender: React.FC<IProps> = ({
  data = userExpandData,
  columns = userExpandColumns,
}) => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default UserExpandedRowRender;
