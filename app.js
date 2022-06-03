const users = [
  {
    _id: '5d220b1083a0494655cdecf6',
    isActive: false,
    balance: 2823.42,
    age: 40,
    name: 'Estrada Davenpot',
    gender: 'male',
    company: 'EBIDCO',
    email: 'estradaravenpot@ebidco.com',
    phone: '+1 (890) 461-2088',
    registered: '2016-03-04T03:36:38 -02:00',
    nestedField: { total: 200 },
  },
  {
    _id: '5d220b1083a0494655cdecf7',
    isActive: false,
    balance: 2823.42,
    age: 41,
    name: 'Luna Davenpot',
    gender: 'female',
    company: 'EBIDCO',
    email: 'luna@ebidco.com',
    phone: '+1 (890) 461-2088',
    registered: '2016-03-04T03:36:38 -02:00',
    nestedField: { total: 200 },
  },
  {
    _id: '5d220b1083a0494655cdecf8',
    isActive: false,
    balance: 2823.42,
    age: 42,
    name: 'Mike Davenpot',
    gender: 'male',
    company: 'EBIDCO',
    email: 'mike@ebidco.com',
    phone: '+1 (890) 461-2088',
    registered: '2016-03-04T03:36:38 -02:00',
    nestedField: { total: 200 },
  },
  {
    _id: '5d220b1083a0494655cdecf9',
    isActive: false,
    balance: 2823.42,
    age: 43,
    name: 'Kassandra Davenpot',
    gender: 'female',
    company: 'EBIDCO',
    email: 'kassandra@ebidco.com',
    phone: '+1 (890) 461-2088',
    registered: '2016-03-04T03:36:38 -02:00',
    nestedField: { total: 200 },
  },
  {
    _id: '5d220b1083a0494655cdecf5',
    isActive: false,
    balance: 2823.39,
    age: 44,
    name: 'John Davenpot',
    gender: 'male',
    company: 'EBIDCO',
    email: 'john@ebidco.com',
    phone: '+1 (890) 461-2088',
    registered: '2016-03-04T03:36:38 -02:00',
    nestedField: { total: 200 },
  },
]

const tableSchema = {
  index: '#',
  name: 'Name',
  age: 'Age',
  gender: 'Gender',
  company: 'Company',
  email: 'Email',
  balance: 'Balance',
}

function generateThead(tableSchema) {
  const thead = document.createElement('thead')
  const tr = generateTr(tableSchema, 'th')
  thead.appendChild(tr)
  return thead
}

function generateTr(tableSchema, tagName = 'td') {
  const tr = document.createElement('tr')
  Object.values(tableSchema).forEach((val) => {
    const td = document.createElement(tagName)
    td.textContent = val
    tr.appendChild(td)
  })
  return tr
}

function generateTbody(tableSchema, items) {
  const tbody = document.createElement('tbody')
  items.forEach((item, index) => {
    item.index = index + 1
    const itemSchema = generateItemsSchema(tableSchema, item)
    const tr = generateTr(itemSchema, 'td')
    tbody.appendChild(tr)
  })
  return tbody
}

function generateItemsSchema(tableSchema, item) {
  const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
    if (key in item) {
      acc[key] = item[key]
    }

    return acc
  }, {})
  return itemSchema
}

function generateTableTemplate() {
  const table = document.createElement('table')
  table.classList.add('table')
  return table
}

function generateTotalBalance(tableSchema, items) {
  const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0)
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const columnCounts = Object.keys(tableSchema).length
  td.insertAdjacentHTML('beforeend', `Total balance: <b>${total}</b>`)
  td.setAttribute('colspan', columnCounts)
  td.setAttribute('align', 'right')

  tr.appendChild(td)

  return tr
}

function initTable(tableSchema, items) {
  const container = document.querySelector('.table-container')
  const table = generateTableTemplate()
  const header = generateThead(tableSchema)
  const body = generateTbody(tableSchema, items)
  const total = generateTotalBalance(tableSchema, items)

  table.appendChild(header)
  table.appendChild(body)
  table.appendChild(total)

  container.appendChild(table)
}

initTable(tableSchema, users)
