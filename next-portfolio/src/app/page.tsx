import Intro from "@/components/Intro";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <div id="site">
      <ThemeSwitch />
      <Intro />
    </div>
  );
}
