export default function InicioComponent() {
    return (
        <section className='w-ful min-h-[calc(100vh-88px)] flex justify-center md:justify-start bg-[url("/assets/crusader_background_min.jpg")] md:bg-[url("/assets/crusader_background_xxl.jpg")] bg-no-repeat bg-cover bg-center'>
            <div className='w-2/4 flex flex-col justify-start md:justify-center items-center gap-14 p-3'>
                <h1>Cruzado</h1>
                <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda atque magni incidunt vero corporis? At aliquid doloribus commodi ab,
                    ipsa adipisci odit nisi omnis. Adipisci ad perferendis illum enim fugit.
                </p>
            </div>
        </section>
    );
}