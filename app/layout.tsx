import Header from '@/components/Header/Header';
import IndexContainer from '@/containers/IndexContainer/IndexContainer';
import '../styles/variables.scss';
import '../styles/globals.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full h-full flex flex-col items-start justify-start'>
        <Header />
        <section className='w-full h-[--heightBody]  overflow-y-scroll'>
          {children}
        </section>
        </body>
    </html>
  )
}
