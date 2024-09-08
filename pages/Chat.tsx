import Box from "@mui/material/Box";
import MuiMarkdown from "mui-markdown";
import { ContentData } from "./api/content";
import { useData } from "./data";

export default function ChatPage() {
  const [data] = useData<ContentData>("/api/content?name=example");
  return (
    <Box sx={{ padding: "1rem" }}>
      <MuiMarkdown>{data?.content}</MuiMarkdown>
    </Box>
  );
}