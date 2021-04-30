import React from "react"
import fields from "../content/fields"
import Tabs, { TabPane } from "rc-tabs"

const FieldsTabs = () => {
  return (
    <Tabs defaultActiveKey="1" tabPosition={"top"}>
      {fields.map(field => (
        <TabPane tab={field.name} key={field.key}>
          <h3>{field.title}</h3>
          <p>{field.content}</p>
        </TabPane>
      ))}
    </Tabs>
  )
}

export default FieldsTabs
