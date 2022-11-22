import { InfoCircleOutlined } from "@ant-design/icons";
import "./Trackers.scss";
import { Card, Collapse, Radio, Space } from "antd";
import { useState } from "react";

import { tracks } from "../../assets/tracks";
const { Panel } = Collapse;

export const Trackers = () => {
  const [value, setValue] = useState("");
  const handleShowTracks = tracks.map((track) => (
    <div className="tracker-radio" key={track.id}>
      <Radio value={track.name}>{track.name}</Radio>
      <Panel header={"asd"} key={track.id}>
        {track.descriptions}
      </Panel>
    </div>
  ));
  return (
    <div className="tracker-card-border-less-wrapper">
      <Card
        title="Добро пожаловать!"
        bordered={false}
        style={{ maxWidth: 850, paddingTop: 25 }}
        headStyle={{ textAlign: "center", fontSize: "2.2rem" }}
      >
        <p>Кем ты видишь себя в будущем?</p>
        <p>
          Выберите один из профессиональных трекеров для своего дальнейшего
          развития:
        </p>
        <Radio.Group
          style={{ width: "100%" }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Collapse bordered={false}>{handleShowTracks}</Collapse>
          </Space>
        </Radio.Group>
      </Card>
    </div>
  );
};
