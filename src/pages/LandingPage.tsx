import useAppState from "@/hooks/useAppState";

export default function LandingPage() {
  const appState = useAppState();
  return (
    <div>
      LandingPage
      <div>{appState.isAuthenticated ? "Yes" : "NO"}</div>
    </div>
  );
}
