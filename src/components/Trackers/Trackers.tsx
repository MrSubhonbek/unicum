import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Card, Popover, Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";

import { tracks } from "../../assets/tracks";
import { useAppDispatch } from "../../app/hooks";
import { optTrack } from "../../app/slices/programSlice";

import "./Trackers.scss";

export const Trackers = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleShowTracks = tracks.map((track) => {
    const content = <p>{track.descriptions}</p>;
    return (
      <div className="tracker-radio" key={track.id}>
        <Radio value={track.name}>{track.name}</Radio>
        <Popover
          overlayStyle={{
            width: "300px",
          }}
          content={content}
          title=""
          trigger="click"
        >
          <InfoCircleOutlined />
        </Popover>
      </div>
    );
  });

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
            {handleShowTracks}
          </Space>
        </Radio.Group>
        <div className="tracker-button-group">
          <Button danger size="large" type="text" onClick={() => navigate("/")}>
            Назад
          </Button>
          <Button
            disabled={value === ""}
            size="large"
            type="primary"
            onClick={() => {
              navigate("/mastersPrograms");
              dispatch(optTrack(value));
            }}
          >
            Далее
          </Button>
        </div>
      </Card>
    </div>
  );
};
