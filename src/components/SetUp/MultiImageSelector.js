import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { View, ListView, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import checkbox from './images/icon-checkbox.png'
import checkboxChecked from './images/icon-checkbox-checked.png'

const itemType = PropTypes.oneOfType([
  PropTypes.Image,
  PropTypes.shape({ background: PropTypes.image, value: PropTypes.string })
])

const styleType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.array
])

const sourceType = PropTypes.oneOfType([PropTypes.object, PropTypes.number])

// A customiseable ListView that allows you to select multiple rows
export default class MultiImageSelector extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(itemType).isRequired,
    selectedItems: PropTypes.arrayOf(itemType),

    onSelectionsChange: PropTypes.func.isRequired,

    checkboxSource: sourceType,
    selectedCheckboxSource: sourceType,

    style: styleType,
    rowStyle: styleType,
    checkboxStyle: styleType,
    labelStyle: styleType,

    selectedRowStyle: styleType,
    selectedCheckboxStyle: styleType,
    selectedLabelStyle: styleType
  }

  static defaultProps = {
    selectedItems: [],
    style: {},
    rowStyle: {},
    checkboxStyle: {},
    checkboxCheckedStyle: {},
    labelStyle: {},
    checkboxSource: checkbox,
    selectedCheckboxSource: checkboxChecked
  }

  constructor (props) {
    super(props)

    const rows = this.getRowData(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.value !== r2.value || r1.selected !== r2.selected
    }).cloneWithRows(rows)

    this.state = { dataSource }
  }

  componentWillReceiveProps (nextProps) {
    const rows = this.getRowData(nextProps)
    const dataSource = this.state.dataSource.cloneWithRows(rows)
    this.setState({ dataSource })
  }

  //return the selected row's value
  getRowData ({ items, selectedItems }) {
    items = items.map(this.getObjValue)
    selectedItems = (selectedItems || []).map(this.getObjValue)

    items.forEach((item) => {
      item.selected = selectedItems.some((i) => i.value === item.value)
    })

    return items
  }

  onRowPress (row) {
    row = Object.assign({}, row)

    let { selectedItems } = this.props

    selectedItems = (selectedItems || []).map(this.getObjValue)

    const index = selectedItems.findIndex((selectedItem) => selectedItem.value === row.value)

    //concat selected row to selected items
    if (index > -1) {
      selectedItems = selectedItems.filter((selectedItem) => selectedItem.value !== row.value)
    } else {
      selectedItems = selectedItems.concat(row)
    }

    this.props.onSelectionsChange(selectedItems, row)
  }

  getObjValue (obj) {
      return {value: obj.value}
  }

  mergeStyles (styles1, styles2) {
    //makes styles1 an array
    styles1 = styles1 == null ? [] : styles1
    styles1 = Array.isArray(styles1) ? styles1 : [styles1]

    //contact styles2 to 1
    return styles2 == null ? styles1 : styles1.concat(styles2)
  }

  render () {
    const { dataSource } = this.state
    const { style } = this.props
    const { renderItemRow } = this
    return <ListView horizontal={true} style={style} dataSource={dataSource} renderRow={renderItemRow} />
  }

  renderItemRow = (row) => {
    let {
      checkboxSource,
      rowStyle,
      labelStyle,
      checkboxStyle
    } = this.props

    const {
      selectedCheckboxSource,
      selectedRowStyle,
      selectedCheckboxStyle,
      selectedLabelStyle
    } = this.props

    const { mergeStyles } = this

    if (row.selected) {
      checkboxSource = selectedCheckboxSource
      rowStyle = mergeStyles(styles.row, rowStyle, selectedRowStyle)
      checkboxStyle = mergeStyles(styles.checkbox, checkboxStyle, selectedCheckboxStyle)
      labelStyle = mergeStyles(styles.label, labelStyle, selectedLabelStyle)
    } else {
      rowStyle = mergeStyles(styles.row, rowStyle)
      checkboxStyle = mergeStyles(styles.checkbox, checkboxStyle)
      labelStyle = mergeStyles(styles.label, labelStyle)
    }

    return (
      <TouchableWithoutFeedback onPress={() => this.onRowPress(row)}>
        <View style={rowStyle}>
          <Image style={checkboxStyle} source={checkboxSource} />
          <Text style={labelStyle}>{row.value}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#ffffff'
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  label: {}
})
