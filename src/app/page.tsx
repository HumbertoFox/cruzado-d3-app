import HeaderComponent from '@/components/header';
import HistoryComponent from '@/components/history';
import StartComponent from '@/components/start';

export default function Home() {
  return (
    <div className='relative w-full max-w-screen-2xl'>
      <HeaderComponent />
      <main className='min-w-full'>
        <StartComponent />
        <HistoryComponent />
      </main>
    </div>
  );
}