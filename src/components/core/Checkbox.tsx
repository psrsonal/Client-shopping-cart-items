import { List, Typography, Checkbox as AntdCheckbox } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.actions'
import { AppState } from '../../store/reducers'
import { CategoryState } from '../../store/reducers/category.reducer'

const { Title } = Typography

const categories = [{ name: "Node" }, { name: "Angular" }]

const Checkbox = () => {
  const dispatch = useDispatch()

  const category = useSelector<AppState, CategoryState>(
      state => state.category
  )

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const onChange = (checkedValue: CheckboxValueType[]) => {
      console.log(checkedValue)
  }

  return <>
    <Title level={4}>按照分类筛选</Title>
    <AntdCheckbox.Group options={category.category.result.map(item => ({
        label: item.name,
        value: item._id
    }))} 
        onChange={onChange}
    />
    <List dataSource={categories} renderItem={item => (
        <List.Item>
            <AntdCheckbox>{item.name}</AntdCheckbox>
        </List.Item>
    )} />
  </>
}

export default Checkbox
