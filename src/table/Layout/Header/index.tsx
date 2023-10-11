import React from "react";
import {
  IColumnConfig,
  IColumnConfigStructure,
  IColumnHeaderStructure,
} from "../../../Models/table.models";
import FreezedHeaderLeft from "./freezedLeft";
import HeaderMain from "./main";
import FreezedHeaderRight from "./freezedRigth";

interface IHeader<T extends Object> {
  columnsConfigStructure: IColumnConfigStructure<T>;
  rightFreezeConfig?: IColumnConfig<T>[];
  columnsHeaderStructure: IColumnHeaderStructure;
  multipleCheck?: boolean;
  isStickyFirstColumn?: boolean;
  columnMinWidth?: number;
  headerColor?: string;
  freezedRightSideVisible?: boolean;
  leftFreezedColumnWidth?: number;
  rightFreezedColumnWidth?: number;
}
const Header = <T extends Object>({
  columnsConfigStructure,
  rightFreezeConfig,
  columnsHeaderStructure,
  multipleCheck,
  isStickyFirstColumn,
  columnMinWidth,
  headerColor,
  freezedRightSideVisible,
  leftFreezedColumnWidth,
  rightFreezedColumnWidth,
}: IHeader<T>) => {
  return (
    <>
      <FreezedHeaderLeft
        columnsConfigStructure={columnsConfigStructure}
        columnsHeaderStructure={columnsHeaderStructure}
        multipleCheck={multipleCheck}
        isStickyFirstColumn={isStickyFirstColumn}
        columnMinWidth={columnMinWidth}
        headerColor={headerColor}
        leftFreezedColumnWidth={leftFreezedColumnWidth}
      />
      <HeaderMain
        columnsConfigStructure={columnsConfigStructure}
        columnsHeaderStructure={columnsHeaderStructure}
        columnMinWidth={columnMinWidth}
        headerColor={headerColor}
        isStickyFirstColumn={isStickyFirstColumn}
        multipleCheck={multipleCheck}
        leftFreezedColumnWidth={leftFreezedColumnWidth}
      />
      {freezedRightSideVisible ? (
        <FreezedHeaderRight
          headerColor={headerColor}
          rightFreezedColumnWidth={rightFreezedColumnWidth}
          rightFreezeConfig={rightFreezeConfig}
        />
      ) : null}
    </>
  );
};
export default Header;
