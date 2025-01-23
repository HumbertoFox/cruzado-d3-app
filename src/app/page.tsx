import FooterComponent from '@/components/footer';
import HeaderComponent from '@/components/header';
import HistoryComponent from '@/components/history';
import SeasonComponent from '@/components/season';
import SkillsComponent from '@/components/skills';
import StartComponent from '@/components/start';

export default function Home() {
  return (
    <div className='relative w-full max-w-screen-2xl min-w-[375px]'>
      <HeaderComponent />
      <main className='min-w-full'>
        <StartComponent />
        <HistoryComponent />
        <SkillsComponent />
        <SeasonComponent />
      </main>
      <FooterComponent />
    </div>
  );
}