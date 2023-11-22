import { useCallback, useEffect, useState } from 'react'
import { CheckedItems } from '../Models/table.enum'

const useTable = <T extends Object>(
  data: T[],
  freezedRightSide?: string,
  RightSideSelfAction?: (options: any) => void,
) => {
  const [freezedRows, setFreezedRows] = useState<T[]>([])
  const [unFreezedRows, setUnFreezedRows] = useState<any[]>(data)
  const [checkedRows, setCheckedRows] = useState<T[]>([])
  const [checkedLink, setCheckedLink] = useState<T>()
  const [selectedType, setSelectedType] = useState<string>('none')

  const freezeRow = (e: any, indexx: number) => {
    e.stopPropagation()
    //@ts-ignore
    data.map((row, index) => {
      if (index === indexx) {
        //@ts-ignore
        const newArr = unFreezedRows.filter((item, index) => index !== indexx)
        setFreezedRows((prev) => [...prev, unFreezedRows[indexx]])
        setUnFreezedRows(newArr)
      }
    })
  }
  const unFreezeRow = (e: any, index: number) => {
    e.stopPropagation()

    const newFreezeRows = freezedRows.splice(index, index === 0 ? 1 : index)
    setFreezedRows(freezedRows)
    setUnFreezedRows((prev) => [newFreezeRows[0], ...prev])
  }
  const dragDropFreezeRow = (option: any) => {
    setFreezedRows(option)
  }
  const getRowForDropdown = (id: number) => {
    const allRows: T[] = freezedRows.concat(unFreezedRows)

    allRows.map((item) => {
      //@ts-ignore
      if (item.id === id) {
        freezedRightSide && freezedRightSide == 'dropdown' && setCheckedLink(item)
        RightSideSelfAction && RightSideSelfAction(item)
      }
    })
  }
  const handleCheckAll = useCallback(() => {
    const allRows: T[] = freezedRows.concat(unFreezedRows)
    setCheckedRows(allRows)
    setSelectedType(CheckedItems.SELECTED_VISIBLE)
  }, [unFreezedRows, freezedRows, checkedRows, selectedType])

  const unCheck = useCallback(() => {
    setCheckedRows([])
    setSelectedType(CheckedItems.NONE)
  }, [])

  const checkAllDataFromDb = useCallback(() => {
    const allRows: T[] = freezedRows.concat(unFreezedRows)
    setCheckedRows(allRows)
    setSelectedType(CheckedItems.SELECTED_ALL)
  }, [unFreezedRows, freezedRows, checkedRows, selectedType])

  const handleCheck = (id: number) => {
    const allRows: T[] = freezedRows.concat(unFreezedRows)
    let unchecked = false
    let arr = checkedRows
    arr.map((elem: any, i) => {
      if (elem.id === id) {
        unchecked = true
        arr.splice(i, 1)
        setCheckedRows((prev) => [...prev])
      }
    })
    if (unchecked) {
      return
    }

    allRows.map((item: any) => {
      if (item.id === id) {
        setCheckedRows((prev) => [...prev, item])
      }
    })
  }
  const isCheckedRows = (id: number): boolean => {
    let isChecked = false
    checkedRows.map((elem: any) => {
      if (elem.id === id) isChecked = true
    })

    return isChecked
  }

  useEffect(() => {
    setUnFreezedRows(data)
    setCheckedRows([])
  }, [data])

  return {
    freezedRows,
    unFreezedRows,
    checkedRows,
    checkedLink,
    selectedType,
    freezeRow,
    unFreezeRow,
    dragDropFreezeRow,
    getRowForDropdown,
    handleCheckAll,
    handleCheck,
    isCheckedRows,
    unCheck,
    checkAllDataFromDb,
  }
}

export default useTable
