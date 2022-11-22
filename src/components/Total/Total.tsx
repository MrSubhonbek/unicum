import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";

import "./Total.scss";

export const Total = () => {
  const program = useAppSelector((state) => state.program);
  const navigate = useNavigate();

  return (
    <div className="total-card-border-less-wrapper">
      <Card
        title="Спасибо за ваш выбор!"
        bordered={false}
        style={{ maxWidth: 850, paddingTop: 25 }}
        headStyle={{ textAlign: "center", fontSize: "2.2rem" }}
      >
        <p style={{ textAlign: "center" }}>Ваша траектория:</p>
        <p>Выбранный трэк - {program.track}</p>
        <p>Выбранная программа - {program.program}</p>
        <div className="total-card-button">
          <Button
            size="large"
            type="primary"
            onClick={() => navigate("/programSelection")}
          >
            СОСТАВИТЬ ПЛАН ОБУЧЕНИЯ
          </Button>
        </div>
      </Card>
    </div>
  );
};
