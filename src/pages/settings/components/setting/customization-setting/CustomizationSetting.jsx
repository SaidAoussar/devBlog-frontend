import { Typography, Radio } from "antd";
import { useState } from "react";
import "./customization-setting.css";
const { Title } = Typography;
const CustomizationSetting = () => {
  const [themeValue, setThemeValue] = useState("dark_theme"); // darkTheme, light_theme

  return (
    <section className="customization-setting">
      <Title level={3}>Appearance</Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,minmax(0,1fr))",
          columnGap: "16px",
        }}
      >
        <label
          className="wrapper-radio"
          onClick={() => setThemeValue("light_theme")}
        >
          <Radio
            name="config_theme"
            value="light_theme"
            checked={themeValue === "light_theme"}
          />
          <div>
            <Title level={5} style={{ marginTop: "0px" }}>
              Light Theme
            </Title>
            <img
              style={{
                borderRadius: "6px",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
              }}
              src="https://github.githubassets.com/images/modules/settings/color_modes/light_tritanopia_preview.svg"
              alt=""
              width={"100%"}
            />
          </div>
        </label>
        <label
          className="wrapper-radio"
          onClick={() => setThemeValue("dark_theme")}
        >
          <Radio
            name="config_theme"
            value="dark_theme"
            checked={themeValue === "dark_theme"}
          />
          <div>
            <Title level={5} style={{ marginTop: "0px" }}>
              Dark Theme
            </Title>
            <img
              style={{
                borderRadius: "6px",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
              }}
              src="https://github.githubassets.com/images/modules/settings/color_modes/dark_preview.svg"
              alt=""
              width={"100%"}
            />
          </div>
        </label>
      </div>
    </section>
  );
};

export default CustomizationSetting;
