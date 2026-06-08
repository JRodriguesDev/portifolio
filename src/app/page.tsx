import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';

export default function Home() {
    return (
        <main className="flex justify-center items-center min-h-screen px-4">
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center max-w-4xl w-full p-8 bg-slate-900 rounded-3xl border border-slate-800'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold text-white'>José Rodrigues</h1>
                    <p className='text-lg text-slate-400'>Desenvolvedor Full Stack</p>
                </div>
                <div className='relative w-48 h-48 md:w-64 md:h-64 aspect-square overflow-hidden rounded-2xl'>
                <Image
                    src={profileImage}
                    alt="Foto de perfil de José Rodrigues"
                    fill
                    className='object-cover'
                    placeholder='blur'
                />
                </div>
            </section>
        </main>
    );
}
