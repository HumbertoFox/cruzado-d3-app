import HeaderComponent from '@/components/header';
import InicioComponent from '@/components/inicio';

export default function Home() {
  return (
    <div className='w-full max-w-screen-2xl'>
      <HeaderComponent />
      <main className='min-w-full'>
        <InicioComponent />
      </main>
      <footer>
      </footer>
    </div>
  );
}