import { Typography, Radio } from "antd";
import { useEffect, useState } from "react";
import { useDarkModeStore } from "../../../../../store/dark-mode";
import "./customization-setting.css";
const { Title } = Typography;
const CustomizationSetting = () => {
  const [themeValue, setThemeValue] = useState("dark_theme"); // darkTheme, light_theme
  const mode = useDarkModeStore((state) => state.mode);
  const setMode = useDarkModeStore((state) => state.setMode);

  useEffect(() => {
    console.log("theme: ", mode);
  }, [mode]);
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
        <label className="wrapper-radio" onClick={() => setMode("light")}>
          <Radio
            name="config_theme"
            value="light_theme"
            checked={mode === "light"}
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
        <label className="wrapper-radio" onClick={() => setMode("dark")}>
          <Radio
            name="config_theme"
            value="dark_theme"
            checked={mode === "dark"}
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
