import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import { Boton } from './Boton';
import 'antd/dist/antd.css';

function TreeData() {

  const [state, setState] = useState({});

  const columns = [
    {
      title: 'id_registro',
      dataIndex: 'id_registro',
      key: 'id_registro',
    },
    {
      title: 'CuentaPresupuestalIng',
      dataIndex: 'CuentaPresupuestalIng',
      key: 'CueCuentaPresupuestalIngnta',
    },
    {
      title: 'cuenta_nombre',
      dataIndex: 'cuenta_nombre',
      key: 'cuenta_nombre',
    },
    {
      title: 'PresupuestoVigente',
      dataIndex: 'PresupuestoVigente',
      key: 'PresupuestoVigente',
    },
    {
      title: 'Mar',
      dataIndex: 'Mar',
      key: 'Mar',
      render: (value, records) => <Boton value={value} setState={setState} state={state} month={'Mar'} id={records.key}/>
    },
    {
      title: 'Abr',
      dataIndex: 'Abr',
      key: 'Abr',
      render: (value, records) => <Boton value={value} setState={setState} state={state} month={'Abr'} id={records.key}/>
    },
    {
      title: 'May',
      dataIndex: 'May',
      key: 'May',
      render: (value, records) => <Boton value={value} setState={setState} state={state} month={'May'} id={records.key}/>
    },
    {
      title: 'Jun',
      dataIndex: 'Jun',
      key: 'Jun',
      render: (value, records) => <Boton value={value} setState={setState} state={state} month={'Jun'} id={records.key}/>
    },
    {
      title: 'Total',
      dataIndex: 'Total',
      key: 'Total',
    },
    {
      title: 'Diferencia',
      dataIndex: 'Diferencia',
      key: 'Diferencia',
    },
  ];

  const data = [
    {
      key: 1,
      "id_registro": 7,
      "CuentaPresupuestalIng": "17",
      "cuenta_nombre": "Accesorios de Impuestos",
      "PresupuestoVigente": 130000,
      "Mar": 42919,
      "Abr": 0,
      "May": 0,
      "Jun": 0,
      "Total": 42919,
      "Diferencia": 87081,
      "children": [
        {
          key: 2,
          "id_registro": 8,
          "CuentaPresupuestalIng": "17",
          "cuenta_nombre": "Accesorios de Impuestos",
          "PresupuestoVigente": 130000,
          "Mar": 42919,
          "Abr": 0,
          "May": 0,
          "Jun": 0,
          "Total": 42919,
          "Diferencia": 87081,
          "children": [
            {
              key: 3,
              "id_registro": 9,
              "CuentaPresupuestalIng": "17-01",
              "cuenta_nombre": "Recargos",
              "PresupuestoVigente": 130000,
              "Mar": 42919,
              "Abr": 0,
              "May": 0,
              "Jun": 0,
              "Total": 42919,
              "Diferencia": 87081
            }
          ]
        },
      ]
    },
    {
      key: 4,
      "id_registro": 10,
      "CuentaPresupuestalIng": "17",
      "cuenta_nombre": "Accesorios de Impuestos",
      "PresupuestoVigente": 130000,
      "Mar": 42919,
      "Abr": 0,
      "May": 0,
      "Jun": 0,
      "Total": 42919,
      "Diferencia": 87081,
      "children": [
        {
          key: 5,
          "id_registro": 11,
          "CuentaPresupuestalIng": "17",
          "cuenta_nombre": "Accesorios de Impuestos",
          "PresupuestoVigente": 130000,
          "Mar": 42919,
          "Abr": 0,
          "May": 0,
          "Jun": 0,
          "Total": 42919,
          "Diferencia": 87081,
          "children": [
            {
              key: 6,
              "id_registro": 12,
              "CuentaPresupuestalIng": "17-01",
              "cuenta_nombre": "Recargos",
              "PresupuestoVigente": 130000,
              "Mar": 42919,
              "Abr": 0,
              "May": 0,
              "Jun": 0,
              "Total": 42919,
              "Diferencia": 87081
            },
            {
              key: 7,
              "id_registro": 13,
              "CuentaPresupuestalIng": "17-02",
              "cuenta_nombre": "Recargos",
              "PresupuestoVigente": 130000,
              "Mar": 42919,
              "Abr": 0,
              "May": 0,
              "Jun": 0,
              "Total": 42919,
              "Diferencia": 87081
            }
          ]
        },
      ]
    },
  ];

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
      let temp = {};
      selectedRows.map(row => {
        temp[row.key] = true;
      });
      setState(temp);
      console.log(temp);
    }
  };

  return (
    <>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly: false }}
        dataSource={data}
      />
    </>
  );
}

ReactDOM.render(<TreeData />, document.getElementById('root'));