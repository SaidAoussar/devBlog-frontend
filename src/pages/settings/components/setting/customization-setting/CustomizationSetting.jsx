import { useEffect } from "react";
import { updateMode } from "../../../../../api/User";
import { useDarkModeStore } from "../../../../../store/dark-mode";
import { useUserStore } from "../../../../../store/user";
import darkModeImg from "/public/img/dark-mode-img.svg";
import lightModeImg from "/public/img/light-mode-img.svg";
import * as S from "./styles";

const CustomizationSetting = () => {
  const mode = useDarkModeStore((state) => state.mode);
  const setMode = useDarkModeStore((state) => state.setMode);
  const authUser = useUserStore((state) => state.user);
  const SetAuthUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    updateMode(mode).then(() => {
      localStorage.setItem(
        "current_user",
        JSON.stringify({ ...authUser, mode })
      );
      SetAuthUser({ ...authUser, mode });
    });
  }, [mode]);

  useEffect(() => {
    console.log("theme: ", mode);
  }, [mode]);
  return (
    <S.CustomizationSetting>
      <S.Title level={3}>Appearance</S.Title>
      <S.ThemeSelector>
        <S.RadioWrapper onClick={() => setMode("LIGHT")}>
          <S.Radio
            name="config_theme"
            value="light_theme"
            checked={mode === "LIGHT"}
          />
          <div>
            <S.Title level={5} style={{ marginTop: "0px" }}>
              Light Theme
            </S.Title>
            <S.Image
              style={{
                borderRadius: "6px",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
              }}
              src={lightModeImg}
              alt=""
              width={"100%"}
            />
          </div>
        </S.RadioWrapper>
        <S.RadioWrapper onClick={() => setMode("DARK")}>
          <S.Radio
            name="config_theme"
            value="dark_theme"
            checked={mode === "DARK"}
          />
          <div>
            <S.Title level={5} style={{ marginTop: "0px" }}>
              Dark Theme
            </S.Title>
            <S.Image
              style={{
                borderRadius: "6px",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
              }}
              src={darkModeImg}
              alt=""
              width={"100%"}
            />
          </div>
        </S.RadioWrapper>
      </S.ThemeSelector>
    </S.CustomizationSetting>
  );
};

export default CustomizationSetting;
