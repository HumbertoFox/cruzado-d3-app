import Image from 'next/image';

const anoatual = new Date().getFullYear();

export default function FooterComponent() {
    return (
        <footer className='flex py-4 justify-center'>
            <div className='flex flex-col items-center'>
                <p>Desenvolvidor por:</p>
                <Image
                    src='/LOGO_BFN_INTER.png'
                    alt='Logo BetoFoxNet_Info'
                    width={90}
                    height={90}
                />
                <p>Desde &copy; 2015 - {anoatual}</p>
            </div>
        </footer>
    );
}