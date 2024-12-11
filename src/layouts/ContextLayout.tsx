import { AppProvider } from "@/stores/context/app-context";

type Props = {
  children: React.ReactNode;
};
export default function ContextLayout({ children }: Props) {
  return <AppProvider>{children}</AppProvider>;
}
