import { Menu } from "./components/menu";
import {
  LuArchive,
  LuCopy,
  LuEllipsis,
  LuPencil,
  LuShare,
} from "react-icons/lu";

const itemClass =
  "flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-neutral-900 hover:bg-neutral-100";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Menu.Root direction="bottom" anchor="start">
        <Menu.Container
          buttonSize={40}
          menuWidth={160}
          menuRadius={12}
          className="bg-white shadow-lg ring-1 ring-black/5"
        >
          <Menu.Trigger>
            <div className="flex h-10 w-10 items-center justify-center">
              <LuEllipsis />
            </div>
          </Menu.Trigger>

          <Menu.Content className="p-2">
            <Menu.Item className={itemClass} onSelect={() => {}}>
              <LuPencil /> Edit
            </Menu.Item>
            <Menu.Item className={itemClass} onSelect={() => {}}>
              <LuCopy /> Copy
            </Menu.Item>
            <Menu.Item className={itemClass} onSelect={() => {}}>
              <LuShare /> Share
            </Menu.Item>
            <Menu.Item className={itemClass} onSelect={() => {}}>
              <LuArchive /> Archive
            </Menu.Item>
          </Menu.Content>
        </Menu.Container>
      </Menu.Root>
    </div>
  );
}
