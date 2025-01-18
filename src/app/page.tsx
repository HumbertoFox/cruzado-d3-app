import HeaderComponent from '@/components/header';
import StartComponent from '@/components/start';

export default function Home() {
  return (
    <div className='w-full max-w-screen-2xl'>
      <HeaderComponent />
      <main className='min-w-full'>
        <StartComponent />
      </main>
      <footer>
      </footer>
    </div>
  );
}