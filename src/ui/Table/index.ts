import Utils from "../../libs/utils"

interface ITable {
  el: string,
  data?: Array<any>
  columns: Array<any>,
  tableClass?: string,
  theadClass?: string
}

const tmp = `
    <table class="table <%= tableClass %>">
      <thead class="<%= theadClass %>">
       <tr>
        <% for(let i = 0;i<columns.length;i++){ %>
            <th scope="col"><%= columns[i].label %></th>
        <%}%>
        </tr>
      </thead>
      <tbody>
        <% for(let i = 0;i<data.length;i++){ %>
          <tr>
            <% for(let j = 0;j<columns.length;j++){ %>
                <% if(columns[j].type === 'index'){%>
                  <td scope="col"><%= i+1 %></td>
                <%} else{%>
                  <td ><%= data[i][columns[j].prop] %></td>
                <%}%>
            <%}%>
          </tr>
       <%}%>
      </tbody>
    </table>
`

class Table {
  wrapper: HTMLElement
  tableDom: any
  options: ITable
  constructor(options: ITable) {
    this.wrapper = document.querySelector(options.el)
    this.options = options
    this.tableDom = ''
    this.render()
  }

  render() {
    this.tableDom = Utils.render(tmp, this.options)
    this.wrapper.innerHTML = this.tableDom
  }

  updateData(data: Array<any>) {
    this.options.data = data
    this.render()
  }
}

export default Table
