import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ChatPage from "./Chat";
import { useMemo, useState } from "react";
import SettingsPage from "./Settings";

const pages = {
  Chat: ChatPage,
  Settings: SettingsPage,
};

export default function AppFrame() {
  const [pageName, setPageName] = useState<keyof typeof pages>('Chat');
  const Page = useMemo(() => pages[pageName], [pageName]);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {Object.keys(pages).map((name) => (
              <Button
                key={name}
                sx={{ color: "white", display: "block" }}
                onClick={() => {
                  setPageName(name as keyof typeof pages);
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Page />
    </Box>
  );
}
