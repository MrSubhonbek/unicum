import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Card, Radio, Space } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { optProgram } from "../../app/slices/programSlice";
import { programs } from "../../assets/programs";
import "./Programs.scss";
export const Programs = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleShowPrograms = programs.map((program) => {
    return (
      <div className="program-radio">
        <Radio value={program.name}>{program.name}</Radio>
        <Button type="link" href={program.link}>
          <InfoCircleOutlined />
        </Button>
      </div>
    );
  });
  return (
    <div className="program-card-border-less-wrapper">
      <Card
        title=""
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
            {handleShowPrograms}
          </Space>
        </Radio.Group>
        <div className="program-button-group">
          <Button
            danger
            size="large"
            type="text"
            onClick={() => navigate("/professionalTrackers")}
          >
            Назад
          </Button>
          <Button
            disabled={value === ""}
            size="large"
            type="primary"
            onClick={() => {
              navigate("/total");
              dispatch(optProgram(value));
            }}
          >
            Далее
          </Button>
        </div>
      </Card>
    </div>
  );
};
