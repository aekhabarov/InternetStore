import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from '../..';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  console.table(device._types)
  return (
  <ListGroup>
    {device._types.map( type => { return (
      <ListGroup.Item 
      style= {{cursor: "pointer"}}
      key={type.id}
      active={type.id === device.selectedType.id}
      onClick={() => {device.setSelectedType(type)}}>{type.name}</ListGroup.Item>
    )
    })}
  </ListGroup>
  )
});

export default TypeBar;
