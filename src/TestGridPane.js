import * as React from 'react'
import { Slick } from 'slickgrid-es6'
require('./TestGridPane.less')
const bartData = require('./bart-comp-all.json')

const [ metaData, { rowData } ] = bartData

// our JSON format uses arrays not objects for rowData;
// turn this into array of objects for SlickGrid:
const colNames = metaData.columns

const mkRowObj = (row) => {
  let rowObj = {}
  for (let i = 0; i < colNames.length; i++) {
    rowObj[colNames[i]] = row[i]
  }
  return rowObj
}
const gridData = rowData.map(mkRowObj)

const mkCol = (cid: string) => {
  return {
    "name": cid,
    "resizable": true,
    "sortable": true,
    "minWidth": 30,
    "rerenderOnResize": false,
    "headerCssClass": null,
    "defaultSortAsc": true,
    "focusable": true,
    "selectable": true,
    "width": 120,
    "id": cid,
    "field": cid,
    "cssClass": "",
    "formatter": null
  }
}

const columns = colNames.map(mkCol)

const gridOptions = {
}

const container='#mainGrid'

export default class TestGridPane extends React.Component {
  componentDidMount () {
    // Note: If we replace Slick.FrozenGrid with Slick.Grid,
    // grid viewport resizes OK even with border-box box-sizing
    this.grid = new Slick.FrozenGrid(container, gridData, columns, gridOptions)

    this.grid.resizeCanvas()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div className='gridPane'>
        <div id='mainGrid' className='slickgrid-container full-height' />
      </div>
    )
  }
}
