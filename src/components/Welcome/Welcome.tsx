import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

import "./Welcome.scss";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-card-border-less-wrapper">
      <Card
        title="Добро пожаловать!"
        bordered={false}
        style={{ maxWidth: 850, paddingTop: 25 }}
        headStyle={{ textAlign: "center", fontSize: "2.2rem" }}
      >
        <p>
          Здесь ты сможешь самостоятельно спроектировать свой собственный план
          обучения по направлению «Международные отношения»
        </p>
        <div className="welcome-button">
          <Button
            type="primary"
            style={{
              padding: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => navigate("/professionalTrackers")}
          >
            СОЗДАЙ СВОЙ МИР ОБРАЗОВАНИЯ
          </Button>
        </div>
      </Card>
    </div>
  );
};
