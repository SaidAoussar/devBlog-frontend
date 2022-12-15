import React, { useState } from "react";
import { Button } from "antd";
import { isAuthenticated } from "../../api/Auth";
import { useUserStore } from "../../store/user";

function About() {
  const authUser = useUserStore((state) => state.user);

  return (
    <div>
      <div>hello from about us</div>
      {JSON.stringify(authUser)}
    </div>
  );
}

export default About;
